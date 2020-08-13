var tipo = ['Desktop', 'notebook'];

function compu(marca, tipo, serial){
this.marca = marca;
this.tipo = tipo;
this.serial = serial;

this.getDatosPC = function () {
    mensaje = 'Tu compu es una ' + this.marca + '. Es una ' + this.tipo + '.';
    alert (mensaje);
}

this.getDatosTipo = function () {
    tipoLength = this.tipo.length;
    let listado = '';
    for (var i = 0; i <tipoLength[i]; i++){
        listado += this.tipo[i] + '\n';
    }
    console.info(listado);
}
}

var miCompu = new compu ('Mac', 'notebook', 215678165015);
