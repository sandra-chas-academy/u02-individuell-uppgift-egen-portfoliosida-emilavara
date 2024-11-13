export class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <p>&copy; Emil Avara 2024</p>
                <p><span class="accent-text">Last updated</span> Jan 01 1970</p>
                <p><span class="accent-text">Inter by</span> rsms</p>
            </footer>
        `
    }
}