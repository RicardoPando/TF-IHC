window.onscroll = function(){
    /*almacena los datos cuando baja*/ 
    scrool=document.documentElement.scrollTop;

    header=document.getElementById("header");

    if (scrool>20) {
        header.classList.add('nav_mod');
    }else if (scrool <20) {
        header.classList.remove('nav_mod');
    }
}

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);
document.getElementById("Inicio").addEventListener("click", borrar_menu);
document.getElementById("Planes").addEventListener("click", borrar_menu);
document.getElementById("Servici").addEventListener("click", borrar_menu);
document.getElementById("Nosot").addEventListener("click", borrar_menu);
document.getElementById("App").addEventListener("click", borrar_menu);
document.getElementById("Planes").addEventListener("click", borrar_menu);
document.getElementById("Contactanos").addEventListener("click", borrar_menu);




menu = document.getElementById("header");
body=document.getElementById("container_all");
nav = document.getElementById("nav");

function mostrar_menu(){
    
    menu.classList.toggle('moverconte');
    body.classList.toggle('moverconte');
    nav.classList.toggle('move_nav');
   
}


window.addEventListener("resize", function(){

    if(window.innerWidth > 360){
        menu.classList.remove('moverconte');
        body.classList.remove('moverconte');
        nav.classList.remove('move_nav');
    }

})
function borrar_menu(){
    
    menu.classList.remove('moverconte');
    body.classList.remove('moverconte');
    nav.classList.remove('move_nav');
   
}
/*------------------------------------------------------------------------*/ 


let pagina_actual = "#Pagina_Inicio2";
document.querySelectorAll("boot").forEach((evento)=> {
    evento.addEventListener("click", (e)=>{
        
        document.querySelector(pagina_actual).style.
        animate = `animacionSalir 300s ease forwarsd 0s`

        pagina_actual="#Pagina_"+e.target.id
        document.querySelector(pagina_actual).style.
        animate =`animacionEntrar 300s ease forwarsd 20s`
    })
})

var btnAbrirPopup = document.getElementById('Regsitro'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('caja_trasera');
    
    

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});


/*------------------------------------------------------------------------------------ */
document.getElementById("Cambiar1").addEventListener("click", iniciarSesion);
document.getElementById("Cambiar2").addEventListener("click", register);
window.addEventListener("resize", anchoPage);
/*declarando variables*/
var formulario_login = document.querySelector(".formulario_login");
var formulario_register = document.querySelector(".formulario_registro");
var contenedor_login_register = document.querySelector(".caja_login");
var caja_trasera_login = document.querySelector(".trasera_login");
var caja_trasera_register = document.querySelector(".trasera_registro");
/*---------------------------*/


function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

   anchoPage(); 
   
    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }
    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
    }

 