
//Ejercicio 3


//Cambia la imagen
//$("#contenedor2").attr("id","batman")


//Añade la clase .destacar
$("#elem1").addClass("destacar")
$("#elem2").addClass("destacar")
$("#elem3").addClass("destacar")
$("#elem4").addClass("destacar")

//Elimina la clase .destacar
//$("div").removeClass("destacar")


//IMAGEN 1
//Asi se pone rojo
$("#elem1").on("mouseover", function(){
    $("#elem1").addClass("destacar")
    $("img").attr("src", "img/arbol.jpg")
    $("img").show()
});  

//Asi se quita lo rojo
$("#elem1").on("mouseout", function(){
    $("#elem1").removeClass("destacar")
    $("img").hide()
});


//IMAGEN 2
//Rojo
$("#elem2").on("mouseover", function(){
    $("#elem2").addClass("destacar")
    $("img").attr("src", "img/lago.jpg")
    $("img").show()
    
});  

//Asi se quita lo rojo
$("#elem2").on("mouseout", function(){
    $("#elem2").removeClass("destacar")
    $("img").hide()
});


//IMAGEN 3
//Rojo
$("#elem3").on("mouseover", function(){
    $("#elem3").addClass("destacar")
    $("img").attr("src", "img/rio.jpg")
    $("img").show()
    
});  

//Asi se quita lo rojo
$("#elem3").on("mouseout", function(){
    $("#elem3").removeClass("destacar")
    $("img").hide()
});
//IMAGEN 4
//Rojo
$("#elem4").on("mouseover", function(){
    $("#elem4").addClass("destacar")
    $("img").attr("src", "img/sol.jpg")
    $("img").show()
    
});  

//Asi se quita lo rojo
$("#elem4").on("mouseout", function(){
    $("#elem4").removeClass("destacar")
    $("img").attr("src", "img/blanco.jpg")
    $("img").hide()
});
