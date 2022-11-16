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

// Automatic slide start
let counter = 1
setInterval(() => {
    document.getElementById('radio' + counter).checked = true
    counter++
    if (counter > 4) {
        counter = 1
    }
}, 5000)
// Automatic slide end


// Slide location start
const slide = [...document.querySelectorAll('.location__slide')]
const prevBtn = document.querySelector('.location-section__button-prev')
const nextBtn = document.querySelector('.location-section__button-next')

slide.forEach((item, i) => {
    let slideDimension = item.getBoundingClientRect()
    let slideWidth = slideDimension.width
    var range = item.scrollWidth - 2700
    console.log(item.scrollWidth)

    // Bắt sự kiện cho nút next, prev
    nextBtn.addEventListener('click', () => {
        item.scrollLeft += slideWidth

        if (item.scrollLeft > range) {
            nextBtn.style.display = 'none'
        }

        if (item.scrollLeft >= 0) {
            prevBtn.style.display = 'block'
        }
    })

    prevBtn.addEventListener('click', () => {
        item.scrollLeft -= slideWidth
        if (item.scrollLeft < item.scrollWidth) {
            nextBtn.style.display = 'block'
        }
        if (item.scrollLeft < item.scrollWidth - 4000) {
            prevBtn.style.display = 'none'
        }
    })

    // Trạng thái ban đầu của nút prev
    if (item.scrollLeft < 1000) {
        prevBtn.style.display = 'none'
    }
})
// Slide location end

// Slide recommend Luxstay start
const slideRecommend = document.querySelector('.recommend__slide')
const nextBtnRecommend = document.querySelector('.recommend-section__button-next')

const prevBtnRecommend = document.querySelector('.recommend-section__button-prev')


const slideDimensionRecommend = slideRecommend.getBoundingClientRect()
const slideDimensionRecommendWidth = slideDimensionRecommend.width

nextBtnRecommend.addEventListener('click', () => {
    slideRecommend.scrollLeft += slideDimensionRecommendWidth
    if (slideRecommend.scrollLeft > slideRecommend.scrollWidth - 3000) {
        nextBtnRecommend.style.display = 'none'
    }

    if (slideRecommend.scrollLeft >= 0) {
        prevBtnRecommend.style.display = 'block'
    }


})

prevBtnRecommend.addEventListener('click', () => {
    slideRecommend.scrollLeft -= slideDimensionRecommendWidth
    if (slideRecommend.scrollLeft < slideRecommend.scrollWidth - 2000) {
        prevBtnRecommend.style.display = 'none'
    }

    if (slideRecommend.scrollLeft < slideRecommend.scrollWidth) {
        nextBtnRecommend.style.display = 'block'
    }
})

if (slideRecommend.scrollLeft < 1000) {
    prevBtnRecommend.style.display = 'none'
}


// Slide recommend Luxstay end

// Slide discovery start
const slideDiscovery = document.querySelector('.discovery__slide')
const nextBtnDiscover = document.querySelector('.discovery-section__button-next')
const prevBtnDiscover = document.querySelector('.discovery-section__button-prev')

const slideDimensionDiscovery = slideDiscovery.getBoundingClientRect()
const slideDimensionDiscoveryWidth = slideDimensionDiscovery.width



nextBtnDiscover.addEventListener('click', () => {
    slideDiscovery.scrollLeft += slideDimensionDiscoveryWidth
    if (slideDiscovery.scrollLeft < slideDiscovery.scrollWidth) {
        prevBtnDiscover.style.display = 'block'
    }
    if (slideDiscovery.scrollLeft > slideDiscovery.scrollWidth - 3000) {
        nextBtnDiscover.style.display = 'none'
    }
})

prevBtnDiscover.addEventListener('click', () => {
    slideDiscovery.scrollLeft -= slideDimensionDiscoveryWidth

    if (slideDiscovery.scrollLeft < slideDiscovery.scrollWidth - 2000) {
        prevBtnDiscover.style.display = 'none'
    }

    if (slideDiscovery.scrollLeft < slideDiscovery.scrollWidth) {
        nextBtnDiscover.style.display = 'block'
    }

})

if (slideDiscovery.scrollLeft < 1000) {
    prevBtnDiscover.style.display = 'none'
}


