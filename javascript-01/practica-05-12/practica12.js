window.onload = main;

const permitedCharacters ="ºª/-";
// Javier Aragoneses

function main() {
    document.formulario.submit.onclick = validate;
}

function validate() {
    let address = document.formulario.direccion.value;
    document.formulario.mensaje.value = checkAdress(address) ? "Es válida" : "Es inválida";
}

function checkAdress(address){
    return checkLength(address) && checkFirstAndLast(address) && checkInside(address);
}

function checkInside(address){
    let isValid=true;
    for (let i=1;i<address.length-2;i++){
        let character = address.charAt(i);
        if (!(isLetter(character) || isNumber(character) || permitedCharacters.contains(character))){
            isValid=false;
            break;
        }
    }
    return isValid;
}

function checkLength(address){
    return address.length >= 8 && address.length <= 42;
}

function checkFirstAndLast(address){
    return isLetter(address.charAt(0)) && (isNumber(address.charAt(address.length-1)) || isLetter(address.charAt(address.length-1)));
}

function isNumber(character){
    return !isNaN(character);
}

function isLetter(character){
    return character.toUpperCase() != character.toLowerCase();
}



