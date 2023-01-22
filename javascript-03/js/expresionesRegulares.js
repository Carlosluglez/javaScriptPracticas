window.onload = inicio;
function inicio(){
    document.formulario.onsubmit=validar;
    document.formulario.telefono.onkeypress=solodigito;
    document.formulario.codigo_postal.onkeypress=solodigito;
    document.formulario.codigo_banco.onkeypress=solodigito;
    document.formulario.codigo_oficina.onkeypress=solodigito;
    document.formulario.codigo_control.onkeypress=solodigito;
    document.formulario.numero_cuenta.onkeypress=solodigito;
    document.formulario.numero_trabajadores.onkeypress=solodigito;
    document.formulario.numero_fabricas.onkeypress=solodigito;
}

function validar(){

  
        let val1 =validarRazon();
        let val2 =validarTelefono();
        let val3 =validarCodEmp();

        console.log(val1,val2);
  
    return val1 && val2 && val3;
   
    
}

function solodigito(elevento){

    let evento=elevento||window.event;
    let caracter = String.fromCharCode(evento.charCode);
    let mostrar = true;
    let epdigito = /^\d$/;
    if(!epdigito.test(caracter))
        mostrar=false;
        return mostrar;
}


