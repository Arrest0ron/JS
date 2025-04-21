import { TrackCardComponent } from "../../components/track-card/index.js";
import { AddButtonComponent } from "../../components/add-button/index.js";
import { SortButtonComponent } from "../../components/sort-button/index.js";
import { TrackPage } from "../product/index.js";

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
        releaseYear: 2002
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
            ">
                <div class="search-container">
                    <input type="text" id="search-input" placeholder="Поиск по названию трека..." style="
                        width: 100%;
                        padding: 10px 12px 10px 40px; 
                        border: none;
                        border-radius: 25px;
                        background-color: #282828; 
                        color: #ffffff; 
                        font-size: 16px;
                        outline: none; 
                        margin-bottom: 30px;
                    ">
                </div>


            </div>
            <div class="gallery"></div>
                <div class="anagram-toggle-container">
                    <input type="checkbox" id="toggle-anagrams" checked>
                    <label for="toggle-anagrams">Показать список анаграмм</label>
                </div>
            <div class="anagram-info mt-4"></div> 
        `;
    }
        
    getData() {
        return track_data;
    }
    
    clickTrackCard(e) {
        const cardId = e.currentTarget.dataset.id;
        const data = this.getData().find(item => item.id === cardId); // Находим трек по ID
        const productPage = new TrackPage(this.parent, data); // Передаём данные целиком
        productPage.render();
    }

    deleteTrackCard(e) {
        const cardId = e.currentTarget.dataset.id;
        track_data = track_data.filter(item => item.id !== cardId);
        this.reassignIds();
        this.render();
    }

    addTrackCard() {
        let newSong = {...track_data.at(0)};
        newSong.id = "cover_" + (track_data.length + 1).toString();
        track_data.push(newSong);
        this.render();
        this.reassignIds();
    }

    sortTracksByName() {
        if (this.sort_status != 2) {
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

        const anagramGroupContainer = this.parent.querySelector('.anagram-info');
        if (anagramGroupContainer) {
            this.showAnagramGroups(anagramGroupContainer);
        } 
        const addTrackButton = new AddButtonComponent(this.pageRoot);
        addTrackButton.render(this.addTrackCard.bind(this));


        this.restoreAllTracks();
    }

    showAnagramGroups(container) {
        const titles = track_data.map(track => track.title); 
        const anagramGroups = this.findAnagrams(titles);

        container.innerHTML = ''; 

        if (anagramGroups.length > 0) {

            container.innerHTML += `<p>Группы анаграмм среди треков:</p>`;

           
            anagramGroups.forEach((group, index) => {
                const groupName = group.join(', ');
                const sortedKey = group[0].toLowerCase().replace(/[\s']/g, '').split('').sort().join('');


                const checkboxId = `anagram-group-${index}`;
                const checkboxHTML = `
                    <div style="margin-bottom: 8px;">
                        <input type="checkbox" id="${checkboxId}" data-anagram-key="${sortedKey}">
                        <label for="${checkboxId}">${groupName}</label>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', checkboxHTML);

                const checkbox = document.getElementById(checkboxId);
                checkbox.addEventListener('change', () => this.filterTracksByAnagrams());
            });
        } else {
            container.innerHTML = `<p>Группы анаграмм среди треков не найдены.</p>`;
        }
    }

    findAnagrams(words) {
        const anagrams = {};
        for (let word of words) {
            const cleanedWord = word.toLowerCase().replace(/[\s']/g, '');
            const sortedWord = cleanedWord.split('').sort().join('');
            if (!anagrams[sortedWord]) {
                anagrams[sortedWord] = [];
            }
            anagrams[sortedWord].push(word);
        }
        return Object.values(anagrams)
            .filter(group => group.length >= 2)
            .map(group => group.sort())
            .sort();
    }


    filterTracksBySearch() {
        const searchInput = document.getElementById('search-input');
        const query = searchInput.value.toLowerCase().trim();

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

    filterTracksByAnagrams() {
        const checkedCheckboxes = Array.from(
            document.querySelectorAll('.anagram-info input[type="checkbox"]:checked')
        );

        const selectedKeys = checkedCheckboxes.map(checkbox => checkbox.dataset.anagramKey);

        const filteredTracks = track_data.filter(track => {
            const cleanedTitle = track.title.toLowerCase().replace(/[\s']/g, '');
            const sortedTitle = cleanedTitle.split('').sort().join('');
            return selectedKeys.includes(sortedTitle);
        });

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
        const toggleAnagramsCheckbox = document.getElementById('toggle-anagrams');
        const anagramInfoContainer = this.parent.querySelector('.anagram-info');

        if (!toggleAnagramsCheckbox.checked) {
            anagramInfoContainer.style.display = 'none';
            this.restoreAllTracks();
        } else {
            anagramInfoContainer.style.display = 'block';
            this.filterTracksByAnagrams();
        }
    }

    restoreAllTracks() {
        const gallery = this.parent.querySelector('.gallery');
        gallery.innerHTML = ''; 

        const track_data = this.getData();
        track_data.forEach((item) => {
            const trackCard = new TrackCardComponent(gallery);
            trackCard.render(item, this.clickTrackCard.bind(this), this.deleteTrackCard.bind(this));
        });
    }
}