//declarar una funcion
/* 
function nombreDeFuncion(){
    codigo a ejecutar
}
*/
function holaMundo() {
  console.log("hola mundo, como estas?");
}

//invocar, ejecutar o llamar a una funcion
holaMundo();

//funciones con parametros
/* 
function nombreDeLaFunction(parametro1, parametro2){
    codigo a ejecutar
} */

function saludar(nombre, apellido) {
  console.log(`hola el nombre es: ${nombre} y el apellido es: ${apellido}`);
}
saludar();

//ejemplo de funcion con parametros

//funciones que nos retornan un valor

function convertirDolaresPesos(dolares) {
  let pesos = dolares * 290;
  return pesos;
}
let precioCelular = convertirDolaresPesos(500);
console.log(precioCelular);
console.log("el precio de la play 5 es" + convertirDolaresPesos(1000));

//ejemplo de funcion con parametros
function sumarValores(valor1, valor2) {
  if (typeof valor1 !== "number" || typeof valor2 !== "number") {
    console.warn("debe ingresar un valor numerico");
  } else {
    return `${valor1} + ${valor2} = ${valor1 + valor2}`;
  }
}
console.log(sumarValores(1, 2));
console.log(sumarValores(6, 5));

//Funciones flecha o arrows fuctions
/* 
let nombrefuncion = ()=>{
    codigo a ejecutar
}
*/
let sumar = (num1, num2) => {
  return num1 + num2;
};
console.log(sumar(6, 4));

//scope de una funcion

let heroe = "batman";
function mostrarHeroe() {
  return `bienvenido ${heroe}`;
}
console.log(mostrarHeroe());

//funciones anonimas:se declaran como constantes
const square = function (num){
    return Math.pow(num , 2)
}

//se puede invocar funciones dentro de otra funcion

let sumSquare = (num1, num2)=>{
    return square (num1 + square(num2))
}
console.log(sumSquare(2,5))
const hola = function (){
    console.log("hola como estas?")
}