import { TrackCardComponent } from "../../components/track-card/index.js";
import { AddButtonComponent } from "../../components/add-button/index.js";
import { SortButtonComponent } from "../../components/sort-button/index.js";
import { TrackPage } from "../product/index.js";
import { EditTrackPage } from "../edit/index.js";
import { TrackUtils } from "../../components/utils/index.js";
import { ajax } from "../../modules/ajax.js";
import { trackUrls } from "../../modules/trackUrls.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
        this.sort_status = 0;
    }

    get pageRoot() {
        return document.getElementById('main-page');
    }

    getHTML() {
        return `
            <div id="main-page" style="
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                background-color: #121212;
                color: #ffffff;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            ">
                <div class="search-container" style="margin-bottom: 30px;">
                    <div style="
                        position: relative;
                        width: 100%;
                    ">
                        <svg style="
                            position: absolute;
                            left: 15px;
                            top: 50%;
                            transform: translateY(-50%);
                            fill: #b3b3b3;
                            width: 20px;
                            height: 20px;
                        " viewBox="0 0 24 24">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        </svg>
                        <input type="text" id="search-input" placeholder="Поиск по названию трека..." style="
                            width: 100%;
                            padding: 12px 40px 12px 45px; 
                            border: none;
                            border-radius: 30px;
                            background-color: #282828; 
                            color: #ffffff; 
                            font-size: 16px;
                            outline: none; 
                            transition: background-color 0.3s;
                        " onfocus="this.style.backgroundColor = '#333';" onblur="this.style.backgroundColor = '#282828'">
                    </div>
                </div>

                <!-- Контейнер для треков -->
                <div class="gallery" style="display: flex; flex-wrap: wrap;"></div>
            </div>
        `;
    }

    async getData() {
        console.log("Fetching data...");
        try {
            const data = await ajax.get(trackUrls.getTracks());

            if (Array.isArray(data)) {
                console.log(`Fetched ${data.length} items.`);
                const dataSizeInBytes = new Blob([JSON.stringify(data)]).size;
                console.log(`Data size: ~${dataSizeInBytes} bytes`);
                this.renderData(data);
            }
        } catch (err) {
            console.error("Failed to fetch data", err);
        }
    }

    renderData(items) {
        const gallery = this.parent.querySelector('.gallery');
        gallery.innerHTML = ''; // Clear existing cards

        items.forEach((item) => {
            const productCard = new TrackCardComponent(gallery);
            productCard.render(
                item,
                this.clickTrackCard.bind(this),
                this.deleteTrackCard.bind(this),
                this.editTrackCard.bind(this)
            );
        });
    }

    clickTrackCard(e) {
        const element = e.target.closest('[data-id]');
        if (!element) return;

        const cardId = element.dataset.id;
        console.log("Opening details for track ID:", cardId);

        const productPage = new TrackPage(this.parent, cardId);
        productPage.render();
    }

    async deleteTrackCard(e) {
        const element = e.target.closest('[data-id]');
        if (!element) return;

        const cardId = element.dataset.id;
        console.log("Deleting track with ID:", cardId);

        try {
            await ajax.delete(trackUrls.removeTrackById(cardId));
            this.render(); // Refresh after successful deletion
        } catch (err) {
            console.error("Error deleting track", err);
        }
    }

    editTrackCard(e) {
        const element = e.target.closest('[data-id]');
        if (!element) return;

        const cardId = element.dataset.id;
        console.log("Editing track with ID:", cardId);

        const editTrackPage = new EditTrackPage(this.pageRoot, cardId);
        editTrackPage.render();
    }

    addTrackCard() {
        const editTrackPage = new EditTrackPage(this.pageRoot, -1);
        editTrackPage.render();
    }

    sortTracksByName() {
        // реализуйте при необходимости
    }

    filterTracksBySearch() {
        const query = document.getElementById('search-input').value.toLowerCase().trim();

        ajax.get(trackUrls.getTracks()).then((data) => {
            const filteredTracks = query
                ? data.filter(track => track.title.toLowerCase().includes(query))
                : data;

            const gallery = this.parent.querySelector('.gallery');
            gallery.innerHTML = '';

            if (filteredTracks.length > 0) {
                filteredTracks.forEach(item => {
                    const trackCard = new TrackCardComponent(gallery);
                    trackCard.render(item, this.clickTrackCard.bind(this), this.deleteTrackCard.bind(this), this.editTrackCard.bind(this));
                });
            } else {
                gallery.innerHTML = '<p>Нет треков для отображения.</p>';
            }
        }).catch(err => {
            console.error("Ошибка фильтрации треков:", err);
        });
    }

    async render() {
        console.log("Starting HP render...");
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);

        const searchInput = document.getElementById('search-input');
        searchInput.addEventListener('input', () => this.filterTracksBySearch());

        const addTrackButton = new AddButtonComponent(this.pageRoot);
        addTrackButton.render(this.addTrackCard.bind(this));

        await this.getData(); // Fetch and render data
        console.log("HP render done...");
    }
}