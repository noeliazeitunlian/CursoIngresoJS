function mostrar()
{
	var edad;
	edad = txtIdEdad.value;

	edad = parseInt(edad);

	miEstadoCivil = estadoCivil.value;
	
	if(edad < 18 && miEstadoCivil != "Soltero" ) 
	{		
		alert("Es muy pequeño para NO ser soltero.");
	}

}

//FIN DE LA FUNCIÓN