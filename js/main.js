var numeroAlAzar;
var puntos = 0;
var intentos = 0;

var imagenes = [
 "Ana.jpg", "Analy.jpg", 
 "Areli.jpg", "Beatriz.jpg", 
 "Cecilia.jpg", "Claudia.jpg", 
 "Daniela.jpg", "Elisa.jpg", 
 "Evelyn.jpg", "Gabriela.jpg", 
 "Grissel.jpg", "Guadalupe.jpg", 
 "Johana.jpg", "Joyce.jpg", 
 "Ofelia.jpg", "Patricia.jpg", 
 "Sharon.jpg", "Heredia.jpg", 
 "Karen.jpg", "Monica.jpg",  
 "Karla.jpg", "Leslie.jpg", 
 "Mishel.jpg", "Milca.jpg", 
 "Tayde.jpg", "Naibit.jpg", 
 "Nayeli.jpg", "Nelly.jpg", 
 "Reyna.jpg", "Adriana.jpg", 
 "Ruth-Lopez.jpg","Ruth-Vega.jpg",
 "Sandra-Bollo.jpg","Sandra-Diaz.jpg", 
 "Vianey.jpg", "Zazil.jpg"];

 var nombres = [ 
 "Anita", "Analy", 
 "Areli", "Bet",
 "Cecy", "Claudia", 
 "Daniela", "Elisa", 
 "Eve", "Gaby", 
 "Griss", "Lupita", 
 "Joy", "Joyce", 
 "Ofe", "Paty", 
 "Sharon", "Heredia", 
 "Karen", "Moni", 
 "Karla", "Leslie",
 "Mishel", "Milca", 
 "Tayde", "Naibit", 
 "Nayeli", "Nelly", 
 "Reyna", "Adri", 
 "Dj Ruth", "Ruth", 
 "Sandia", "San", 
 "Vian", "Zaz"];

 function desplegarPuntos(){
  $('#spanPuntos').text(puntos);
 };

function enteroRandomEnRango (min,max){
      var numero = Math.random () * (max - min) + min;
      var entero = Math.floor(numero);
      return entero;
    };

function desplegarNuevaJugada (){
  var tamanoArreglo = nombres.length;
  numeroAlAzar = enteroRandomEnRango(0, tamanoArreglo);
     console.log(numeroAlAzar);

  if (tamanoArreglo > 0){
    numeroAlAzar = enteroRandomEnRango(0, tamanoArreglo);
    var imagen = 'fotos/' + imagenes[numeroAlAzar];
    // console.log(imagen);
    $('#imagenPersona').attr('src', imagen);
  }else {
    alert('¡GANASTE!')
  }
};

$(document).ready(function(){

    $('#btnClick').click(function(){
        var nombre =$('#inputNombre').val();
        console.log(nombre);

        var nombreAAdivinar = nombres[numeroAlAzar];
        console.log('El nombre correcto es:' + nombreAAdivinar);


        if (nombre === nombreAAdivinar){

           // Quitar el elemento que ya no se quiere
           nombres.splice(numeroAlAzar, 1);
           imagenes.splice(numeroAlAzar, 1);

           puntos = puntos + 5;

           $("#spanPuntos").text(puntos);

          desplegarNuevaJugada();
        }else {
          alert('ERROR')
          puntos = puntos -1; //puntos -1

          $("#spanPuntos").text(puntos);
          
          intentos = intentos +1 //intentos +1

        }
    });//Termina onclick

    desplegarNuevaJugada();
});