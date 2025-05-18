var E=Object.defineProperty;var w=(a,e,t)=>e in a?E(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var y=(a,e,t)=>w(a,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();class m{constructor(e){this.parent=e}getHTML(e){const t=e.id;return`
            <div class="track-card" id="${e.id}" style="
                display: flex;
                align-items: center;
                width: 100%;
                background-color: rgba(40, 40, 40, 0.8);
                margin: 8px 0;
                border-radius: 6px;
                padding: 8px;
                transition: all 0.2s;
                cursor: pointer;
                position: relative;
            ">

                <div style="
                    font-size: 18px;
                    font-weight: bold;
                    color: #ffffff;
                    background-color: rgba(255, 255, 255, 0.005);
                    width: 30px;
                    height: 55px;
                    padding-top: 15px;
                    text-align: center;
                    margin-right: 10px;
                    flex-shrink: 0;
                ">${t}</div>
    

                <div style="
                    position: relative;
                    width: 56px;
                    height: 56px;
                    margin-right: 12px;
                    flex-shrink: 0;
                ">
                    <img src="${e.src}" alt="${e.album}" style="
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 4px;
                    ">
                    ${e.explicit?`
                    <div style="
                        position: absolute;
                        top: -4px;
                        right: -4px;
                        background-color: #b3b3b3;
                        color: #000;
                        font-size: 10px;
                        font-weight: bold;
                        border-radius: 2px;
                        padding: 1px 3px;
                    ">E</div>
                    `:""}
                </div>
                
                <!-- Track Details -->
                <div style="flex-grow: 1; min-width: 0;">
                    <div style="
                        font-weight: 500;
                        color: #fff;
                        font-size: 16px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        margin-bottom: 4px;
                    ">${e.title}</div>
                    
                    <div style="
                        color: #b3b3b3;
                        font-size: 14px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    ">
                        ${e.artist} • ${e.album}
                    </div>
                </div>
                

                <div style="
                    color: #b3b3b3;
                    font-size: 14px;
                    margin: 0 12px;
                    width: 40px;
                    text-align: right;
                ">${e.duration}</div>
                

                <button id="play_${e.id}" style="
                    width: 24px;
                    height: 24px;
                    background-color: #1DB954;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: none;
                    opacity: 0;
                    transition: opacity 0.2s;
                    cursor: pointer;
                    margin-right: 8px;
                ">
                    <span style="color: white; font-size: 12px; margin-left: 1px;">▶</span>
                </button>
                

                <div style="display: flex; gap: 8px; margin-left: 10px;">
    

                    <button id="edit_${e.id}"  data-id="${e.id}" style="
                        width: 28px;
                        height: 28px;
                        background-color: rgba(255, 255, 255, 0.1);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: none;
                        cursor: pointer;
                        transition: all 0.2s;
                    ">
                        <span style="color: #b3b3b3; font-size: 12px;">✏️</span>
                    </button>
                    

                    <button id="view_${e.id}" data-id="${e.id}" style="
                        width: 28px;
                        height: 28px;
                        background-color: rgba(255, 255, 255, 0.1);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: none;
                        cursor: pointer;
                        transition: all 0.2s;
                    ">
                        <span style="color: #b3b3b3; font-size: 12px;">👁️</span>
                    </button>
    

                    <button id="delete_${e.id}" data-id="${e.id}" style="
                        width: 28px;
                        height: 28px;
                        background: rgba(255, 75, 75, 0.2);
                        border: none;
                        border-radius: 50%;
                        color: #ff4b4b;
                        font-size: 16px;
                        font-weight: bold;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        transition: all 0.2s;
                    ">
                        ×
                    </button>
                </div>
            </div>
        `}addListeners(e,t,r,n){document.getElementById(`view_${e.id}`).addEventListener("click",t),document.getElementById(`delete_${e.id}`).addEventListener("click",r),document.getElementById(`edit_${e.id}`).addEventListener("click",n)}render(e,t,r,n){const i=this.getHTML(e);this.parent.insertAdjacentHTML("beforeend",i),this.addListeners(e,t,r,n)}}class I{constructor(e){this.parent=e}addListeners(e){document.getElementById("add-button").addEventListener("click",e)}getHTML(){return`
                <button id="add-button" class="btn btn-primary" style ="background-color:#1DB954; border-color:#3FF984;"
                 type="button">Новая песенка!</button>
            `}render(e){const t=this.getHTML();this.parent.insertAdjacentHTML("beforeend",t),this.addListeners(e)}}class B{async get(e){try{const t=await fetch(e);return this._handleResponse(t)}catch(t){this._handleError(t)}}async post(e,t){try{const r=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});return this._handleResponse(r)}catch(r){this._handleError(r)}}async patch(e,t){try{const r=await fetch(e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});return this._handleResponse(r)}catch(r){this._handleError(r)}}async delete(e){try{const t=await fetch(e,{method:"DELETE"});return this._handleResponse(t)}catch(t){this._handleError(t)}}async _handleResponse(e){let t=null;const r=e.headers.get("content-type");if(r&&r.includes("application/json")&&(t=await e.json()),!e.ok)throw new Error(`HTTP error! Status: ${e.status}, Data: ${JSON.stringify(t)}`);return t}_handleError(e){throw console.error("Network or fetch error:",e),e}}const o=new B;class T{constructor(){this.baseUrl="http://localhost:3000"}getTracks(){return`${this.baseUrl}/tracks`}getFilteredTracks(e){return`${this.baseUrl}/tracks?title=${e}`}getTrackById(e){return`${this.baseUrl}/tracks/${e}`}createTrack(){return`${this.baseUrl}/tracks`}removeTrackById(e){return`${this.baseUrl}/tracks/${e}`}updateTrackById(e){return`${this.baseUrl}/tracks/${e}`}}const s=new T;class _{constructor(e,t){y(this,"clickBack",()=>{new c(document.getElementById("root")).render()});this.parent=e,this.id=t}get pageRoot(){return document.getElementById("product-page")}getHTML(e){return`
            <div class="song-page" style="
                max-width: 1000px;
                margin: 0 auto;
                padding: 30px;
                background: linear-gradient(to bottom, #1a1a1a 0%, #121212 100%);
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            ">
        
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
                    <h1 style="color: #1DB954; margin: 0;">${e.title}</h1>
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
                        <img src="${e.src}" class="img-fluid" alt="Обложка" style="
                            width: 100%;
                            border-radius: 10px;
                            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                            border: 2px solid #1DB954;
                        ">
                        
                        <div style="margin-top: 20px; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                <span style="color: #b3b3b3;">Длительность:</span>
                                <span>${e.duration||"3:45"}</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                <span style="color: #b3b3b3;">Релиз:</span>
                                <span>${e.releaseDate||"2023"}</span>
                            </div>
                            ${e.explicit?`
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
                            `:""}
                        </div>
                    </div>
                    
                    <div class="col-md-7">
                        <div style="padding-left: 20px;">
                            <h2 style="color: #1DB954; margin-top: 0;">${e.artist||"Исполнитель"}</h2>
                            <p style="color: #b3b3b3; margin-bottom: 25px;">Альбом: ${e.album||"Неизвестный альбом"}</p>
                            
                            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                                <h4 style="margin-top: 0; color: #fff;">Описание</h4>
                                <p style="color: #b3b3b3;">${e.text||"Здесь должно быть описание трека, но мы его пока не придумали..."}</p>
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
        `}async render(){console.log("Loading track details for ID:",this.id);try{const e=await o.get(s.getTrackById(this.id));if(!e){console.error("No data received for track ID:",this.id),this.parent.innerHTML="<p>Ошибка: данные о треке не найдены.</p>";return}this.parent.innerHTML="";const t=this.getHTML(e);this.parent.insertAdjacentHTML("beforeend",t);const r=document.getElementById("back_button");r&&r.addEventListener("click",this.clickBack);const n=document.getElementById("logo");n&&n.addEventListener("click",this.clickBack)}catch(e){console.error("Failed to load track details",e),this.parent.innerHTML=`<p>Произошла ошибка при загрузке данных: ${e.message}</p>`}}}class b{constructor(e,t){this.parent=e,this.id=t,console.log("Created edit page for track ",this.id)}get pageRoot(){return document.getElementById("redact_page")}async getData(){if(this.id===-1)this.renderData({src:"https://as2.ftcdn.net/v2/jpg/00/17/84/81/1000_F_17848161_CAd5BeJIEmFZWDJ6lmSWfXCNtif0FTiI.jpg ",title:"Название нового трека",artist:"",originalArtist:"",album:"",duration:"",explicit:!1,popularity:75,releaseYear:new Date().getFullYear()});else try{const e=await o.get(s.getTrackById(this.id));console.log("Creating data for track ",this.id,e),this.renderData(e)}catch(e){console.error("Failed to load track data",e)}}getHTML(){return`
            <div id="redact_page"></div>
        `}renderData(e){if(!e){console.error("Received null or undefined data");return}document.getElementById("title_inp").value=e.title||"",document.getElementById("src_inp").value=e.src||"",document.getElementById("artist_inp").value=e.artist||"",document.getElementById("original_artist_inp").value=e.originalArtist||"",document.getElementById("album_inp").value=e.album||"",document.getElementById("duration_inp").value=e.duration||"",document.getElementById("explicit_inp").value=e.explicit?"true":"false",document.getElementById("popularity_inp").value=e.popularity||"",document.getElementById("release_year_inp").value=e.releaseYear||"",document.getElementById("placeholder-title").textContent=e.title||"Название трека";const t=document.getElementById("placeholder-img");t.src=e.src||"https://via.placeholder.com/300x200?text=No+Image ",document.getElementById("placeholder-artist").innerHTML=`<strong>Исполнитель:</strong> ${e.artist||"Имя исполнителя"}`,document.getElementById("placeholder-original-artist").innerHTML=`<strong>Оригинальный исполнитель:</strong> ${e.originalArtist||"Оригинал"}`,document.getElementById("placeholder-album").innerHTML=`<strong>Альбом:</strong> ${e.album||"Название альбома"}`,document.getElementById("placeholder-duration").innerHTML=`<strong>Длительность:</strong> ${e.duration||"3:45"}`,document.getElementById("placeholder-explicit").innerHTML=`<strong>Эксплицитный:</strong> ${e.explicit?"Да":"Нет"}`,document.getElementById("placeholder-popularity").innerHTML=`<strong>Популярность:</strong> ${e.popularity||"75"}`,document.getElementById("placeholder-release-year").innerHTML=`<strong>Год выпуска:</strong> ${e.releaseYear||new Date().getFullYear()}`}clickBack(){new c(this.parent).render()}async render(){this.parent.innerHTML="",this.parent.insertAdjacentHTML("beforeend",`
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
        `),this.getData(),this.setupPlaceholderBindings(),document.getElementById("logo").addEventListener("click",this.clickBack.bind(this)),document.getElementById("save").addEventListener("click",this.saveData.bind(this))}setupPlaceholderBindings(){document.getElementById("title_inp").addEventListener("input",e=>{document.getElementById("placeholder-title").textContent=e.target.value||"Название трека"}),document.getElementById("src_inp").addEventListener("input",e=>{const t=document.getElementById("placeholder-img");t.src=e.target.value||"https://via.placeholder.com/300x200?text=No+Image "}),document.getElementById("artist_inp").addEventListener("input",e=>{document.getElementById("placeholder-artist").innerHTML=`<strong>Исполнитель:</strong> ${e.target.value||"Имя исполнителя"}`}),document.getElementById("original_artist_inp").addEventListener("input",e=>{document.getElementById("placeholder-original-artist").innerHTML=`<strong>Оригинальный исполнитель:</strong> ${e.target.value||"Оригинал"}`}),document.getElementById("album_inp").addEventListener("input",e=>{document.getElementById("placeholder-album").innerHTML=`<strong>Альбом:</strong> ${e.target.value||"Название альбома"}`}),document.getElementById("duration_inp").addEventListener("input",e=>{document.getElementById("placeholder-duration").innerHTML=`<strong>Длительность:</strong> ${e.target.value||"3:45"}`}),document.getElementById("explicit_inp").addEventListener("change",e=>{document.getElementById("placeholder-explicit").innerHTML=`<strong>Эксплицитный:</strong> ${e.target.value==="true"?"Да":"Нет"}`}),document.getElementById("popularity_inp").addEventListener("input",e=>{document.getElementById("placeholder-popularity").innerHTML=`<strong>Популярность:</strong> ${e.target.value||"75"}`}),document.getElementById("release_year_inp").addEventListener("input",e=>{document.getElementById("placeholder-release-year").innerHTML=`<strong>Год выпуска:</strong> ${e.target.value||new Date().getFullYear()}`})}async saveData(){const e=document.getElementById("title_inp").value,t=document.getElementById("src_inp").value,r=document.getElementById("artist_inp").value,n=document.getElementById("original_artist_inp").value,i=document.getElementById("album_inp").value,l=document.getElementById("duration_inp").value,x=document.getElementById("explicit_inp").value==="true",f=parseInt(document.getElementById("popularity_inp").value),v=parseInt(document.getElementById("release_year_inp").value),p={title:e,src:t,artist:r,originalArtist:n,album:i,duration:l,explicit:x,popularity:f,releaseYear:v};if(this.id===-1)try{const g=(await o.get(s.getTracks())).reduce((u,k)=>{const h=parseInt(k.id);return isNaN(h)?u:Math.max(u,h)},0)+1;p.id=g,this.id=g,console.log("New id: ",g),await o.post(s.createTrack(),p),new c(document.getElementById("root")).render()}catch(d){console.error("Error creating new track:",d)}else try{await o.patch(s.updateTrackById(this.id),p),new c(document.getElementById("root")).render()}catch(d){console.error("Error updating track:",d)}}}class c{constructor(e){this.parent=e,this.sort_status=0}get pageRoot(){return document.getElementById("main-page")}getHTML(){return`
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
        `}async getData(){console.log("Fetching data...");try{const e=await o.get(s.getTracks());if(Array.isArray(e)){console.log(`Fetched ${e.length} items.`);const t=new Blob([JSON.stringify(e)]).size;console.log(`Data size: ~${t} bytes`),this.renderData(e)}}catch(e){console.error("Failed to fetch data",e)}}renderData(e){const t=this.parent.querySelector(".gallery");t.innerHTML="",e.forEach(r=>{new m(t).render(r,this.clickTrackCard.bind(this),this.deleteTrackCard.bind(this),this.editTrackCard.bind(this))})}clickTrackCard(e){const t=e.target.closest("[data-id]");if(!t)return;const r=t.dataset.id;console.log("Opening details for track ID:",r),new _(this.parent,r).render()}async deleteTrackCard(e){const t=e.target.closest("[data-id]");if(!t)return;const r=t.dataset.id;console.log("Deleting track with ID:",r);try{await o.delete(s.removeTrackById(r)),this.render()}catch(n){console.error("Error deleting track",n)}}editTrackCard(e){const t=e.target.closest("[data-id]");if(!t)return;const r=t.dataset.id;console.log("Editing track with ID:",r),new b(this.pageRoot,r).render()}addTrackCard(){new b(this.pageRoot,-1).render()}sortTracksByName(){}filterTracksBySearch(){const e=document.getElementById("search-input").value.toLowerCase().trim();o.get(s.getTracks()).then(t=>{const r=e?t.filter(i=>i.title.toLowerCase().includes(e)):t,n=this.parent.querySelector(".gallery");n.innerHTML="",r.length>0?r.forEach(i=>{new m(n).render(i,this.clickTrackCard.bind(this),this.deleteTrackCard.bind(this),this.editTrackCard.bind(this))}):n.innerHTML="<p>Нет треков для отображения.</p>"}).catch(t=>{console.error("Ошибка фильтрации треков:",t)})}async render(){console.log("Starting HP render..."),this.parent.innerHTML="";const e=this.getHTML();this.parent.insertAdjacentHTML("beforeend",e),document.getElementById("search-input").addEventListener("input",()=>this.filterTracksBySearch()),new I(this.pageRoot).render(this.addTrackCard.bind(this)),await this.getData(),console.log("HP render done...")}}const L=document.getElementById("root"),$=new c(L);$.render();
