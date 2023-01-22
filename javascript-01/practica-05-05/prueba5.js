window.onload = inicio;

function inicio() {
    document.formulario.comprobar.onclick=comprobar;

}

function comprobar(){
    let cadena = document.formulario.cadena.value;
    document.formulario.contador.value=numero_vocales(cadena);
    document.formulario.vocala.value=vocal_a(cadena);
    document.formulario.vocale.value=vocal_e(cadena);
    document.formulario.vocali.value=vocal_i(cadena);
    document.formulario.vocalo.value=vocal_o(cadena);
    document.formulario.vocalu.value=vocal_u(cadena);
    document.formulario.consonantes.value=total_consonantes(cadena);
}

function numero_vocales(cadena){
   

    let vocales = "aáeéiíoóuúü";
    let contadorVocales=0;

    for(let i = 0;i < cadena.length;i++){

        if(vocales.includes(cadena[i].toLowerCase())){
            contadorVocales++;
        }

    }
    return contadorVocales;

}

function vocal_a(cadena){
    

    let a = "aá";
    let contadora=0;

    for(let i = 0;i < cadena.length; i++){

        if(a.includes(cadena[i].toLowerCase())){
            contadora++;
        }

    }
    return contadora;

}

function vocal_e(cadena){
    

    let e = "eé";
    let contadore=0;

    for(let i = 0;i < cadena.length; i++){

        if(e.includes(cadena[i].toLowerCase())){
            contadore++;
        }

    }
    return contadore;

}

function vocal_i(cadena){
    

    let ies = "ií";
    let contadori=0;

    for(let i = 0;i < cadena.length; i++){

        if(ies.includes(cadena[i].toLowerCase())){
            contadori++;
        }

    }
    return contadori;

}

function vocal_o(cadena){
    

    let o = "oó";
    let contadoro=0;

    for(let i = 0;i < cadena.length; i++){

        if(o.includes(cadena[i].toLowerCase())){
            contadoro++;
        }

    }
    return contadoro;

}

function vocal_u(cadena){
    

    let u = "uú";
    let contadoru=0;

    for(let i = 0;i < cadena.length; i++){

        if(u.includes(cadena[i].toLowerCase())){
            contadoru++;
        }

    }
    return contadoru;

}

function total_consonantes(cadena){

  
    let consonantes = "bcdfghjklmnñpqrstvwz";
    let contadorConsonantes=0;

    for(let i = 0;i < cadena.length;i++){

        if(consonantes.includes(cadena[i].toLowerCase())){
            contadorConsonantes++;
        }

    }
    console.log(contadorConsonantes);
    return contadorConsonantes;

}





    

    


   



