import { on_session } from "./index.js";

$(document).ready(function(){
    $(".barra")[0].style.backgroundColor = "#000000"
    $.ajax({
        url:"http://localhost:8080/distribuir/montesrojasconsuelo@gmail.com" /* + sessionStorage.getItem("user") */ ,
        type: "GET",
        dataType: "JSON",

        success: function(respuesta){
            console.log(respuesta)

            /* respuesta.forEach(function(res2){
    
                console.log(res2.prod_nombre)
                
            }); */

            respuesta.forEach(function(rep) {

                tabla.innerHTML += '<tr><td>'
                + rep.venta_Codigo + '</td><td>'
                + rep.id_Usuario + '</td><td>'
                + rep.usu_nombre + '</td><td>'
                + rep.usu_direccion + '</td><td>'
                + rep.usu_telefono + '</td><td>'
                + rep.prod_nombre + '</td>'
                
            });
        }
    })
})