// Seleccionamos elementos del DOM
let contador = document.getElementById("contador");
let btnIncrementar = document.getElementById("incrementar");
let btnDecrementar = document.getElementById("decrementar");
let btnResetear = document.getElementById("resetear");

// Recuperar valor guardado o iniciar en 0
let valor = parseInt(localStorage.getItem("contador")) || 0;
actualizarContador();

// Función para actualizar el número y color
function actualizarContador() {
    contador.textContent = valor;

    // Cambiar color según el valor
    if (valor > 0) {
        contador.className = "positivo";
    } else if (valor < 0) {
        contador.className = "negativo";
    } else {
        contador.className = "neutro";
    }

    // Guardar en localStorage
    localStorage.setItem("contador", valor);

    // Animación
    contador.classList.add("animar");
    setTimeout(() => contador.classList.remove("animar"), 200);
}

// Eventos
btnIncrementar.addEventListener("click", () => {
    valor++;
    actualizarContador();
});

btnDecrementar.addEventListener("click", () => {
    valor--;
    actualizarContador();
});

btnResetear.addEventListener("click", () => {
    valor = 0;
    actualizarContador();
});
