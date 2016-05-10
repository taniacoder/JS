
function masa_corporal(){ 

	var peso=parseInt(prompt("Ingrese su peso: "));
	var estatura=parseInt(prompt("Ingrese su estatura en metros: "))
	

	function corporal(peso,estatura){
		var w_c=0;

		var datos ={ 
		
			w: peso,
			t:estatura,
		
		 };
			w_c=datos.w/((datos.t)*(datos.t));
			document.write("Su masa corporal es: "+w_c);

		return;
	}
	corporal(peso,estatura);
}	