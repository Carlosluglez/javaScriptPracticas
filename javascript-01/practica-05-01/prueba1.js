window.onload = inicio;

function inicio() {//aqui ponemos por defecto lo que queremos que aparezca en la casilla que hemos puesto

    function calculoPrimo() {
        let n = 101;
        let str = "";
        
        for (let i = 0; i < n; i++) {
            if (i < 2 || i == 4) {
                continue;
            }
            else if (comprobarPrimo(i)) {
                str += i + "|";
            }
        }
        return str;
    }

    function comprobarPrimo(numero) {
        let esPrimo = true;
        for (var i = 2; i < numero/2; i++) {
            if (numero % i == 0) {
                esPrimo= false;
            }
        }
        return esPrimo;
    }


    document.formulario.numeros_primos.value = calculoPrimo();

}