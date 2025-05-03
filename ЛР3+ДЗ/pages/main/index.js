import { TrackCardComponent } from "../../components/track-card/index.js";
import { AddButtonComponent } from "../../components/add-button/index.js";
import { SortButtonComponent } from "../../components/sort-button/index.js";
import { TrackPage } from "../product/index.js";
import { TrackUtils } from "../../components/utils/index.js"; // Импорт обновлённого класса


let track_data = [
    {
        id: "cover_1",
        src: "https://i.scdn.co/image/ab67616d0000b273c8b444df094279e70d0ed856",
        title: "Hurt",
        artist: "Johnny Cash",
        originalArtist: "Nine Inch Nails",
        album: "American IV: The Man Comes Around",
        duration: "3:38",
        explicit: false,
        popularity: 92,
        releaseYear: 5
    },
    {
        id: "cover_2",
        src: "https://m.media-amazon.com/images/I/81tagWqwXWL._SX425_.jpg",
        title: "Beggin'",
        artist: "Måneskin",
        originalArtist: "The Four Seasons",
        album: "Chosen",
        duration: "3:31",
        explicit: false,
        popularity: 98,
        releaseYear: 2017
    },
    {
        id: "cover_3",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz0PHzTNCDHtVfAD1J_C3jaP2wBr5Pk_-ALw&s",
        title: "Zombie",
        artist: "Bad Wolves",
        originalArtist: "The Cranberries",
        album: "Disobey",
        duration: "4:14",
        explicit: true,
        popularity: 87,
        releaseYear: 2018
    },
    {
        id: "cover_4",
        src: "https://i.scdn.co/image/ab67616d0000b2737a4781629469bb83356cd318",
        title: "The Sound of Silence",
        artist: "Disturbed",
        originalArtist: "Simon & Garfunkel",
        album: "Immortalized",
        duration: "4:08",
        explicit: false,
        popularity: 95,
        releaseYear: 2015
    },
    {
        id: "cover_5",
        src: "https://i.scdn.co/image/ab67616d0000b2738c4a282e84a53c1c8acf129a",
        title: "Valerie",
        artist: "Amy Winehouse",
        originalArtist: "The Zutons",
        album: "Back to Black: B-Sides",
        duration: "3:53",
        explicit: false,
        popularity: 90,
        releaseYear: 2007
    },
    {
        id: "cover_6",
        src: "https://upload.wikimedia.org/wikipedia/en/a/ac/Placebo_Covers.jpg",
        title: "Running Up That Hill",
        artist: "Placebo",
        originalArtist: "Kate Bush",
        album: "Covers",
        duration: "4:57",
        explicit: false,
        popularity: 85,
        releaseYear: 2003
    },
    {
        id: "cover_7",
        src: "https://upload.wikimedia.org/wikipedia/ru/0/0f/Museoosalbcov.jpg",
        title: "Feeling Good",
        artist: "Muse",
        originalArtist: "Nina Simone",
        album: "Origin of Symmetry",
        duration: "3:18",
        explicit: false,
        popularity: 88,
        releaseYear: 2001
    },
    {
        id: "cover_8",
        src: "https://i.scdn.co/image/ab67616d0000b2738a3f0a3ca7929dea23cd274c",
        title: "Smooth Criminal",
        artist: "Alien Ant Farm",
        originalArtist: "Michael Jackson",
        album: "ANThology",
        duration: "3:29",
        explicit: false,
        popularity: 84,
        releaseYear: 2001
    },
    {
        id: "cover_9",
        src: "https://i.scdn.co/image/ab67616d0000b273b254ca0983d65ede8e3d2f7a",
        title: "Landslide",
        artist: "The Chicks",
        originalArtist: "Fleetwood Mac",
        album: "Home",
        duration: "3:50",
        explicit: false,
        popularity: 82,
        releaseYear: 2002
    },
    {
        id: "cover_10",
        src: "https://i.scdn.co/image/ab67616d0000b2739d28fd01859073a3ae6ea209",
        title: "Fast Car",
        artist: "Luke Combs",
        originalArtist: "Tracy Chapman",
        album: "Gettin' Old",
        duration: "4:25",
        explicit: false,
        popularity: 94,
        releaseYear: 2023
    },
    {
        id: "cover_11",
        src: "https://upload.wikimedia.org/wikipedia/en/e/e5/Dixie_Chicks_Home.jpg",
        title: "Dieselvan",  // Анаграмма для "Landslide"
        artist: "The Chicks",
        originalArtist: "Fleetwood Mac",
        album: "Home",
        duration: "3:50",
        explicit: false,
        popularity: 82,
        releaseYear: 2002
    },
    {
        id: "cover_12",
        src: "https://upload.wikimedia.org/wikipedia/ru/6/6b/American_IV_The_Man_Comes_Around.jpg",
        title: "Truh",  
        artist: "Johnny Cash",
        originalArtist: "Nine Inch Nails",
        album: "American IV: The Man Comes Around",
        duration: "3:38",
        explicit: false,
        popularity: 92,
        releaseYear: 2002
    },
    {
        id: "cover_13",
        src: "https://i1.sndcdn.com/artworks-J3Xj53hUvecIUKQZ-zkd3kw-t500x500.jpg",
        title: "Gingeb", 
        artist: "Måneskin",
        originalArtist: "The Four Seasons",
        album: "Chosen",
        duration: "3:31",
        explicit: false,
        popularity: 98,
        releaseYear: 2017
    }
];


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

            <!-- Блок статистики -->
            <div class="stats-container" style="
                margin-top: 25px;
                padding: 15px 20px;
                background-color: #1e1e1e;
                border-radius: 12px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            ">
                <p style="margin: 0 0 8px 0; font-weight: 600; color: #1db954;">Сумма квадратов популярности:</p>
                <h4 style="margin: 0 0 12px 0; font-size: 20px; color: #ffffff;" id="sum-squares">—</h4>

                <p style="margin: 0 0 8px 0; font-weight: 600; color: #1db954;">Сумма и произведение популярности:</p>
                <h4 style="margin: 0; font-size: 20px; color: #ffffff;" id="sum-mult">—</h4>
            </div>

            <!-- Контейнер анаграмм -->
            <div class="anagram-toggle-container" style="
                margin-top: 25px;
                padding: 15px;
                background-color: #1e1e1e;
                border-radius: 12px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            ">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <input type="checkbox" id="toggle-anagrams" checked style="
                        width: 18px;
                        height: 18px;
                        accent-color: #1db954;
                    ">
                    <label for="toggle-anagrams" style="
                        font-size: 15px;
                        color: #b3b3b3;
                        cursor: pointer;
                    ">Показать список анаграмм</label>
                </div>
            </div>

            <div class="anagram-info mt-4" style="
                margin-top: 15px;
                padding: 15px;
                background-color: #1e1e1e;
                border-radius: 12px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
                color: #b3b3b3;
                font-size: 14px;
            "></div>
        </div>

        <div id="matrix-info" class="matrix-info" style="
    margin-top: 25px;
    padding: 15px 20px;
    background-color: #1e1e1e;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
