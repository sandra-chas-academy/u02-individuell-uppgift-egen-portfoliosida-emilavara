class Header extends HTMLElement {
    connectedCallback() {
        console.log('header component mounted')
        
        this.innerHTML = `
            <header>
                <img class="me" src="assets/images/me.webp">
                <div class="desktop-nav-container">
                    <nav>
                        <a class="desktop-nav-link active" href="">Intro</a>
                        <a class="desktop-nav-link" href="">Portfolio</a>
                        <a class="desktop-nav-link" href="">About</a>
                        <a class="desktop-nav-link" href="">Contact</a>
                    </nav>
                </div>
                <a href="#" class="ea-btn primary small contact-btn-desktop">Get in touch</a>
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

    //hide header on scroll
    let prevScrollpos = window.scrollY;
    let header = document.querySelector("header");

    window.addEventListener('scroll', () => {
        var currentScrollPos = window.scrollY;

        if (prevScrollpos <= currentScrollPos ){
            header.classList.add("scrolled");
        } else{  
            header.classList.remove("scrolled");
        }

        prevScrollpos = currentScrollPos;
    })
})

//render component
window.customElements.define('ea-header', Header)