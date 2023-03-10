//--------------validar cif/Nif  val3--------------------------//
function esNif(cadenaNif) {

    

    if (cadenaNif.length != 9) {
        console.log("Se ha introducido un dato no válido. No es NIF ni un DNI");
        return 0;

    }

    if (cadenaNif.substr(-1) < "A" || !cadenaNif.substr(-1) > "Z") {
        console.log("Se ha introducido un dato no válido. No es NIF ni un DNI");
        return 0;
    }

    if (!cadenaNif.charAt(0) == 'X' && !cadenaNif.charAt(0) == 'Y' && !cadenaNif.charAt(0) == 'Z'
        || !cadenaNif.charAt(0) == 'L' && !cadenaNif.charAt(0) == 'K' && !cadenaNif.charAt(0) == 'M' && isNaN(cadenaNif.charAt(0))) {
        console.log(" Se ha introducido un dato no válido. No es NIF ni un DNI");
        return 0;

    }

    calculoCaracterControl = cadenaNif.substr(0, 8);
    let cambio = "";
    if (calculoCaracterControl.charAt(0) == "Y") {
        cambio = calculoCaracterControl.replace("Y", "1");
        console.log(cambio);
    }
    else if (calculoCaracterControl.charAt(0) == "Z") {
        cambio = calculoCaracterControl.replace("Z", "2");
        console.log(cambio);
    } else if (calculoCaracterControl.charAt(0) == "X" || calculoCaracterControl.charAt(0) == 'K' ||
        calculoCaracterControl.charAt(0) == "L" || calculoCaracterControl.charAt(0) == "M") {
        let primeraLetra = calculoCaracterControl.charAt(0);
        cambio = calculoCaracterControl.replace(primeraLetra, "0");
        console.log(cambio);
    } else {
        cambio = calculoCaracterControl;

    }
    let arr = new Array();
    arr = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    let posicion = 0;
    posicion = parseInt(cambio) % 23;
    console.log(posicion);

    if (cadenaNif.substr(-1) != arr[posicion]) {
        console.log("el nif no es correcto, el caracter de control es erroneo");
        return 2;

    }

    if (!cambio >= 100000) {
        console.log("Se ha introducido un DNI, se ha pasado un número de entre 6 y 8 dígitos con un valor mínimo de 100000.");
        return 3;
    }
   
    return 1;
}
function esCif(cadenaCif) {

   
    let sumaPares = 0;
    let sumaImpares = 0;
    let formato1 = "ABCDEFGHJUV";
    let formato2 = "PQRSW";
    if (cadenaCif.length != 9) {
        //controlamos que no sea distinto de 9
        return 0;//dato no valido o no es cif
    }
    for (let i = 1; i < 8; i++) {
        if (isNaN(cadenaCif[i])) {
            //controlamos que no sea numero
            return 0; //dato no valido o no es cif
        }
        if (i % 2 == 1) {
            //al introducir una cadena, es nesario realizar parseInt para las operaciones
            let num = parseInt(cadenaCif[i]) * 2;
            if (num > 9) {
                //el num%10 me va a dar el primer digito
                //el ultimo numero siempre sera 1
                sumaImpares += 1 + num % 10;
            } else {
                sumaImpares += num;
            }
        } else {
            sumaPares += parseInt(cadenaCif[i]);
        }
    }
    //calculamos el resultado final realizando la suma de pares e impares, el modulo del mismo y restamos 10
    let resultado = 10 - ((sumaImpares + sumaPares) % 10);
    if (resultado == 10) {
        resultado = 0;
    }
    //segun el formato que sea modificamos la ultima letra de la cadena o bien segun el resultado será una letra 
    if (formato1.includes(cadenaCif[0])) {
        if (resultado == cadenaCif[8]) {
            return 1; //cif correcto
        }
    }
    if (formato2.includes(cadenaCif[0])) {
        switch (resultado) {
            case 0:
                if (cadenaCif[8] == "J")
                    return 1; //cif correcto
                break;
            case 1:
                if (cadenaCif[8] == "A")
                    return 1;
                break;
            case 2:
                if (cadenaCif[8] == "B")
                    return 1;
                break;
            case 3:
                if (cadenaCif[8] == "C")
                    return 1;
                break;
            case 4:
                if (cadenaCif[8] == "D")
                    return 1;
                break;
            case 5:
                if (cadenaCif[8] == "E")
                    return 1;
                break;
            case 6:
                if (cadenaCif[8] == "F")
                    return 1;
                break;
            case 7:
                if (cadenaCif[8] == "G")
                    return 1;
                break;
            case 8:
                if (cadenaCif[8] == "H")
                    return 1;
                break;
            case 9:
                if (cadenaCif[8] == "I")
                    return 1;
                break;
        }
    }
    return 2; //cif erroneo o caracter de control erroneo

}

