// var menuAll = require('./libs/menu.js');
//     scrollElement = require('./libs/scrollingElement.js');

// var menuGeneral = new menuAll
//     sectionScroll = new scrollElement;

// // Menú Mobile
// var btnBurguerV= document.getElementsByClassName("hamburger-menu")[0];
// // var btnBurguerH= document.getElementsByClassName("hamburger-menu")[1];


// var idLienzo = document.getElementById("container");
// menuGeneral.menuVertical(btnBurguerV, idLienzo);
// // menuGeneral.menuHorizontal(btnBurguerH);

// // create a simple instance
// var elContain = document.getElementById('container');
// // by default, it only adds horizontal recognizers
// var mc = new Hammer(elContain);
// // listen to events...
// if(btnBurguerV.offsetLeft > 0){
//   mc.on("swipeleft", function(ev) {
//     btnBurguerV.click();
//   });
// }
// $(".slideshow").slick({
//     // dots: true
//     dots: true,
//     speed: 500,
//     cssEase: 'linear'
// });

$(".banner-principal").slick({
    dots: true,
    speed: 500,
    cssEase: 'linear' 
})



const botonAceptar = document.getElementById('botonAceptar')

let datos = {
    usuario: "admin",
    contra: "123456"
}

botonAceptar.addEventListener('click',() =>{
    const usuario = document.getElementById('usuario').value 

    if(usuario === datos.usuario){
        console.log('Bienvenido '+ usuario);
    }else{
        console.log('USUARIO No existe');
        
    }
})



