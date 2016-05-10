// Escribe aquí tu codigo Javascript

function menortres(a, b, c){
	var menor;
	if (a===b&&b===c) {
		alert("Los números ingresados son iguales");
		menor="NINGUNO"
	}else if (a<=b&&a<=c) {
		menor=a;
	}else if (b<=c&&b<=a) {
		menor=b;
	}else if (c<=a&&c<=b) {
		menor=c;
	}
	alert("El menor de los tres números es: "+menor);
}

var a=parseInt(prompt("Ingrese el primer número"));
var b=parseInt(prompt("Ingrese el segundo número"));
var c=parseInt(prompt("Ingrese el tercer número"));

menortres(a, b, c);