/*
Vamos a construir un juego de test en la consola!
1. Construir un constructor Question que descreiba la pregunta. Debde incluir:
- question
- array de answers (u objeto)
- respuesta correcta
2 Crear un par de preguntas utilizando el constructor
3. Guardar las preguntas en un array
4. Seleccionar una pregunta aleatoria del array, y crear un método (mediante prototype) displayQuestion para pintarla por consola y a continuación las posibles respuestas (pista: para crear un número de pregunta aleatorio de un array: var n = Math.floor(Math.random() * questions.length);) (si no sale hacerlo hard code)
5. Usar prompt para que el usuario pueda elegir una opción. (pista: se debe cambiar el tipo del valor devuelto por prompt: parseInt)
6. Crear un método mediante prototype que corriga la respuesta e indique si hemos acertado o no.( esto es un if)
*/

//1 Constructor ->
var Question = function(question, answers, correct){
    this.question=question;
    this.answers=answers;
    this.correct=correct;
};

//2 Crear varias pretuntas->
var q1 = new Question('¿Quién escribió "La colmena"?',['Berto Romero', 'Camilo José Cela'], 'Camilo José Cela');

var q2 = new Question('¿Cuál es el nombre técnico del miedo o fobia a las alturas?',['Acrofobia', 'Casuística'],'Acrofobia');

var q3 = new Question('La fórmula E=mc2, ¿en qué teoría científica aparece?',['La teoría de por qué no llamaron antes a las Águilas en el Señor de los Anillos','La teoría de la relatividad'],'La teoría de la relatividad');

//3 Array de preguntas ->
var questions = [q1, q2, q3];

//4.1. Seleccionar uan pregunta aleatoria del array ->
var n = Math.floor(Math.random() * questions.length);

//4.2. Método displayQUestion mediante prototype -> pintarla por consola
Question.prototype.displayQuestion = function(){
    console.log(this.question);
    this.answers.forEach((answer, index) => {
        // console.log(index + ': ' +answer);
        console.log(`${index} : ${answer}`);
    });
}
questions[n].displayQuestion();

//5 Prompt para que el usuario introduzca opción
var userAnswer = parseInt(prompt('Por favor, seleccione la respuesta correcta'));
console.log('Opción introducida por el usuario: ', userAnswer);

//6 Método mediante prototype que corrija la respuesta
Question.prototype.checkAnswer = function(answer){
    if(answer === this.correct){
        console.log ('Respuesta correcta!');
    } else{
        console.log('Repsuesta incorrecta!');
    }
};

questions[n].checkAnswer(userAnswer);


