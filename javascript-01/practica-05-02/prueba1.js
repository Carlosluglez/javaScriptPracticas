window.onload = inicio;

function inicio() {

    function calculoPrimo() {
       let candidato=1;
       let contadorPrimos=1;
        let resultado = " ";

       while(contadorPrimos < 101){
        candidato++;
        if(candidato == 4){
            continue;
        }
        if(comprobarPrimo(candidato)){           
        contadorPrimos++;
        resultado+=candidato +"|";
         }      
       
       }
       return resultado ;
    }

    function comprobarPrimo(candidato) {
        debugger;
        let esPrimo = true;
        for (var i = 2; i < candidato/2; i++) {
            if (candidato % i == 0) {
                esPrimo= false;
            }
        }
        return esPrimo;
    }


    document.formulario.numeros_primos.value = calculoPrimo();

}
