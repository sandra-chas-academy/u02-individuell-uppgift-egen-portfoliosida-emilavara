export class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <p>&copy; Emil Avara 2024</p>
                <p class="date"><span class="accent-text">Last updated &nbsp; &mdash; &nbsp;</span> Dec 01 2024</p>
                <a href="https://rsms.me/inter/" target="_blank"><p><span class="accent-text">Inter by</span> rsms</p></a>
            </footer>
        `
    }
}