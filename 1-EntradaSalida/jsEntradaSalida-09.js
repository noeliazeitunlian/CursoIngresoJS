/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;
	

	sueldo = txtIdSueldo.value;

	sueldo = parseInt(sueldo);

	resultado= parseInt(resultado);

	resultado=sueldo+(sueldo*10/100);

	txtIdResultado.value=resultado;
	
	alert("El aumento del sueldo es " + resultado);

}
