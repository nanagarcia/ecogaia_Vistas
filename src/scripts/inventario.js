import { on_session } from "./index.js";

$(document).ready(function(){
    $(".barra")[0].style.backgroundColor = "#000000"
    $.ajax({
        url:"http://localhost:8080/listarProducto",
        type: "GET",
        dataType: "JSON",
        success: function(respuesta){
    
            /* respuesta.forEach(function(res2){
    
                console.log(res2.prod_Nombre)
                
            }); */
            respuesta.forEach(function(invt) {

                tabla.innerHTML += '<tr><td>' 
                + invt.prod_Codigo + '</td><td>'
                + invt.prod_Nombre + '</td><td>'
                + invt.prod_Imagen + '</td><td>'
                + invt.prod_Categoria + '</td><td>'
                + invt.prod_Cantidad + '</td><td>'
                + invt.prod_Precio + '</td>'

                
            });
    
        }
    })

    $("#btn_add_prod").on ("click",() =>{
        $.ajax({
            url: "http://localhost:8080/insertarProducto",
            type: "GET",
            datatype: "JSON",
            success: (res) => {
              res.forEach((producto) => {
                inventarioEco.innerHTML += " "
                })
  
            },
          });
        })

    
})