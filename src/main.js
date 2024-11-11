import { Header } from './components/header.js'
import { Footer } from './components/footer.js'



function render() {
    console.log('rendered')
}

render();


//define custom elements
window.customElements.define('ea-header', Header)
window.customElements.define('ea-footer', Footer)