/* 
Ejercicio map()
- Supongamos que tenemos una app que guarda un array de tareas (task) del día. Cada tarea es un objeto con los campos: 'name' y 'duration'.
1. Queremos crear un array con el nombre de las tareas 
*/


var task = [
    {
        name: 'Programming .map example',
        duration:120
    },
    {
        name: 'Take a shower. I,m sure you´ll need it.',
        duration: 5
    },
    {
        name: 'Eat something, for the love of God.',
        duration: 15
    }
];

// Forma antigua
var taskNames = [];
for(var i = 0; i<task.length; i++){
    taskNames.push(task[i].name);
}
console.log('Task name with for: ' ,taskNames);

// ES6 -> con .forEach()
var taskNames = [];
taskNames.forEach(function(element){
    taskNames.push(element.name);
})
console.log('Task name with for: ' ,taskNames);

// ES6 -> con map()
taskNames = task.map(function(element){
    return element.name;
});
console.log('Task name with for: ' ,taskNames);