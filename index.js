import { boton } from "./Boton/boton.js";
let DOM = document.querySelector("#root");

DOM.appendChild(boton());  // Agrega el div creado por la función boton()

// FUNCION
document.addEventListener("DOMContentLoaded", () => { 
    let boton1 = document.querySelector('.botonsito'); // Selecciona el botón después de cargar el DOM

    // Verificamos si el botón existe
    if (boton1) {
        boton1.addEventListener("click", () => {
            let div1 = document.querySelector('.cuadrito-1');
            if (div1) { // Verificamos si el div existe
                div1.classList.add("color");  // Cambia el color de fondo
            } else {
                console.error("El div con la clase 'cuadrito-1' no se encontró.");
            }
        });
    } else {
        console.error("El botón con la clase 'botonsito' no se encontró.");
    }
});
