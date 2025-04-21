import {MainPage} from "../main/index.js";

export class TrackPage {
    constructor(parent, data) {
        this.parent = parent
        this.id = data.id
        this.data = data
        
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    clickBack() {
        const mainPage = new MainPage(document.getElementById('root'))
        mainPage.render()
    }


    getHTML(data) {
        return `
            <div class="song-page" style="
                max-width: 1000px;
                margin: 0 auto;
                padding: 30px;
                background: linear-gradient(to bottom, #1a1a1a 0%, #121212 100%);
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            ">
        
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
                    <h1 style="color: #1DB954; margin: 0;">${data.title}</h1>
                    <button id="back_button" style="
                        background: rgba(255,255,255,0.1);
                        border: none;
                        color: white;
                        padding: 8px 15px;
                        border-radius: 20px;
                        cursor: pointer;
                        transition: all 0.3s;
                    ">
                        ← Назад к списку
                    </button>
                </div>
    
                <div class="row g-0">
                    
                    <div class="col-md-5" style="padding-right: 20px;">
                        <img src="${data.src}" class="img-fluid" alt="Обложка" style="
                            width: 100%;
                            border-radius: 10px;
                            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                            border: 2px solid #1DB954;
                        ">
                        
                        
                        <div style="margin-top: 20px; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                <span style="color: #b3b3b3;">Длительность:</span>
                                <span>${data.duration || '3:45'}</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                <span style="color: #b3b3b3;">Релиз:</span>
                                <span>${data.releaseDate || '2023'}</span>
                            </div>
                            ${data.explicit ? `
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span style="color: #b3b3b3;">Контент:</span>
                                <span style="
                                    background: #b3b3b3;
                                    color: #000;
                                    font-weight: bold;
                                    padding: 2px 6px;
                                    border-radius: 3px;
                                    font-size: 12px;
                                ">EXPLICIT</span>
                            </div>
                            ` : ''}
                        </div>
                    </div>
                    
                    
                    <div class="col-md-7">
                        <div style="padding-left: 20px;">
                            <h2 style="color: #1DB954; margin-top: 0;">${data.artist || 'Исполнитель'}</h2>
                            <p style="color: #b3b3b3; margin-bottom: 25px;">Альбом: ${data.album || 'Неизвестный альбом'}</p>
                            
                            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                                <h4 style="margin-top: 0; color: #fff;">Описание</h4>
                                <p style="color: #b3b3b3;">${data.text || 'Здесь должно быть описание трека, но мы его пока не придумали...'}</p>
                            </div>
                            
                           
                            <div style="display: flex; gap: 15px; margin-top: 30px;">
                                <button style="
                                    background: #1DB954;
                                    color: white;
                                    border: none;
                                    padding: 10px 25px;
                                    border-radius: 25px;
                                    font-weight: bold;
                                    cursor: pointer;
                                    transition: transform 0.3s;
                                ">
                                    ▶ Слушать
                                </button>
                                
                                <button style="
                                    background: rgba(255,255,255,0.1);
                                    color: white;
                                    border: none;
                                    padding: 10px 25px;
                                    border-radius: 25px;
                                    cursor: pointer;
                                    transition: all 0.3s;
                                ">
                                    ✏️ Редактировать
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML(this.data)
        this.parent.insertAdjacentHTML('beforeend', html)
        document.getElementById('back_button').addEventListener("click",this.clickBack);
        document.getElementById('logo').addEventListener("click",this.clickBack);
    }
}