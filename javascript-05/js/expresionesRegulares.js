if (document.addEventListener)
    window.addEventListener("load", inicio)
else if (document.attachEvent)
    window.attachEvent("onload", inicio);

function inicio() {
    //document.formulario.onsubmit = validar;  
    if (document.addEventListener){
    document.querySelector('[name="formulario"]').addEventListener("submit", validar);
    document.querySelector('[name="codigo_postal"]').addEventListener("input",cambioCodPos);}    
    else if (document.attachEvent){

    document.querySelector('[name="formulario"]').attachEvent("onsubmit", validar);
    document.querySelector('[name="codigo_postal"]').attachEvent("oninput",cambioCodPos);} 
   
    //document.formulario.codigo_postal.oninput = cambioCodPos;

    seleccionarListaParaSoloDigitos(document.getElementsByClassName("soloDigito"));
    
}



function validar(event) {


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
    let val11 = validarTipoEmpresaTipoPersona();
    let val12 = validarSectorEconomico();
    let val13 = numeroTrabajadoresEmpresa();
    let val14 = numeroFabricas();
    let val15 = validProvincia();
    let val16 = codigoControl();
    let val17 = validFecha();
    

    if(!( val1 && val2 && val3 && val4 && val5 && val6 && val7
        && val8 && val9 && val10 && val11 && val12 && val13 && val14 && val15 && val16 && val17)){

            event.preventDefault();//no te comportes normal y si todo es true envia
        }
}

//  //---------eventos----------//  

function seleccionarListaParaSoloDigitos(lista){
   
    for(let element of lista){
        element.onkeypress=solodigito;
    } 

}
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



//-------------------------------expresiones regulares--------------------------------//
// ----validar razon social val1---//
function validarRazon() {

    let cadena_errores = "";
    let val1 = true;
    let raul = new RegExp("^[a-zA-ZñÑáéíóúÁÉÚÍÚ][A-Za-z0-9ªº\\-.ÁÉÚÍÚñÑáéíóú ]*[a-zA-ZñÑáéíóúÁÉÚÍÚ0-9.]$", "i");

    if (!raul.test(document.getElementById("razon").value)) {
        val1 = false;
        cadena_errores += "[!]ERROR,Error el primer caracter es incorreecto,[!]";
        document.getElementById("error_razon").value = cadena_errores;
        document.getElementById("error_razon").style.visibility = "visible";      
    } else {
        document.getElementById("error_razon").style.visibility = "hidden";

    }
    return val1;
}
//---------------validar codigo empresa val2------------//
function validarCodEmp() {
    let botonBien = true;
    let cadena_errores = "";
    let regex = /^[\da-zA-ZáéíóúÁÉÍÓÚñÑ]{5,10}$/;

    if (!regex.test(document.getElementById("codigo_empresa").value)) {
        cadena_errores = "[!]ERROR,El Código de la empresa va a contener letras y dígitos y va a tener un número de caracteres comprendidos entre 5 y 10[!]";
        document.getElementById("error_codigo").value = cadena_errores;
        document.getElementById("error_codigo").style.visibility = "visible";
       
        botonBien = false;
    } else {
        document.getElementById("error_codigo").style.visibility = "hidden";
    }
    return botonBien;
}
//--------------validar cif/Nif  val3--------------------------//

function validarDni_Cif() {

    let nif_cif = document.getElementById("cif_nif").value.toUpperCase().trim();
    //alert(nif);
    let validacionNif = nif_Cif(nif_cif);

    return validacionNif;
}

//---------------validar dirección  val4------------------------//
function validarDirec() {
    let cadena_errores = "";
    let botonBien = true;
    let regex = /^[a-záéíóúüñ]{1}[a-záéíóúüñ0-9ªº\-\/\.]{1,}[a-záéíóúüñ0-9]$/i;

    if (!regex.test(document.querySelector('input[name="direccion"]').value)) {
        cadena_errores = "[!]ERROR,La dirección debe comenzar por letra y terminar en letra o numero , y en medio puede contener digitos ,letras y los siguientes caracteres: “ª”, “º”,“-“, “/” “.”[!]";
        document.getElementById("error_direccion").value = cadena_errores;
        document.getElementById("error_direccion").style.visibility = "visible";
        //  document.formulario.error_direccion.style.border="1px solid black";

        botonBien = false;
    } else {

        document.getElementById("error_direccion").style.visibility = "hidden";

    }

    return botonBien;

}
//----------------validar telefono  val5-------- //
function validarTelefono() {
    let botonBien = true;
    let cadena_errores = "";
    let cajaError_telefono=document.querySelector('input[name="error_telefono"]');
    let regEx = /^[6789]\d{8}/;

    if (!regEx.test(document.querySelector('input[name="telefono"]').value)) {
        cadena_errores = "[!]ERROR,Error, el número de telefono es incorrecto[!]";
        cajaError_telefono.value = cadena_errores;
        cajaError_telefono.style.visibility = "visible";
        // document.formulario.error_telefono.style.border = "1px solid black";
        botonBien = false;
    } else {
        cajaError_telefono.style.visibility = "hidden";
    }
    return botonBien;

}

