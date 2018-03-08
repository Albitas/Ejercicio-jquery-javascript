
//Ejercicio 2
//Que es lo que va a hacer cuando entres
$(document).ready(function(){
    $("#mensaje_img1").hide()
})

$("#imagen1").hover(function(){

//Se mosttrará    
$("#mensaje_img1").show()
//Que es lo que va a hacer cuando salga
}, function(){

//No se mostrará
$("#mensaje_img1").hide()
})