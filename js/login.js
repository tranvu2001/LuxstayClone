// Modal
const languages = document.querySelector('.navbar-right__currency')
const navbarRightLanguages = document.querySelector('.navbar-right__languages')

console.log(languages);
const openModalLanguages = () => {
    languages.classList.toggle('navbar-right__currency--active')
}

navbarRightLanguages.addEventListener('click', openModalLanguages)


// Header Mobile

const utilMobile = document.querySelector('.util-mobile')
const utilMobileSearch = document.querySelector('.util-mobile__search')
const utilMobileOption = document.querySelector('.util-mobile__option')
const headerMobile = document.querySelector('.header')
const btnClose = document.querySelector('.btn__close')
const navbarLeft = document.querySelector('.navbar-left')
const navbarRight = document.querySelector('.navbar-right')


utilMobileSearch.addEventListener('click', () => {
    headerMobile.classList.add('active')
    utilMobileSearch.classList.add('active')
    navbarRight.style.display = 'none'
    navbarLeft.style.display = 'flex'
})

utilMobileOption.addEventListener('click', () => {
    headerMobile.classList.add('active')
    utilMobileSearch.classList.add('active')
    navbarLeft.style.display = 'none'
    navbarRight.style.display = 'block'
})

btnClose.addEventListener('click', () => {
    headerMobile.classList.remove('active')
    utilMobileSearch.classList.remove('active')
})