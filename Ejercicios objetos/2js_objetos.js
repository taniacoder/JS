
function cuatrimestre(){ 
	var mes_actual=prompt("Ingrese el mes actual: ");
	
	var mimes=[
		{	mes:"enero",
			periodo:"primer_cuatrimestre",
			numero:1,
		},
		{
			mes:"febrero",
			periodo:"primer_cuatrimestre",
			numero:2,
		},
		{
			mes:"marzo",
			periodo:"primer_cuatrimestre",
			numero:3,
		},
		{
			mes:"abril",
			periodo:"primer_cuatrimestre",
			numero:4,
		},
		{
			mes:"mayo",
			periodo:"segundo_cuatrimestre",
			numero:5,
		},
		{
			mes:"junio",
			periodo:"segundo_cuatrimestre",
			numero:6,
		},
		{	mes:"julio",
			periodo:"segundo_cuatrimestre",
			numero:7,
		},
		{
			mes:"agosto",
			periodo:"tercer_cuatrimestre",
			numero:8,
		},
		{
			mes:"septiembre",
			periodo:"segundo_cuatrimestre",
			numero:9,
		},
		{
			mes:"octubre",
			periodo:"tercer_cuatrimestre",
			numero:10,
		},
		{
			mes:"noviembre",
			periodo:"tercer_cuatrimestre",
			numero:11,
		},
		{
			mes:"diciembre",
			periodo:"tercer_cuatrimestre",
			numero:12,
		},

		]

	for(var i=0;i<=mimes.length;i++){  
		if(mimes[i].mes ==mes_actual){
			document.write("Pertenece al : "+mimes[i].periodo);
		}

		}
}
              