
//este codigo lo hace directamente desde html

// $(document).ready(function(){
//   $("#boton1").click(function(){
//     $("#texto").toggle(2500);
//   })
// });


//este codigo lo hace llamando al programa
$(document).ready(inicialiarPrograma);

function inicialiarPrograma(){
  $("#boton1").click(mostrarOcultarText);
}

function mostrarOcultarText(){
  $("#texto").toggle(2000);
}
