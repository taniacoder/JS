
function primo(num){
	var cont=0;
	for (var i = 1; i <=num; i++) {
		if (num%i===0) {
			cont+=1;
		}
	}
	if (cont===2) {
		alert("El número es primo");
	}else{
		alert("El número no es primo");
	}
}
var num=parseInt(prompt("Ingresa un número para validar"));
primo(num);