
var respuesta1 = prompt('¿Cuántos gramos hay en un kilo?');
var num1 = parseInt(respuesta1);

var esValida = true;
var esMayor1000 = (num1 > 1000 );

if (esValida){
  alert('Claaro.. y tres pancitos');
}

var respuesta2 = prompt('¡Hola! ¿Hola? ¿Cómo se dice?');
var rta2 = respuesta2.toLowerCase();

if (rta2 == 'hola'){
    console.warn('Ah.. bueno, mejor así.');
}

var respuesta3 = prompt('¿Edad?');
var num3 = parseInt(respuesta3);

if ((num3 >= 10) && (num3 <= 50)){
  alert('En la flor de la vida');
}
