function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	switch(destinoIngresado) {

		case "Bariloche":
		case "Usuahia": {
			alert("FRÍO.");
			break;
		}
		default: {
			alert("CALOR.");
		}
	}
}