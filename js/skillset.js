


const initializeCircleBoxes = (circleParams) => {

    const experienceSkillset = document.getElementById('experience__skillset')

    const circleSize = 15

    const createCircleBox = (x, y) => {
        const circleBox = document.createElement('div')
        circleBox.setAttribute('class', 'circlebox')
        circleBox.className = 'circlebox'
        circleBox.style.top = `${y}px`
        circleBox.style.left = `${x}px`
        circleBox.style.backgroundColor = circleParams.bg
        return circleBox
    }

    let skillsetElements = []

    for (let i = 0; i < experienceSkillset.children.length; ++i) {
        skillsetElements[skillsetElements.length] = experienceSkillset.children[i]
    }

    for (let i = 0, offsetY = 0; i < skillsetElements.length; ++i) {
        const skillsetElement = skillsetElements[i]
        let currentHeight = skillsetElement.offsetHeight
        offsetY = offsetY + currentHeight
        if (i == 0 || i == 8) continue
        const circleBox = createCircleBox(-6, offsetY - currentHeight / 2 - circleSize / 2)
        skillsetElement.addEventListener('mouseenter', event => circleBox.style.backgroundColor = circleParams.bgHover)
        skillsetElement.addEventListener('mouseleave', event => circleBox.style.backgroundColor = circleParams.bg)
        experienceSkillset.appendChild(circleBox)
    }
}

setTimeout(() => {
    initializeCircleBoxes({ bg: '#ccc', bgHover: '#4a86e8' })
}, 1000)