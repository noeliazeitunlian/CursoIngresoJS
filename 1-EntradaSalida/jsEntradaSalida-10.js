/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
function mostrarAumento()
{
	var sueldo;

	var resultado;
	

	sueldo = txtIdImporte.value;

	sueldo = parseInt(sueldo);

	resultado= parseInt(resultado);

	resultado=sueldo-(sueldo*0.25);

	txtIdResultado.value=resultado;
	
	alert("El aumento del sueldo es " + resultado);
}


function MostrarAumento ()
{
    var producto;
	var importe;
	var porcentajeDeAumento;
	var precioConAumento;
	var precioFinal;

	producto= prompt ("Nombre del producto");

	importe = prompt("Importe del producto");

	porcentajeDeAumento = prompt("Ingrese el aumento");

	
	porcentajeDeAumento = importe * 0.25;

	precioConAumento = importe + (importe*0.25);

	precioFinal = precioConAumento;


	alert("el" +producto; "cuesta" importe; "sin aumento, tiene un aumento de $" porcentajeDeAumento; "y el precio final es: $" precioFinal; ", gracias por su compra");

}
*/

function MostrarMetros()
{
var ancho;
var largo;
var perimetro;
var superficie;
var metrosTotales;

ancho = prompt("Ingrese el ancho del terreno");
largo = prompt ("Ingrese el largo del terreno");

ancho = parseInt(ancho);
largo = parseInt(largo);
perimetro = parseInt(perimetro);
superficie = parseInt(superficie);

perimetro = (ancho*2) + (largo*2);
superficie = ancho*largo
metrosTotales = perimetro;

alert("El terreno tiene " metrosTotales; "mts, su perimetro total es de " perimetro; "y la superficie es de " superficie;);
}
