/*IDIOMA
var check = document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma() {
    let id = check.checked;
    if (id == true) {
        location.href = "inde.html";
    } else {
        location.href = "index.html";
    }

}
*/
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

// venta modal youtube


const open1 = document.getElementById('open1');
const modal_container1 = document.getElementById('modal_container1');
const close1 = document.getElementById('close1');

open1.addEventListener('click', ()=>{
    modal_container1.classList.add('show'); 
});
close1.addEventListener('click', ()=>{
    modal_container1.classList.remove('show');  
   
});





/*nuevo slider 
let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 6500)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}
*/



//SCROLL DE LA PAGINA COMPLETA

ScrollReveal().reveal('.textos-header');
ScrollReveal().reveal('.contenedor-sobre-nosotros', { delay: 700});
ScrollReveal().reveal('.portafolio', { delay: 600});
ScrollReveal().reveal('.contenido', { delay: 600});
ScrollReveal().reveal('.nuestro-producto', { delay: 600});
ScrollReveal().reveal('.contenedor-footer', { delay: 600});

//SECCION DEL SEGUNDO SLIDER SECCION PROCESOS

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider_section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-right");
const btnRight = document.querySelector("#btn-left");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider_section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);

}
function Prev(){
    let sliderSection = document.querySelectorAll(".slider_section");
let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}
btnRight.addEventListener('click', function(){
    Next();
});
btnLeft.addEventListener('click', function(){
    Prev();
});





//VENTA MODAL CON VIDEO DE PROCESO

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', ()=>{
    modal_container.classList.add('show'); 
});
close.addEventListener('click', ()=>{
    modal_container.classList.remove('show');  
   
});