function nif_Cif(cadenaNifcif) {
    
    let botonBien=true;
    let formatocif = "ABCDEFGHJUVPQRSW"; 
    
  
    if (cadenaNifcif.length != 9) {
        cadena_errores = "Se ha introducido un dato no válido. No es CIF, ni NIF";
        document.formulario.error_cif_nif.value =cadena_errores;
        document.formulario.error_cif_nif.style.visibility="visible";
      //  document.formulario.error_cif_nif.style.border="1px solid black";             
        botonBien=false;
       
    } else {
        if (formatocif.includes(cadenaNifcif[0])) {
            let result= esCif(cadenaNifcif);
            if (result == 1) {
                botonBien =true;
                document.formulario.error_cif_nif.style.visibility="hidden";
            } else if (result == 2) {
                botonBien=false;
                cadena_errores ="Se ha introducido un cif erróneo. El carácter de control es erróneo";
                document.formulario.error_cif_nif.value =cadena_errores;
                document.formulario.error_cif_nif.style.visibility="visible";
              //  document.formulario.error_cif_nif.style.border="1px solid black";                            
            }
        } else {
           let result= esNif(cadenaNifcif);
            if (result == 1) {
                botonBien=true;
                document.formulario.error_cif_nif.style.visibility="hidden";
            } else if (result == 2) {
                botonBien=false;
                cadena_errores ="Se ha introducido un NIF erróneo. El carácter de control es erróneo";
                document.formulario.error_cif_nif.value =cadena_errores;
                document.formulario.error_cif_nif.style.visibility="visible";
              //  document.formulario.error_cif_nif.style.border="1px solid black";  
            } else if (esNif(cadenaNifcif) == 3) {
                botonBien=false;
                cadena_errores ="Se ha introducido un DNI, se ha pasado un número de entre 6 y 8 dígitos con un valor mínimo de 100000";
                document.formulario.error_cif_nif.value =cadena_errores;
                document.formulario.error_cif_nif.style.visibility="visible";
              //  document.formulario.error_cif_nif.style.border="1px solid black"; 
            }
        }
    }
    return botonBien;
              
 }


 

// -------------------  de condigo control --------//

