
function valor_futuro(){ 

	var valor=parseInt(prompt("Ingrese el valor: "));
	var tasa=parseInt(prompt("Ingrese la tasa: "));
	var periodo=parseInt(prompt("Ingrese periodo"));
	futuro(valor,tasa,periodo);

	function futuro(valor,tasa,periodo){
		var valor_inversion=0;
		var inversion ={
		valor: valor,
		tasa:tasa,
		periodo:periodo,
		}
		valor_inversion=inversion.valor*Math.pow(1+inversion.tasa/100,periodo);
		alert("El valor es: "+inversion.valor+" "+"La tasa es: "+inversion.tasa+" "+"EL periodo es: "+inversion.periodo);
		document.write("El valor futuro es : "+valor_inversion);

		return;
	}

}
              