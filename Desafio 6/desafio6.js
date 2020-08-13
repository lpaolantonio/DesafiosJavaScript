function p() {
    var n1 = prompt ('¿Sabés contar del 1 al 3? *separá los números con espacios, gracias');
    var n2 = prompt ('¿Y contar del 4 al 6? *separá los números con espacios, gracias');

    var array1 = n1.split(' ');
    var array2 = n2.split(' ');
    var respuesta = array1.concat(array2);
    var mensaje = respuesta.toString();
    alert('Muy bien! todo junto sería: ' + mensaje);
} 







//function promediar(n1, n2) {
  //  return (Number(n1) + Number (n2))/2;
//}