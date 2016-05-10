
function objeto(){ 

	var radio=parseInt(prompt("Ingrese el radio: "));

	circulo(radio);

	function circulo(radio){
		var area=0;
		var longitud=0;
		area=radio*radio*Math.PI;
		longitud=2*Math.PI*radio;
		var datos ={
		area: area,
		longitud:longitud,
		}
		document.write("El area es: "+datos.area);

		return;
	}
}


