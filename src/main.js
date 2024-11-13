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
        thumbnailSrc: 'placeholder.webp',
        thumbnailHeight: 196,
        url: '/',
        year: '2021 - 2023'
    },
    {
        name: 'Suniai Oliva',
        thumbnailType: 'video',
        thumbnailSrc: '../assets/videos/suniai-oliva-animation.mp4',
        thumbnailHeight: 312,
        url: '/',
        year: '2023'
    },
    {
        name: 'Manaforge',
        thumbnailType: 'image',
        thumbnailSrc: 'placeholder.webp',
        thumbnailHeight: 196,
        url: '/',
        year: '2024',
    },
    {
        name: 'Donedot',
        thumbnailType: 'image',
        thumbnailSrc: 'placeholder.webp',
        thumbnailHeight: 196,
        url: '/',
        year: '2024'
    },
    {
        name: 'Hermitage',
        thumbnailType: 'image',
        thumbnailSrc: 'placeholder.webp',
        thumbnailHeight: 196,
        url: '/',
        year: '2024'
    },
    {
        name: 'Createweb',
        thumbnailType: 'image',
        thumbnailSrc: 'placeholder.webp',
        thumbnailHeight: 196,
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
            thumbnailSrc: repo.name + '.webp',
            thumbnailHeight: 196,
            url: repo.html_url,
            year: repo.created_at.slice(0, 4)
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

        // projectElement.innerHTML = `
        //     <article class="portfolio-item">
        //         <div style="height: ${item.thumbnailHeight}px" class="portfolio-item-image-container"></div>
        //         <div class="text-container">
        //             <a href="${item.url}" target="_blank">
        //                 <h2 class="">${item.name}</h2>
        //             </a>
        //             <p class="portfolio-item-date-text">${item.year}</p>
        //         </div>
        //     </article>
        // `

        const elemArticle = document.createElement('article')
        elemArticle.classList.add('portfolio-item')
        
        const elemImageContainer = document.createElement('div');
        elemImageContainer.classList.add('portfolio-item-image-container');
        elemImageContainer.style.height = item.thumbnailHeight + "px"
        elemArticle.append(elemImageContainer);

        if (item.thumbnailType === 'image') {
            const elemImage = document.createElement('img')
            elemImageContainer.append(elemImage)
        }

        if (item.thumbnailType === 'video') {
            const elemVideo = document.createElement('video');
            elemVideo.src = item.thumbnailSrc;
            elemVideo.autoplay = true;
            elemVideo.muted = true;
            elemVideo.loop = true;
            elemVideo.playsInline = true;
            elemImageContainer.append(elemVideo)
        }

        const elemTextContainer = document.createElement('div')
        elemTextContainer.classList.add('text-container')

        //portfolio item paragraph
        const elemA = document.createElement('a')
        elemA.href = item.url
        elemTextContainer.append(elemA)
        
        //portfolio item heading
        const elemHeading = document.createElement('h2');
        elemHeading.textContent = item.name
        elemA.append(elemHeading)

        //portfolio item paragraph
        const elemParagraph = document.createElement('p')
        elemParagraph.classList.add('portfolio-item-date-text')
        elemParagraph.textContent = item.year
        elemTextContainer.append(elemParagraph)
        

        elemArticle.append(elemTextContainer)
        column.appendChild(elemArticle)
    })

    
}

//render portfolio
render();

//init the lenis library
const lenis = new Lenis({
    autoRaf: true,
});