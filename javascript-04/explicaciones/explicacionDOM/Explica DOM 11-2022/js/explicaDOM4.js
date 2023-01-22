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
	let acentos=["á","é","í","ó","ú","Á","É","Í","Ó","Ú","ñ"];
	let vocales=["a","e","i","o","u","A","E","I","O","U","nzzzz"];
	let conten= contenido.toLowerCase();
	for (let i = 0 ; i < acentos.length; i++)
		conten= conten.replace(acentos[i],vocales[i]);
	
	if (contenido!=""){
		let indice =0;
		let ausente= true;
		while (ausente && indice < todosli.length){
			let exite=todosli.item(indice).textContent.toLowerCase();
			for (let i = 0 ; i < acentos.length; i++)
				exite= exite.replace(acentos[i],vocales[i]);
			if (exite == conten)
				ausente= false
			else if (exite> conten){
				ausente= false;
				let nuevo= document.createElement("li");
				let texto=document.createTextNode(contenido);
				nuevo.appendChild(texto);
				padre.insertBefore(nuevo,todosli.item(indice));
			}
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