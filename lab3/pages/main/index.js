import {TrackCardComponent} from "../../components/track-card/index.js";
import {AddButtonComponent} from "../../components/add-button/index.js";
import {ProductPage} from "../product/index.js";

let data = [
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
        releaseYear: 2017,
        text: "Biba i boba"
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
    }
];

export class MainPage {
    constructor(parent) {
        this.parent = parent;
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
            "></div>
        `;
    }
        
    getData() {
        return data;
    }
    
    clickCard(e) {
        const cardId = e.currentTarget.dataset.id;
        const data = this.getData().find(item => item.id === cardId); // Находим трек по ID
        const productPage = new ProductPage(this.parent,data); // Передаём данные целиком
        productPage.render();
    }

    deleteCard(e){
        
        const cardId = e.currentTarget.dataset.id;
        data = data.filter(item => item.id !== cardId);
        this.reassignIds();
        this.render()
    }

    addCard(e){
        let newSong = {...data.at(0)};
        newSong.id = "cover_" + (data.length+1).toString();
        data.push(newSong)
        this.render()
    }

    reassignIds() {
        data.forEach((item, index) => {
            item.id = "cover_" + (index + 1).toString();
        });
    }
        
    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);
        
        const data = this.getData();
        data.forEach((item) => {
            // alert(item.id)
            const trackCard = new TrackCardComponent(this.pageRoot);
            trackCard.render(item, this.clickCard.bind(this), this.deleteCard.bind(this));
        });
        const addButton = new AddButtonComponent(this.pageRoot);
        addButton.render(this.addCard.bind(this));
    }
}