const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = [];

function displayTasks() ({{
  if (tasks.length === 0) {
    console.log('No hay tareas.');
  } else {
    tasks.forEach((task, index) => {
      console.log(`[${index + 1}] ${task.description} - ${task.completed ? 'Completada' : 'Pendiente'}`);
    });
  }
}


    });
  
function addTask(description) {
  tasks.
 
push({ description, completed: false });
  
 
console.log('Tarea agregada.');
}

function deleteTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    console.log('Tarea eliminada.');
  } 
 
else {
    
   
console.log('Índice de tarea no válido.');
  }
}

function completeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
    console.log('Tarea marcada como completada.');
  } 
 
else {
    console.log('Índice de tarea no válido.');
  }
}

rl.on('line', (input) => {
  const parts = input.split(' ');
  const command = parts[0].toLowerCase();
  const argument = parts.slice(1).join(' ');

  switch (command) {
    case 'list':
      displayTasks();
      break;
    case 'add':
      if (argument) {
        addTask(argument);
      } else {
        console.log('La descripción de la tarea no puede estar vacía.');
      }
      
      }
     
break;
    case 'delete':
      
     
if (argument) {
        deleteTask(parseInt(argument, 10) - 1);
      } 
      }

     
else {
        console.log('Proporciona un índice para eliminar la tarea.');
      }
      break;
    case 'complete':
      if (argument) {
        completeTask(parseInt(argument, 10) - 1);
      } else {
        console.log('Proporciona un índice para marcar la tarea como completada.');
      }
      break;
    case 'exit':
      rl.close();
      
     
break;
    default:
      console.log('Comando no válido.');
      
     
break;
  }
});

console.log('Bienvenido a la Lista de Tareas. Comandos: list, add, delete, complete, exit');