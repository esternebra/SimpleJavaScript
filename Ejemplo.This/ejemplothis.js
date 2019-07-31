'use strict'

//1. Crear objeto john con un método calculateAge y campos name y yearOfBirth.
//2. Crear una función calculateAge y mostrar por console this.

console.log('This en el scope global: ', this);


// This se puede usar en el global o en los métodos, pero fuera no.
var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function(){
        // Mostramos por consola el this
        // Cuando se llama a una método con el nombre del objeto, el this pasa a ser el objeto
        console.log('This dentro del objeto John: ',this);
        console.log('Edad de Jhon: ', 2019 - this.yearOfBirth);
    }
};

// Las funciones crean un ScopedCredential, pero no crean un this propio, por lo que en este caso, this sería undefined
function calculateAge(year){
    console.log('La edad de John calculada por la función es: ', 2019 - year);
    console.log('This dentro de la función: ', this);
}

john.calculateAge();
calculateAge(1960);