window.onload = main;

function main() {
    
    document.formulario.submit.onclick = validarUrl;
}

function validarUrl(){


    let val1 = validarUrl();

    return val1;
}


function validarUrl(){
debugger;
    let url= document.formulario.url.value;
    url=url.trim().toLowerCase();
    let correcto=true;
    let error=0;
    let cadena1="www.";
    let cadena2="http://"+ cadena1;
    let cadena3="https://"+ cadena1;
    
    if(!url.startsWith(cadena1) && !url.startsWith(cadena2) && !url.startsWith(cadena3)){ //|| !url.startsWith("https://")){
        correcto = false;
        error=1;
        document.formulario.mensaje.value=error;
    }else{
       let primerPunto= url.indexOf(".",0);
       let segundoPunto= url.indexOf(".",primerPunto+1);
       let subcadena = url.substring(primerPunto+1,  segundoPunto);

       if(subcadena.charAt(0) < "a" || subcadena.charAt(0) > "z" ){
        correcto = false;
        error=2;
        document.formulario.mensaje.value=error;
       }else{
            let permitidosEnSubcadena="abcdefghijklmnñopqrstuvwxyzáéíóúüñ-";
            let numero=subcadena.length;
            let indice=0;
            while(correcto && indice < numero-1){
                if(!permitidosEnSubcadena.includes(subcadena.charAt(indice))){
                    correcto = false;
                    error=3;
                    document.formulario.mensaje.value=error;
                }
                    indice++;
                
            }
            let permitidoUltimoCaracter="abcdefghijklmnñopqrstuvwxyzáéíóúüñ123456789";
            if(!permitidoUltimoCaracter.includes(subcadena.charAt(subcadena.length-1))){
                    correcto = false;
                    error=4;
                    document.formulario.mensaje.value=error;
            }else{
                let punto=".";
                if(!punto.includes(subcadena.charAt(subcadena.length +1))){
                    correcto = false;
                    error=5;
                    document.formulario.mensaje.value=error;
                }else{
                    let subcadenaFinal= url.substring(segundoPunto+1);

                    if(subcadenaFinal < 2 || subcadenaFinal > 4){
                        correcto = false;
                        error=6;
                        document.formulario.mensaje.value=error;
                    }else{
                        let permitidosEnSubcadenaFinal="abcdefghijklmnñopqrstuvwxyzáéíóúüñ";
                        let indice1=0;
                        while(correcto && indice1 < subcadenaFinal.lenght){
                        if(!permitidosEnSubcadenaFinal.includes(subcadenaFinal)){
                            correcto = false;
                            error=7;
                            document.formulario.mensaje.value=error;
                        }
                        indice1++;
                        }

                    }

                }
            }
       }

    }
    
    return correcto;
    
    
    }

// function validarProtocolo(url) { // comprobar protocolo
//     const www = "www.";   //definimos los string por los que puede empezar
//     const http = "http://" + www;
//     const https = "https://" + www;
//     let correcto = false; //iniciamos una variable a false para comprobar si se contiene la cadena
//     if (url.startsWith(http)) {
//         correcto = true;
//     } else if (url.startsWith(https)) {
//         correcto = true;
//     } else if (url.startsWith(www)) {
//         correcto = true;
//     } else {
//         correcto = false;
//     }
//     return correcto; 
// }

// function validateTopDomain(url) {
//     let topDomain = url.substring(url.indexOf('.', url.indexOf('.') + 1) + 1, url.length); // extraer top domain
//     return isLetter(topDomain) && topDomain.length <= 4 && topDomain.length >= 2;
// }



// function validarDominio(url) {
//     let domainName = url.substring(url.indexOf('.') + 1, url.indexOf('.', url.indexOf('.') + 1)); // extraer subdomain
//     return isLetter(domainName.charAt(0)) && // Comprobar primera letra
//         (isLetter(domainName.charAt(domainName.length - 1)) || isNumber(domainName.charAt(domainName.length - 1))) // Comprobar si última letra es letra o número
//         && /^[A-Za-z0-9\-ñÀ-ú]*$/.test(domainName); // comprobar caracteres internos del dominio


// }

// // function isLetter(str) {
// //     return /^[a-zA-ZñÀ-ú]+$/.test(str); // comprobar si es letra
// // }
// function isLetter(str) {  
//     const letras="abcdefghijklmnñopqrstuvwxyzáéíóúü ";
//     str = str.toLowerCase();
//     for(let i=0;i< str.length;i++){
//         if(!(letras.includes(str[i]))){
//             return false;
//         }
//     }
//     return true;       
// }

// function isNumber(character) {
//     return !isNaN(character); // comprobar si es número
// }



// function validar() {
    
//     let val1 = validarUrl();

//     return val1;

// }

// function validarUrl(){
   
//     let url = document.formulario.url.value;  
//     //let raul = new RegExp("((^http:\/\/)|^(https:\/\/)|^(www.){1}?)([a-z][a-z1-9-]*[a-z1-9]).[a-z]{2,4}$","i");
//     let regExp=/((^http:\/\/)|^(https:\/\/)|^(www.){1}?)([a-z][a-z1-9-]*[a-z1-9]).[a-z]{2,4}$/i;  
//     let correcto=true;
//     if(!regExp.test(url)){
//         correcto=false;
//         document.formulario.mensaje.value= "es una url incorrecta";
//     }else{
//         document.formulario.mensaje.value="es una url correcta";
//     }

//     return correcto;

// }