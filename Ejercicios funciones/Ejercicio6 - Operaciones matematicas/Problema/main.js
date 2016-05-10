
function operacion(simbolo){
	var result, operation;
	switch (simbolo){
		case "+":
		result=a+b;
		operation="sumados";
		break;
		case "-":
		result=Math.abs(a-b);
		operation="restados";
		break;
		case "*":
		result=a*b;
		operation="multiplicados";
		break;
		case "/":
		result=a/b;
		operation="divididos";
		break;
		default:
		operation="No ingresó ningún operador válido";
		result="-";
	}
	alert("Los números "+a+" y "+b+" fueron "+operation+" y el resultado es "+result);
}
var a=parseInt(prompt("Ingrese un número"));
var b=parseInt(prompt("Ingrese el segundo número"));
var simbolo=prompt('Ingrese la operación que desea realizar.\n Puede usar los siguientes: "+", "-", "*" ó "/"');

operacion(simbolo);