
(() => {
    const get = id => document.getElementById(id)

    const headerSection = get('header-section')
    const briefSection = get('brief-section')
    const contactsSection = get('contacts-section')
    const educationSection = get('education-section')
    const experienceSection = get('experience-section')

    const delay1 = 300
    const delay2 = 300 * 3.5
    const delay3 = 300 * 4.75
    const delay4 = 300 * 5.5
    const delay5 = 300 * 6.25


    setTimeout(() => headerSection.style.opacity = 1, delay1)
    setTimeout(() => briefSection.style.opacity = 1, delay2)
    setTimeout(() => contactsSection.style.opacity = 1, delay3)
    setTimeout(() => educationSection.style.opacity = 1, delay4)
    setTimeout(() => experienceSection.style.opacity = 1, delay5)
})()