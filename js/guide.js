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



