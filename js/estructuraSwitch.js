// switch: se usan por ejemplo para remplazar if else anidados
//varias opciones para elegir

//estructura de un switch

/* 
switch(opcion){
    case 1 : 
    //todo lo que quiero que se ejecute
    break
    case 2:
        //todo lo que quiero que se ejecute
    break
    .....
    default 
    // codigo que se ejecuta por defecto
}
*/
//permitir al usuario elegir su estacion favorita del año
let estacion = prompt(
  "Ingrese su estacion del año favorita segun su nro, por ej. 1.verano, 2.otoño, 3.primavera, 4.invierno"
);
switch (estacion.toLowerCase()) {
  case "1":
  case "verano":
    document.write("Su estacion favorita es: verano");
    break;
  case "2":
  case "otoño":
    document.write("Su estacion favorita es: otoño");
    break;
  case "3":
  case "primavera":
    document.write("Su estacion favorita es: primavera");
    break;
  case "4":
  case "invierno":
    document.write("Su estacion favorita es: invierno");
    break;
  default:
    alert("ingrese una opcion valida");
    break;
}
