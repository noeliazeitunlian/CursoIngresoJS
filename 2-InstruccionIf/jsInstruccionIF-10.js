/*Genero el número RANDOM entre 1 y 10 
	Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	var nota;

	nota = Math.floor(Math.random() * 10) + 1;

	{
		alert("Tu nota es " +nota);
	}

	if ( nota == 10 || nota == 9)
	
	{ 
		alert("EXCELENTE"); 
	}

	else 
	{
		if (nota >=4)
		{ 
			alert("APROBÓ");
		}

		else
		{
			alert ("Vamos, la próxima se puede");
		}
	}

}