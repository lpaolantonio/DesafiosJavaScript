function activar () {
    var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo", "Osvaldo"];
    for(var i=0; i<dias.length; i++) {
    if (i==7){
     alert('Dicen que estamos encuarentenados hasta el Osvaldo 34 de NuevoMarzo!!');
     console.log ('Osvaldo es un amigo fiel!')
     }
     if (i % 2 === 0){
    console.log(dias[i] + ' es un día par!'); 
     } 
    //console.log(dias[i]);
    }
}

