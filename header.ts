// Липкий хеадер

const header = document.querySelector('header')

let scrollOffset = 0

document.addEventListener('scroll', () => {
    if (window.scrollY > header.offsetHeight) {
        header.classList.add('sticky')
        document.body.style.paddingTop = `${header.offsetHeight}px`
    } else {
        header.classList.remove('sticky')
        document.body.style.removeProperty('padding-top')
    }
})