// Slide discovery end

// Tutorial slide start
const slideTutorial = document.querySelector('.tutorial__slide')
const nextBtnTutorial = document.querySelector('.tutorial-section__button-next')
const prevBtnTutorial = document.querySelector('.tutorial-section__button-prev')

const slideDimensionTutorial = slideTutorial.getBoundingClientRect()
const slideDimensionTutorialWidth = slideDimensionTutorial.width

nextBtnTutorial.addEventListener('click', () => {
    let slideScrollLeft
    slideScrollLeft = slideTutorial.scrollLeft += slideDimensionTutorialWidth

    if (slideTutorial.scrollLeft < slideTutorial.scrollWidth) {
        prevBtnTutorial.style.display = 'block'
    }

    if (slideScrollLeft > slideTutorial.scrollWidth - 2000) {
        nextBtnTutorial.style.display = 'none'
    }
})

prevBtnTutorial.addEventListener('click', () => {
    slideTutorial.scrollLeft -= slideDimensionTutorialWidth

    if (slideTutorial.scrollLeft < slideTutorial.scrollWidth - 3000) {
        prevBtnTutorial.style.display = 'none'
    }

    if (slideTutorial.scrollLeft < slideTutorial.scrollWidth) {
        nextBtnTutorial.style.display = 'block'
    }
})

if (slideTutorial.scrollLeft < 1000) {
    prevBtnTutorial.style.display = 'none'
}
// Tutorial slide end

// // slider

// // Grab the dots
// const dots = document.querySelectorAll('ol li')
// // Grab the slider item
// const sliderItem = document.querySelectorAll('.carousel-inner .item')
// console.log(sliderItem)


// dots.forEach((dot, index, dots) => {
//     dot.addEventListener('click', () => {
//         dots.forEach((dot, index) => {
//             if (dot.classList.contains('active') && sliderItem[index].classList.contains('active')) {
//                 dot.classList.remove('active')
//                 sliderItem[index].classList.remove('active')
//             }
//         })
//         dot.classList.add('active')

//         sliderItem[index].classList.add('active')
//     })

// })


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

// Change inner text start

const text = document.querySelector('.search__guest-text')
// Change inner text end

// Read more btn location start
const loadMoreLocation = document.querySelector('#load-more-location')
const loadMoreRecommend = document.querySelector('#load-more-recommend')
const loadMoreDiscovery = document.querySelector('#load-more-discovery')
const loadMoreTutorial = document.querySelector('#load-more-tutorial')
console.log(loadMoreRecommend)
let currentItemLocation = 3;
let currentItemRecommend = 3;

// loadMoreLocation.onclick = () => {
//     let sections = [...document.querySelectorAll('.location__slide .location-section__parent')]
//     console.log(sections)
//     for (var i = currentItemLocation; i < currentItemLocation + 3; i++) {
//         sections[i].style.display = 'block'
//     }
//     currentItemLocation += 3
//     if (currentItemLocation >= sections.length) {
//         loadMoreLocation.style.display = 'none'
//     }
// }
// Read more btn end

const readMore = (btn, currentItem, sectionSelector, item) => {
    console.log(btn)

    btn.onclick = () => {
        let sections = [...document.querySelectorAll(sectionSelector)]
        for (var i = currentItem; i < currentItem + item; i++) {
            sections[i].style.display = 'block'
        }

        currentItem += item
        if (currentItem >= sections.length) {
            btn.style.display = 'none'
        }
    }
}

loadMoreLocation.addEventListener('click',
    readMore(loadMoreLocation, currentItemLocation, '.location__slide .location-section__parent', 3)
)

loadMoreRecommend.addEventListener('click',
    readMore(loadMoreRecommend, currentItemRecommend, '.recommend__slide .recommend-section__parent', 3)
)

loadMoreDiscovery.addEventListener('click',
    readMore(loadMoreDiscovery, currentItemRecommend, '.discovery__slide .discovery-section-content', 3)
)

loadMoreTutorial.addEventListener('click',
    readMore(loadMoreTutorial, currentItemRecommend, '.tutorial__slide .tutorial__slide-content', 3)
)


// show/hidden header Mobile start
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







