class Header extends HTMLElement {
    connectedCallback() {
        console.log('header component mounted')
        
        this.innerHTML = `
            <header>
                <div class="container left">
                    <a href="/index.html" aria-label="Link back to first page"><img class="me" height="32" width="32" alt="Me" src="/assets/images/me.webp"></a>
                </div>
                <div class="container center">
                    <div class="desktop-nav-container">
                        <nav>
                            <a class="desktop-nav-link" href="/index.html" data-link-to="intro">Intro</a>
                            <a class="desktop-nav-link" href="/index.html#portfolio" data-link-to="/portfolio/wewoosh.html">Portfolio</a>
                            <a class="desktop-nav-link" href="/about.html" data-link-to="/about.html">About</a>
                            <a class="desktop-nav-link" href="/contact.html" data-link-to="/contact.html">Contact</a>
                        </nav>
                    </div>
                </div>
                
                <div class="container right">
                    <a href="/contact.html" class="ea-btn primary small contact-btn-desktop">Get in touch</a>
                    <button id="hamburgerBtn"></button>
                </div>
            </header>
        `
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const desktopNavLinks = document.querySelectorAll('.desktop-nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link')
    const mobilePortfolioLink = document.getElementById('mobile-portfolio-link')

    //add active class to desktop nav links
    desktopNavLinks.forEach((link) => {
        if (window.location.href === link.href) {
            link.classList.add('active')
        }
    })

    if (window.location.pathname === '/portfolio/wewoosh.html') {
        desktopNavLinks[1].classList.add('active');
    }

    if (window.location.pathname === '/') {
        desktopNavLinks[0].classList.add('active');
    }

    //add active class to mobile nav links
    mobileNavLinks.forEach((link) => {
        if (window.location.href === link.href) {
            link.classList.add('active')
        }
    })

    if (window.location.pathname === '/') {
        mobileNavLinks[0].classList.add('active');
    }

    if (window.location.pathname === '/portfolio/wewoosh.html') {
        mobileNavLinks[1].classList.add('active');
    }

    //toggle mobile nav bar
    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('toggled');
        document.getElementById('mobile-nav').classList.toggle('open');
        document.querySelector('html').classList.toggle('mobile-nav-open');
    })

    mobilePortfolioLink.addEventListener('click', () => {
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