const menuItems = document.querySelectorAll('.menu-item')

const removeCurrentActive = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        removeCurrentActive()
        item.classList.add('active')
    })
})