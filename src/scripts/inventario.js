import { on_session } from "./index.js";

$(document).ready(function(){
    $(".barra")[0].style.backgroundColor = "#000000"
    if (sessionStorage.getItem("status") == "repartidor") {
        $("#buttons")[0].style.display = "none"
    }

    $.ajax({
        url:"http://localhost:8080/listarProducto",
        type: "GET",
        dataType: "JSON",
        success: function(respuesta){
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
        var inoots = "'<td><button onclick='insert()'>Agregar</button></td>  <td><input type='text' class='text-light' id='prod_Nombre' placeholder='Nombre producto'></td> <td><input type='text' id='prod_Imagen' class='text-light' placeholder='Imagen producto url'></td>    <td><input type='text' id='prod_Categoria' class='text-light' placeholder='Categoria producto'></td>   <td><input type='text' id='prod_Cantidad' class='text-light' placeholder='Cantidad producto'></td>   <td><input type='text' id='prod_Precio' class='text-light' placeholder='Precio producto'></td>"

        tabla.innerHTML += inoots
        
    })  

})