
const languages = document.querySelector('.navbar-right__currency')
const navbarRightLanguages = document.querySelector('.navbar-right__languages')

console.log(languages);
const openModalLanguages = () => {
    languages.classList.toggle('navbar-right__currency--active')
}

navbarRightLanguages.addEventListener('click', openModalLanguages)


// Languages
const buttonLanguage = document.querySelector(".copyright__languages")
const modalLanguage = document.querySelector(".modal__languages")

const showModal = () => {
    modalLanguage.classList.toggle("modal__languages--active")
}

buttonLanguage.addEventListener('click', showModal)
