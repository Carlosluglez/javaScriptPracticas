window.onload = inicio;
function inicio() {
    // console.log("Validar");
    document.formulario.onsubmit = validar;
    document.formulario.telefono.onkeypress = solodigito;
    document.formulario.codigo_postal.onkeypress = solodigito;
    document.formulario.codigo_banco.onkeypress = solodigito;
    document.formulario.codigo_oficina.onkeypress = solodigito;
    document.formulario.codigo_control.onkeypress = solodigito;
    document.formulario.numero_cuenta.onkeypress = solodigito;
    document.formulario.numero_trabajadores.onkeypress = solodigito;
    document.formulario.numero_fabricas.onkeypress = solodigito;
    document.formulario.codigo_postal.oninput = cambioCodPos;
    //document.formulario.razon.onfocus = cambiarFondoText;
    //document.formulario.codigo_empresa.onclick = cambiarFondoText;
    //document.formulario.razon.onblur = devolverFondoText;
    //document.formulario.codigo_empresa.onblur = devolverFondoText;
    // document.formulario.limpiar.onclick = avisoReset;
    //document.formulario.onreset=avisoReset;
    //document.formulario.onuload=onuload;
}

function validar() {


    let val1 = validarRazon();
    let val2 = validarCodEmp();
    let val3 = validarDni_Cif();
    let val4 = validarDirec();
    let val5 = validarTelefono();
    let val6 = validLocalidad();
    let val7 = validCodPos();
    let val8 = CodBanco_oficina_cuenta();
    let val9 = validarFormatoIBAN();
    let val10 = validarOpction();
    let val11 = botonSelect();
    let val12 = validarSectorEconomico();
    let val13 = numeroTrabajadoresEmpresa();
    let val14 = numeroFabricas();
    let val15 = validProvincia();
    let val16 = codigoControl();
    let val17 = validFecha();
    // 

    return val1 && val2 && val3 && val4 && val5 && val6 && val7
        && val8 && val9 && val10 && val11 && val12 && val13 && val14 && val15 && val16 && val17;
}

//  //---------eventos----------//  
// function cambiarFondoText(elevento) {
//     var evento = elevento || window.event;
//     //evento.value = "";
//     evento.target.style.backgroundColor = "blue";
//     evento.target.style.color = "white";
// }

// function devolverFondoText(elevento) {
//     var evento = elevento || window.event;
//     // evento.value=""; no se se incluye esta sentencia si no se muestra todo el input en blanco
//     evento.target.style.backgroundColor = "white";
//     evento.target.style.color = "black";

// }

function solodigito(elevento) {
    let evento = elevento || window.event;
    let caracter = String.fromCharCode(evento.charCode);
    // alert(caracter);
    let mostrar = true;
    let epdigito = /^\d$/;
    if (!epdigito.test(caracter))
        mostrar = false;
    return mostrar;
}

// function limpiarCuadrosError() {
//     let todos = document.formulario.elements;
//     for (let i = 0; i < todos.length; i++) {
//         if (todos[i].type == 'text') {
//             console.log(todos[i].name.pdstart("er"))
//             todos.style.visibility = "hidden";
//         }
//     }

// }

// function avisoReset() {

//     if (!window.confirm('se limpiaran todos lo elementos')) {

//         return false;
//     }
// }

//-------------------------------expresiones regulares--------------------------------//
// ----validar razon social val1---//
function validarRazon() {

    let cadena_errores = "";

    let regExp = /^[a-zA-ZñÑáéíóúÁÉÚÍÚ][A-Za-z0-9ªº\-.ÁÉÚÍÚñÑáéíóú ]*[a-zA-ZñÑáéíóúÁÉÚÍÚ0-9.]$/i;
    let val1 = true;
    let raul = new RegExp("^[a-zA-ZñÑáéíóúÁÉÚÍÚ][A-Za-z0-9ªº\\-.ÁÉÚÍÚñÑáéíóú ]*[a-zA-ZñÑáéíóúÁÉÚÍÚ0-9.]$", "i");

    if (!raul.test(document.formulario.razon.value)) {
        val1 = false;
        cadena_errores += "[!]ERROR,Error el primer caracter es incorreecto,[!]";
        document.formulario.error_razon.value = cadena_errores;
        document.formulario.error_razon.style.visibility = "visible";
        document.formulario.error_razon.style.visibility = "1px solid black";
    } else {
        document.formulario.error_razon.style.visibility = "hidden";

    }
    return val1;
}
//---------------validar codigo empresa val2------------//
function validarCodEmp() {
    let botonBien = true;
    let cadena_errores = "";
    let regex = /^[\da-zA-ZáéíóúÁÉÍÓÚñÑ]{5,10}$/;

    if (!regex.test(document.formulario.codigo_empresa.value)) {
        cadena_errores = "[!]ERROR,El Código de la empresa va a contener letras y dígitos y va a tener un número de caracteres comprendidos entre 5 y 10[!]";
        document.formulario.error_codigo.value = cadena_errores;
        document.formulario.error_codigo.style.visibility = "visible";
        //  document.formulario.error_codigo.style.visibility = "1px solid black";
        botonBien = false;
    } else {
        document.formulario.error_codigo.style.visibility = "hidden";
    }
    return botonBien;
}
//--------------validar cif/Nif  val3--------------------------//

