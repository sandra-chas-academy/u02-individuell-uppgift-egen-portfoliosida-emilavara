class Header extends HTMLElement {
    connectedCallback() {
        console.log('header component mounted')
        
        this.innerHTML = `
            <header>
                <div class="container left">
                    <img class="me" src="assets/images/me.webp">
                </div>
                <div class="container center">
                    <div class="desktop-nav-container">
                        <nav>
                            <a class="desktop-nav-link" href="/" data-link-to="intro">Intro</a>
                            <a class="desktop-nav-link" href="" data-link-to="/portfolio">Portfolio</a>
                            <a class="desktop-nav-link" href="/about.html" data-link-to="/about.html">About</a>
                            <a class="desktop-nav-link" href="/contact.html" data-link-to="/contact.html">Contact</a>
                        </nav>
                    </div>
                </div>
                
                <div class="container right">
                    <a href="#" class="ea-btn primary small contact-btn-desktop">Get in touch</a>
                    <button id="hamburgerBtn"></button>
                </div>
            </header>
        `
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const desktopNavLinks = document.querySelectorAll('.desktop-nav-link');

    if (window.location.pathname === '/') {
        desktopNavLinks[0].classList.add('active')
    }

    desktopNavLinks.forEach((link) => {
        console.log(window.location)

        // console.log(window.location.pathname)

        if (window.location.pathname === link.dataset.linkTo) {
            link.classList.add('active')
        }
        
    })

    console.log(desktopNavLinks)

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