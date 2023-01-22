$(window).on("load",inicio);

function inicio(){
	$("#poner").on("click",aniadir);
}

function aniadir() { //versión 3 sin repetidos y ordenado
	let valor=$("#nombre").val();
	let conjunto=$("#lista>li");
	let ausente=true;
	let indice=0;
	while (ausente && indice< $(conjunto).length){
		if ($(conjunto).eq(indice).text()==valor)
			ausente=false
		else if ($(conjunto).eq(indice).text() > valor){
			ausente=false;
			$(conjunto).eq(indice).before("<li>"+valor+"</li>");
		}
		indice +=1;
	}
	if (ausente)
		$("#lista").append("<li>"+valor + "</li>");
}