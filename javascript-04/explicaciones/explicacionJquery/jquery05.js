$("#capitales").append("<li>"+$("#ciudad").val()+"</li>");
equivale en jQuery a lo siguiente en DOM
let nuevoLi=document.createElement("li");
let textonuevo=document.createTextNode(document.getElementById("ciudad").value);
nuevoLi.append(textonuevo);
document.getElementById("capitales").append(nuevoLi);



