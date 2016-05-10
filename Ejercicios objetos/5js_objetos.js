
function llamada(){ 

	var num=parseInt(prompt("Ingrese el numero: "));

	contacto(num);

	function contacto(num){
		var datos =[
		{
			numero:999999999,
			nombre:"Persona 1",
			llamada:"llamada",
		},
		{
			numero:111111111,
			nombre:"Persona 2",
			llamada:"llamada",
		},
		{
			numero:222222222,
			nombre:"Persona 3",
			llamada:"llamada",
		}];

		for(i=0;i<datos.length;i++){
			if(datos[i].numero==num){
				document.write("Te esta llamando: "+ datos[i].nombre)

			}
		 }
		return;
	}
}	