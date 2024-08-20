// Agregar evento para el botón Añadir
document.getElementById('addTaskBtn').addEventListener('click', function(){
    const taskInput = document.getElementById('taskInput');
    // Verificar si la entrada está vacia
    if(taskInput !== ''){
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = taskInput.value;
        
        // Toggle tarea completada con un click
        li.addEventListener('click', function(){
            this.classList.toggle('list-group-item-success')
        });

        // Creamos un botón para borrar la tarea
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm float-end'
        deleteBtn.textContent = 'Eliminar';

        // Agregamos funcionalidad para remover tareas
        deleteBtn.onclick = function(){
            this.parentElement.remove();
        };
        li.appendChild(deleteBtn);
        
        // Agregar la nueva tarea en la lista 
        document.getElementById('taskList').appendChild(li);
        // Limpiamos la entrada despues de agregar una tarea
        taskInput.value = '';
    }
});