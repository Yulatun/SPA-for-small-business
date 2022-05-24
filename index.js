let menu = document.querySelector("#mobile-menu")
let menuitem = document.querySelector('.navbar_menu')

function mobileMenu (){
    menu.classList.toggle('is-active');
    menuitem.classList.toggle('active')
};

addEventListener("click",mobileMenu);


