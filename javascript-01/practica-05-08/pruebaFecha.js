window.onload = inicio;

function inicio() {
    document.forms.form.button.onclick = comprobar;
}

function comprobar() {
    debugger;
    let fecha = document.form.fecha.value;

    let posicionPrimeraBarra = fecha.indexOf("/", 0);
    let dia = fecha.substring(0, posicionPrimeraBarra);
    let posicionSegundaBarra = fecha.indexOf("/", posicionPrimeraBarra + 1);
    let mes = fecha.substring(posicionPrimeraBarra + 1, posicionSegundaBarra);
    let ano = fecha.substring(posicionSegundaBarra + 1);
    let fechaBien = true;

    if (isNaN(dia) || dia.length > 2 || dia < 1 || dia > 31) {
        document.form.mensaje.value = "no es un dia correcto";
        fechaBien = false;
    } else {
        if (isNaN(mes) || mes.length > 2 || mes < 1 || mes > 12) {
            document.form.mensaje.value = "no es un mes correcto";
            fechaBien = false;
        } else {
              
            if (!(ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0)) && dia == 29 && mes ==2) {
                document.form.mensaje.value = "no es un año correcto bisiesto";
                fechaBien = false;
            }
            if (isNaN(ano) || ano.length != 4) {
                document.form.mensaje.value = "no es un año correcto";
                fechaBien = false;
            }
        }
    }
    if (fechaBien) {
        document.form.mensaje.value = "es una fecha correcta";
    }

}
