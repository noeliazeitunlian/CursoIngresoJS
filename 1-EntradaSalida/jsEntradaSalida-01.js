/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"

function mostrar()
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


	alert("el") +producto; ("cuesta") +importe; ("sin aumento, tiene un aumento de $")+porcentajeDeAumento; ("y el precio final es: $")+precioFinal;(", gracias por su compra");

}*/

function mostrar()
{
var ancho;
var largo;

var perimetro;
perimetro = parseInt(perimetro);

var superficie;
var metrosTotales;

ancho = prompt("Ingrese el ancho del terreno");
largo = prompt ("Ingrese el largo del terreno");


perimetro = (ancho*2) + (largo*2);
superficie = ancho*largo
metrosTotales = perimetro;

alert("El terreno tiene ") +metrosTotales;("mts, su perimetro total es de ")+perimetro;("y la superficie es de ")+superficie;
}
