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
	let padre= document.getElementById("lista");
	let todosli=padre.getElementsByTagName("li");
	let contenido= document.getElementById("nombre").value.trim();
	if (contenido!=""){
		let indice =0;
		let ausente= true;
		while (ausente && indice < todosli.length){
			if (todosli.item(indice).textContent == contenido)
				ausente= false;
			indice +=1;
		}
		if (ausente){
			let nuevo= document.createElement("li");
			let texto=document.createTextNode(contenido);
			nuevo.appendChild(texto);
			padre.appendChild(nuevo);
		}
	}
}