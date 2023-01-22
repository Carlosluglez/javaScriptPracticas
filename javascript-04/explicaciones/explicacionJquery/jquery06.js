$("#capitales>tbody").append("<tr> <td>"+$("#ciudad").val()+
"</td> <td>0</td></tr>");
equivale en jQuery a lo siguiente en DOM
let nuevaLinea=document.createElememt("tr");
let nuevoTd=document.createElement("td");
let textonuevo=document.createTextNode(document.getElementById("ciudad").value);
let dosTd=document.createElement("td");
let textoDos=document.createTextNode("0");
dosTd.append(textoDos);
nuevoTd.append(textonuevo);
nuevaLinea.append(nuevoTd);
nuevaLinea.append(dosTd)
document.querySelecto("#capitales > tbody").append(nuevoLinea);