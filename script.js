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

const bgColor = document.querySelectorAll('.choose-bg')
const bgColor1 = document.querySelector('.bg-1')
const bgColor2 = document.querySelector('.bg-2')
const bgColor3 = document.querySelector('.bg-3')

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

const removeColor = () => {
    colorPallet.forEach(color => {
        color.classList.remove('active')
    })
}

colorPallet.forEach(color => {
    color.addEventListener('click', () => {
        removeColor()
        let primaryColor
        let secondaryColor
        color.classList.toggle('active')


        if (color.classList.contains('color-1')) {
            primaryColor = '#7b42e4'
            secondaryColor = '#cabeff'
        } else if (color.classList.contains('color-2')) {
            primaryColor = '#d8c307'
            secondaryColor = '#feffbe'
        } else if (color.classList.contains('color-3')) {
            primaryColor = '#e44242'
            secondaryColor = '#ffbebe'
        } else if (color.classList.contains('color-4')) {
            primaryColor = '#20bd2d'
            secondaryColor = '#c9ffbe'
        } else if (color.classList.contains('color-5')) {
            primaryColor = '#4288e4'
            secondaryColor = '#bee0ff'
        }

        rootEL.style.setProperty('--color-primary', primaryColor)
        rootEL.style.setProperty('--color-secondary', secondaryColor)
    })
})

const changeBgToLight = () => {
    rootEL.style.setProperty('--color-white', colorWhite)
    rootEL.style.setProperty('--color-dark', colorDark)
    rootEL.style.setProperty('--color-light', colorLight)
    rootEL.style.setProperty('--color-black', colorBlack)
}

const changeBgFromLight = () => {
    rootEL.style.setProperty('--color-white', colorWhiteToDark)
    rootEL.style.setProperty('--color-dark', colorDarkToLight)
    rootEL.style.setProperty('--color-light', colorLightToDark)
    rootEL.style.setProperty('--color-black', colorBlackToLight)
}

bgColor1.addEventListener('click', () => {

    colorWhite = '#f5f5f5'
    colorDark = '#17153f'
    colorLight = '#e2e1f7'
    colorBlack = '#1b1b1b'

    bgColor1.classList.add('active');
    bgColor2.classList.remove('active')
    bgColor3.classList.remove('active')
    changeBgToLight()
})

bgColor2.addEventListener('click', () => {

    colorWhiteToDark = '#202020'
    colorDarkToLight = '#e2e1f7'
    colorLightToDark = '#1b1b1b'
    colorBlackToLight = '#FFF0FF'

    bgColor2.classList.add('active');
    bgColor1.classList.remove('active')
    bgColor3.classList.remove('active')
    changeBgFromLight()
})

bgColor3.addEventListener('click', () => {

    colorWhiteToDark = '#202020'
    colorDarkToLight = '#adadad'
    colorLightToDark = '#030303'
    colorBlackToLight = '#adadad'

    bgColor3.classList.add('active');
    bgColor1.classList.remove('active')
    bgColor2.classList.remove('active')
    changeBgFromLight()
})

