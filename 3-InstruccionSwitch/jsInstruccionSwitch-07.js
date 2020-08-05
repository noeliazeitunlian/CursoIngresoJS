function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	switch(destinoIngresado) {
		case "Bariloche":
		case "Usuahia": {
			alert("Sur");
			break;
		}
		case "Mar del Plata": {
			alert ("Este") 
			break; }

		case "Cataratas":
			{
				alert("Norte");
			}
	}
}
