addEventListener('DOMContentLoaded', (event) => {
    const menuButton = document.querySelector("menu-btn");
    const mainMenu = document.querySelector('main-nav ul.main-menu');

    menuButton.addEventListener('click', ()=> {
        mainMenu.classList.toggle('show');
    });
});
