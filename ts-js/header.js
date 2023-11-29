// Липкий хеадер
var header = document.querySelector('header');
var scrollOffset = 0;
document.addEventListener('scroll', function () {
    if (window.scrollY > header.offsetHeight) {
        header.classList.add('sticky');
        document.body.style.paddingTop = "".concat(header.offsetHeight, "px");
    }
    else {
        header.classList.remove('sticky');
        document.body.style.removeProperty('padding-top');
    }
});
