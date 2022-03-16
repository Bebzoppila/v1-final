import Swiper from 'swiper';

const reviewsSlider = new Swiper('.reviews-content', {
    speed: 400,
    slidesPerView: 1,
})

const reviewsSliderNext = document.querySelector('.reviews-menu__next')
const reviewsSliderPref = document.querySelector('.reviews-menu__pref')

reviewsSliderNext.addEventListener('click', () => {
    reviewsSlider.slideNext()
})

reviewsSliderPref.addEventListener('click', () => {
    reviewsSlider.slidePrev()
})