/******************************+
PROGRAMACIÓN ORIENTADA A OBJETOS
+*******************************/ 
/************************+************************************************
//Ejemplo 2.3 - Funciones como argumentos
+************************************************************************/ 

'use strict';

// Obtener año actual:
var currentDate = new Date();
var year = currentDate.getFullYear();

//Array fechas de nacimiento
var years = [1991, 2015, 1937, 2005, 1998];

//Helper functions (Son funciones secundarias que utilizamos de ayuda)
function calcAge(age){
    return year - age;
}

function isFullAge(age){
    //Esto devuelve booleano, si la edad es mayor que 18 devuelve un true, si no un false.
    return age >= 18;
}
function maxHeartRate(age){
    if(age >= 18 && age <= 81){
        // Fórmula de ritmo cardíaco(.round = para redondear)
        return Math.round(206.9 - (0.67 * age));
    }
    else{
        return -1;
    }
}

//Main function (Función principal) que hace un barrido a una array y a una función! Sirve para todo.
function arrayCalc(arr, fn){
    var arrRes =[];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push( fn(arr[i]) );
    }
    return arrRes;
}

//LLamadas
//Ponemos el nombre de la función, pero no queremos llamarla, si no pasarle la referencia
var ages = arrayCalc( years, calcAge);
var fullAges = arrayCalc( ages, isFullAge);
var heartRate = arrayCalc( ages, maxHeartRate);


console.log('Edades: ',ages);
console.log('Mayores de edad: ',fullAges);
console.log('Las máximas pulsaciones son: ',heartRate);