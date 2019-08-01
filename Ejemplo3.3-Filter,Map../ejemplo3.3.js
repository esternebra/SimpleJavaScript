'use strict';

/**********************************************************
   Ejemplo 3.3 -filter, map, some, reduce, forEach en ES6
**********************************************************/

/*

forEach()  -> Es un barrido sobre la propia array. Se utiliza para el mismo código sobre un array, pero NO modifica el array. Es muy genérico, por ello, si es posible es mejor utilizar map, some, reduce...

    let food =['mango', 'rice', 'pepper', 'pear'];
    food.forEach(element => {
        console.log(element),
    });


map()  -> Es como forEach() pero MODIFICA el array original!!! devuelve un array modificado. OJO.CON MINUSCULA!!

    let money = [2000, 4000, 3000, 1000];
    let newMoney = money.map(function(moneyItem){
        return moneyItem / 10;
    });
    console.log(newMoney);


filter()  -> Comprueba todos los elementos del array en base a un criterio, devuelve un array con los elementos que cumplan dicho criterio. Devuelte todos los elementos.

    let ages = [19, 29, 4, 67, 10];
    let fullAge = ages.filter(function(itemAge){
        return itemAge >=18;
    });
    console.log('Mayores de edad. ',fullAges);


find()  -> Para seleccionar un elemento de un array. Solo te devuelve el primer elemento que encuentra.

    let ages2 = [18, 29, 4, 67, 10];
    console.log('Edades: ',ages2);

    let fullAge2 = ages2.find(function(itemAges){
    return itemAges >= 18;
    });
    console.log('Mayores de edad con filter:' ,fullAge2);


reduce()  -> Para reducir un array a un único valor. Para sumar los valores de un array.

    var total = [0, 1, 2, 3, 4].reduce(Acumulador, valorActual, indice, array){
        var indice = indice;
        var array = array;
        return acumulador + valorActual;
    }

    ó como en el Desafío 2,2  -> ESTE EJEMPLO ESTÁ MAS CLARO
    calcLikes = function(){
        var likes =arrayLikes.reduce((a,b) => a + b);
    }

    que es lo mismo que: ->
    var suma = [0, 1, 2, 3, 4].reduce(function(a,b){
        return a + b;
    });
*/
