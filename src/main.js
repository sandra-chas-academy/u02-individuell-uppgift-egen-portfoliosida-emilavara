import { Footer } from "./components/footer.js";
import { MobileNav } from "./components/mobilenav.js";
import { SocialLinks } from "./components/sociallinks.js";

//mount components
window.customElements.define("ea-footer", Footer);
window.customElements.define("ea-nav-mobile", MobileNav);
window.customElements.define("ea-social-links", SocialLinks);

let portfolio = [
  {
    name: "Wewoosh",
    thumbnailType: "image",
    thumbnailSrc: "../assets/images/wewoosh.webp",
    url: "/portfolio/wewoosh.html",
    year: "2021 - 2023",
    class: "wewoosh",
    outbound: false,
  },
  {
    name: "Suniai Oliva",
    thumbnailType: "video",
    thumbnailSrc: "../assets/videos/suniai-oliva-animation.mp4",
    url: "https://suniaioliva.com",
    year: "2023",
    class: "suniai-oliva",
    outbound: true,
  },
  {
    name: "Manaforge",
    thumbnailType: "image",
    thumbnailSrc: "../assets/images/manaforge.webp",
    url: "none",
    year: "2024",
    class: "manaforge",
    outbound: false,
  },
  {
    name: "Donedot",
    thumbnailType: "image",
    thumbnailSrc: "../assets/images/donedot.webp",
    url: "none",
    year: "2024",
    class: "donedot",
    outbound: false,
  },
  {
    name: "Hermitage",
    thumbnailType: "image",
    thumbnailSrc: "../assets/images/hermitage.webp",
    url: "none",
    year: "2024",
    class: "hermitage",
    outbound: false,
  },
  {
    name: "Createweb",
    thumbnailType: "image",
    thumbnailSrc: "../assets/images/createweb.webp",
    url: "none",
    year: "2024",
    class: "createweb",
    outbound: false,
  },
];

let repos = [];

//fetch my repos from github
async function fetchRepos() {
  const res = await fetch("https://api.github.com/users/emilavara/repos", {});
  const data = await res.json();

  //set global var to res.data
  repos = data;

  console.log(repos);

  //populate static portfolio object with results from github
  repos.forEach((repo) => {
    let objToAdd = {
      name: repo.name,
      thumbnailType: (() => {
        //smexy iffy
        if (repo.name === "yet_another_todo_list") {
          return "video";
        } else {
          return "image";
        }
      })(),
      thumbnailSrc: (() => {
        //another smexy little iffy
        if (repo.name === "yet_another_todo_list") {
          return "../assets/videos/to-do-list-animation.mp4";
        } else {
          return "../assets/images/" + repo.name + ".webp";
        }
      })(),
      url: repo.html_url,
      year: repo.created_at.slice(0, 4),
      class: repo.name,
      outbound: true,
    };

    portfolio.push(objToAdd);
  });
}

//render portfolio
async function render() {
  await fetchRepos();

  const portfolioContainer = document.querySelector(".portfolio");

  //since "grid-template-rows: masonry" never gets fucking added, i need to make 3 seperate flex columns to achieve the effect
  const columns = [
    document.getElementById("ea-portfolio-column-1"),
    document.getElementById("ea-portfolio-column-2"),
    document.getElementById("ea-portfolio-column-3"),
  ];

  portfolio.forEach((item, index) => {
    //calculate column index using modulus
    const columnIndex = index % columns.length;
    const column = columns[columnIndex];

    const elemArticle = document.createElement("a");
    elemArticle.classList.add("portfolio-item");
    elemArticle.classList.add(item.class.toLowerCase());

    const elemImageContainer = document.createElement("div");
    elemImageContainer.classList.add("portfolio-item-image-container");
    // elemImageContainer.style.height = item.thumbnailHeight + "px"
    elemArticle.append(elemImageContainer);

    //check if thumbnail is image
    if (item.thumbnailType === "image") {
      const elemImage = document.createElement("img");
      elemImage.src = item.thumbnailSrc;
      elemImageContainer.append(elemImage);
    }

    //check if thumbnail is image
    if (item.thumbnailType === "video") {
      const elemVideo = document.createElement("video");
      elemVideo.src = item.thumbnailSrc;
      elemVideo.autoplay = true;
      elemVideo.muted = true;
      elemVideo.loop = true;
      elemVideo.playsInline = true;
      elemImageContainer.append(elemVideo);
    }

    const elemTextContainer = document.createElement("div");
    elemTextContainer.classList.add("text-container");

    //portfolio item paragraph
    // const elemA = document.createElement("a");
    // elemA.href = item.url;
    elemArticle.href = item.url;

    if (item.outbound) {
      // elemA.target = "_blank";
      elemArticle.target = "_blank";
    }

    //if portfolio item is not a link remove the href attribute
    if (item.url === "none") {
      // elemA.removeAttribute("href");
      elemArticle.removeAttribute("href");
    }

    // elemTextContainer.append(elemA);

    //portfolio item heading
    const elemHeading = document.createElement("h1");
    elemHeading.classList.add('h5')
    const elemIcon = document.createElement("i");
    if (item.outbound == false) {
      elemIcon.className = "bi bi-arrow-right";
    } else {
      elemIcon.className = "bi bi-arrow-up-right";
    }

    if (item.url === "none") {
      elemIcon.className = "";
    }

    elemHeading.textContent = item.name;
    elemHeading.append(elemIcon);

    elemTextContainer.append(elemHeading);

    //portfolio item paragraph
    const elemParagraph = document.createElement("p");
    elemParagraph.classList.add("portfolio-item-date-text");
    elemParagraph.textContent = item.year;
    elemTextContainer.append(elemParagraph);

    elemArticle.append(elemTextContainer);
    column.appendChild(elemArticle);
  });
}

//render portfolio if on intro site
if (
  window.location.pathname === "/" ||
  window.location.pathname === "/index.html"
) {
  render();
}

//init the lenis library
const lenis = new Lenis({
  autoRaf: true,
});
