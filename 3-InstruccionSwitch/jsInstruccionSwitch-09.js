/*una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% 
cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas 
y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% 
y Cordoba tiene el precio sin descuento
*/

function mostrar()
{
	var estacionIngresada = txtIdEstacion.value;

	var destinoIngresado = txtIdDestino.value;
	
	var base;
	base = 150000;

	var mensaje;
	var descuento;
	var tarifaFinal;

	
/*	var descuentoDiez;
	descuentoDiez = base - (base * 0.10)
	descuentoDiez = parseInt(descuentoDiez);

	var descuentoVeinte;
	descuentoVeinte = base - (base * 0.10)
	descuentoVeinte = parseInt(descuentoVeinte);

	var aumentoVeinte;
	aumentoVeinte = base + (base * 0.20)
	aumentoVeinte = parseInt(aumentoVeinte);

	var precioFinal1;	
	precioFinal1 = base - descuentoDiez
	precioFinal1 = parseInt(precioFinal1);
	

	var precioFinal2;
	precioFinal2 = base - descuentoVeinte
	precioFinal2 = parseInt(precioFinal2);

	var precioFinal3;
	precioFinal3 = base + aumentoVeinte
	precioFinal3 = parseInt(precioFinal3);
*/	

	switch (estacionIngresada) {
		case "Invierno":  
			switch (destinoIngresado) 
			{
				case "Cataratas":
				case "Cordoba": 
				
				descuento = -10;
				mensaje = "Se aplicará un descuento";
				break;
			
				case "Bariloche":
				descuento = 10;
				mensaje = "Se aplicará un aumento";
				break;
				
				default: 
				descuento = 0;
				mensaje = "No se aplicará nada";
				break;		
			}
		break;
	}

tarifaFinal = base + base*descuento/100;

mensaje = mensaje+"El precio final de la tarifa es "+tarifaFinal; 
alert (mensaje);



}//FIN DE LA FUNCIÓN