;

(() => {
    
    let header = document.getElementById('header')

    let s1 = document.getElementById('s1')
    let s2 = document.getElementById('s2')

    let briefSection = document.getElementById('brief-section')
    let educationSection = document.getElementById('education-section')
    let experienceSection = document.getElementById('experience-section')
    
    const delay1 = 250 * 2
    const delay2 = 250 * 12

    setTimeout(() => {
        s1.style.opacity = '1'
        header.style.opacity = '1'
    }, delay1)
    setTimeout(() => {s2.style.opacity = '1'}, delay2)

    setTimeout(() => {
        briefSection.style.opacity = '1'
        educationSection.style.opacity = '1'
        experienceSection.style.opacity = '1'
    }, delay1)
    

})();