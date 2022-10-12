//Arrays o arreglos
//crear un arreglo con datos
let serie = ["Naruto", "Juego de tronos", 3, 4, true];
console.log(serie);
//crear un arreglo vacio de forma literal
let arreglo = [];

//crear un array usando el constructor de array
let array2 = new Array(1, 2, 3, 8, 5);
console.log(array2);

let array3 = [1, 2, 3];
console.log(array3[0]);

//cantidad de elementos de un array
console.log(array3.length);

//obtener el ultimo elemento del array
console.log(array3[array3.length - 1]);

//Reasignar el valor a un determinado elemento del array
array3[0] = 4;
console.log(array3);

array3[5] = "hola";
console.log(array3);

console.log(array3[5]);

console.log(array3.length);

//agregar el elemento en la ultima posicion o al ultimo
array3.push("chau");
console.log(array3);

//eliminar o sacar del arreglo el ultimo elemento
array3.pop();
console.log(array3);

//agregar un elemento en la primera posicion

array3.unshift("martes");
console.log(array3);

//eliminar o sacar el elemento de la primera posicion
array3.shift();
console.log(array3);

//agregar elementos en una determinada posicion
array3.splice(3, 0, 5);
console.log(array3);

//eliminar elementos en una determinada posicion
array3.splice(4, 2);
console.log(array3);

//eliminar todos los elementos desde una determinada posicion
array3.splice(1);
console.log(array3);

array3.splice(1, 0, 3, 2, 1);
console.log(array3);

//seleccionar elementos de un array
console.log(array3.slice(1, 4));

//recorrer y/o mostrar los elementos del array

for (let i = 0; i < array3.length; i++) {
  console.log(array3[i]);
}

//recorrer y/o mostrar los elementos del array usando for.. of

for (let elementos of array3) {
  console.log(elementos);
}

//recorrer y/o mostrar los caracteres de un strign
for (let elementos of "hola") {
  console.log(elementos);
}

let vocales = ["a", "e", "i", "o", "u"];
console.log(...vocales);

console.log(...array3);

let word = "palabras";
console.log(...word);

//dado un arreglo de edades encontrar el mayor
let edades = ["45", "12", "88", "41"];
console.log(Math.max(...edades));

//dado un arreglo de edades encontrar el menor

console.log(Math.min(...edades));

let words = "murcielago";
console.log(words.split(""));
//convertir string a un array
console.log(words.split());

//otra forma de convertir o parsear
let palabra = "hola";
console.log(Array.from(palabra));

//convertir el array en un strign
console.log(vocales.join()); //("") me recupera la palabra

//concatenar o unir dos array
console.log(array3.concat(vocales));

//otra forma de concatenar arreglos con spread operator

let numeros = [78, 45, 12, 0];
console.log([...vocales, ...numeros]);

//conocer el indice de un elemento del array
/* console.log(arrayWord.indexOf("1"))  devuelve la posicion del primer elemento que cumple la condicion dada o si no lo encuentra o cumple devuelve -1 */

//saber si esta incluido como elemento de un array
//includes return un booleano, true si está incluido y false si no lo esta
console.log(arrayWord.includes(2));

//saber si algun elemento de un array cumple la condicion
