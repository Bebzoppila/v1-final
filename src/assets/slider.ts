import Swiper from 'swiper';

const advantagesSwiper = new Swiper('.advantages-slider', {
    speed: 400,
    slidesPerView: 1.3,
    breakpoints:{
        425:{
            spaceBetween: 0,
            slidesPerView: 2,
        },
        709:{
            spaceBetween: 0,
            slidesPerView: 3,
        },
        890:{
            spaceBetween: 0,
            slidesPerView: 4,
        }
    }
});

