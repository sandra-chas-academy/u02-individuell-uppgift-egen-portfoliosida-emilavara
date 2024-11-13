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

    var prevScrollpos = window.scrollY;

    /* Get the header element and it's position */
    var headerDiv = document.querySelector("header");
    var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

    window.onscroll = function() {
    var currentScrollPos = window.scrollY;

    /* if scrolling down, let it scroll out of view as normal */
    if (prevScrollpos <= currentScrollPos ){
        headerDiv.classList.remove("fixedToTop");
        headerDiv.style.top ="-64px";
    }
    /* otherwise if we're scrolling up, fix the nav to the top */
    else{  
        headerDiv.classList.add("fixedToTop");
        headerDiv.style.top = "0";
    }

    prevScrollpos = currentScrollPos;
    }
})

//render component
window.customElements.define('ea-header', Header)

