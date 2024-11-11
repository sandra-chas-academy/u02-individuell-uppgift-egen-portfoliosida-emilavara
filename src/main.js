import { Header } from './components/header.js'
import { Footer } from './components/footer.js'
import { MobileNav } from './components/mobilenav.js'

const hamburgerBtn = document.getElementById('hamburgerBtn');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('toggled');
    document.getElementById('mobile-nav').classList.toggle('open');
    document.querySelector('html').classList.toggle('mobile-nav-open');
})


function render() {
    console.log('rendered')
}

render();


//render components
window.customElements.define('ea-header', Header)
window.customElements.define('ea-footer', Footer)
window.customElements.define('ea-nav-mobile', MobileNav)