
const burger = document.querySelector('.header-burger') as HTMLDivElement
const nav = document.querySelector('#header-nav')
const btnClose = document.querySelector('#header-nav__close')

burger.addEventListener('click', () => {
    nav.classList.add('header-nav--open')
    console.log(123);
    
})
btnClose.addEventListener('click', () => {
    nav.classList.remove('header-nav--open')
})