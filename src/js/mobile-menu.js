$(document).ready(function () {
    // Отображение мобильного меню
    const mobileMenuIcon = document.querySelector(".mobile-menu__img");
    const mobileMenu = document.querySelector(".mobile-menu__text");
    const headerNavList = document.querySelector(".header-nav__list");
    const header = document.querySelector(".header");

    mobileMenuIcon.addEventListener('click', function(){
        headerNavList.classList.toggle('active');
    })

    mobileMenu.addEventListener('click', function(){
        headerNavList.classList.toggle('active');
    })

    headerNavList.addEventListener('click', function(){
        if(headerNavList.classList.contains('active')){
            headerNavList.classList.remove('active');
        }
    })

    window.addEventListener('scroll', function() {
        if(headerNavList.classList.contains('active')){
            headerNavList.classList.remove('active');
        }
    })

    window.addEventListener('resize', function(){
        headerNavList.classList.remove('active');        
    })
})

