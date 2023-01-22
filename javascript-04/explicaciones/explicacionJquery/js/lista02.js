$(window).on("load",inicio);

function inicio(){
	$("#poner").on("click",aniadir);
}

function aniadir() { //versión 2 sin repetidos
	let valor=$("#nombre").val();
	let conjunto=$("#lista>li");
	let ausente=true;
	let indice=0;
	while (ausente && indice< $(conjunto).length){
		if ($(conjunto).eq(indice).text()==valor)
			ausente=false;
		indice +=1;
	}
	if (ausente)
		$("#lista").append("<li>"+valor + "</li>");
}

