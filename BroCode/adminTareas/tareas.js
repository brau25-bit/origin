let tareas = [];
let id = 0;

// Agregar una tarea nueva
function agregarTarea(nombre, estado = false) {
  const tarea = {
    id: ++id,
    nombre,
    estado
  };
  tareas = [...tareas, tarea]; // uso de spread para crear un nuevo array
}

// Mostrar todas las tareas
function mostrarTareas() {
  tareas.map(t =>
    console.log(`ID: ${t.id} | ${t.nombre} | Completada: ${t.estado}`)
  );
}

// Contar tareas completadas y pendientes
function listarTareas() {
  const completadas = tareas.filter(t => t.estado).length;
  const pendientes = tareas.length - completadas;
  console.log(
    `Total: ${tareas.length}, Completadas: ${completadas}, Pendientes: ${pendientes}`
  );
}

// Buscar tareas que contengan un texto (sin importar mayúsculas)
function buscarTareas(texto) {
  const coincidencias = tareas.filter(t =>
    t.nombre.toLowerCase().includes(texto.toLowerCase())
  );

  coincidencias.length
    ? coincidencias.forEach(t =>
        console.log(`ID:${t.id} | ${t.nombre} | Completada:${t.estado}`)
      )
    : console.log("No se encontraron tareas");
}

// Marcar una tarea como completada
function completarTarea(idBuscado) {
  tareas = tareas.map(t =>
    t.id === idBuscado ? { ...t, estado: true } : t
  );
}

// Calcular porcentaje de completadas
function estadistica() {
  if (!tareas.length) {
    console.log("No hay tareas registradas.");
    return;
  }
  const completadas = tareas.filter(t => t.estado).length;
  const porcentaje = Math.round((completadas / tareas.length) * 100);
  console.log(`Porcentaje de tareas completadas: ${porcentaje}%`);
}

// ----------------- EJEMPLO DE USO -----------------
agregarTarea("JS");
agregarTarea("HTML", true);
agregarTarea("CSS");
mostrarTareas();           // Listar todas
listarTareas();            // Resumen
buscarTareas("ht");        // Buscar por texto
completarTarea(1);         // Cambiar estado a completada
estadistica();             // Porcentaje de completadas
mostrarTareas();           // Ver cambios
