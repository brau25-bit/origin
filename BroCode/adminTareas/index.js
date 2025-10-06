let tareas = [];
let id = 0;

function agregarTarea(tarea, estado) {
  const obj = {
    id: ++id,
    nombre: tarea,
    estado: estado,
  };
  tareas.push(obj);
}

function mostrarTareas() {
  tareas.forEach(t => {
    console.log(`ID: ${t.id} | ${t.nombre} | Completada: ${t.estado}`);
  });
}

function listarTareas() {
  let comp = 0;
  let noComp = 0;

  for (const t of tareas) {
    t.estado ? comp++ : noComp++;
  }

  console.log(
    `Total: ${tareas.length}, Completadas: ${comp}, Pendientes: ${noComp}`
  );
}

function buscarTareas(text){
    
    tareas.forEach(t => {
        if(t.nombre === text){
            console.log(`ID: ${t.id}, Nombre: ${t.nombre}, Completada: ${t.estado}`);      
        }
    })
}

function estadistica(){
    let comp = 0;
    let total;
    tareas.forEach(t => {
        t.estado ? comp++ : false;
    })

    total = Math.floor((comp/tareas.length) * 100);

    console.log(`El porcentaje total de tareas completadas es: ${total}%`)
}
// ---- Ejemplo de uso ----
agregarTarea("JS", false);
agregarTarea("HTML", true);
mostrarTareas();
listarTareas();
buscarTareas("HTML");
estadistica();
