function mostrar()
{
	var mesDelAño =txtIdMes.value;
	switch(mesDelAño)
	{

		case "Febrero":{
			alert ("Tiene 28 días");
			break;
		}

		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre": {

		alert("Tiene 31 días.");
		break;
		}

	default: {
		alert("Tiene 31 días.");
		}
	}
}