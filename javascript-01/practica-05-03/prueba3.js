window.onload = inicio;

function inicio() {
   document.formulario.calcular.onclick=calculoPrimo;
}

 function calculoPrimo() {
    debugger;
    let inicio =parseInt(document.formulario.numero_inicial.value,10);
    let final = parseInt(document.formulario.numero_final.value,10);
    let str = "";
    for (let candidato = inicio; candidato < final; candidato++) {
        let esPrimo = false;   
        // recorriendo desde 2 al numero de entrada del usuario, en cada vuelta se hace el resto de todos lo numeros entre inicio y final
        for (let divisor = 2; divisor < candidato; divisor++) {
            if (candidato % divisor == 0) {
                esPrimo = true;//              
            }
        }   
        // si el numero es mas grande que uno y divisible por otros números que no sea el mismo
        if (esPrimo == false) {            
            str += candidato + "|";
        }
    }
    document.formulario.numeros_primos.value = str;
}

//no le dejamos que llegue a dividirse por si mismo pues en ese caso, ya nos saldria que es primo, lo que hacemos es hacer el resto
//por cada numero anteriro a si mismo, si en cualquiera de las operaciones saliera que el resto es 0
//significa que es divisible por algún número más que 1 y si mismo con lo cual no sería primo 