window.onload = main;

function main() {
    document.formulario.submit.onclick = validar;
}
function validar() {
    let localidad = document.formulario.localidad.value;
    document.formulario.mensaje.value = validarLocalidad(localidad) ? "Localidad válida" : "Localidad inválida";
}

function validarLocalidad(localidad) {
    return validarLongitud(localidad) && validarPrimerasLetras(localidad) && validarCaracteres(localidad) && validarUltimasLetras(localidad);
}
//validamos la longitud entre 7 y 35 
function validarLongitud(localidad) {
    let valido = true;
    if (!(localidad.length > 7 && localidad.length < 35)) {
        console.log(localidad);
        valido = false;
    }
    console.log("la longitud de localidad es " + valido);
    return valido;
}

//validamos que los tres primeros caracteres sean letras
function validarPrimerasLetras(localidad) {
    let primerLetras = localidad.substring(0, 3); //coge los primeros tres caracteres de la localidad
    console.log(primerLetras);
    let valido = true;
    if (!(isLetra(primerLetras))) {
        valido = false;
    }
    console.log("las primeras letras son " + valido);
    return valido;

}


//validamos que a continuación sea letras y  espacios y que no sean numeros
function validarCaracteres(localidad) {
    let restoLetras = localidad.substring(3,localidad.length-2);
    let valido = true;
    console.log(restoLetras);
    if (!(isLetra(restoLetras))) {
        valido = false;
    }
    console.log("el resto de caracteres son " + valido);
    return valido;
    
}

//validamos que termine por dos letras
function validarUltimasLetras(localidad) {
    let ultimasLetras = localidad.substring(localidad.length - 2);
    let valido = true;
    console.log(ultimasLetras);
    if (!(isLetra(ultimasLetras))) {
        valido = false;
    }
    console.log("las ultimas letras son " + valido);
    return valido;
}


//funcion sustituta para validar letra
function isLetra(str) {  
    const letras="abcdefghijklmnñopqrstuvwxyzáéíóúü ";
    str = str.toLowerCase();
    for(let i=0;i< str.length;i++){
        if(!(letras.includes(str[i]))){
            return false;
        }
    }
    return true;       
}


/*
}*/