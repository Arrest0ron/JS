class TrackUrls {
    constructor() {
        this.baseUrl = 'http://localhost:3000';
    }

    getTracks() {
        return `${this.baseUrl}/tracks`;
    }

    getFilteredTracks(filter) {
        return `${this.baseUrl}/tracks?title=${filter}`;
    }

    getTrackById(id) {
        return `${this.baseUrl}/tracks/${id}`;
    }

    createTrack() {
        return `${this.baseUrl}/tracks`;
    }

    removeTrackById() {
        return `${this.baseUrl}/tracks/${id}`;
    }

    updateTrackById() {
        return `${this.baseUrl}/tracks/${id}`;
    }
}

export const trackUrls = new TrackUrls();