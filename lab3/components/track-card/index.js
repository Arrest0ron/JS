export class TrackCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        const trackNumber = data.id.split('_')[1];
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
                <!-- Number on the Left -->
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
                ">${trackNumber}</div>
    
                <!-- Album Art -->
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
                
                <!-- Duration -->
                <div style="
                    color: #b3b3b3;
                    font-size: 14px;
                    margin: 0 12px;
                    width: 40px;
                    text-align: right;
                ">${data.duration}</div>
                
                <!-- Play Button -->
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
                
    
                <!-- Action Buttons -->
                <div style="display: flex; gap: 8px; margin-left: 10px;">
    
                    <!-- Edit Button -->
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
                    
                    <!-- View Button -->
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
    
                    <!-- Delete Button -->
                    <button id="delete_${data.id}" data-id="${data.id}" style="
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
        `;
    }

addListeners(data, listener, deletor) {
    document
        .getElementById(`view_${data.id}`)
        .addEventListener("click", listener)
    document
        .getElementById(`delete_${data.id}`)
        .addEventListener("click", deletor)
}

    render(data, onClick, onDelete) {
        const html = this.getHTML(data);
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListeners(data, onClick, onDelete);
    }
}