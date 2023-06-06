$(document).ready((e) => {
        const productos = document.getElementById("productos")
        var i = 0
    const listar = ()=> {
        $.ajax({
          url: "http://localhost:8080/listarProducto",
          type: "GET",
          datatype: "JSON",
          success: (res) => {
            res.forEach((producto) => {
                i++

                
                productos.innerHTML += "<div class='producto' id='producto'style='margin: 2%;' ><img src=' ../public/assets/imgblosgs.jpg 'alt=''id='prod_imagen'/><h1 class='text-success' id='prod_nombre'>"+producto.prod_Nombre+"</h1><p>$"+producto.prod_Precio+"</p><!-- Button trigger modal --><button type='button' class='btn btn-success mb-2' data-bs-toggle='modal' data-bs-target='#exampleModal"+ i +"'>Mas información</button>"
                productos.innerHTML += "<!-- Modal --><div class='modal fade w-25' id='exampleModal"+i+"' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>  <div class='modal-dialog modal-dialog-centered'>    <div class='modal-content'><div class='modal-header'>      <h1 class='modal-title fs-5 text-success' id='exampleModalLabel'>Mas información</h1>        <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>      </div>      <div class='modal-body'>        <img class='producto_img' id='prod_imagen' src='../public/assets/imgblosgs.jpg' alt=''/>        <p class='precio' id='prod_p'>" +producto.prod_Categoria+"</p>        <h1 class='text-success'>" +producto.prod_Nombre+  "</h1>        <p class='contenido '>$" +producto.prod_Precio+  "</p>        <button type='button' class='btn btn-success'>Agregar a Carrito</button></div></div></div></div></div></div>"
              })
              
          },
        });
      }
      listar()

});