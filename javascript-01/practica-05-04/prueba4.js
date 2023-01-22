window.onload = inicio;

function inicio() {
    document.formulario.calcular.onclick=comprobar_numero;
}

 function comprobar_numero() {
    
    let decimal =parseInt(document.formulario.decimal.value,10);
   
   if(isNaN(decimal)) {
    alert("no es un número");
   }else{
    document.formulario.binario.value = transformar_binario(decimal);
    document.formulario.octal.value = transformar_octal(decimal);
    document.formulario.hexadecimal.value = transformar_hexadecimal(decimal);
   }       
    }


    function transformar_binario(decimal){
       
    //     while(decimal / 2 >= 1 ){

    //         binario = decimal % 2 + binario;
    //         decimal = decimal / 2;
    //         decimal = parseInt(decimal);
          
    // }
    // binario = decimal + binario;

    var binario = "";

    binario=(decimal).toString(2);


    return binario;

    }

    function transformar_octal(decimal){
       debugger;
       var octal = "";
       while(decimal/2 >= 1 ){

           octal = decimal % 8 + octal;
           decimal = decimal / 8;
           decimal = parseInt(decimal);
         
   }
         octal = decimal + octal;

    //octal= decimal.toString(8);


       return octal;
       
    }

    function transformar_hexadecimal(decimal){
    hexadecimal=decimal.toString(16);

    return hexadecimal;
    }

    


   



