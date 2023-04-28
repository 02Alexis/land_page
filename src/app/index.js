// import '../index.html'
import '../styles/indexStyles/styles.css'

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

document.getElementById("btn_close").addEventListener("click", ocultar_menu);


    const nav = document.getElementById("nav");
    let background_menu = document.getElementById("btn_close");

    // nav = document.getElementById("nav");
    background_menu = document.getElementById("back_menu");

    function mostrar_menu(){
    nav.style.right = "0px";
    background_menu.style.display = "block";
    }
    function ocultar_menu(){
    nav.style.right = "-450px";
    background_menu.style.display = "none";
    }
