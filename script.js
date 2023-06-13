const menuItems = document.querySelectorAll('.menu-item')

const messageBtn = document.getElementById('messages')
const messageBox = document.querySelector('.messages')
const messages = messageBox.querySelectorAll('.message')
const messageSearch = document.getElementById('message-search')

const theme = document.getElementById('theme')
const themeBox = document.querySelector('.customize-theme')

const fontSizes = document.querySelectorAll('.choose-size span')

let rootEL = document.querySelector(':root')

const colorPallet = document.querySelectorAll('.choose-color span')

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
    }, 2000)
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

const openTheme = () => {
    themeBox.style.display = "grid"
}

const closeTheme = (event) => {

    if (event.target.classList.contains('customize-theme')) {
        themeBox.style.display = 'none'
    }

}

themeBox.addEventListener('click', closeTheme)

theme.addEventListener('click', openTheme)

const removeSize = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active')
    })
}

fontSizes.forEach(size => {

    size.addEventListener('click', () => {
        removeSize()
        let font_size;
        size.classList.toggle('active')

        if (size.classList.contains('font-size-1')) {
            console.log('clicked');
            font_size = '10px'
            rootEL.style.setProperty('--sticky-top-left', '5.4rem')
            rootEL.style.setProperty('--sticky - top - right', '5.4rem')

        } else if (size.classList.contains('font-size-2')) {
            font_size = '13px'
            rootEL.style.setProperty('--sticky-top-left', '5.4rem')
            rootEL.style.setProperty('--sticky - top - right', '-7rem')

        } else if (size.classList.contains('font-size-3')) {
            font_size = '16px'
            rootEL.style.setProperty('--sticky-top-left', '-2rem')
            rootEL.style.setProperty('--sticky - top - right', '-17rem')

        } else if (size.classList.contains('font-size-4')) {
            font_size = '19px'
            rootEL.style.setProperty('--sticky-top-left', '-5rem')
            rootEL.style.setProperty('--sticky - top - right', '-25rem')

        } else if (size.classList.contains('font-size-5')) {
            font_size = '22px'
            rootEL.style.setProperty('--sticky-top-left', '-10rem')
            rootEL.style.setProperty('--sticky - top - right', '-33rem')

        }

        document.querySelector('html').style.fontSize = font_size
    })
})
