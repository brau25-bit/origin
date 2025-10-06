let circulo1 = document.getElementById("cir1");
let circulo2 = document.getElementById("cir2");
let circulo3 = document.getElementById("cir3");
let contar = 0;

// Función que actualiza las luces
function actualizar(){
    // Apagar todas las luces antes de encender una
    circulo1.classList.remove("verde");
    circulo2.classList.remove("amarillo");
    circulo3.classList.remove("rojo");

    if(contar === 0){
        circulo1.classList.add("verde");
    }
    else if(contar === 1){
        circulo2.classList.add("amarillo");
    }
    else if(contar === 2){
        circulo3.classList.add("rojo");
    }

    contar++;
    if(contar > 2) contar = 0;
}

// Cambiar cada 2 segundos (2000 ms)
setInterval(actualizar, 2000);

// Encender el verde al inicio
actualizar();
