export class MobileNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav id="mobile-nav" class="mobile-nav">
                <div class="mobile-nav-link-container">
                    <a class="h1 active" href="">Intro</a>
                    <a class="h1" href="">Portfolio</a>
                    <a class="h1" href="">About</a>
                    <a class="h1" href="">Contact</a>
                </div>
                <div class="button-and-social-container">
                    <button class="ea-btn primary">Get in touch</button>
                    <div class="social-links">
                        <div class="social-btn"></div>
                        <div class="social-btn"></div>
                        <div class="social-btn"></div>
                        <div class="social-btn"></div>
                    </div>
                </div>
                <div class="bottom-line"></div>
            </nav>
        `
    }
}