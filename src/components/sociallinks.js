export class SocialLinks extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="social-links-container">
                <a class="social-btn" href="https://linkedin.com/in/emilavara" target="_blank"><i class="bi bi-linkedin"></i></a>                
                <a class="social-btn" href="https://github.com/emilavara" target="_blank"><i class="bi bi-github"></i></a>                
                <a class="social-btn" href="https://x.com/emilavara" target="_blank"><i class="bi bi-twitter-x"></i></a>                
                <a class="social-btn" href="mailto:emilavara@hotmail.com" target="_blank"><i class="bi bi-envelope-at"></i></a>                
            </div>
        `
    }
}