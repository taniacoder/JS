
function tratamiento(){  

	var cantidad_maximo=parseInt(prompt("Ingrese la cantidad maxima del tanque: "));
	var cantidad_disponible=parseInt(prompt("Ingrese la cantidad de litros disponibles: "));
	var pago_litro=parseInt(prompt("Ingrese el precio por litro de gasolina: "));
		  
	var recarga=parseInt(prompt("Ingrese la recarga de gasolina menor o igual que cantidad disponible"));
	
	function flujo(recarga,cantidad_disponible,pago_litro){
		var pago=0;
		var disp=0;
		pago=recarga*pago_litro;
		disp=cantidad_disponible-recarga;
		var carro ={ 
			p: pago,
			c:disp,
		 };
			document.write("Debe pagar: "+carro.p+ " "+ "La cantidad de litros de gasolina disponibles en el tanque es "+carro.c);
		return;
	}
	
		flujo(recarga,cantidad_disponible,pago_litro);
}