function validarDni_Cif() {

    let nif_cif = document.formulario.cif_nif.value.toUpperCase().trim();
    //alert(nif);
    let validacionNif = nif_Cif(nif_cif);

    return validacionNif;
}

//---------------validar dirección  val4------------------------//
function validarDirec() {
    let cadena_errores = "";
    let botonBien = true;
    let regex = /^[a-záéíóúüñ]{1}[a-záéíóúüñ0-9ªº\-\/\.]{1,}[a-záéíóúüñ0-9]$/i;
    if (!regex.test(document.formulario.direccion.value)) {
        cadena_errores = "[!]ERROR,La dirección debe comenzar por letra y terminar en letra o numero , y en medio puede contener digitos ,letras y los siguientes caracteres: “ª”, “º”,“-“, “/” “.”[!]";
        document.formulario.error_direccion.value = cadena_errores;
        document.formulario.error_direccion.style.visibility = "visible";
        //  document.formulario.error_direccion.style.border="1px solid black";

        botonBien = false;
    } else {

        document.formulario.error_direccion.style.visibility = "hidden";

    }

    return botonBien;

}
//----------------validar telefono  val5-------- //
function validarTelefono() {
    let botonBien = true;
    let cadena_errores = "";
    let regEx = /^[6789]\d{8}/;
    if (!regEx.test(document.formulario.telefono.value)) {
        cadena_errores = "[!]ERROR,Error, el número de telefono es incorrecto[!]";
        document.formulario.error_telefono.value = cadena_errores;
        document.formulario.error_telefono.style.visibility = "visible";
        // document.formulario.error_telefono.style.border = "1px solid black";
        botonBien = false;
    } else {
        document.formulario.error_telefono.style.visibility = "hidden";
    }
    return botonBien;

}

//---------------validar localidad   val6--------------------------------//

function validLocalidad() {
    let cadena_errores = "";
    let botonBien = true
    let regex = /^[a-záéíóúüñ]{1}[a-záéíóúüñ ]{1,}[a-záéíóúüñ]$/i;
    if (!regex.test(document.formulario.codigo.value.trim())) {

        cadena_errores = "[!]ERROR,La localidad debe empezar por letra y terminar por letra y en medio contentendra letras y espacios[!]";
        document.formulario.error6.value = cadena_errores;
        document.formulario.error6.style.visibility = "visible";
        // document.formulario.error6.style.border="1px solid black";
        botonBien = false;
    } else {
        document.formulario.error6.style.visibility = "hidden";
    }
    return botonBien;
}
//--------------validar CP val7-----------//
function validCodPos() {
    let cadena_errores = "";
    let botonBien = true;
    let regex = /^((0?[1-9])|([1-4]\d)|(5[0-2]))\d{3}$/;
    if (!regex.test(document.formulario.codigo_postal.value)) {
        cadena_errores = "[!]ERROR,El codigo postal debe  ser entre 1000 y 52999[!]";
        document.formulario.error7.value = cadena_errores;
        document.formulario.error7.style.visibility = "visible";
        //document.formulario.error7.style.border="1px solid black";

        botonBien = false;
    } else {

        document.formulario.error7.style.visibility = "hidden";

    }

    return botonBien;
}



//----------------validarProvincia val15------------------//

function validProvincia() {
    let cadena_errores = "";
    let botonBien = true
    let regex = /^[a-záéíóúüñ]{1}[a-záéíóúüñ ]{1,}[a-záéíóúüñ]$/i;
    if (!regex.test(document.formulario.provincia.value.trim())) {
        cadena_errores = "[!]ERROR,La provincia debe empezar por letra y terminar por letra y en medio contentendra letras y espacios[!]";
        document.formulario.error_provincia.value = cadena_errores;
        document.formulario.error_provincia.style.visibility = "visible";
        // document.formulario.error_provincia.style.border="1px solid black";
        botonBien = false;

    } else {
        document.formulario.error_provincia.style.visibility = "hidden";
    }

    return botonBien;
}