//---------------validar localidad   val6--------------------------------//

function validLocalidad() {
    let cadena_errores = "";
    let botonBien = true
    let regex = /^[a-záéíóúüñ]{1}[a-záéíóúüñ ]{1,}[a-záéíóúüñ]$/i;
    let cajaError_localidad=document.querySelector('input[name="error_localidad"]');

    if (!regex.test(document.querySelector('input[name="localidad"]').value.trim())) {
        cadena_errores = "[!]ERROR,La localidad debe empezar por letra y terminar por letra y en medio contentendra letras y espacios[!]";
        cajaError_localidad.value = cadena_errores;
        cajaError_localidad.style.visibility = "visible";
       
        botonBien = false;
    } else {
        cajaError_localidad.style.visibility = "hidden";
    }
    return botonBien;
}
//--------------validar CP val7-----------//
function validCodPos() {
    let cadena_errores = "";
    let botonBien = true;
    let error_codigoPostal=document.querySelector('[name="error7"]');

    let regex = /^((0?[1-9])|([1-4]\d)|(5[0-2]))\d{3}$/;

    if (!regex.test(document.querySelector('[name="codigo_postal"]').value)) {
       
        cadena_errores = "[!]ERROR,El codigo postal debe  ser entre 1000 y 52999[!]";
        error_codigoPostal.value = cadena_errores;
        error_codigoPostal.style.visibility = "visible";
        botonBien = false;
    } else {
        error_codigoPostal.style.visibility = "hidden";
       
    }

    return botonBien;
}



//----------------validarProvincia val15------------------//

function validProvincia() {
    let cadena_errores = "";
    let botonBien = true
    let regex = /^[a-záéíóúüñ]{1}[a-záéíóúüñ ]{1,}[a-záéíóúüñ]$/i;
    let error_provincia=document.querySelector('[name="error_provincia"]');

    if (!regex.test(document.querySelector('[name="provincia"]').value.trim())) {
        cadena_errores = "[!]ERROR,La provincia debe empezar por letra y terminar por letra y en medio contentendra letras y espacios[!]";
        error_provincia.value = cadena_errores;
        error_provincia.style.visibility = "visible";
        botonBien = false;

    } else {
        error_provincia.style.visibility = "hidden";
    }

    return botonBien;
}

//----------validar codigo control y codigo oficina val8------//
function CodBanco_oficina_cuenta() {
    let regex = /\d{4}$/;
    let regexCuenta = /\d{10}$/;
    let botonBien = true;
    let cadena_errores = "";
    let error_codigo_banco=document.querySelector('[name="error_codigo_banco"]');
    let error_codigo_oficina=document.querySelector('[name="error_codigo_oficina"]');
    let error_numero_cuenta=document.querySelector('[name="error_numero_cuenta"]');

    if (!regex.test(document.querySelector('[name="codigo_banco"]').value)) {
        botonBien = false;
        cadena_errores += "[!]ERROR,El codigo banco debe de ser de 4 dígitos[!]\n ";
        error_codigo_banco.value = cadena_errores;
        error_codigo_banco.style.visibility = "visible";
       
    } else {
        error_codigo_banco.style.visibility = "hidden";
    }
    if (!regex.test(document.querySelector('[name="codigo_oficina"]').value)) {
        botonBien = false;
        cadena_errores += "[!]ERROR,El codigo de oficina debe de ser de 4 dígitos[!]\n ";
        error_codigo_oficina.value = cadena_errores;
        error_codigo_oficina.style.visibility = "visible";
        //  document.formulario.error_codigo_oficina.style.border= "1px solid black";
    } else {
        error_codigo_oficina.style.visibility = "hidden";
    }
    if (!regexCuenta.test(document.querySelector('[name="numero_cuenta"]').value)) {
        botonBien = false;
        cadena_errores += "[!]ERROR,El número de cuenta debe de ser de 10 dígitos[!]\n ";
        error_numero_cuenta.value = cadena_errores;
        error_numero_cuenta.style.visibility = "visible";
        // document.formulario.error_numero_cuenta.style.border= "1px solid black";
    } else {
        error_numero_cuenta.style.visibility = "hidden";
    }


    return botonBien;
}
//-------------comprobar codigo control val15//
function codigoControl() {
    let botonBien = true;
    cadena_errores = ""
    let regEx = /\d{2}$/;
    cod = "" + calcularCodigoControl();
    if (!regEx.test(document.querySelector('[name="codigo_control"]').value)) {
        botonBien = false;
        cadena_errores += "[!]ERROR,El codigo de control debe de ser de 2 dígitos[!]\n ";
        document.querySelector('[name="error_codigo_control"]').value = cadena_errores;
        document.querySelector('[name="error_codigo_control"]').style.visibility = "visible";
        // document.formulario.error_codigo_control.style.border= "1px solid black";
    } else {
        document.querySelector('[name="error_codigo_control"]').style.visibility = "hidden";
    }
    if (document.querySelector('[name="codigo_control"]').value != cod) {
        botonBien = false;
        cadena_errores += "[!]ERROR,El codigo de control es incorrecto[!]\n ";
        document.querySelector('[name="error_codigo_control"]').value = cadena_errores;
        document.querySelector('[name="error_codigo_control"]').style.visibility = "visible";
        // document.formulario.error_codigo_control.style.border= "1px solid black";
    } else {
         document.querySelector('[name="error_codigo_control"]').style.visibility = "hidden";
    }

    return botonBien;
}

