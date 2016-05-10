
function factura(){ 
	var nomb_empresa=prompt("Ingrese su nombre de empresa");
	var direccion_empresa=prompt("Ingrese su direccion de empresa");
 	var telefono=prompt("Ingrese su telefono de empresa");
 	var nif=prompt("Ingrese su nif de empresa");
 	var nomb_cliente=prompt("Ingrese su nombre de cliente");
 	var direccion_cliente=prompt("Ingrese direccion del cliente");
 	var telefono_cliente=prompt("Ingrese telefono del  cliente");
 	var nif_cliente=prompt("Ingrese el nif");
 	var description=prompt("Ingrese lal descripcion");
 	var precio=prompt("ingre el precio");
 	var cantidad=prompt("Ingrese la cantidad");
 	var importe=prompt("Ingrse los importes");
 	var tipo=prompt("Ingrese el tipo");
 	var pago=prompt("forma_pago");

	ourfactura(nomb_empresa,direccion_empresa,telefono,nif,nomb_cliente,direccion_cliente,telefono_cliente,nif_cliente,description,precio,cantidad,importe,tipo,pago);
	function ourfactura(nomb_empresa,direccion_empresa,telefono,nif,nomb_cliente,direccion_cliente,telefono_cliente,nif_cliente,description,precio,cantidad,importe,tipo,pago){

	var acum=0; 
	var mifactura={
		nombre_empresa: nomb_empresa,
		direccion: direccion_empresa,
		telefono: telefono,
		NIF: nif,
		Cliente:{
			nombre_cliente: nomb_cliente,
			direccion: direccion_cliente,
			telefono:telefono_cliente,
			NIF: nif_cliente,

		},
		Elementos:{
			decripcion: description,
			precio:  precio,
			cantidad: cantidad, 
		},
		Factura:{
			importe_total: importe,
			tipo_iva: tipo,
			forma_pago: pago,
		},
	}	
		acum=acum+mifactura.Elementos.precio;
		document.write("El pago total es: "+acum);
		return;
	} 

}
              