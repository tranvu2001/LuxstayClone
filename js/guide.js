const $ = document.querySelector.bind(document)
const btnPrev = $('.slider__img-btn-prev')
const btnNext = $('.slider__img-btn-next')
const slideImg = $('.slider__img-contain')

const slideImgDimension = slideImg.getBoundingClientRect()

const slideImgDimensionWidth = slideImgDimension.width
console.log(slideImgDimensionWidth)

btnPrev.addEventListener('click', () => {
    slideImg.scrollLeft -= slideImgDimensionWidth
    console.log(slideImg.scrollLeft)
    if (slideImg.scrollLeft >= 0) {
        btnPrev.style.display = 'none'
    }

    if (slideImg.scrollLeft <= slideImgDimensionWidth) {
        btnNext.style.display = 'block'
    }


})

btnNext.addEventListener('click', () => {
    slideImg.scrollLeft += slideImgDimensionWidth
    // console.log(slideImg.scrollLeft)
    if (slideImg.scrollLeft > slideImgDimensionWidth - 2000) {
        btnNext.style.display = 'none'
    }
    if (slideImg.scrollLeft > slideImgDimensionWidth - 2000) {
        btnPrev.style.display = 'block'
    }
})

if (slideImg.scrollLeft < 1500) {
    btnPrev.style.display = 'none'
}


const languages = document.querySelector('.navbar-right__currency')
const navbarRightLanguages = document.querySelector('.navbar-right__languages')

const openModalLanguages = () => {
    languages.classList.toggle('navbar-right__currency--active')
}

navbarRightLanguages.addEventListener('click', openModalLanguages)



const searchGuest = document.querySelector('.search__guest')
const searchGuestModal = document.querySelector('.search__guest--modal')

const showModalGuest = (e) => {
    if (e.target.closest('.search__guest')) {
        searchGuestModal.classList.toggle('show')
        searchGuest.classList.toggle('border')
    }
}

// const hideModalGuest = (e) => {

//     searchGuestModal.classList.toggle('show')

// }
searchGuest.addEventListener('click', showModalGuest)


// Get quantity guest start
const btnAddAdult = document.querySelector('.guest__type.adult .control .add__btn')
const btnMinusAdult = document.querySelector('.guest__type.adult .control .minus__btn')
const btnAddChild = document.querySelector('.guest__type.child .control .add__btn')
const btnMinusChild = document.querySelector('.guest__type.child .control .minus__btn')
const btnAddBaby = document.querySelector('.guest__type.baby .control .add__btn')
const btnMinusBaby = document.querySelector('.guest__type.baby .control .minus__btn')

const inputAdult = document.querySelector('.guest__type.adult .input__inner')
const inputChild = document.querySelector('.guest__type.child .input__inner')
const inputBaby = document.querySelector('.guest__type.baby .input__inner')

const LOCALSTORAGE_KEY = 'quantityKey'

const localStorageObj = {
    get() {
        return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {}
    },

    adjust() {
        var adultValue = inputAdult.value
        var childValue = inputChild.value
        var babyValue = inputBaby.value
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({
            adult: adultValue,
            child: childValue,
            baby: babyValue
        }))

    },

    clear() {
        localStorage.removeItem(LOCALSTORAGE_KEY)
    }
}

// Adult quantity
inputAdult.value = localStorageObj.get().adult ? localStorageObj.get().adult : 0


function handleAddAdult(e) {

    const maxValue = Number(inputAdult.max)
    if (inputAdult.value >= maxValue) {
        e.target.setAttribute('disabled', 'disabled')

    } else {
        inputAdult.value++
        localStorageObj.adjust()

    }

    btnMinusAdult.removeAttribute('disabled')
}

function handleMinusAdult(e) {
    inputAdult.value--
    if (inputAdult.value <= 0) {
        e.target.setAttribute('disabled', 'disabled')
        inputAdult.value = 0
    }
    localStorageObj.adjust()

    btnAddAdult.removeAttribute('disabled')
}

btnAddAdult.addEventListener('click', handleAddAdult)
btnMinusAdult.addEventListener('click', handleMinusAdult)

if (inputAdult.value === 0) {
    btnMinusAdult.setAttribute('disabled', 'disabled')
}



// Child quantity
inputChild.value = localStorageObj.get().child ? localStorageObj.get().child : 0
function handleAddChild(e) {
    const maxValue = Number(inputChild.max)
    if (inputChild.value >= maxValue) {
        e.target.setAttribute('disabled', 'disabled')

    } else {
        inputChild.value++
        localStorageObj.adjust()
    }

    btnMinusChild.removeAttribute('disabled')
}

function handleMinusChild(e) {
    inputChild.value--
    if (inputChild.value <= 0) {
        e.target.setAttribute('disabled', 'disabled')
        inputChild.value = 0
    }
    localStorageObj.adjust()

    btnAddChild.removeAttribute('disabled')
}

btnAddChild.addEventListener('click', handleAddChild)
btnMinusChild.addEventListener('click', handleMinusChild)

if (inputChild.value === 0) {
    btnMinusChild.setAttribute('disabled', 'disabled')
}


// // Baby quantity
inputBaby.value = localStorageObj.get().baby ? localStorageObj.get().baby : 0
function handleAddBaby(e) {
    const maxValue = Number(inputBaby.max)
    if (inputBaby.value >= maxValue) {
        e.target.setAttribute('disabled', 'disabled')
    } else {
        inputBaby.value++
        localStorageObj.adjust()
    }

    btnMinusBaby.removeAttribute('disabled')
}

function handleMinusBaby(e) {
    inputBaby.value--
    if (inputBaby.value <= 0) {
        e.target.setAttribute('disabled', 'disabled')
        inputBaby.value = 0
    }
    localStorageObj.adjust()

    btnAddBaby.removeAttribute('disabled')
}

btnAddBaby.addEventListener('click', handleAddBaby)
btnMinusBaby.addEventListener('click', handleMinusBaby)

if (inputBaby.value === 0) {
    btnMinusBaby.setAttribute('disabled', 'disabled')
}
// Get quantity guest end

// Clear quantity start
const btnClear = document.querySelector('.btn__clear')

btnClear.addEventListener('click', () => {
    localStorageObj.clear()
    inputAdult.value = 0
    inputChild.value = 0
    inputBaby.value = 0
})
// Clear quantity end


// show/hidden header Mobile start
const utilMobile = document.querySelector('.util-mobile')
const utilMobileSearch = document.querySelector('.util-mobile__search')
const utilMobileOption = document.querySelector('.util-mobile__option')
const headerMobile = document.querySelector('.header--mobile')
const btnClose = document.querySelector('.btn__close')
const navbarLeft = document.querySelector('.navbar-left')
const navbarRight = document.querySelector('.navbar-right')
console.log(utilMobile)

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
// show/hidden header Mobile end


const createStopScrollListener = (element, callback, timeout) => {
    var handle = null
    var onScroll = function () {
        if (handle) {
            clearTimeout(handle)
        }
        handle = setTimeout(callback, timeout || 200) // default 0.2s
        utilMobile.classList.add('hide')

    }
    element.addEventListener('scroll', onScroll)
    return function () {
        element.removeEventListener('scroll', onScroll);
    }
}

createStopScrollListener(window, function () {
    utilMobile.classList.remove('hide')
}, 400)





