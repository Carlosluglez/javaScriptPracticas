$(window).on("load",inicio);

function inicio(){
	$("#caja").on("keypress",sololetra);
	$("#formulario").on("submit",validar);
}

