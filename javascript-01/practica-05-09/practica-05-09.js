window.onload = inicio;

function inicio() {
    document.forms.form.button.onclick = comprobar;
}

function comprobar() {
    debugger;
    //variable for mail
    var mail = document.forms.form.mail.value;

    //variable for error
    var error = false;
    //variable to show concrete error
    var error_message = "";

    if (isNaN(mail[0])) {
        var at = mail.indexOf("@");
        if (at != -1 && isNaN(mail.substring(at + 1, at + 2))) {
            //check for stop
            var stop = mail.indexOf(".", at + 1);
            //if there is stop continue. If not, error
            if (stop != -1) {
                //check between 2 and 4
                var two_four = mail.substring(mail.length, stop + 1);
                //comprobar si después del punto hay números
                for (var i = 0; i < two_four.length && !error; i++) {
                    if (!isNaN(two_four[i])) {
                        error_message = "No puede haber números depués del punto"
                        error = true;
                    }
                }
                //if the length is correct, send a message to the "menaje" box
                if (two_four.length >= 2 && two_four.length <= 4 && !error) {
                    document.forms.form.mensaje.value = true;
                } else if (!error) {
                    error_message = "Debe haber entre 2 y 4 carácteres después del punto. Y han de ser letras"
                    error = true;
                }
            } else {
                error_message = "Debe haber un punto"
                error = true;
            }
        } else {
            error_message = "Debe haber una @ y no ha de haber un número después de ella"
            error = true;
        }
    } else {
        error_message = "El mail debe empezar por una letra"
        error = true;
    }

    if (error == true) {
        alert(error_message);
        document.forms.form.mensaje.value = false;
    }
}