function calcularCodigoControl() {
    let banco = document.formulario.codigo_banco.value;
    let sucursal = document.formulario.codigo_oficina.value;
    let cuenta = document.formulario.numero_cuenta.value;

    if (banco.length != 4 || sucursal.length != 4 || cuenta.length != 10 || isNaN(banco) || isNaN(sucursal) || isNaN(cuenta)) {
        return -1;
    }
    let sumaBanco = parseInt(banco[0]) * 4 + parseInt(banco[1]) * 8 + parseInt(banco[2]) * 5 + parseInt(banco[3]) * 10;
    let sumaSucursal = parseInt(sucursal[0]) * 9 + parseInt(sucursal[1]) * 7 + parseInt(sucursal[2]) * 3 + parseInt(sucursal[3]) * 6;
    let resultado = 11 - (sumaBanco + sumaSucursal) % 11;
    // console.log(sumaBanco + " " + sumaSucursal + " " + resultado);
    if (resultado == 10) {
        resultado = 1;
    }
    if (resultado == 11) {
        resultado = 0;
    }
    let numero3 = 11 - (parseInt(cuenta[0]) * 1 + parseInt(cuenta[1]) * 2 + parseInt(cuenta[2]) * 4 + parseInt(cuenta[3]) * 8 + parseInt(cuenta[4]) * 5 + parseInt(cuenta[5]) * 10 + parseInt(cuenta[6]) * 9 + parseInt(cuenta[7]) * 7 + parseInt(cuenta[8]) * 3 + parseInt(cuenta[9]) * 6) % 11;
    if (numero3 == 10) {
        numero3 = 1;
    }
    if (numero3 == 11) {
        numero3 = 0;
    }
  //  document.formulario.error_codigo_control.style.visibility="hidden"; 
    //document.formulario.codigo_control.value = ""+resultado+numero3;
    //truco: si es numero y quiero que al imprimir sea String puedo  poner " " y concatenar con + y asi no se suma 
    return ""+resultado+numero3;
}

// --------------- calculo IBAN ------------------------
function calculoIBANEspanya(codigoCuenta) {
    if (codigoCuenta.length != 20) {
        return -1;
    }
    let caracteres = "ES00";
    //codigoCuenta + caracteres;
    let NuevoCaracteres = caracteres.replace("E", "14");
    NuevoCaracteres = NuevoCaracteres.replace("S", "28");
    let numero = codigoCuenta + NuevoCaracteres;
    let codigoControl = 98 - parseInt(numero) % 97;
    if (codigoControl < 10) {
        codigoControl = "0" + codigoControl;
    } else {
        console.log("12345678912345678912");
        codigoControl = codigoControl.toString();
    }
    // console.log(codigoControl);
    let iban = "ES" + codigoControl + codigoCuenta;
    return iban;
}
// console.log(calculoIBANEspanya("12345678912345678912"));


function comprobar_IBAN(codigo_IBAN) {


    let letter_num = {
        A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, G: 16, H: 17, I: 18, J: 19, K: 20, L: 21, M: 22, N: 23, O: 24, P: 25, Q: 26, R: 27, S: 28, T: 29, U: 30, V: 31, W: 32, X: 33, Y: 34, Z: 35
    }
    let check_num = "";
    let check_stack = "";
    let mod = 0;

    let end = "";
    for (let i = 0; i < codigo_IBAN.length; i++) {
        if (isNaN(codigo_IBAN[i])) {
            if (i < 4)
                end += letter_num[codigo_IBAN[i]].toString();//concatenamos los 4 primeros caracteres
            else
                if (isNaN(codigo_IBAN[i])) {
                    codigo_IBAN.length + 2;
                    check_num += letter_num[codigo_IBAN[i]].toString();
                }
        } else {
            if (i < 4)
                end += [codigo_IBAN[i]];
            else
                check_num += codigo_IBAN[i];
        }
    }

    // colocar los cuatro primeros dígitos al final
    check_num += end;
    // variable para luego partir el string en trozos de 9
    check_num_og = check_num;

    do {
        check_stack = mod.toString() + check_num.substring(0, 9 - mod.toString().length);
        check_num = check_num.substring(check_stack.length - mod.toString().length);

        mod = check_stack % 97;

        if (mod == 1)
            return true;
    } while (check_num != "");


    return false;
}


function numerosPositive() {
    let cadena_errores = "";
    let camposPositivos = [document.formulario.telefono.value, document.formulario.codigo_postal.value];

    for (let i = 0; i < camposPositivos.length; i++) {
        if (parseInt(camposPositivos[i]) < 0) {
            cadena_errores += "Error,no se pueden introducir números negativos \n";
        }

    }
    return cadena_errores;
}

