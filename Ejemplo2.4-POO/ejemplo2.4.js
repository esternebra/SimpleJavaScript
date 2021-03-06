/******************************+
PROGRAMACIÓN ORIENTADA A OBJETOS
+*******************************/
/************************+************************************************
//Ejemplo 2.4 - Funciones que devuelven funciones
+************************************************************************/

'use strict';

//Hacemos una función grande con todo.
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name){
            console.log(name + ', can you please explain what UX design is?');
        }
    }
    else if (job === 'teacher') {
        return function(name){
            console.log('¿What subject do you teach, ' +name + '?');
        }
    }
    else {
        return function(name){
            console.log('Hello '+name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('Pedro');
designerQuestion('Antonia');

interviewQuestion('teacher')('Manolo');
