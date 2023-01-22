// css
.entrando{
	background-color:blue;
	color:white;
}

//javascript
function entrar(){
	$("#uno").addClass(entrado);
}

function salir(){
	$("#uno").removeClass(entrado);
}
// o bien, equivale a las dos anteriores
function entrarSalir(){
	$("#uno").toggleClass(entrado);
}
