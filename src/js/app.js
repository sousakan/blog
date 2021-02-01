console.log('JS is working fine!')

const page = {
    disableScroll() {
        //Scrollbar width
        scrollBarWidth = `${window.innerWidth - document.documentElement.clientWidth}px` 
        document.body.style.paddingRight = scrollBarWidth
        document.body.classList.add('no-scroll')
    },
    enableScroll() {
        document.body.classList.remove('no-scroll')
        document.body.style.paddingRight = ''
    }
}

//Подключение JS файлов
//@include('./modules/burger.js')
//@include('./modules/modal.js')
//@include('./modules/input.js')
