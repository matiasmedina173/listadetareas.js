// Array de tareas
let tareas = [];

// Función para agregar tarea
function agregarTarea() {
  const nombreTarea = prompt("Ingrese el nombre de la tarea:");

  if (nombreTarea) {
    const nuevaTarea = {
      id: tareas.length + 1,
      nombre: nombreTarea,
    };

    tareas.push(nuevaTarea);
    mostrarTareas();
  }
}

// Función para mostrar las tareas
function mostrarTareas() {
  const listaTareas = document.getElementById("misTareas");
  listaTareas.innerHTML = "";

  tareas.forEach((tarea) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${tarea.id}. ${tarea.nombre}`;
    listaTareas.appendChild(listItem);
  });
}
