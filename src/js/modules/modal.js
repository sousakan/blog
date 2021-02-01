const body = document.querySelector('body')
const buttons = document.querySelectorAll('[data-modal]')
const modals = document.querySelectorAll('.modal')

//===============  Adding event listeners  ===============

//Установка обработчиков для кнопок
buttons.forEach(element => element.addEventListener('click', openModal))

//Установка обработчиков для закрытия модального окна
modals.forEach(element => {
    const overlay = element.querySelector('.modal__overlay')
    const closeButton = element.querySelector('.modal__close')
    const content = element.querySelector('.modal__content')
    
    content.addEventListener('click', e => e.stopPropagation())
    overlay.addEventListener('click', closeModal)

    if (closeButton !== null)
    {
        closeButton.addEventListener('click', closeModal)
    }
})

//===============  Event Listeners  ===============

function openModal(e) {
    if(!isSidebarOpened()) page.disableScroll()
    const modalName = e.target.dataset.modal
    const currentModal = document.getElementById(modalName)
    currentModal.classList.add('modal--opened')
}

function closeModal(e) {
    if (!isSidebarOpened()) page.enableScroll()
    e.target.closest('.modal').classList.remove('modal--opened')
}