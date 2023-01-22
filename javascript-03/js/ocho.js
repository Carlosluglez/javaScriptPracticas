window.onload = inicio;
function inicio() {
    document.formulario.onsubmit = validarFormulario;
    document.formulario.codigo_postal.oninput = cambioCodPos;



}


function validarFormulario() {

    let mensaje = "";
    let enviar = true;

    mensaje += validarRazon();
    mensaje += validarDni_Cif();
    mensaje += validarCodEmp();
    mensaje += validarDirec();
    mensaje += validLocalidad();
    mensaje += validarTelefono();
    mensaje += numerosPositive();
    mensaje += botonSelect(); 
    mensaje += validarOpction();
    mensaje += validarNumeroCuenta();
    if (mensaje.length > 0) {
        alert(mensaje);
        enviar = false;
    }

    return enviar;

}

// ----_-----FUNCIONES--------___-----------
function validarDni_Cif() {

    let nif = document.formulario.cif_nif.value.toUpperCase();
    //alert(nif);

    let validacionNif = nif_Cif(nif);
    //alert(validacionNif);//aqui mostramos en un alert el dni pasado
    return validacionNif;
}




function validarTelefono(){
    let cadena_errores = "";
    let regEx = /^[6789]\d{8}/;
            if(!regEx.test(document.formulario.telefono.value)){
                cadena_errores= "Error, el número de telefono es incorrecto";
                document.formulario.error_telefono.value=cadena_errores;
                document.formulario.error_telefono.style.visibility="visible";
                document.formulario.error_telefono.style.border="1px solid black";
                return false;
            }
        return true;

}


function validarRazon() {

    let cadena_errores = "";
    let regexEmpiezaPorLetra=/^[a-zA-ZñÑáéíóúÁÉÚÍÚ]/;
    let regexComprobarUltima=/[a-zA-ZñÑáéíóúÁÉÚÍÚ\d.]$/;
    let regexComprobarInterior=/^[A-Za-z0-9ªº\-.ÁÉÚÍÚñÑáéíóú ]*$/;
        
        let val1 =true;
        let val2 =true;
        let val3 =true;

            if (!regexEmpiezaPorLetra.test(document.formulario.razon.value)) {           
                cadena_errores += "Error el primer caracter es incorreecto,";
                document.formulario.error_razon.value =cadena_errores;
                document.formulario.error_razon.style.visibility="visible";
                document.formulario.error_razon.style.visibility="1px solid black";
                    val1 =false;
               
            }
            if (!regexComprobarUltima.test(document.formulario.razon.value)) {
            
                cadena_errores += "Error el ultimo caracter es incorreecto,";
                document.formulario.error_razon.value =cadena_errores;
                document.formulario.error_razon.style.visibility="visible";
                document.formulario.error_razon.style.visibility="1px solid black";
                    val2=false;
                 
            }
            if (!regexComprobarInterior.test(document.formulario.razon.value)) {
                    cadena_errores += "Error hay un caracter incorrecto en el nombre";
                    document.formulario.error_razon.value =cadena_errores;
                    document.formulario.error_razon.style.visibility="visible";
                    document.formulario.error_razon.style.visibility="1px solid black";
                    val3=false;
                
            }
            console.log(val1,val2,val3);
        return val1 && val2 && val3;
}
function validarCodEmp() {
    let cadena_errores = "";

    let regex = /^[\da-zA-ZáéíóúÁÉÍÓÚñÑ]{5,10}$/;
   
    if (!regex.test(document.formulario.codigo_empresa.value)) {           
                cadena_errores = "El Código de la empresa va a contener letras y dígitos y va a tener un número de caracteres comprendidos entre 5 y 10";
                document.formulario.error_codigo.value =cadena_errores;
                document.formulario.error_codigo.style.visibility="visible";
                document.formulario.error_codigo.style.visibility="1px solid black";

                return false;
            }
   
    return true;
}

function validarDirec() {
    let cadena_errores = "";
    let direccion = document.formulario.direccion.value;
    let direcc = direccion.toLowerCase().trim();
    //let valido = true;
    let caracteres = "ºª-/. ";
    let enmedio = direcc.substr(1, direcc.length - 1);
    if ((direcc.charAt(0) < "a" || direcc.charAt(0) > "z") && !caracteres.includes(enmedio)) {
        //valido = false;
        cadena_errores += "Error el primer caracter debe de ser una letra \n";
    }
    //return valido;
    return cadena_errores;

}
//console.log(validarDirec("alle44"));

