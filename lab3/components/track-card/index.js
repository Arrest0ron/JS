export class TrackCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return `
            <div class="track-card" id="${data.id}" style="
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
                    position: relative;
                    width: 56px;
                    height: 56px;
                    margin-right: 12px;
                    flex-shrink: 0;
                ">
                    <img src="${data.src}" alt="${data.album}" style="
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 4px;
                    ">
                    ${data.explicit ? `
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
                    ` : ''}
                </div>
                
                <div style="flex-grow: 1; min-width: 0;">
                    <div style="
                        font-weight: 500;
                        color: #fff;
                        font-size: 16px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        margin-bottom: 4px;
                    ">${data.title}</div>
                    
                    <div style="
                        color: #b3b3b3;
                        font-size: 14px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    ">
                        ${data.artist} • ${data.album}
                    </div>
                </div>
                
                <div style="
                    color: #b3b3b3;
                    font-size: 14px;
                    margin: 0 12px;
                    width: 40px;
                    text-align: right;
                ">${data.duration}</div>
                
                <!-- Кнопка воспроизведения -->
                <button id="play_${data.id}" style="
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
                

            <!-- Кнопки действий (теперь всегда видны) -->
            <div style="display: flex; gap: 8px; margin-left: 10px;">

                
                <!-- Кнопка редактирования -->
                <button id="edit_${data.id}" style="
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
                
                <!-- Кнопка просмотра -->
                <button id="view_${data.id}" data-id="${data.id}" style="
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
            </div>
        </div>
    `;
}

addListeners(data, listener) {
    document
        .getElementById(`view_${data.id}`)
        .addEventListener("click", listener)
}

    render(data, onClick) {
        const html = this.getHTML(data);
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListeners(data, onClick);
    }
}