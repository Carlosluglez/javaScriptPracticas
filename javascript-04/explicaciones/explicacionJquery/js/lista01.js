$(window).on("load",inicio);

function inicio(){
	$("#poner").on("click",aniadir);
}

function aniadir(){
	let valor=$("#nombre").val();
	$("#lista").append("<li>"+valor + "</li>");
}

