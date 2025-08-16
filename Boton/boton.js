function boton(){
    let div = document.createElement('div');
    div.className = "contenedor";

    let div1 = document.createElement('div');
    div1.className = "cuadrito-1";
    div1.innerText = "DIV2";
    div.appendChild(div1);

    let divBoton = document.createElement('div');
    divBoton.innerText = "BOTÓN"
    divBoton.className = "botonsito";
    div.appendChild(divBoton);

    return div

}

export { boton }