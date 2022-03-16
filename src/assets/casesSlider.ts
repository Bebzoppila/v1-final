import Swiper from 'swiper';

const casesSlider = new Swiper('.cases-content', {
    speed: 400,
    slidesPerView: 1,
    allowTouchMove: false,
    // centeredSlides
    breakpoints:{
        860:{
            // width: 860,
            centeredSlides: true,
            slidesPerView: 1.7,
            spaceBetween: 50
        }
    }

})

const casesNextBtn = document.querySelector('.cases-menu__next')
const casesPrefBtn = document.querySelector('.cases-menu__pref')

const sliderLength = document.querySelectorAll('.cases-item').length
const paginationMenu = document.querySelector('.cases-menu__items')
const menuPaginationItems: HTMLDivElement[] = []

function removalClassPaginations(){
    for (let j = 0; j < menuPaginationItems.length; j++) {
        menuPaginationItems[j].classList.remove('cases-menu__item--active')
    }
}


for (let index = 0; index < sliderLength; index++) {
    const menuItem = document.createElement('div')
    menuItem.classList.add('cases-menu__item')
    menuPaginationItems.push(menuItem)
}   

for (let index = 0; index < menuPaginationItems.length; index++) {
    menuPaginationItems[index].onclick = () => {
        removalClassPaginations()
        menuPaginationItems[index].classList.add('cases-menu__item--active')
        casesSlider.slideTo(index)
    }
}
menuPaginationItems[0].classList.add('cases-menu__item--active')
menuPaginationItems.forEach(element => {
    paginationMenu.append(element)
})



casesNextBtn.addEventListener('click', () => {
    casesSlider.slideNext()
    removalClassPaginations()
    menuPaginationItems[casesSlider.realIndex].classList.add('cases-menu__item--active');
    
})

casesPrefBtn.addEventListener('click', () => {
    casesSlider.slidePrev()
    removalClassPaginations()
    menuPaginationItems[casesSlider.realIndex].classList.add('cases-menu__item--active');
})