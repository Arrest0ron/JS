
import {MainPage} from "../main/index.js";
import { ajax } from "../../modules/ajax.js";
import { TrackPage } from "../product/index.js"
import {trackUrls} from "../../modules/trackUrls.js";
export class EditTrackPage {
    constructor(parent, id) {
        this.parent = parent;
        this.id = id;
        console.log("Created edit page for track ", this.id);
    }

    get pageRoot() {
        return document.getElementById('redact_page');
    }

    async getData() {
        if (this.id === -1) {
            this.renderData({
                src: "https://as2.ftcdn.net/v2/jpg/00/17/84/81/1000_F_17848161_CAd5BeJIEmFZWDJ6lmSWfXCNtif0FTiI.jpg ",
                title: "Название нового трека",
                artist: "",
                originalArtist: "",
                album: "",
                duration: "",
                explicit: false,
                popularity: 75,
                releaseYear: new Date().getFullYear()
            });
        } else {
            try {
                const data = await ajax.get(trackUrls.getTrackById(this.id));
                console.log("Creating data for track ", this.id, data);
                this.renderData(data);
            } catch (err) {
                console.error("Failed to load track data", err);
            }
        }
    }

    getHTML() {
        return `
            <div id="redact_page"></div>
        `;
    }

    renderData(item) {
        if (!item) {
            console.error("Received null or undefined data");
            return;
        }

        // Fill input fields
        document.getElementById("title_inp").value = item.title || "";
        document.getElementById("src_inp").value = item.src || "";
        document.getElementById("artist_inp").value = item.artist || "";
        document.getElementById("original_artist_inp").value = item.originalArtist || "";
        document.getElementById("album_inp").value = item.album || "";
        document.getElementById("duration_inp").value = item.duration || "";
        document.getElementById("explicit_inp").value = item.explicit ? "true" : "false";
        document.getElementById("popularity_inp").value = item.popularity || "";
        document.getElementById("release_year_inp").value = item.releaseYear || "";

        // Fill placeholder
        document.getElementById("placeholder-title").textContent = item.title || "Название трека";

        const placeholderImg = document.getElementById("placeholder-img");
        placeholderImg.src = item.src || "https://via.placeholder.com/300x200?text=No+Image ";

        document.getElementById("placeholder-artist").innerHTML =
            `<strong>Исполнитель:</strong> ${item.artist || "Имя исполнителя"}`;
        document.getElementById("placeholder-original-artist").innerHTML =
            `<strong>Оригинальный исполнитель:</strong> ${item.originalArtist || "Оригинал"}`;
        document.getElementById("placeholder-album").innerHTML =
            `<strong>Альбом:</strong> ${item.album || "Название альбома"}`;
        document.getElementById("placeholder-duration").innerHTML =
            `<strong>Длительность:</strong> ${item.duration || "3:45"}`;
        document.getElementById("placeholder-explicit").innerHTML =
            `<strong>Эксплицитный:</strong> ${item.explicit ? "Да" : "Нет"}`;
        document.getElementById("placeholder-popularity").innerHTML =
            `<strong>Популярность:</strong> ${item.popularity || "75"}`;
        document.getElementById("placeholder-release-year").innerHTML =
            `<strong>Год выпуска:</strong> ${item.releaseYear || new Date().getFullYear()}`;
    }

    clickBack() {
        const mainPage = new MainPage(this.parent);
        mainPage.render();
    }

    async render() {
        this.parent.innerHTML = '';
        const ui_html = `
            <!-- Your full HTML UI as before -->
            <!-- PLACEHOLDER CARD + FORM -->
            <div style="display: flex; gap: 40px; align-items: flex-start;">
                <!-- PLACEHOLDER CARD -->
                <div class="track-card-placeholder" style="
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    padding: 16px;
                    width: 320px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    background-color: #f9f9f9;
                    font-family: Arial, sans-serif;
                ">
                    <img src="https://via.placeholder.com/300x200?text=No+Image " 
                         alt="Placeholder Image" 
                         id="placeholder-img"
                         style="width: 100%; height: auto; border-radius: 4px; margin-bottom: 12px;">
                    <h3 id="placeholder-title" style="margin: 0 0 8px; font-size: 18px; color: #333;">Название трека</h3>
                    <p id="placeholder-artist" style="margin: 0 0 4px; font-size: 14px; color: #555;">
                       <strong>Исполнитель:</strong> Имя исполнителя
                    </p>
                    <p id="placeholder-original-artist" style="margin: 0 0 4px; font-size: 14px; color: #555;">
                       <strong>Оригинальный исполнитель:</strong> Оригинал
                    </p>
                    <p id="placeholder-album" style="margin: 0 0 4px; font-size: 14px; color: #555;">
                       <strong>Альбом:</strong> Название альбома
                    </p>
                    <p id="placeholder-duration" style="margin: 0 0 4px; font-size: 14px; color: #555;">
                       <strong>Длительность:</strong> 3:45
                    </p>
                    <p id="placeholder-explicit" style="margin: 0 0 4px; font-size: 14px; color: #555;">
                       <strong>Эксплицитный:</strong> Нет
                    </p>
                    <p id="placeholder-popularity" style="margin: 0 0 4px; font-size: 14px; color: #555;">
                       <strong>Популярность:</strong> 75
                    </p>
                    <p id="placeholder-release-year" style="margin: 0 0 4px; font-size: 14px; color: #555;">
                       <strong>Год выпуска:</strong> 2023
                    </p>
                </div>

                <!-- FORM -->
                <div class="inp_form" style="width: 600px;">
                    <div class="line">
                        <p class="plain_text"> Название трека: </p>
                        <input type="text" class="input" id="title_inp" placeholder="название" style="width: 250px">
                    </div>
                    <div class="line">
                        <p class="plain_text"> Ссылка на изображение: </p>
                        <input type="url" class="input" id="src_inp" placeholder="ссылка" style="width: 250px">
                    </div>
                    <div class="line">
                        <p class="plain_text"> Исполнитель: </p>
                        <input type="text" class="input" id="artist_inp" placeholder="исполнитель" style="width: 250px">
                    </div>
                    <div class="line">
                        <p class="plain_text"> Оригинальный исполнитель: </p>
                        <input type="text" class="input" id="original_artist_inp" placeholder="оригинал" style="width: 250px">
                    </div>
                    <div class="line">
                        <p class="plain_text"> Альбом: </p>
                        <input type="text" class="input" id="album_inp" placeholder="альбом" style="width: 250px">
                    </div>
                    <div class="line">
                        <p class="plain_text"> Длительность: </p>
                        <input type="text" class="input" id="duration_inp" placeholder="например: 3:45" style="width: 250px">
                    </div>
                    <div class="line">
                        <p class="plain_text"> Эксплицитный: </p>
                        <select class="input" id="explicit_inp" style="width: 250px">
                            <option value="false">Нет</option>
                            <option value="true">Да</option>
                        </select>
                    </div>
                    <div class="line">
                        <p class="plain_text"> Популярность (1–100): </p>
                        <input type="number" class="input" id="popularity_inp" placeholder="75" min="1" max="100" style="width: 250px">
                    </div>
                    <div class="line">
                        <p class="plain_text"> Год выпуска: </p>
                        <input type="number" class="input" id="release_year_inp" placeholder="2023" style="width: 250px">
                    </div>
                    <button class="btn" id="save">Сохранить запись</button>
                </div>
            </div>
        `;

        this.parent.insertAdjacentHTML('beforeend', ui_html);
        this.getData(); // fetch data and fill inputs & placeholder
        this.setupPlaceholderBindings(); // bind input fields to placeholder

        document.getElementById('logo').addEventListener("click", this.clickBack.bind(this));

        const saveButton = document.getElementById("save");
        saveButton.addEventListener("click", this.saveData.bind(this));
    }

