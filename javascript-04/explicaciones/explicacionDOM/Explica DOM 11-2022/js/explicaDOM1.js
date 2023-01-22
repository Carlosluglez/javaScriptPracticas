if (document.addEventListener)
	window.addEventListener("load",iniciar)
else if (document.attachEvent)
	window.attachEvent("onload", iniciar);

function iniciar(){
	let boton= document.getElementById("poner");
	if (document.addEventListener)
		boton.addEventListener("click", crearElemento)
	else if (document.attachEvent)
		boton.attachEvent("onclick",crearElemento);
}

function crearElemento(){
	let contenido= document.getElementById("nombre").value.trim();
	if (contenido!=""){
		let nuevo= document.createElement("li");
		let texto=document.createTextNode(contenido);
		nuevo.appendChild(texto);
		let padre= document.getElementById("lista");
		padre.appendChild(nuevo);
	}
}