function validLocalidad() {
    let cadena_errores = "";
    let local = document.formulario.codigo.value;
    let localidad = local.toLowerCase().trim();
    //let valido = true;
    let resto = localidad.substr(1, localidad.length - 1);
    let caracter = "áéíóúüñ  ";
    if ((localidad.charAt(0) < "a" || localidad.charAt(0) > "z" || localidad.charAt(localidad.length - 1) < "a" || localidad.charAt(localidad.length - 1) > "z") && !caracter.includes(localidad.charAt(localidad.length - 1))) {
        //valido = false;
        cadena_errores += "Error el primer  y ultimo caracter debe de ser una letra \n";
    }
    for (let i = 0; i < resto.length; i++) {
        if ((resto.charAt(i) < "a" || resto.charAt(i) > "z") && !caracter.includes(resto.charAt(i))) {
            cadena_errores += "Error los caracteres deben de ser letras, se permite espacios\n";
        }
    }
    //return valido;
    return cadena_errores;
}
//console.log(validLocalidad("comunidad4 d6 madrid"));

function validCodPos() {
    let valido = true;

    let codPos = document.formulario.codigo_postal.value;
    let cp = parseInt(codPos);
    console.log(cp);
    if (cp < 1000 || cp > 52999) {
        valido = false;
    }
    return valido;
}

function cambioCodPos() {
    let cadena_errores;
    if (!validCodPos()) {
        console.log("no es valido");
        return cadena_errores += "El CP uede tener valores comprendidos entre 1000 y 52999\n";
        
    } else {
        let codigoPostal = document.formulario.codigo_postal.value;
        let initial = parseInt(codigoPostal.substring(0, 2) - 1);
        //console.log("initial "+initial);


        let provincias = ['Alava', 'Albacete', 'Alicante', 'Almería', 'Avila', 'Badajoz', 'Islas Baleares', 'Barcelona', 'Burgos', 'Cáceres',
            'Cádiz', 'Castellón', 'Ciudad Real', 'Córdoba', 'La Coruña', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara',
            'Guipúzcoa', 'Huelva', 'Huesca', 'Jaén', 'León', 'Lérida', 'La Rioja', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra',
            'Orense', 'Asturias', 'Palencia', 'Las Palmas', 'Pontevedra', 'Salamanca', 'Santa Cruz de Tenerife', 'Cantabria', 'Segovia', 'Sevilla', 'Soria', 'Tarragona',
            'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza', 'Ceuta', 'Melilla'];

        document.formulario.provincia.value = provincias[initial];
        //console.log(" es valido");

    }


}


 function numerosPositive(){
    let cadena_errores = "";
    let camposPositivos =[document.formulario.telefono.value, document.formulario.codigo_postal.value];

    for(let i=0; i < camposPositivos.length; i++){
        if(parseInt(camposPositivos[i]) < 0 ){
            cadena_errores += "Error,no se pueden introducir números negativos \n";
        }

    }
    return cadena_errores;
 }

 function botonSelect(){
    let cadena_errores="";
    let radio= document.formulario.radios.checked;
    let sector = document.formulario.sector.checked;
    let tipo = document.formulario.tipo.checked;
    if(!radio){
         cadena_errores +="Es obligatorio elegir una opción en personal\n ";
    }
    if(!sector){
        cadena_errores +="Es obligatorio elegir una opción de sector económico\n ";
    }
    if(!tipo){
        cadena_errores +="Es obligatorio elegir una opción de tipo de empresa\n ";

    }
    return cadena_errores;
}
/*El código del banco, el código de la oficina han de ser números y con cuatro
dígitos. */
function controlCodBanco(){
    let cadena_errores = "";
    let banco = document.formulario.codigo_banco;
    let oficina = document.formulario.codigo_oficina;
    if(parseInt(banco)!=4 ){
        cadena_errores+= "El banco debe de ser de 4 dígitos\n ";
    }
    if(parseInt(oficina)!=4){
        cadena_errores+= "La oficina debe de ser de 4 dígitos\n ";
    }
    return cadena_errores;
}

function validarOpction(){
    contador=0;
    let cadena_errores="";
    let comunidades= document.formulario.comunidades.options;
    // console.log(comunidades[0].text);
    
    for (let i=0; i<comunidades.length; i++) {
         if (comunidades[i].selected){
            contador++;
         }
    }
    if(contador < 2 ){
        cadena_errores += "Error, debe seleccionar al menos dos comunidades \n";
    }
    console.log(contador);
    return cadena_errores;
}

function validarNumeroCuenta(){
    let cadena_errores="";
    let numeroCuenta=document.formulario.numero_cuenta.value;
     if(numeroCuenta.length !=10 || isNaN(numeroCuenta)){
        cadena_errores += "Error, el número de cuenta debe tener 10 números y no contener ningún carácter no numérico \n";
    }
    return cadena_errores;
}