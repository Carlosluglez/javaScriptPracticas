window.onload = main;
function main() {
    document.formulario.submit.onclick = validar;
};
function validar() {
    let palindromo = document.formulario.palindromo.value;
    document.formulario.mensaje.value = validarFrase(palindromo) ? "Palíndromo" : "No es Palíndromo";
    //document.formulario.mensaje.value = cadenaInversa(palindromo);
}
function validarFrase(palindromo) {
    return validarPalindromo(palindromo);
}

function validarPalindromo(palindromo) {
    let valido = false;
    
    //quitar los espacios para ello primero localizamos los espacios con split y luego usamos join para la nueva
    //cadena sin espacios
    let palindromoSinEspacios = (palindromo.split(" ").join("")).toLowerCase();
    console.log(palindromoSinEspacios);
    let copiaPalindromo = palindromoSinEspacios;
    //llamamos a la función que le dará la vuelta a la cadena
    console.log(cadenaInversa(copiaPalindromo));
    if(palindromoSinEspacios == cadenaInversa(copiaPalindromo)){
        valido = true;
    }
    console.log(valido);
    return valido; 
}

function cadenaInversa(cadena) {
    let cadenaInversa = cadena.split("").reverse().join("");
    return cadenaInversa;
}
