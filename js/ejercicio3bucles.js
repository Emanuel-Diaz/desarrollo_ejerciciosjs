/* 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión
 */
let resultado = "";

do {
  let palabra = prompt("Ingrese una palabra");
  if (resultado === "") {
    //si es la primer y ubica palabra ingresada, no la concateneo el guion
    resultado = palabra;
  } else {
    resultado = resultado + "-" + palabras;
  }
} while (confirm("Desea seguir ingresando palabras?"));
document.write(resultado)
