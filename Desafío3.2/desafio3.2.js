/* 
Ejercicio map()
De un array de años de nacimiento, calcular mayores de edad.
*/

const years = [1990, 1964, 1995, 2005];

//Con function
let ages = years.map(function(element) {return 2019 - element;});
console.log('Edades calculadas con función: ',ages);

//Con arrow function
ages = years.map((element) => {return 2019 - element;});
console.log('Ejemplo calculado con .map y arrow function: ',ages);

//Mayores de edad con .map()
let fullAge = ages.map(element => {return element > 19;});
console.log('Mayores de edad con map: ',fullAge);

//Mayores de edad con .filter()
fullAge = ages.filter(element => {return element > 19;});
console.log('Mayores de edad con filter: ',fullAge);

//Mayores de edad con .find()
fullAge = ages.find(element => {return element > 19;});
console.log('Mayores de edad con find: ',fullAge);
