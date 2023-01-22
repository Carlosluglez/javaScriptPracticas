$("*").css("color","blue");
$("p").css("color","blue");
$("#provincias:selected").css("color","red");
$("div>div:odd").css("color","blue");
$("div>div:even").css("color","red");

let misprovincias=$("#provincias:selected");
if ($(misprovincias).length> 0)
	// hay provincias seleccionadas
else
	// no hay provinvias selecionadas
let todos=$(misprovincias).add("#comunidades:selected");

let datos=$("li").slice(3);
let datos2=$("li").slice(3,8);
let posicion=$("div").index("#misdatos");


