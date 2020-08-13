function p() {
    var n1 = prompt ('Ingrese un número: ');
    var n2 = prompt ('Ingrese otro número: ');

    alert('El promedio es: ' + promediar(n1,n2));
} 

function promediar(n1, n2) {
    return (Number(n1) + Number (n2))/2;
}