    setupPlaceholderBindings() {
        document.getElementById("title_inp").addEventListener("input", (e) => {
            document.getElementById("placeholder-title").textContent = e.target.value || "Название трека";
        });
        document.getElementById("src_inp").addEventListener("input", (e) => {
            const img = document.getElementById("placeholder-img");
            img.src = e.target.value || "https://via.placeholder.com/300x200?text=No+Image ";
        });
        document.getElementById("artist_inp").addEventListener("input", (e) => {
            document.getElementById("placeholder-artist").innerHTML = `<strong>Исполнитель:</strong> ${e.target.value || "Имя исполнителя"}`;
        });
        document.getElementById("original_artist_inp").addEventListener("input", (e) => {
            document.getElementById("placeholder-original-artist").innerHTML = `<strong>Оригинальный исполнитель:</strong> ${e.target.value || "Оригинал"}`;
        });
        document.getElementById("album_inp").addEventListener("input", (e) => {
            document.getElementById("placeholder-album").innerHTML = `<strong>Альбом:</strong> ${e.target.value || "Название альбома"}`;
        });
        document.getElementById("duration_inp").addEventListener("input", (e) => {
            document.getElementById("placeholder-duration").innerHTML = `<strong>Длительность:</strong> ${e.target.value || "3:45"}`;
        });
        document.getElementById("explicit_inp").addEventListener("change", (e) => {
            document.getElementById("placeholder-explicit").innerHTML = `<strong>Эксплицитный:</strong> ${e.target.value === "true" ? "Да" : "Нет"}`;
        });
        document.getElementById("popularity_inp").addEventListener("input", (e) => {
            document.getElementById("placeholder-popularity").innerHTML = `<strong>Популярность:</strong> ${e.target.value || "75"}`;
        });
        document.getElementById("release_year_inp").addEventListener("input", (e) => {
            document.getElementById("placeholder-release-year").innerHTML = `<strong>Год выпуска:</strong> ${e.target.value || new Date().getFullYear()}`;
        });
    }
async saveData() {
    const title = document.getElementById("title_inp").value;
    const src = document.getElementById("src_inp").value;
    const artist = document.getElementById("artist_inp").value;
    const originalArtist = document.getElementById("original_artist_inp").value;
    const album = document.getElementById("album_inp").value;
    const duration = document.getElementById("duration_inp").value;
    const explicit = document.getElementById("explicit_inp").value === "true";
    const popularity = parseInt(document.getElementById("popularity_inp").value);
    const releaseYear = parseInt(document.getElementById("release_year_inp").value);

    const data = {
        title,
        src,
        artist,
        originalArtist,
        album,
        duration,
        explicit,
        popularity,
        releaseYear
    };

    if (this.id === -1) {
        try {
            // Get all tracks
            const tracks = await ajax.get(trackUrls.getTracks());

            // Find max ID safely
            const maxId = tracks.reduce((max, track) => {
                const id = parseInt(track.id);
                return !isNaN(id) ? Math.max(max, id) : max;
            }, 0);
            
            const newId = maxId + 1;
            data.id = newId;
            this.id = newId;
            console.log("New id: ", newId);
            // Send POST request
            await ajax.post(trackUrls.createTrack(), data);
            

            // Refresh UI
            const mainPage = new MainPage(document.getElementById('root'));
            mainPage.render();

        } catch (err) {
            console.error("Error creating new track:", err);
        }
    } else {
        try {
            // Send PATCH request
            await ajax.patch(trackUrls.updateTrackById(this.id), data);

            // Refresh UI
            const mainPage = new MainPage(document.getElementById('root'));
            mainPage.render();

        } catch (err) {
            console.error("Error updating track:", err);
        }
    }
}
}