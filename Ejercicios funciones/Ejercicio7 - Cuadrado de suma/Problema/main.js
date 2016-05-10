
function cuadrado(a, b){
	var result=Math.pow(a+b, 2);
	alert("El cuadrado de la suma es: "+result);
}
var a=parseInt(prompt("Ingrese el primer número"));
var b=parseInt(prompt("Ingrese el segundo número"));
cuadrado(a, b);