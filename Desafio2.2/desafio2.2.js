/*
En tu empresa te han pedido un software que de soporte al departamento de marketing.
Se necesita llevar un seguimiento de las redes sociales.
1. Crerar un constructor de objetos socialNetwork, que contengan los siguientes campos: name, arrayLikes, importance (de 0 a 1), numberOfUsers
2. Usar el contructor para instanciar tres redes sociales:
  - Facebook con likes [201, 245, 500, 650, 1103, 347], importancia 0.8 y 14530 usuarios.
  - Instagram con likes [303, 21, 124, 150, 23, 31], importancia 0.6 y 230 usuarios.
  - Twiter con likes [205, 518, 1123, 4350, 233, 3431], importancia 0.4 y 3230 usuarios.
3. Añadir 2 métodos en el constructor para calcular el total de likes y la media de cada red social
4. Cambiar estos dos métodos por dos funciones prototype.
*/



/********
    1 -Crear un constructor
*********/
var socialNetwork = function(name, arrayLikes, importance, numberOfUsers){
  this.name = name;
  this.arrayLikes = arrayLikes;
  this.importance = importance;
  this.numberOfUsers = numberOfUsers;
  /********
      3 - Añadir dos métodos en el constructor
  *********/
  this.calcLikes = function(){
    //Para sumar todos los elementos (números) de una array utilizamos .reduce((a,b) => a + b).
    //a=primer numero de la array, b= segundo numero de la array, esos dos numeros se suman y a continuación se suma el resultado con el siguiente número de la array y así hasta el último dando como resultado la suma total de todo el array.
    this.likes =this.arrayLikes.reduce((a,b) => a + b);
    console.log('La suma total de likes de ' ,this.name, ' es: ' ,this.likes);

    //De manera tradicional:
    /*
    var sum=0;
    for(var i=0; i<this.arrayLikes.length; i++){
      sum+= this.arrayLikes[i];
    }
    this.totalLikes = sum
    */
  };
  this.calcMedia = function(){
    // para garantizar que la función anterior ha sido llamada, la llamamos dentro directamente
    // this.calcLikes();
    this.media= this.likes/ this.arrayLikes.length;
    console.log('La media de likes de ' +this.name+ ' es: ' ,Math.round(this.media));
  }
}

/********
    2 - Usar el constructor para instanciar tres redes sociales
*********/
var facebook = new socialNetwork('Facebook',[201, 245, 500, 650, 1103, 347], 0.8, 14530 );
console.log(facebook);
facebook.calcLikes();
facebook.calcMedia();

var instagram = new socialNetwork('Instagram',[303, 21, 124, 150, 23, 31], 0.6, 230 );
console.log(instagram);
instagram.calcLikes();
instagram.calcMedia();

var twitter = new socialNetwork('Twitter', [205, 518, 1123, 4350, 233, 3431], 0.4, 3230 );
console.log(twitter);
twitter.calcLikes();
twitter.calcMedia();


/********
    4 - Rehacer los métodos con funciones Prototype- ES MÁS EFICIENTE HACERLO CON PROTOTYPE
*********/
socialNetwork.prototype.calcLikes = function(){
  this.likes =this.arrayLikes.reduce((a,b) => a + b);
  console.log('La suma total de likes de ' ,this.name, ' con PROTOTYPE es: ' ,this.likes);
};

socialNetwork.prototype.calcMedia = function(){
  this.media= this.likes/ this.arrayLikes.length;
  console.log('La media de likes de ' +this.name+ ' con PROTOTYPE es: ' ,Math.round(this.media));
}


