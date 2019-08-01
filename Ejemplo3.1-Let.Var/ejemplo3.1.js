'use strict';

/*************************************
            let, var y const 
*************************************/

/*
COMPARATIVA de var y let

1. Bloques de funciones -> en una función, 'let' y 'var' funcionan igual.

2. Redeclaración -> 'var' se puede redeclarar, 'let' no se puede redeclarar.

    var tempVar = 'This is a temp variable';
    var tempVar = 'This is a second temp variable';//ESTO FUNCIONARÁ BIEN

    let tempLet = 'This is a temp variable';
    let tempLet = 'This can´t be a second temp variable';//ESTO DARÁ ERROR

3. En loops, condicionales -> SI podemos acceder a una 'var' desde fuera, NO podemos acceder a un 'let' desde fuera de bloques condicionales o loops. 
    
    for ( var i = 0; i < 10; i++){
        console.log(i);
    }
    console.log(i); //ESTO FUNCIONARÁ BIEN

    for ( let i = 0; i < 10; i++){
        console.log(i);
    }
    console.log(i);//ESTO DARÁ ERROR

4. Global window (window es el objeto padre de todo) -> si se declara una 'var' de forma global , esta variable se añade al objeto global, con 'let' NO se añadiría al objeto global.

    var varVariable = 'This is a VAR variable';
    let letVariable = 'This is a LET variable';
    //ESTO NO DARÁ ERROR, PERO EN EL OBJETO GLOBAL NO SE AÑADIRÁ LET

*/