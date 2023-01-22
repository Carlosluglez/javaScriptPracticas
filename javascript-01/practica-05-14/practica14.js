// Javier Aragoneses

window.onload = main;

const permitedCharacters = "%/?!";



function main() {
    document.formulario.submit.onclick = validate;
}

function validate() {
    let address = document.formulario.codigo.value;
    document.formulario.mensaje.value = checkCodigo(address) ? "Es válida" : "Es inválida";
}

function checkCodigo(address) {
    console.log(isLetter("a"))
    return checkLength(address) && checkConditions(address);
}

function checkConditions(address) {
  
    let pointer = 0;

    while (isNumber(address.charAt(pointer)) && pointer < 6) {
        pointer++;
    }
    if (pointer < 3) {
        return false;
    }
    let temp1 = address.substring(pointer, pointer += 2);

    switch (temp1) {
        case "AN":
        case "ES":
        case "DL":
        case "US":
            break;
        default: return false;
    }

    switch (address.charAt(pointer++)) {
        case '#':
        case '@':
        case '$':
        case '&':
            break;
        default: return false;
    }

    let aux=0;

    while (isLetter(address.charAt(pointer)) && aux < 7) {
        aux++;
        pointer++;
    }

    if (aux<5) {
        return false;
    }


    let temp2 = address.substring(pointer, pointer += 2);

    for (let i=0;i<temp2.length;i++){
        if (!isNumber(temp2.charAt(i))){
            return false;
        }
    }

    let temp3 = address.substring(pointer, pointer += 3);

    for (let i=0;i<temp3.length;i++){
        console.log(temp3.charAt(i));
        if (!isLetter(temp3.charAt(i))){
            return false;
        }
    }

    let temp4 = address.substring(pointer,pointer+=5);

    if (temp4.length<5) return false;

    for (let i=0;i<temp4.length;i++){
        let character = address.charAt(i);
        if (!(isLetter(character) || isNumber(character || address.contains(character)))){
            return false;
        }
    }

    return true;


}



function checkLength(address) {
    return address.length >= 20 && address.length <= 26;
}


function isNumber(character) {
    return !isNaN(character);
}

function isLetter(character) {
    return character.toUpperCase() != character.toLowerCase() ;
}