//----------validar codigo control y codigo oficina val8------//
function CodBanco_oficina_cuenta() {
    let regex = /\d{4}$/;
    let regexCuenta = /\d{10}$/;
    let botonBien = true;
    let cadena_errores = "";

    if (!regex.test(document.formulario.codigo_banco.value)) {
        botonBien = false;
        cadena_errores += "[!]ERROR,El codigo banco debe de ser de 4 dígitos[!]\n ";
        document.formulario.error_codigo_banco.value = cadena_errores;
        document.formulario.error_codigo_banco.style.visibility = "visible";
        // document.formulario.error_codigo_banco.style.border= "1px solid black";
    } else {
        document.formulario.error_codigo_banco.style.visibility = "hidden";
    }
    if (!regex.test(document.formulario.codigo_oficina.value)) {
        botonBien = false;
        cadena_errores += "[!]ERROR,El codigo de oficina debe de ser de 4 dígitos[!]\n ";
        document.formulario.error_codigo_oficina.value = cadena_errores;
        document.formulario.error_codigo_oficina.style.visibility = "visible";
        //  document.formulario.error_codigo_oficina.style.border= "1px solid black";
    } else {
        document.formulario.error_codigo_oficina.style.visibility = "hidden";
    }
    if (!regexCuenta.test(document.formulario.numero_cuenta.value)) {
        botonBien = false;
        cadena_errores += "[!]ERROR,El número de cuenta debe de ser de 10 dígitos[!]\n ";
        document.formulario.error_numero_cuenta.value = cadena_errores;
        document.formulario.error_numero_cuenta.style.visibility = "visible";
        // document.formulario.error_numero_cuenta.style.border= "1px solid black";
    } else {
        document.formulario.error_numero_cuenta.style.visibility = "hidden";
    }


    return botonBien;
}
//-------------comprobar codigo control val15//
function codigoControl() {
    let botonBien = true;
    cadena_errores = ""
    let regEx = /\d{2}$/;
    cod = "" + calcularCodigoControl();
    if (!regEx.test(document.formulario.codigo_control.value)) {
        botonBien = false;
        cadena_errores += "[!]ERROR,El codigo de control debe de ser de 2 dígitos[!]\n ";
        document.formulario.error_codigo_control.value = cadena_errores;
        document.formulario.error_codigo_control.style.visibility = "visible";
        // document.formulario.error_codigo_control.style.border= "1px solid black";
    } else {
        document.formulario.error_codigo_control.style.visibility = "hidden";
    }
    if (document.formulario.codigo_control.value != cod) {
        botonBien = false;
        cadena_errores += "[!]ERROR,El codigo de control es incorrecto[!]\n ";
        document.formulario.error_codigo_control.value = cadena_errores;
        document.formulario.error_codigo_control.style.visibility = "visible";
        // document.formulario.error_codigo_control.style.border= "1px solid black";
    } else {
        document.formulario.error_codigo_control.style.visibility = "hidden";
    }

    return botonBien;
}

// ---------------Comprobar IBAN val9------------------------
function validarFormatoIBAN() {

    let botonBien = true;
    let cadena_errores = "";
    regex = /^[A-Z]{2}\d{2}[0-9A-Z]+$/;
    if (!regex.test(document.formulario.iban.value.toUpperCase().trim())) {
        botonBien = false;
        cadena_errores = "[!]ERROR, el formato del iban introducido es incorrecto[!]";
        document.formulario.error_IBAN.value = cadena_errores;
        document.formulario.error_IBAN.style.visibility = "visible";
        //   document.formulario.error_IBAN.style.border = "1px solid black";
    } else if (comprobar_IBAN(document.formulario.iban.value)) {
        document.formulario.error_IBAN.style.visibility = "hidden";
    } else {
        botonBien = false;
        cadena_errores = "[!]ERROR, el iban no esta bien calculado[!]";
        document.formulario.error_IBAN.value = cadena_errores;
        document.formulario.error_IBAN.style.visibility = "visible";
        //  document.formulario.error_IBAN.style.border = "1px solid black";
    }
    return botonBien;

}
//--------------comprobar numero trabajadores val13--------------------//
function numeroTrabajadoresEmpresa() {
    //let regexSimple=/(4[5-9]|[5-9]\d|[1-9]\d{2,5})/;
    let regExp = /^(0{0,4}4[5-9]$)|(^0{0,4}[5-9]\d$)|(^0{0,3}[1-9]\d{2,5}$)/;
    let botonBien = true;
    let cadena_errores = "";
    if (!regExp.test(document.formulario.numero_trabajadores.value)) {
        botonBien = false;
        cadena_errores = "[!]ERROR,el número de trabajadores debe de estar entre 45 y 999999[!]";
        document.formulario.error_trabajadores.value = cadena_errores;
        document.formulario.error_trabajadores.style.visibility = "visible";
        // document.formulario.error_trabajadores.style.border = "1px solid black";

    } else {
        document.formulario.error_trabajadores.style.visibility = "hidden";
    }
    return botonBien;
}

