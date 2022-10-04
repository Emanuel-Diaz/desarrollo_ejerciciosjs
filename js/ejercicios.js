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
let nombre = prompt("Escribe tu nombre");
document.write(`<br> hello${nombre}`);

/* 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
 */
let n1 = prompt("Escribe un número");
let n2 = prompt("Escribe otro número");
document.write("<br>la suma de los números es"+ [ parseInt(n1) + parseInt(n2) ] );