function botonSelect() {
    let botonbien = true;
    let cadena_errores = "";
    let tipo = document.formulario.tipo;
    let radios = document.formulario.radios;

    if (tipo.value == "") {
        botonbien = false;
        cadena_errores += "Es obligatorio elegir una opción de tipo de empresa\n ";
        document.formulario.error_tipo_empresa.value = cadena_errores;
        document.formulario.error_tipo_empresa.style.visibility = "visible";
       // document.formulario.error_tipo_empresa.style.border = "1px solid black";
    } else {
        document.formulario.error_tipo_empresa.style.visibility = "hidden";
    }

    if (radios.value == "") {
        botonbien = false;
        cadena_errores += "Es obligatorio elegir una opción tipo de persona\n ";
        document.formulario.error_tipo_persona.value = cadena_errores;
        document.formulario.error_tipo_persona.style.visibility = "visible";
      //  document.formulario.error_tipo_persona.style.border = "1px solid black";
    } else {
        document.formulario.error_tipo_persona.style.visibility = "hidden";
    }

    return botonbien;
}


function validarOpction() {
    botonbien=true;
    contador = 0;
    let cadena_errores = "";
    let comunidades = document.formulario.comunidades.options;
   
    for (let i = 0; i < comunidades.length; i++) {
       if(comunidades[i].selected){
        contador++;
       }
    }
    if (contador < 2) {
        botonbien=false;
        cadena_errores += "[!]Error, debe seleccionar al menos dos comunidades[!]";
        document.formulario.error_comunidades.value = cadena_errores;
        document.formulario.error_comunidades.style.visibility = "visible";
      //  document.formulario.error_comunidades.style.border = "1px solid black";
    }else{
        document.formulario.error_comunidades.style.visibility = "hidden";
    }
   
    return botonbien;
}
//--------------validar que ha dos empresas elegidas al menos val12------//
function validarSectorEconomico() {

    let botonbien = true;
    let cadena_errores = "";
    let sector = document.formulario.sector.elements;
    let contador = 0;
    for (i = 0; i < sector.length; i++) {
        if (sector[i].type == "checkbox") {//. type, hace referencia al tipo de dato
            if (sector[i].checked) {
                contador++;
            }
        }
    }
    if (contador < 2) {
        cadena_errores += "Error, debe seleccionar al menos dos sectores económicos \n";
        document.formulario.error_sector_economico.value = cadena_errores;
        document.formulario.error_sector_economico.style.visibility = "visible";
      //  document.formulario.error_sector_economico.style.border = "1px solid black";
        botonbien = false;
    } else {
        document.formulario.error_sector_economico.style.visibility = "hidden";
    }
    return botonbien;
}

function validarNumeroCuenta() {
    let cadena_errores = "";
    let numeroCuenta = document.formulario.numero_cuenta.value;
    if (numeroCuenta.length != 10 || isNaN(numeroCuenta)) {
        cadena_errores += "Error, el número de cuenta debe tener 10 números y no contener ningún carácter no numérico \n";
    }
    return cadena_errores;
}



// function validarDirec() {
//     let cadena_errores = "";
//     let direccion = document.formulario.direccion.value;
//     let direcc = direccion.toLowerCase().trim();
//     //let valido = true;
//     let caracteres = "ºª-/. ";
//     let enmedio = direcc.substr(1, direcc.length - 1);
//     if ((direcc.charAt(0) < "a" || direcc.charAt(0) > "z") && !caracteres.includes(enmedio)) {
//         //valido = false;
//         cadena_errores += "Error el primer caracter debe de ser una letra \n";
//     }
//     //return valido;
//     return cadena_errores;

// }

// valor = document.getElementById("campo").value;
// if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
//   return false;
// }
// Para que se de por completado un campo de texto obligatorio, 
// se comprueba que el valor introducido sea válido, que el número de 
// caracteres introducido sea mayor que cero y que no se hayan introducido
//  sólo espacios en blanco.