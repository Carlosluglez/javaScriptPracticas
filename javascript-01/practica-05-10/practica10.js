window.onload = main;

// Javier Aragoneses

function main() {
    document.formulario.submit.onclick = validar;
}

function validar() {
    let url = document.formulario.url.value;
    document.formulario.mensaje.value = validateURL(url) ? "URL válida" : "URL inválida";

}

function validateURL(url){
    return validateProtocol(url) && validateDomain(url) && validateTopDomain(url);
}

function validateProtocol(url) { // comprobar protocolo
    const www = "www.";
    const http = "http://" + www;
    const https = "https://" + www;
    let isValid = false;
    if (url.startsWith(http)) {
        isValid = true;
    } else if (url.startsWith(https)) {
        isValid = true;
    } else if (url.startsWith(www)) {
        isValid = true;
    } else {
        isValid = false;
    }
    return isValid; 
}

function validateTopDomain(url) {
    let topDomain = url.substring(url.indexOf('.', url.indexOf('.') + 1) + 1, url.length); // extraer top domain
    return isLetter(topDomain) && topDomain.length <= 4 && topDomain.length >= 2;
}



function validateDomain(url) {
    let domainName = url.substring(url.indexOf('.') + 1, url.indexOf('.', url.indexOf('.') + 1)); // extraer subdomain
    return isLetter(domainName.charAt(0)) && // Comprobar primera letra
        (isLetter(domainName.charAt(domainName.length - 1)) || isNumber(domainName.charAt(domainName.length - 1))) // Comprobar si última letra es letra o número
        && /^[A-Za-z0-9\-ñÀ-ú]*$/.test(domainName); // comprobar caracteres internos del dominio


}

// function isLetter(str) {
//     return /^[a-zA-ZñÀ-ú]+$/.test(str); // comprobar si es letra
// }
function isLetter(str) {  
    const letras="abcdefghijklmnñopqrstuvwxyzáéíóúü ";
    str = str.toLowerCase();
    for(let i=0;i< str.length;i++){
        if(!(letras.includes(str[i]))){
            return false;
        }
    }
    return true;       
}

function isNumber(character) {
    return !isNaN(character); // comprobar si es número
}
