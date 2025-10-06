/*function multiplicar(...mults) {
    let result = 1; // iniciar en 1 porque es el neutro de la multiplicación
    for (let mult of mults) {
        result *= mult; // multiplicamos por cada número
    }
    return result;
}

function multiplicar(...mults) {
    return mults.reduce((acc, num) => acc * num, 1);
}

console.log(multiplicar(1,3,2));

function sumaStrings(...palabras) {
    let resultado = "";
    for (let palabra of palabras) {
        resultado += palabra + " ";
    }
    return resultado.trim(); // quitamos el último espacio
}

function sumaStrings(...palabras) {
    return palabras.join(" "); // Une todas con espacio
}

console.log(sumaStrings("braulio", "esta", "wey"));


function ultimo(...textos){
    return textos[textos.length - 1];
}

console.log(ultimo("a","b","E","x",));

const numeros = [8, 3, 5, 10];
function minimo(numeros){
    return Math.min(...numeros);
}

const persona = { nombre: "Carlos", edad: 30 };
function personas(persona){
    const personaProfesion = {...persona, profesion: "Ingeniero"};
    return personaProfesion;
}

const frutas1 = ["manzana", "pera"];
const frutas2 = ["uva", "mango"];

function frutasJuntas(frutas1, frutas2){
    let frutas = [...frutas1, ...frutas2];
    return frutas;
}

const persona = { nombre: "Ana", edad: 25 };

function agregarAmigos(persona, ...amigos) {
    return { ...persona, amigos }; 
}

function mezclarListas(lista1, lista2){
    let listaCompleta = [...lista1, ...lista2];
    return listaCompleta;
}
*/
const base = { id: 1, nombre: "Producto" };

function clonarYAgregar(base, ...propiedades) {
    return { ...base, ...Object.assign({}, ...propiedades) };
}

console.log(clonarYAgregar(base, { precio: 100 }, { stock: 50 }));