">
    <p style="
        margin: 0 0 8px 0;
        font-weight: 600;
        color: #1db954;
    ">Жадная квадратная матрица популярности:</p>
    <p style="margin: 0 0 8px 0; color: #b3b3b3;">Размер матрицы: <span id="matrix-size">—</span></p>
    <p style="margin: 0 0 8px 0; color: #b3b3b3;">Значения матрицы: <span id="matrix-values">—</span></p>
    <p style="margin: 0 0 8px 0; font-weight: 600; color: #1db954;">Сумма диагоналей:</p>
    <h4 style="margin: 0; font-size: 20px; color: #ffffff;" id="diagonal-sum">—</h4>
</div>
    `;
}

    getData() {
        return track_data;
    }

    clickTrackCard(e) {
        const cardId = e.currentTarget.dataset.id;
        const data = this.getData().find(item => item.id === cardId);
        const productPage = new TrackPage(this.parent, data);
        productPage.render();
    }

    deleteTrackCard(e) {
        const cardId = e.currentTarget.dataset.id;
        track_data = track_data.filter(item => item.id !== cardId);
        this.reassignIds();
        this.render();
    }

    addTrackCard() {
        let newSong = {...track_data[0]};
        newSong.id = "cover_" + (track_data.length + 1).toString();
        track_data.push(newSong);
        this.render();
        this.reassignIds();
    }

    sortTracksByName() {
        if (this.sort_status !== 2) {
            track_data = track_data.sort((a, b) => a.title.localeCompare(b.title));
            this.sort_status = 2;
        } else {
            track_data = track_data.sort((a, b) => -a.title.localeCompare(b.title));
            this.sort_status = 1;
        }
        this.reassignIds();
        this.render();
    }

    reassignIds() {
        track_data.forEach((item, index) => {
            item.id = "cover_" + (index + 1).toString();
        });
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);

        const searchInput = document.getElementById('search-input');
        searchInput.addEventListener('input', () => this.filterTracksBySearch());

        const toggleAnagramsCheckbox = document.getElementById('toggle-anagrams');
        toggleAnagramsCheckbox.addEventListener('change', () => this.toggleAnagramsVisibility());

        const sortTracksButton = new SortButtonComponent(this.pageRoot);
        sortTracksButton.render(this.sortTracksByName.bind(this));

        const anagramTracksGroupContainer = this.parent.querySelector('.anagram-info');
        if (anagramTracksGroupContainer) {
            this.showTrackAnagramGroups(anagramTracksGroupContainer);
        }

        const addTrackButton = new AddButtonComponent(this.pageRoot);
        addTrackButton.render(this.addTrackCard.bind(this));

        const popularities = this.getData().map(item => item.popularity);

        const sumSquares = TrackUtils.sumOfSquares(popularities);
        const { sum, mult } = TrackUtils.getSumAndMultOfArray(popularities);
        document.getElementById('sum-squares').textContent = sumSquares;
        document.getElementById('sum-mult').textContent = `Сумма: ${sum}, Произведение: ${mult}`;

        const matrix = TrackUtils.createSquareMatrix(popularities);
        if (matrix) {
            const diagSum = TrackUtils.diagonalSum(matrix);
            document.getElementById('matrix-size').textContent = `${matrix.length}×${matrix.length}`;
            document.getElementById('matrix-values').textContent = JSON.stringify(matrix).replace(/,/g, ', ');
            document.getElementById('diagonal-sum').textContent = diagSum;
        } else {
            document.getElementById('matrix-info').style.display = 'none';
        }

        this.restoreAllTracks();
    }

    showTrackAnagramGroups(container) {
        const trackTitles = this.getData().map(track => track.title);
        const anagramGroups = TrackUtils.findAnagramGroups(trackTitles);
        TrackUtils.renderAnagramGroups(container, anagramGroups, () => this.filterTracksByAnagrams());
    }

    filterTracksByAnagrams() {
        const container = this.parent.querySelector('.anagram-info');
        const selectedKeys = TrackUtils.getSelectedKeys(container);
        const filteredTracks = TrackUtils.filterByAnagramKeys(track_data, selectedKeys);
        const gallery = this.parent.querySelector('.gallery');
        gallery.innerHTML = '';
        if (filteredTracks.length > 0) {
            filteredTracks.forEach(item => {
                const trackCard = new TrackCardComponent(gallery);
                trackCard.render(item, this.clickTrackCard.bind(this), this.deleteTrackCard.bind(this));
            });
        } else {
            gallery.innerHTML = '<p>Нет треков для отображения.</p>';
        }
    }

    toggleAnagramsVisibility() {
        const toggleCheckbox = document.getElementById('toggle-anagrams');
        const container = this.parent.querySelector('.anagram-info');

        if (!toggleCheckbox.checked) {
            container.style.display = 'none';
            this.restoreAllTracks();
        } else {
            container.style.display = 'block';
            this.filterTracksByAnagrams();
        }
    }

    filterTracksBySearch() {
        const query = document.getElementById('search-input').value.toLowerCase().trim();
        const filteredTracks = query
            ? track_data.filter(track => track.title.toLowerCase().includes(query))
            : track_data;

        const gallery = this.parent.querySelector('.gallery');
        gallery.innerHTML = '';
        if (filteredTracks.length > 0) {
            filteredTracks.forEach(item => {
                const trackCard = new TrackCardComponent(gallery);
                trackCard.render(item, this.clickTrackCard.bind(this), this.deleteTrackCard.bind(this));
            });
        } else {
            gallery.innerHTML = '<p>Нет треков для отображения.</p>';
        }
    }

    restoreAllTracks() {
        const gallery = this.parent.querySelector('.gallery');
        gallery.innerHTML = '';
        this.getData().forEach(item => {
            const trackCard = new TrackCardComponent(gallery);
            trackCard.render(item, this.clickTrackCard.bind(this), this.deleteTrackCard.bind(this));
        });
    }
}