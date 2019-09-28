
(() => {
    const get = id => document.getElementById(id)

    const s1 = get('s1')
    const s2 = get('s2')
    const s3 = get('s3')
    const s4 = get('s4')

    const delay0 = 500
    const delay1 = 1000
    const delay2 = 3000
    const delay3 = 5000
    const delay4 = 7000

    setTimeout(() => s1.style.opacity = '1', delay1)
    setTimeout(() => s2.style.opacity = '1', delay2)
    setTimeout(() => s3.style.opacity = '1', delay3)
    setTimeout(() => s4.style.opacity = '1', delay4)

})() 