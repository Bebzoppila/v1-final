const allModalBnt = document.querySelectorAll('.modal-btn-opend') as NodeListOf<Element>
const modal = document.querySelector('.modal')
const modalBtnClose = document.querySelector('.modal__close')
const pageFixed = () => { 
    document.body.style.position = 'fixed';
    document.body.style.width = `100%`;
    console.log();
    if(screen.width > 550){
        document.body.style.paddingRight = '17px'
    }
}

const pageDelFixed = () => {
    document.body.style.position = '';
    document.body.style.width = ``;
    document.body.style.paddingRight = ''
}

allModalBnt.forEach(btnItem => {
    btnItem.addEventListener('click', () => {
        modal.classList.add('modal--open')
        pageFixed()
    })
})

document.body.addEventListener('click', (event: PointerEvent) => {
    if(event.composedPath()[0] === modal){
        modal.classList.remove('modal--open')
        pageDelFixed()
    }
})
modalBtnClose.addEventListener('click', () => {
    modal.classList.remove('modal--open')
    pageDelFixed()
})