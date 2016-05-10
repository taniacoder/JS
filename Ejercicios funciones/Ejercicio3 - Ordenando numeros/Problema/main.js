
function ordenador(a,b,c){
	var menor, mayor;
	if (a===b||b===c||a===c) {
		alert("Los tres números son iguales. Por favor, recargue nuevamente la página e INGRESE TRES NÚMEROS DIFERENTES");
	}else{
		if (a<b&&a<c) {
			menor=a;
		}else if (b<c&&b<a) {
			menor=b;
		}else if(c<a&&c<b){
			menor=c;
		}
		if (a>b&&a>c) {
			mayor=a;
		}else if (b>a&&b>c) {
			mayor=b;
		}else if(c>a&&c>b){
			mayor=c;
		}
		alert("El menor número es: "+menor+"\nY el mayor es: "+mayor);
	}
}
var a=parseInt(prompt("Ingrese el primer número"));
var b=parseInt(prompt("Ingrese el segundo número"));
var c=parseInt(prompt("Ingrese el tercer número"));

ordenador(a, b ,c);