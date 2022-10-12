/* Escribe un programa que pida una frase y escriba  */
let frase = prompt("ingrese una frase");
for (let i = 0; i < frase.length; i++) {
  const caracter = frase.charAt(i);
  switch (caracter.tolowerCase) {
    case "a":
      document.write(frase.substring(i, i + 1) + "<br>");
      break;
    case "e":
      document.write(frase.substring(i, i + 1) + "<br>");
      break;
    case "i":
      document.write(frase.substring(i, i + 1) + "<br>");
      break;
    case "o":
      document.write(frase.substring(i, i + 1) + "<br>");
      break;
    case "u":
      document.write(frase.substring(i, i + 1) + "<br>");
      break;

    default:
        console.log("no ingreso vocal")
      break;
  }
}
