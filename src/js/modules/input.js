const textAreas = document.querySelectorAll('[data-autoresize]')

textAreas.forEach(item => {
    console.log(item)
    item.addEventListener('input', e => {
        item.style.height = '19px'
        item.style.height = item.scrollHeight + 'px'
    })
})