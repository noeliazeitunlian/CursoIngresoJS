/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var Largo;
    var Ancho;
    var perimetro;
    var alambreTotal;

   Largo = txtIdLargo.value;
   Ancho = txtIdAncho.value;
  
   Largo = parseInt(Largo);
   Ancho = parseInt(Ancho);


   perimetro = (Largo *2) + (Ancho *2);

   alambreTotal = perimetro *3;


    alert("La cantidad de alambre que necesito es "  + alambreTotal);

}

 
function Circulo ()
{   var Radio; 
    var Circunferencia;
    var alambreTotal;


   Radio = txtIdRadio.value; 
   Radio = parseInt(Radio);

   Circunferencia = parseInt(Circunferencia);


   Circunferencia = (2*3.14) * Radio;

   Radio = (Circunferencia / 2)* 3.14 * 2

  alambreTotal = Radio*3;

  alert("La cantidad de alambre que necesito es " + alambreTotal);
}

	/*Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen. 
function Materiales () */
{
    var Largo;
    var Ancho;
    var bolsaCemento;
    var bolsaCal;
    var Total;
    
    Largo = txtIdLargo.value;
    Ancho = txtIdAncho.value;
  
   Largo = parseInt(Largo);
   Ancho = parseInt(Ancho);
  

   Largo = 1;
   Ancho = 1;

}