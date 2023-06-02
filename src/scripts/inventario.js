$(document).ready(function(){


    let tabla = document.querySelector('#tabla')
    tabla.innerHTML = '<thead><th>Codigo</th><th>Nombre</th><th>Imagen</th><th>Categoria</th><th>Cantidad</th><th>Precio</th></thead>'

    $.ajax({
        url:"http://localhost:8080/listarProducto",
        type: "GET",
        dataType: "JSON",
        success: function(respuesta){
    
            /* respuesta.forEach(function(res2){
    
                console.log(res2.prod_Nombre)
                
            }); */

            console.log(respuesta);

            respuesta.forEach(function(invt) {

                tabla.innerHTML += '<tr><td>' 
                + invt.prod_Codigo + '</td><td>'
                + invt.prod_Nombre + '</td><td>'
                + invt.prod_Imagen + '</td><td>'
                + invt.prod_Categoria + '</td><td>'
                + invt.prod_Cantidad + '</td><td>'
                + invt.prod_Precio + '</td><td>'

                
            });
    
        }
    })
})