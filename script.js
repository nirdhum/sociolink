const menuItems = document.querySelectorAll('.menu-item')

const messageBtn = document.getElementById('messages')
const messageBox = document.querySelector('.messages')
const messages = messageBox.querySelectorAll('.message')
const messageSearch = document.getElementById('message-search')

const removeCurrentActive = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        removeCurrentActive()
        item.classList.add('active')

        if (item.id != 'notifications') {
            document.querySelector('.notification-popup').style.display = 'none'
        } else {
            document.querySelector('.notification-popup').style.display = 'block'
            document.querySelector('#notifications .notification-count').style.display = 'none'
        }
    })
})

messageBtn.addEventListener('click', () => {
    messageBox.style.boxShadow = '0 0 1rem var(--color-primary)'

    messageBtn.querySelector('.message-count').style.display = 'none'

    setTimeout(() => {
        messageBox.style.boxShadow = 'none'
    }, 3000)
})

const searchMsg = () => {
    const value = messageSearch.value.toLowerCase();
    console.log(value);
    messages.forEach(msg => {
        let name = msg.querySelector('h5').textContent.toLowerCase();
        console.log(name);
        if (name.indexOf(value) != -1) {
            msg.style.display = 'flex'
        } else {
            msg.style.display = 'none'
        }
    })
}

messageSearch.addEventListener('keyup', searchMsg)