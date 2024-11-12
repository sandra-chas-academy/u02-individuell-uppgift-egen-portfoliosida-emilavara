class Header extends HTMLElement {
    connectedCallback() {
        console.log('header component mounted')
        
        this.innerHTML = `
            <header>
                <img class="me" src="assets/images/me.webp">
                <button id="hamburgerBtn"></button>
            </header>
        `
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');

    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('toggled');
        document.getElementById('mobile-nav').classList.toggle('open');
        document.querySelector('html').classList.toggle('mobile-nav-open');
    })
})

//render component
window.customElements.define('ea-header', Header)