// ---------------comprobar numero fabricas val14 --------------------//

function numeroFabricas() {

    let regExp = /^(0?0?0?[2-9]|0?0?[1-9]\d|0?[1-9]\d\d|[1-9]\d\d\d)$/;
    let botonBien = true;
    let cadena_errores = "";
    if (!regExp.test(document.formulario.numero_fabricas.value)) {
        botonBien = false;
        cadena_errores = "[!]ERROR,el número de fabricas debe de estar entre 2 y 9999[!]";
        document.formulario.error_fabricas.value = cadena_errores;
        document.formulario.error_fabricas.style.visibility = "visible";
        //   document.formulario.error_fabricas.style.border = "1px solid black";

    } else {
        document.formulario.error_fabricas.style.visibility = "hidden";
    }
    return botonBien;
}


//-------------valida fecha val17--------------//

function validFecha() {
    let cadena_errores = "";
    //let regex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))(\/|-|\.)|(?:(?:29|30(\/|-|\.)(?:0?[13-9]|1[0-2])(\/|-|\.))))(?:\d{4})$|^(?:29(\/|-|\.)0?2(\/|-|\.)(?:(?:(?:[1-9]?\d)?\d{2})?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:0?[1-9]|1[0-2])(\/|-|\.)(?:\d{4})$/;
    //let regex = /^((31(\/|-|\.)(0?[13578]|1[02]))(\/|-|\.)|((29|30(\/|-|\.)(0?[13-9]|1[0-2])(\/|-|\.))))(\d{4})$|^(29(\/|-|\.)0?2(\/|-|\.)((([1-9]?\d)?\d{2})?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)))$|^(0?[1-9]|1\d|2[0-8])(\/|-|\.)(0?[1-9]|1[0-2])(\/|-|\.)(\d{4})$/;
    let regex = /^((31(\/|-|\.)(0?[13578]|1[02]))(\/|-|\.)|((29|30(\/|-|\.)(0?[13-9]|1[0-2])(\/|-|\.))))(\d{4})$|^(29(\/|-|\.)0?2(\/|-|\.)((\d{2})(0[48]|[2468][048]|[13579][26])|(0[48]00)|(([2468][048]|[13579][26])00)))$|^(0?[1-9]|1\d|2[0-8])(\/|-|\.)(0?[1-9]|1[0-2])(\/|-|\.)(\d{4})$/
    if (!regex.test(document.formulario.fecha.value)) {
        cadena_errores = "[!]ERROR,La fecha no es correcta[!]";
        document.formulario.error_date.value = cadena_errores;
        document.formulario.error_date.style.visibility = "visible";
        //document.formulario.error_date.style.border="1px solid black";
        return false;
    } else {
        //cadena_errores = "";
        //document.formulario.date_error.value =cadena_errores;
        document.formulario.error_date.style.visibility = "hidden";
        return true;
    }
}


function cambioCodPos() {

    let cadena_errores = validCodPos();
    if (validCodPos().length > 0) {
        console.log("no es valido");
        return cadena_errores += "El CP puede tener valores comprendidos entre 1000 y 52999\n";

    } else {
        let codigoPostal = document.formulario.codigo_postal.value;
        let initial;
        if (codigoPostal.length == 4) {
            initial = parseInt(codigoPostal.substring(0, 1) - 1);
        } else {
            initial = parseInt(codigoPostal.substring(0, 2) - 1);
        }
        let provincias = ['Alava', 'Albacete', 'Alicante', 'Almería', 'Avila', 'Badajoz', 'Islas Baleares', 'Barcelona', 'Burgos', 'Cáceres',
            'Cádiz', 'Castellón', 'Ciudad Real', 'Córdoba', 'La Coruña', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara',
            'Guipúzcoa', 'Huelva', 'Huesca', 'Jaén', 'León', 'Lérida', 'La Rioja', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra',
            'Orense', 'Asturias', 'Palencia', 'Las Palmas', 'Pontevedra', 'Salamanca', 'Santa Cruz de Tenerife', 'Cantabria', 'Segovia', 'Sevilla', 'Soria', 'Tarragona',
            'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza', 'Ceuta', 'Melilla'];

        document.formulario.provincia.value = provincias[initial];
        //console.log(" es valido");   
    }

}