const burger = document.querySelector('#burger')
const sidebar = document.querySelector('#sidebar')
const sidebarOverlay = document.querySelector('#sidebar .sidebar__overlay')

function isSidebarOpened() {
    return sidebar.classList.contains('sidebar--opened')
}

function changeSidebarState() {
    isSidebarOpened() ? page.enableScroll() : page.disableScroll()
    sidebar.classList.toggle('sidebar--opened')
}

burger.addEventListener('click', changeSidebarState)
sidebarOverlay.addEventListener('click', changeSidebarState)

