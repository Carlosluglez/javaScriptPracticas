window.onload=inicio;

function inicio(){
   
    function calculoPrimo(){
        let n = 101;
        let str="";
        for(let i = 0; i < n  ; i++){
            if (i < 2 || i == 4 ){
                continue;
            }
            else if (comprobarPrimo(i)) {
                str+=i+"|";
            }
        }
        return str;
    }

    function comprobarPrimo(numero){
        let contador=0;
        let esPrimo=false;
        for (let i = 0 ;i < numero / 2; i++){
            if(numero % i == 0 ){
                contador++;
            }
        }
        esPrimo = contador>2 ? false : true;
        return esPrimo;
    }


    document.formulario.numeros_primos.value=calculoPrimo();
}