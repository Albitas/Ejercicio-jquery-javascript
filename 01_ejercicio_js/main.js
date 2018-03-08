
//EJERCICIO 1
$("#img1").on("mouseover", function(){
    /*El atributo que va a cambiar, img1 es el identificador y es el selector que llasm, luego la funcion atrr crea o
    establece la otra imgagen*/
    $("#img1").attr("src", "img/rio.jpg")
    console.log("Cambia la foto si pasas ratón por encima");
    
});

$("#img1").on("mouseout", function(){
    $("#img1").attr("src", "img/arbol.jpg")
})