// ---------------Comprobar IBAN val9------------------------
function validarFormatoIBAN() {

    let botonBien = true;
    let cadena_errores = "";
    regex = /^[A-Z]{2}\d{2}[0-9A-Z]+$/;
    if (!regex.test(document.querySelector('[name="iban"]').value.toUpperCase().trim())) {
        botonBien = false;
        cadena_errores = "[!]ERROR, el formato del iban introducido es incorrecto[!]";
        document.querySelector('[name="error_IBAN"]').value = cadena_errores;
        document.querySelector('[name="error_IBAN"]').style.visibility = "visible";
       
    } else if (comprobar_IBAN(document.formulario.iban.value)) {
        document.querySelector('[name="error_IBAN"]').style.visibility = "hidden";
    } else {
        botonBien = false;
        cadena_errores = "[!]ERROR, el iban no esta bien calculado[!]";
        document.querySelector('[name="error_IBAN"]').value = cadena_errores;
        document.querySelector('[name="error_IBAN"]').style.visibility = "visible";
       
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
    if (!regExp.test(document.querySelector('[name="numero_fabricas"]').value)) {
        botonBien = false;
        cadena_errores = "[!]ERROR,el número de fabricas debe de estar entre 2 y 9999[!]";
        document.querySelector('[name="error_fabricas"]').value = cadena_errores;
        document.querySelector('[name="error_fabricas"]').style.visibility = "visible";
        //   document.formulario.error_fabricas.style.border = "1px solid black";

    } else {
        document.querySelector('[name="error_fabricas"]').style.visibility = "hidden";
    }
    return botonBien;
}


//-------------valida fecha val17--------------//

function validFecha() {
    let cadena_errores = "";
    let regex = /^((31(\/|-|\.)(0?[13578]|1[02]))(\/|-|\.)|((29|30(\/|-|\.)(0?[13-9]|1[0-2])(\/|-|\.))))(\d{4})$|^(29(\/|-|\.)0?2(\/|-|\.)((\d{2})(0[48]|[2468][048]|[13579][26])|(0[48]00)|(([2468][048]|[13579][26])00)))$|^(0?[1-9]|1\d|2[0-8])(\/|-|\.)(0?[1-9]|1[0-2])(\/|-|\.)(\d{4})$/
    if (!regex.test( document.querySelector('[name="fecha"]').value)) {
        cadena_errores = "[!]ERROR,La fecha no es correcta[!]";
        document.querySelector('[name="error_date"]').value = cadena_errores;
        document.querySelector('[name="error_date"]').style.visibility = "visible";
        ;
        return false;
    } else {
        document.querySelector('[name="error_date"]').style.visibility = "hidden";
        return true;
    }
}


function cambioCodPos() {

    let cadena_errores = validCodPos();
    if (validCodPos().length > 0) {
        console.log("no es valido");
        return cadena_errores += "El CP puede tener valores comprendidos entre 1000 y 52999 \n";

    } else {
        let codigoPostal = document.querySelector('[name="codigo_postal"]').value;
        let initial= 52;

        if (codigoPostal.length === 4) {
            initial = parseInt(codigoPostal.substring(0, 1) - 1);
        } else if(codigoPostal.length === 5) {
            initial = parseInt(codigoPostal.substring(0, 2) - 1);
        }
        let provincias = ['Alava', 'Albacete', 'Alicante', 'Almería', 'Avila', 'Badajoz', 'Islas Baleares', 'Barcelona', 'Burgos', 'Cáceres',
            'Cádiz', 'Castellón', 'Ciudad Real', 'Córdoba', 'La Coruña', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara',
            'Guipúzcoa', 'Huelva', 'Huesca', 'Jaén', 'León', 'Lérida', 'La Rioja', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra',
            'Orense', 'Asturias', 'Palencia', 'Las Palmas', 'Pontevedra', 'Salamanca', 'Santa Cruz de Tenerife', 'Cantabria', 'Segovia', 'Sevilla', 'Soria', 'Tarragona',
            'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza', 'Ceuta', 'Melilla',"no existe"];

            document.querySelector('[name="provincia"]').value = provincias[initial];
        //console.log(" es valido");   
    }

}