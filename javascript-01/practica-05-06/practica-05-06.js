window.onload = inicio;

function inicio() {
    document.form.button.onclick = comprobar;
}

function comprobar() {

    //variable para detectar la cadena en la que vamos a buscar similitudes
    var cadena = document.form.cadena.value.toLowerCase().trim();
    //variable si la subcadena es de un único carácter
    var cadena_corta = document.form.subcadena.value.toLowerCase();
    //variable si la subcadena es de más de un carácter
    var cadena_larga = document.form.subcadena.value.toLowerCase();
    //variable para contar cuántas veces aparece la subcadena
    var count = 0;

    //si la subcadena es de más de un carácter trabajamos con la variable "cadena_larga".
    //Por el contratio, utilizaremos la variable "cadena_corta"
    if (cadena_corta.length > 1) {
        //contamos cuantas veces aparece la subcadena en la cadena, tiene en cuenta el que introduces para buscar por eso ponemos -1
        count = cadena.split(cadena_larga).length - 1;
    } else {
        //comntamos cuantas veces aparece la subcadena en la cadena, tiene en cuenta el que introduces para buscar por eso ponemos -1
        count = cadena.split(cadena_corta).length - 1;
    }
    //mostramos el resultado en la caja "Mensaje"
    document.form.mensaje.value = count;
}
