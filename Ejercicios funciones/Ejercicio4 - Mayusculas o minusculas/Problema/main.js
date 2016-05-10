
function may_min(frase){
	var letras=(((frase.split(" ")).join("")).split(""));
	var min=((((frase.toLowerCase()).split(" ")).join("")).split(""));
	var n_min, n_may;
	n_min=0;
	n_may=0;
	for (var i = 0; i < letras.length; i++) {
		if (letras[i]===min[i]) {
			n_min+=1;
		}else{
			n_may+=1;
		}
	}
	if (n_min===0) {
		alert("El texto está escrito en MAYÚSCULAS");
	}else if (n_may===0) {
		alert("El texto está escrito en minúsculas");
	}else{
		alert("El texto tiene palabras escritas en MAYÚSCULAS y también en minúsculas");
	}
}
var frase=prompt("Ingresa un texto para validarlo.");
may_min(frase);
