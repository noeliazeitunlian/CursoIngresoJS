/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
	
	var edadIngresada; 
	edadIngresada = prompt("Ingrese su edad(18-90 años.");

	while (edadIngresada<18 || edadIngresada >90)
	{
		edadIngresada = prompt("Error! Reingrese su edad.");
	}
	txtIdEdad.value = edadIngresada;

	var sexoIngresado;
	sexoIngresado = prompt ("Ingrese 'M' para masculino y 'F' para femenino");

	while (sexoIngresado!="F" &&	sexoIngresado!="M")
	{
		sexoIngresado = prompt("Error! Reingrese su sexo");
	}
	txtIdSexo.value = sexoIngresado;

	var estadoCivilIngresado;
	estadoCivilIngresado = prompt("Ingrese su estado civil: 1-para soltero, 2-para casados, 3-para divorciados, 4-para viudos");
	
	while (estadoCivilIngresado<1 || estadoCivilIngresado>4)
	{
		estadoCivilIngresado = prompt("Error! Reingrese su estado civil");
	}
txtIdEstadoCivil.value = estadoCivilIngresado;

	var sueldoBruto;
	sueldoBruto = prompt ("Ingrese su sueldo bruto, no menor a 8000");

	while (sueldoBruto <8000)
	{
		sueldoBruto = prompt("Error! Reingrese su sueldo");
	}
	txtIdSueldo.value = sueldoBruto;


	var numeroDeLegajo;
	numeroDeLegajo = parseInt(numeroDeLegajo);

	numeroDeLegajo = prompt ("Ingrese el número de legajo.");
	

	while (numeroDeLegajo<1000 || numeroDeLegajo>9999)
	{
		numeroDeLegajo = prompt("Error! Numero de legajo incorrecto.");
	}
	txtIdLegajo.value = numeroDeLegajo;

	var Nacionalidad;


}
