/* document.write("<br>Elemento1") */
//se usan los bucles para repetir n veces nuestra linea de código
//WHILE
/* 
while(condicion logica){
    codigo que quiero ejecutar

    variable para cambiar la condicion logica
}
*/
let contador = 1;
while (contador <= 20) {
  document.write("Elemento" + contador + "<br>");
  contador++;
}

let cont = 50;
do {
  //codigo que quiero ejecutar varias veces
  document.write("Elemento" + cont + "<br>");
  cont--;
} while (cont >= 20);

//for
/*  for(crear una variable; condición logica; incrementador o decrementador){
    codigo que quiero ejecutar varias veces
} */
for (let i = 1; i < 20; i++) {
  document.write("Estructura for vuelta" + i + "<br>");
}
 // recorrer un string(palabras) usando un bucle
 //cantidad de caracteres de un string o longuitud
 //los string son interables y empiezan de 0
/*  let palabras = "tomate y manzana" */
 console.log(palabras.length)
  
 for (let c = 0; c < palabras.length; c++){
    document.write("letra de palabras" + palabras.charAt(c) + "<br>")
 }