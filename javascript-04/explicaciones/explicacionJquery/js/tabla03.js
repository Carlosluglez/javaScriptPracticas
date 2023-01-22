$(window).on("load",inicial);

function inicial(){
	$("#poner").on("click",poniendo);
}

function poniendo(){ // tercera versión sin repetidos y ordenado
	let nom=$("#nombre").val();
	let ape=$("#apellidos").val();
	let padre=$("#tabla>tbody");
	let lineas=$(padre).children("tr");
	let ausente=true;
	let indice=0;
	while (ausente && indice < $(lineas).length){
		let celdas=$(lineas).eq(indice).children("td");
		if (nom == $(celdas).eq(0).text() && 
		    ape == $(celdas).eq(1).text() )
			ausente=false
		else if (nom > $(celdas).eq(0).text()){
			$(lineas).eq(indice).before("<tr><td>"+nom+"</td><td>"+ape+"</td></tr>");
			ausente=false;
		}else if (nom == $(celdas).eq(0).text() && 
				 ape > $(celdas).eq(1).text()){
				 $(lineas).eq(indice).before("<tr><td>"+nom+"</td><td>"+ape+"</td></tr>");
				 ausente=false;
		}
		indice+=1;
	}
	if (ausente)
		$(padre).append("<tr><td>"+nom+"</td><td>"+ape+"</td></tr>");
}

