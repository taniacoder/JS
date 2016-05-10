// Escribe aquí tu codigo Javascript
alert("CANTIDAD DE DIGITOS")
function contar(num){
	if (num>0) {
		var elementos=num.split("");
		var sol=elementos.length;
		alert("El número ingresado tiene "+sol+" dígitos");
	}else{
		alert("Recargue la página e ingrese un número");
	}
}
var num=prompt("Ingrese un número");
contar(num);
