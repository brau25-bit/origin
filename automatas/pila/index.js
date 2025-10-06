const pila = document.getElementById("pila");
const lista = document.getElementById("lista");
const numero = document.getElementById("input");
const primero = document.getElementById("primero");
const ultimo = document.getElementById("ultimo");
let pilaNumero = [];

function agregarNumero(){
    let numeroAgregado = numero.value;
    if(numeroAgregado === ""){
        alert("Ingresa un numero");
    } else{
        pilaNumero.push(numeroAgregado);
        mostrarElementos();
    }
}

function eliminar(){
    if(pilaNumero.length === 0){
        alert("La pila está vacía");
        return;
    }
    else{
        pilaNumero.pop();
        mostrarElementos();
    }
}

function mostrarElementos(){
    pila.textContent = "Tienes: " + pilaNumero.length + " elementos";

    // Muestra todos los elementos acumulados
    lista.innerHTML = ""; // limpia la lista antes de volver a pintarla
    pilaNumero.forEach(num => {
        let li = document.createElement("li");
        li.textContent = num;
        lista.appendChild(li);
    });

    primero.textContent = pilaNumero.length > 0 
    ? "Primer elemento de la pila: " + pilaNumero[0] 
    : "La pila está vacía";

ultimo.textContent = pilaNumero.length > 0 
    ? "Último elemento de la pila: " + pilaNumero[pilaNumero.length - 1] 
    : "";

}