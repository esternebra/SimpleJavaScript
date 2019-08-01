'use strict';

/**********************************************************
   Ejemplo 3.5 - Arrays
**********************************************************/


/*
Método array.from
-----------------
1 -> Convertir a array 'array-like objects', es decir, que tienen la propiedad longitud
2 -> Convertir un string a array. Separa letra por letra.
3 -> Copiar arrays: preferieble operador spread
*/


//1 ->
//Existen objetos que vienen así en el DOM
const raceObject = {
    0: 'lorenzo',
    1: 'Alonso',
    2: 'messi',
    3: 'Rossi',
    4: 'Quique',
    5: 'Karen con boli azul',
    //Propiedad longitud de un array
    length:6
}
console.log('raceObject es: ', raceObject);

//Los convertimos a array
let raceArray = Array.from(raceObject);
console.log('raceArray es: ',raceArray);

//2 ->
const framework = Array.from('Angular');
console.log('Array from a string',framework);

//3 ->
//Creamos un array nuevo
let array = [1, 2, 3];
//Es preferible hacer esto para no liarla pardisima y cargarnos el array original.
let newArray = Array.from(array);
console.log(newArray);