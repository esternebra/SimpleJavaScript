/******************************+
PROGRAMACIÓN ORIENTADA A OBJETOS
+*******************************/ 
/************************+************************************************
//Ejemplo 2.2 - Cómo crear objetos por medio de constructores y object.create
+************************************************************************/ 

'use strict';

// Obtener año actual:
var currentDate = new Date();
var year = currentDate.getFullYear();


//1. Método antiguo
var luis = {
    name: 'Luis',
    yearOfBirth: 1991,
    job: 'teacher',
    calcAge: function(){
        this.age = 2019 - this.yearOfBirth;
        console.log('La edad de ' + this.name + ' es: ' , this.age);
    }
};

var maria = {
    name: 'Maria',
    yearOfBirth: 1990,
    job: 'engineer',
    calcAge: function(){
        this.age = 2019 - this.yearOfBirth;
        console.log('La edad de ' + this.name + ' es: ' , this.age);
    }
};
maria.calcAge();
luis.calcAge();
console.log('Objetos creados sin constructor: ',luis ,maria);


//2. Object.create
console.log('FECHA: ',year);
var personProto = {
    calcAge: function(){
        console.log('Edad calculada: ', year - this.yearOfBirth);
    }
}

//2.1 Añadir propiedades individualmente
var celestina = Object.create(personProto);
celestina.name = 'Celestina';

//2.2 Añadir propiedades conuntamente- ESTO NO SE USA PERO EXISTE
var antonio = Object.create(personProto,
    {
        name: {value: 'Antonio'},
        yearOfBirth: {value: 1954},
        job: {value: 'retired'},
    });
console.log('Antonio creado con personProto', antonio);
antonio.calcAge();