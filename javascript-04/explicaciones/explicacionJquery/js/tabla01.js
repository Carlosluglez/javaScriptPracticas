$(window).on("load",inicial);

function inicial(){
	$("#poner").on("click",poniendo);
}

function poniendo(){
	let nom=$("#nombre").val();
	let ape=$("#apellidos").val();
	let padre=$("#tabla>tbody");
	$(padre).append("<tr><td>"+nom+"</td><td>"+ape+"</td></tr>");
}



