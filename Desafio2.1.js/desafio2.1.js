/*
  Una empresa que se dedica del cuidado y mantenimiento de los bosques, te pide un sofware para calcular la edad de diferentes especies de plantas.
  1. Crar una función que devuelta direrentes funciones para los casos:
  - Si es un pino, la edad será el diámetro (cm) dividido entre dos.
  - Si es un abeto, la edad será la (altura * diámetro)/ 10
  - Si es tomillo, será la altura * 5
  2. Utilizar las funciones creadas para cada caso.
*/

'use strict';

//Hacemos una función grande con todo.
//DIRECTAMENTE
/* 
function treeAge(tree) {
  if (tree === 'Pino') {
    return function(diameter){
      var treeAgePino = diameter / 2;
      console.log('La especie introducida es: '+tree+ ' y tiene: ' , treeAgePino , ' años.');
    }
  }
  else if (tree === 'Abeto') {
    return function(height, diameter){
      var treeAgeAbeto = (height * diameter) / 10 ;
      console.log('La especie introducida es: '+tree+ ' y tiene: ' , treeAgeAbeto , ' años.');        
    }
  }
  else if (tree === 'Tomillo') {
    return function(altura){
      var treeAgeTomillo = altura * 5;
      console.log('La especie introducida es: '+tree+ ' y tiene: ' , treeAgeTomillo , ' años.');        
    }
  }

}
var treeAgePino = treeAge('Pino');
treeAgePino(100);
//Lo mismo que lo anterior lo podemos hacer así:
treeAge('Pino')(100);

var treeAgeAbeto = treeAge('Abeto');
treeAgeAbeto(200,100);
//Lo mismo que lo anterior lo podemos hacer así:
treeAge('Abeto')(200,100);

var treeAgeTomillo= treeAge('Tomillo');
treeAgeTomillo(50); 
//Lo mismo que lo anterior lo podemos hacer así:
treeAge('Tomillo')(50);
*/



//Hacemos una función grande con todo.
//PREGUNTANDO AL USUARIO

function treeAge(tree) {
  if (tree === 'Pino') {
    return function(diameter){
      var treeAgePino = diameter / 2;
      document.write('La especie introducida es -> '+tree+ ' y tiene una edad de ' , treeAgePino , ' años.');
    }
  }
  else if (tree === 'Abeto') {
    return function(height, diameter){
      var treeAgeAbeto = (height * diameter) / 10 ;
      document.write('La especie introducida es -> '+tree+ ' y tiene una edad de ' , treeAgeAbeto , ' años.');        
    }
  }
  else if (tree === 'Tomillo') {
    return function(height){
      var treeAgeTomillo = height * 5;
      document.write('La especie introducida es -> '+tree+ ' y tiene una edad de  ' , treeAgeTomillo , ' años.');        
    }
  }
}
var userPlant=prompt('Por favor, escribe el tipo de planta para calcular la edad: ');
if(userPlant == 'Pino'){
  var diameter= parseInt(prompt('Por favor, especifique el diámetro en cm: '));
  treeAge(userPlant)(diameter);
}
else if(userPlant == 'Abeto'){
  var height= parseInt(prompt('Por favor, espeficique la altura en cm: '));
  var diameter= parseInt(prompt('Por favor, especifique el diámetro en cm: '));
  treeAge(userPlant)(height, diameter);
}
else if(userPlant == 'Tomillo'){
  var height= parseInt(prompt('Por favor, especifique el diámetro en cm: '));
  treeAge(userPlant)(height);
}