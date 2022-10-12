/* 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
 */
alert("hola, ¿cómo estas?");

/* 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
 */
document.write("Hello world");

/* 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
 */
console.log(3 + 5);

/* 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario» */
/* let nombre = prompt("Escribe tu nombre");
document.write(`<br> hello${nombre}`);
 */
/* 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
 */
/* let n1 = prompt("Escribe un número");
let n2 = prompt("Escribe otro número");
document.write("<br>la suma de los números es" + [parseInt(n1) + parseInt(n2)]); */

/* 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
 */

var numero1 = +prompt("Escribe un número otra vez");
var numero2 = +prompt("Escribe otro número otra vez");
if (numero1 > numero2) {
  document.write(numero1);
} else {
  document.write(numero2);
}

/* 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
 */
/* var Num1 = prompt("Escribe un número");
var Num2 = prompt("Escribe otro número");
var Num3 = prompt("Escribe otro número");
if (Num1 > Num2 && Num1 > Num3) {
  document.write(Num1);
} else if (Num2 > Num3) {
  document.write(Num2);
} else {
  document.write(Num3);
} */

/* 8.- Escribe un programa que pida un número y diga si es divisible por 2
 */
/* let nm1 = prompt("Elegí un número");
if(nm1 % 2 === 0){
    document.write("Es divisible de 2");
}else{
    document.write("No es divisible por 2")
} */