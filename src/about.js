let education = []
let experiences = []

async function fetchCV() {
    const res = await fetch('src/data/cv.json')
    const data = await res.json();
    
    education = data.education
    experiences = data.experiences
}

async function renderCV() {
    await fetchCV()
    const educationSection = document.getElementById('education');
    const experiencesSection = document.getElementById('experiences');

    for (let [index, i] of education.entries()) {
        let div = document.createElement('div')
        div.classList.add('cv-card');
        
        if (index === 0) {
            div.className = 'cv-card ea-cs-2 ea-ce-7 ea-col-xs-12'
        }

        if (index === 1) {
            div.className = 'cv-card ea-cs-7 ea-ce-12 ea-col-xs-12'
        }

        div.innerHTML = `
            <div class="info-container">
                <div class="pill">${i.school}</div>
                <div class="year">${i.year}</div>
            </div>
            <h3>${i.name}</h3>
            <p>${i.description}</p>
        `

        educationSection.append(div)
    }

    for (let [index, i] of experiences.entries()) {
        let div = document.createElement('div')
        div.classList.add('cv-card');
        
        if (index === 0) {
            div.className = 'cv-card ea-cs-2 ea-ce-7 ea-col-xs-12'
        }

        if (index === 1) {
            div.className = 'cv-card ea-cs-7 ea-ce-12 ea-col-xs-12'
        }

        div.innerHTML = `
            <div class="info-container">
                <div class="pill">${i.type}</div>
                <div class="year">${i.year}</div>
            </div>
            <h3>${i.name}</h3>
            <p>${i.description}</p>
        `

        experiencesSection.append(div)
    }
}

renderCV();
