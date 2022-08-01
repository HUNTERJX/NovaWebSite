//barra hamburguesa del nuevo menu

const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
});


//MENU SCROLL

nav = document.querySelector('.nav');

window.addEventListener('scroll', function(){
    nav.classList.toggle('active', this.window.scrollY >0)
});
