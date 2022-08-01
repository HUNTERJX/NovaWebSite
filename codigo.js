

//VENTANA MODAL 2

const open1 = document.getElementById('open1');
const modal_container1 = document.getElementById('modal_container1');
const close1 = document.getElementById('close1');

open1.addEventListener('click', ()=>{
    modal_container1.classList.add('show');  
});
close1.addEventListener('click', ()=>{
    modal_container1.classList.remove('show');  
});








//SECCION DEL SEGUNDO SLIDER SECCION PROCESOS

const slider5 = document.querySelector("#slider5");
let sliderSection5 = document.querySelectorAll(".slider_section5");
let sliderSectionLast5 = sliderSection5[sliderSection5.length -1];

const btnLeft5 = document.querySelector("#btn-right5");
const btnRight5 = document.querySelector("#btn-left5");

slider5.insertAdjacentElement('afterbegin', sliderSectionLast5);

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider_section5")[0];
    slider5.style.marginLeft = "-200%";
    slider5.style.transition = "all 0.5s";
    setTimeout(function(){
        slider5.style.transition = "none";
        slider5.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider5.style.marginLeft = "-100%";
    }, 500);

}
function Prev(){
    let sliderSection5 = document.querySelectorAll(".slider_section5");
let sliderSectionLast = sliderSection5[sliderSection5.length -1];
    slider5.style.marginLeft = "0";
    slider5.style.transition = "all 0.5s";
    setTimeout(function(){
        slider5.style.transition = "none";
        slider5.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider5.style.marginLeft = "-100%";
    }, 500);
}
btnRight5.addEventListener('click', function(){
    Next();
});
btnLeft5.addEventListener('click', function(){
    Prev();
});
