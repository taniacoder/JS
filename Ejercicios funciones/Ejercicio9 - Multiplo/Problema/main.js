
function multi(num){
	
	var result="";
	for (var i = 0; i <10; i++) {
		var multiplo=num*i;
		result+=multiplo.toString()+", ";
	}
	alert("Los 10 primeros múltiplos del número "+num+" son: "+ result);
}
var num=parseInt(prompt("Ingrese un número"));
multi(num);
