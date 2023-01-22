window.onload = inicio;

function inicio() {
    document.form.button.onclick = comprobar;
}


function comprobar() {
    var nombre = document.form.nombre.value;
    let caracteresPermitidos = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z", "º", "ª", "-"];
    // let caracteresProhibidos = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "_", ".", "@", "\",", "/"];
    //crear un bucle para comprobar si la longitud está comprendida entre 3 y 6
    //y, para averiguar si el primer y último carácter son números.
    //Si alguna de estas condiciones falla, el programa termina y da error.
    // Entre el primer y el último carácter va a poder tener letras o cualquiera
    // de los siguientes caracteres: “º”, “ª”, “-“ o el espacio.
    if (nombre.length < 3 || nombre.length > 6 || !isNaN(nombre.substring(0, 1)) || !isNaN(nombre.charAt(nombre.length - 1))) {
        document.form.mensaje.value = false;

    } else {
        // document.form.mensaje .value = true;
        for (let i = 1; i < nombre.length - 1; i++) {
            if (!isNaN(nombre[i])) {
                document.form.mensaje.value = false;
            } else {
                for (let j = 0; j < caracteresPermitidos.length; j++) {
                    if (!nombre[i].includes(caracteresPermitidos[j])) {
                        document.form.mensaje.value = false;    //no se como hacerlo
                    }
                }
            }
        }
        document.form.mensaje.value = true;

    }
}

// if(nombre.includes("-",1)){
//     document.form.mensaje.value = true;
//   }else{
//     document.form.mensaje .value = false;
//   }


let nombre = nombre.trim().toLowerCase();
let correcto = true;
let tipoFallo = 0;
let todosFallos = [];

if (nombre.length < 3 || nombre.length > 10) {
    correcto = false;
    tipoFallo = 1;

} else {
    let consonantes = "bcdfghjklmnñpqrstvwyz";
    if (!consonantes.includes(nombre.charAt(0))) {
        correcto = false;
        tipoFallo = 2;
    } else {
        let adicionlaes = "áéíóúüñ";
        let caracter = nombre.charAt(nombre.length - 1);
        if ((caracter < "a" || caracter > "z") && !adicionlaes.includes(caracter)) {
            correcto = false;
            tipoFallo = 3;
        } else {
            let posicion = 1;
            let mascar = "$&/";
            while (correcto && posicion < nombre.length - 2) {
                caracter = nombre.charAt(posicion);
                if ((caracter < "a" || caracter > "z") && (caracter < "0" || caracter > "9") && (!adicionlaes.includes(caracter)) && !mascar.includes(caracter)) {
                    correcto = false;
                    tipoFallo = 4;
                }
                posicion++;

            }
        }
    }
}