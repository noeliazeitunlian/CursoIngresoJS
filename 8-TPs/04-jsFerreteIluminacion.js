/*
Noelia Zeitunlian.

4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 



function CalcularPrecio () 
{
     var precio;
     var importeDescuento;
     var precioDescuento;

     var precioFinal;

     var cantidad;
     cantidad = txtIdCantidad.value;

     var marcaElegida;

     marcaElegida = Marca.value;

     var ingresosBrutos;
     var precioImpuestos;
     
     precio = parseInt(precio);
     precioDescuento = parseInt(precioDescuento);
     cantidad = parseInt(cantidad);
     importeDescuento = parseInt(importeDescuento);
     precioFinal = parseInt(precioFinal);
     ingresosBrutos = parseInt(ingresosBrutos);
     precioImpuestos = parseInt(precioImpuestos);

     precio = 35
   

     if (cantidad > 5)
          {
          importeDescuento = (cantidad * precio) 
          precioFinal = importeDescuento - (importeDescuento * 0.50)        
     }

     else {
     
          if (cantidad == 5 )
          if (marcaElegida == "ArgentinaLuz") 
     
          {    importeDescuento = (cantidad * precio)
               precioFinal = importeDescuento - (importeDescuento * 0.40)             
          }

          else 
          {
               importeDescuento = (cantidad * precio)
               precioFinal = importeDescuento - (importeDescuento * 0.30)           
          }
     } 


     if   (cantidad ==4)
     if   (marcaElegida == "ArgentinaLuz" || marcaElegida == "FelipeLamparas") 
     
     {    importeDescuento = (cantidad * precio)
          precioFinal = importeDescuento - (importeDescuento * 0.25)        
     }
     
     else {
          importeDescuento = (cantidad * precio)
          precioFinal = importeDescuento - (importeDescuento * 0.20)        
          }


     if (cantidad == 3)
     if (marcaElegida == "ArgentinaLuz") 

     {    importeDescuento = (cantidad * precio)
          precioFinal = importeDescuento - (importeDescuento * 0.15)          
     }

     else 
     {
          if (marcaElegida == "FelipeLamparas") 
          
          {    importeDescuento = (cantidad * precio)
               precioFinal = importeDescuento - (importeDescuento * 0.10)
          }

          else 

          {
               precioFinal = importeDescuento - (importeDescuento * 0.5)
          }
     }


 if (precioFinal > 120)

     { 
          ingresosBrutos = precioFinal + (precioFinal * 0.10)

          precioImpuestos = precioFinal + ingresosBrutos

          alert("Usted pago $" +ingresosBrutos+ " de IIBB.");

     }

     txtIdprecioDescuento.value = precioFinal;

}

*/
function CalcularPrecio () 
{
     var precio;
     var importeDescuento;
     var precioDescuento;

     var precioFinal;

     var cantidad;
     cantidad = txtIdCantidad.value;

     var marcaElegida;

     marcaElegida = Marca.value;

     var ingresosBrutos;
     var precioImpuestos;
     
     precio = parseInt(precio);
     precioDescuento = parseInt(precioDescuento);
     cantidad = parseInt(cantidad);
     importeDescuento = parseInt(importeDescuento);
     precioFinal = parseInt(precioFinal);
     ingresosBrutos = parseInt(ingresosBrutos);
     precioImpuestos = parseInt(precioImpuestos);

     precio = 35
   

     if (cantidad > 5)
          {
          importeDescuento = (cantidad * precio) 
          precioFinal = importeDescuento - (importeDescuento * 0.50)  }
     
     else {

     switch(cantidad) {
     
        case 5: 
     
          switch (marcaElegida) {

               case "ArgentinaLuz": { 
     
             importeDescuento = (cantidad * precio)
               precioFinal = importeDescuento - (importeDescuento * 0.40)     
               
               break; }

          default: 
          {
               importeDescuento = (cantidad * precio)
               precioFinal = importeDescuento - (importeDescuento * 0.30)           
          }
     
          }
     
     break;

     case 4:
          {
               switch (marcaElegida){
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
     
          {    importeDescuento = (cantidad * precio)
          precioFinal = importeDescuento - (importeDescuento * 0.25)        
          }
          break;

          default: {
          importeDescuento = (cantidad * precio)
          precioFinal = importeDescuento - (importeDescuento * 0.20)        
          }

     }
     
     break;
}

     case 3: { 

          switch(marcaElegida){
               case "ArgentinaLuz":

          {importeDescuento = (cantidad * precio)
          precioFinal = importeDescuento - (importeDescuento * 0.15)       

          break;    }  
     
          case "FelipeLamparas": 
          
          {    importeDescuento = (cantidad * precio)
               precioFinal = importeDescuento - (importeDescuento * 0.10)
               break;
          }

          default:
          {
               precioFinal = importeDescuento - (importeDescuento * 0.5)
          }
     }

     }


 if (precioFinal > 120)

     { 
          ingresosBrutos = precioFinal + (precioFinal * 0.10)

          precioImpuestos = precioFinal + ingresosBrutos

          alert("Usted pago $" +ingresosBrutos+ " de IIBB.");

     }

     txtIdprecioDescuento.value = precioFinal;

}
     }
}