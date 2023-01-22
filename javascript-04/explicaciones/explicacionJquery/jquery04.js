function masciudad(){
        var todas=$("#capitales li");
        var indice=0;
        var noencontrado=true;
        while (noencontrado && indice < $(todas).length){
            if($("#ciudad").val()==$(todas).eq(indice).text())
                noencontrado=false;
            indice+=1;
        }
        if (noencontrado)
            $("#capitales").append("<li>"+$("#ciudad").val()+"</li>");
    }
