/******************************+
PROGRAMACIÓN ORIENTADA A OBJETOS
+*******************************/ 
/************************+************************************************
//Ejemplo 2.1 - Cómo crear objetos por medio de constructores y prototype
+************************************************************************/ 

'use strict';


//Método antiguo
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


//Método nuevo - CONSTRUCTOR
var Person = function( name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

var luis = new Person('Luis', 1991, 'teacher');
var maria = new Person('Maria', 1990, 'engineer');

console.log('Objetos creados con constructor: ',luis ,maria);


//Constructor con métodos
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calcAge = function(){
        this.age = 2019 - this.yearOfBirth;
        //Escribimos una ' , ' para añadir la edad, porque si utilizamos un '+' lo pasa directamente a String.
        console.log('La edad de ' + this.name + ' es: ' , this.age);
    }
}
var paco = new Person('Paco', 1995, 'student');
paco.calcAge();
console.log('Objetos creados con el constructor después de llamar a método: ',paco);


//Constructor sin métodos, métodos mediante prototype
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person.prototype.calcAge = function(){
    this.age = 2019 - this.yearOfBirth;
    console.log('La edad de ' + this.name + ' es: ' , this.age);
}
Person.prototype.lastName = 'Peláez';

var pepito = new Person('Pepito', 1985, 'Nurse');
console.log('Objetos creados con constructor y prototype',pepito);

pepito.calcAge();
console.log('Objetos creados con constructor y prototype después de llamar a calcAge: ',pepito);
console.log('Apellido obtenido con prototype: ',pepito.lastName);

