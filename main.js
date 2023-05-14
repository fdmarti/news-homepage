import './style.css'

const btnTogglerMenu = document.querySelector('.menu-toggler')
const contentNavigation = document.querySelector('.navigation')
const iconTogglerMenu = document.querySelector('.toggler-menu-icon')


btnTogglerMenu.addEventListener('click', () => {
    contentNavigation.classList.toggle('show');

    if (contentNavigation.classList.contains('show')) {
        iconTogglerMenu.src = 'images/icon-menu-close.svg'
        document.body.style.overflow = 'hidden';
    } else {
        iconTogglerMenu.src = 'images/icon-menu.svg'
        document.body.style.overflow = 'auto';
    }
})