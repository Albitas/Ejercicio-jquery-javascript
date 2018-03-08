

//EJERCICIO 6

//Quitamos el cuadro rojo pero solo desde el apartado cerrar
$("#cerrar").on("click", function(){
    $("#banner").remove()
    
});  

//Remplazo imgagen 1 con click
$("#imagen1").on("click", function(){
    $("#imagen1").replaceWith("<div class='texto'> Agregado al carro </div>")
});  

//Remplazo imgagen 2 con click
$("#imagen2").on("click", function(){
    $("#imagen2").replaceWith("<div class='texto'> Agregado al carro </div>")
});  

//Remplazo imgagen 3 con click
$("#imagen3").on("click", function(){
    $("#imagen3").replaceWith("<div class='texto'> Agregado al carro </div>")
});  

//Remplazo imgagen 4 con click
$("#imagen4").on("click", function(){
    $("#imagen4").replaceWith("<div class='texto'> Agregado al carro </div>")
});  
