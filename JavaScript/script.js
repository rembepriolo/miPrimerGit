/* function suma_y_muestra() {
  result = num1 + num2;
  alert("El resultado es: " + result);
}
 
var resultado;
var num1 = 3;
var num2 = 5;
 
suma_y_muestra();
 
num1 = 10;
num2 = 7;
 
suma_y_muestra();
 
num1 = 5;
num2 = 8;
 
suma_y_muestra(); */

/* // Definición de la función
function calculaPrecioTotal(precio) {
  var impuestos = 1.16;
  var gastosEnvio = 10;
  var precioTotal = ( precio * impuestos ) + gastosEnvio;
  alert("El resultado es: " + precioTotal);
}
 
// Llamada a la función
calculaPrecioTotal(23.34); */

/* var cadena = "En un lugar de la Mancha de cuyo nombre no quiero acordarme...";
var letras = cadena.split("");
var resultado = "";
 
for(i in letras) {
  if(letras[i] == "o") {
    break;
  }
  else {
    resultado += letras[i];
  }
}
alert(resultado); */


var cadena = "En un lugar de la Mancha de cuyo nombre no quiero acordarme...";
var letras = cadena.split("");
var resultado = "";
 
for(i in letras) {
  if(letras[i] == 'a') {
    continue;
  }
  else {
    resultado += letras[i];
  }
}
alert(resultado);









