export class SortButtonComponent {
    constructor(parent) {
        this.parent = parent;
    }

    addListeners(listener) {
        document
            .getElementById("sort-button")
            .addEventListener("click", listener)
    }

    getHTML() {
        return (
            `
                <button id="sort-button" class="btn btn-primary" style ="background-color:#1DB954; border-color:#3FF984;"
                 type="button">Сортировать</button>
            `
        )
    }

    render(listener) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(listener)
    }
}
