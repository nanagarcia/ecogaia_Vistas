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

                productos.innerHTML += "<div class='producto ms-5 mb-3' id='producto'><img  src='https://cdn.pixabay.com/photo/2022/02/04/08/59/soap-6992365_640.jpg'  alt='producto'  /><h1 class='articulos text-center text-success'>"+producto.prod_Nombre+"</h1><p>$"+producto.prod_Precio+"</p><!-- Button trigger modal --><button  type='button'  class='btn btn-success mb-2'  data-bs-toggle='modal'  data-bs-target='#exampleModal'"+ i +"'>Mas información</button>"
                productos.innerHTML += "<!-- Modal --><div  class='modal fade w-25'  id='exampleModal'  tabindex='-1'  aria-labelledby='exampleModalLabel'  aria-hidden='true'><div class='modal-dialog modal-dialog-centered'><div class='modal-content'><div class='modal-header'><h1 class='modal-title fs-5 text-success'id='exampleModalLabel'>Mas información</h1><button type='button'class='btn-close'data-bs-dismiss='modal'aria-label='Close'></button></div><div class='modal-body'><i class='fa-regular fa-star'></i><img class='producto_img'src='https://frutosalvaje.com/wp-content/uploads/2021/11/Cepillo-de-Bambu_1-1-1536x1536.png'alt=''/><p class='precio'>"+producto.prod_Categoria+"</p><h1 class='text-center text-success'>"+producto.prod_Nombre+"</h1><p class='contenido '>$"+producto.prod_Precio+"</p><button type='button' class='btn btn-success'>Agregar a Carrito</button></div></div></div></div></div></div>"
              
              })

          },
        });
      }
      listar()

});
/* 
<div class="producto ms-5" id="producto"><img  src="https://cdn.pixabay.com/photo/2022/02/04/08/59/soap-6992365_640.jpg"  alt="producto"  /><h1 class="articulos text-success">producto.prod_Nombre</h1><p>producto.prod_Precio</p><!-- Button trigger modal --><button  type="button"  class="btn btn-success mb-2"  data-bs-toggle="modal"  data-bs-target="#exampleModal"+ i +"">Mas información</button>
<!-- Modal --><div  class="modal fade w-25"  id="exampleModal"  tabindex="-1"  aria-labelledby="exampleModalLabel"  aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h1 class="modal-title fs-5 text-success"id="exampleModalLabel">Mas información</h1><button type="button"class="btn-close"data-bs-dismiss="modal"aria-label="Close"></button></div><div class="modal-body"><i class="fa-regular fa-star"></i><imgclass="producto_img"src="https://frutosalvaje.com/wp-content/uploads/2021/11/Cepillo-de-Bambu_1-1-1536x1536.png"alt=""/><p class="precio">+producto.prod_Categoria+</p><h1 class="text-success">+producto.prod_Nombre+</h1><p class="contenido "></p><button type="button" class="btn btn-success">Agregar a Carrito</button></div></div></div></div></div></div>
 */