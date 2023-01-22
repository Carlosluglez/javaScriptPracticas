if (document.addEventListener)
	window.addEventListener("load",comienzo)
else if (document.attachEvent)
	window.attachEvent("onload", comienzo);
	
function comienzo(){
	let boton = document.getElementById("poner");
	let cerrar=document.getElementById("cerrar");
	let boton2= document.getElementById("aceptar");
	if (document.addEventListener){
		boton.addEventListener("click", procesar);
		boton2.addEventListener("click", proceso);
		cerrar.addEventListener("click", cerrar_dialogo);
	} else if (document.attachEvent){
		boton.attachEvent("onclick", procesar);
		cerrar.attachEvent("onclick",cerrar_dialogo);
		boton2.attachEvent("click", proceso);
	}
}

function procesar(){
	document.getElementById("nombre2").value="";
	document.getElementById("apellidos").value="";
	document.getElementById("dialogo").setAttribute("open", "true");
}


function cerrar_dialogo(){
	document.getElementById("dialogo").removeAttribute("open");
}


function proceso(){
	let datoN = document.getElementById("nombre2").value;
	let datoA= document.getElementById("apellidos").value;
	let lista= document.getElementById("lista");
	let nuevo= document.createElement("li");
	let texto= document.createTextNode(datoN+ " " + datoA);
	nuevo.append(texto);
	lista.append(nuevo);
	document.getElementById("dialogo").removeAttribute("open");	
}