import { Footer } from './components/footer.js'
import { MobileNav } from './components/mobilenav.js'

//mount components
window.customElements.define('ea-footer', Footer)
window.customElements.define('ea-nav-mobile', MobileNav)

//APNG is the way for the thumbnail d00d

let portfolio = [
    {
        name: 'Wewoosh',
        thumbnailType: 'image',
        thumbnail: 'placeholder.webp',
        url: '/',
        year: '2021 - 2023'
    },
    {
        name: 'Manaforge',
        thumbnailType: 'image',
        thumbnail: 'placeholder.webp',
        thumbnailHeight: 312,
        url: '/',
        year: '2024',
    },
    {
        name: 'Suniai Oliva',
        thumbnailType: 'image',
        thumbnail: 'placeholder.webp',
        url: '/',
        year: '2023'
    },
    {
        name: 'Donedot',
        thumbnailType: 'image',
        thumbnail: 'placeholder.webp',
        url: '/',
        year: '2024'
    },
    {
        name: 'Hermitage',
        thumbnailType: 'image',
        thumbnail: 'placeholder.webp',
        url: '/',
        year: '2024'
    }
]

let repos = []

//fetch my repos from github
async function fetchRepos() {
    const res = await fetch('https://api.github.com/users/emilavara/repos')
    const data = await res.json();
    
    //set global var to res.data
    repos = data;

    //populate static portfolio object with results from github
    repos.forEach((repo) => {
        let objToAdd = {
            name: repo.name,
            thumbnailType: 'image',
            thumbnail: 'placeholder.wepb',
            url: repo.html_url,
            year: repo.created_at.slice(0, 4),
            thumbnailHeight: 196
        }

        portfolio.push(objToAdd)
    })
}

//render portfolio
async function render() {
    await fetchRepos();

    const portfolioContainer = document.querySelector('.portfolio');

    //since "grid-template-rows: masonry" never gets fucking added, i need to make 3 seperate flex columns to achieve the effect
    const columns = [
        document.getElementById('ea-portfolio-column-1'),
        document.getElementById('ea-portfolio-column-2'),
        document.getElementById('ea-portfolio-column-3')
    ]

    portfolio.forEach((item, index) => {
        //calculate column index using modulus
        const columnIndex = index % columns.length;
        const column = columns[columnIndex];

        const projectElement = document.createElement('div');
        projectElement.innerHTML = `
            <article class="portfolio-item">
                <div style="height: ${item.thumbnailHeight}px" class="portfolio-item-image-container"></div>
                <div class="text-container">
                    <a href="${item.url}" target="_blank">
                        <h2 class="">${item.name}</h2>
                    </a>
                    <p class="portfolio-item-date-text">${item.year}</p>
                </div>
            </article>
        `
        column.appendChild(projectElement)
    })
}

//render portfolio
render();