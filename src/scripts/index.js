$(document).ready(() => {
  on_session(); 
  if (window.location.pathname == "/src/views/index.html") {
    const productos = document.getElementById("productos");
    const listar = () => {
      $.ajax({
        url: "http://localhost:8080/listarProducto",
        type: "GET",
        datatype: "JSON",
        success: (res) => {
          res.forEach((producto) => {
            productos.innerHTML +=
              "<div class='producto mx-4 mb-3' id='producto'><img  src='https://cdn.pixabay.com/photo/2022/02/04/08/59/soap-6992365_640.jpg'  alt='producto'  /><h1 class='articulos text-center text-success'>" +
              producto.prod_Nombre +
              "</h1><p>$" +
              producto.prod_Precio +
              "</p><!-- Button trigger modal --><button id=''  type='button'  class='btn btn-success mb-2'  data-bs-toggle='modal'  data-bs-target='#exampleModal" +
              producto.prod_Codigo +
              "'>Mas información</button>";
            productos.innerHTML +=
              '<!-- Modal --><div  class="modal fade w-25"  id="exampleModal'+producto.prod_Codigo+'"  tabindex="-1"  aria-labelledby="exampleModalLabel"  aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h1 class="modal-title fs-5 text-success"id="exampleModalLabel">Mas información</h1><button type="button"class="btn-close"data-bs-dismiss="modal"aria-label="Close"></button></div><div class="modal-body"><i onclick="add('+"'"+producto.prod_Codigo+"','"+sessionStorage.getItem("user")+"'"+')" class="fa-regular fa-star"></i><img class="producto_img"src="https://frutosalvaje.com/wp-content/uploads/2021/11/Cepillo-de-Bambu_1-1-1536x1536.png"alt=""/><p class="precio">' +
              producto.prod_Categoria +
              "</p><h1 class='text-center text-success'>" +
              producto.prod_Nombre +
              "</h1><p class='contenido '>$" +
              producto.prod_Precio +
              '</p><button type="button" onclick="addCar('+"'"+producto.prod_Codigo+"','"+sessionStorage.getItem("user")+"'"+')" class="btn btn-success">Agregar a Carrito</button></div></div></div></div></div></div>';
          });
        },
      });
    }

    listar()

    $("#search_product").on("input", (e) => {
      const nombre = e.target.value
      if (nombre == "") {
        productos.innerHTML = ""
        listar()
      } else {
        $.ajax({
          url: "http://localhost:8080/nombreProducto/" + nombre,
          type: "GET",
          datatype: "JSON",
          success: (res) => {
            productos.innerHTML = ""
            res.forEach((producto) => {
              productos.innerHTML +=
                "<div class='producto ms-5 mb-3' id='producto'><img  src='https://cdn.pixabay.com/photo/2022/02/04/08/59/soap-6992365_640.jpg'  alt='producto'  /><h1 class='articulos text-center text-success'>" +
                producto.prod_Nombre +
                "</h1><p>$" +
                producto.prod_Precio +
                "</p><!-- Button trigger modal --><button id=''  type='button'  class='btn btn-success mb-2'  data-bs-toggle='modal'  data-bs-target='#exampleModal" +
                producto.prod_Codigo +
                "'>Mas información</button>";
              productos.innerHTML +=
                '<!-- Modal --><div  class="modal fade w-25"  id="exampleModal'+producto.prod_Codigo+'"  tabindex="-1"  aria-labelledby="exampleModalLabel"  aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h1 class="modal-title fs-5 text-success"id="exampleModalLabel">Mas información</h1><button type="button"class="btn-close"data-bs-dismiss="modal"aria-label="Close"></button></div><div class="modal-body"><i onclick="add('+"'"+producto.prod_Codigo+"','"+sessionStorage.getItem("user")+"'"+')" class="fa-regular fa-star"></i><img class="producto_img"src="https://frutosalvaje.com/wp-content/uploads/2021/11/Cepillo-de-Bambu_1-1-1536x1536.png"alt=""/><p class="precio">' +
                producto.prod_Categoria +
                "</p><h1 class='text-center text-success'>" +
                producto.prod_Nombre +
                "</h1><p class='contenido '>$" +
                producto.prod_Precio +
                '</p><button type="button" class="btn btn-success">Agregar a Carrito</button></div></div></div></div></div></div>';
            })
          }
        })
      }
    })
  }

  $('#todos').on('click', function(){

    on_session();
    var i = 0;    
    if (window.location.pathname == "/src/views/index.html") {
      const productos = document.getElementById("productos");
      $.ajax({
        url: "http://localhost:8080/listarProducto",
        type: "GET",
        datatype: "JSON",
        success: (res) => {

          productos.innerHTML = ""
          res.forEach((producto) => {
            i++;
            productos.innerHTML +=
              "<div class='producto ms-5 mb-3' id='producto'><img  src='https://cdn.pixabay.com/photo/2022/02/04/08/59/soap-6992365_640.jpg'  alt='producto'  /><h1 class='articulos text-center text-success'>" +
              producto.prod_Nombre +
              "</h1><p>$" +
              producto.prod_Precio +
              "</p><!-- Button trigger modal --><button  type='button'  class='btn btn-success mb-2'  data-bs-toggle='modal'  data-bs-target='#exampleModal '" +
              i +
              "'>Mas información</button>";
            productos.innerHTML +=
              "<!-- Modal --><div  class='modal fade w-25'  id='exampleModal'  tabindex='-1'  aria-labelledby='exampleModalLabel'  aria-hidden='true'><div class='modal-dialog modal-dialog-centered'><div class='modal-content'><div class='modal-header'><h1 class='modal-title fs-5 text-success'id='exampleModalLabel'>Mas información</h1><button type='button'class='btn-close'data-bs-dismiss='modal'aria-label='Close'></button></div><div class='modal-body'><i class='fa-regular fa-star'></i><img class='producto_img'src='https://frutosalvaje.com/wp-content/uploads/2021/11/Cepillo-de-Bambu_1-1-1536x1536.png'alt=''/><p class='precio'>" +
              producto.prod_Categoria +
              "</p><h1 class='text-center text-success'>" 
              producto.prod_Nombre +
              "</h1><p class='contenido '>$" +
              producto.prod_Precio +
              "</p><button type='button' class='btn btn-success'>Agregar a Carrito</button></div></div></div></div></div></div>";
          });
        },
      });
    }
  })

  $('#hogar').on('click', function(){

    on_session();
    var i = 0;    
    if (window.location.pathname == "/src/views/index.html") {
      const productos = document.getElementById("productos");
      $.ajax({
        url: "http://localhost:8080/categoriasProducto/Hogar",
        type: "GET",
        datatype: "JSON",
        success: (res) => {

          productos.innerHTML = ""
          res.forEach((producto) => {
            i++;
            productos.innerHTML +=
              "<div class='producto ms-5 mb-3' id='producto'><img  src='https://cdn.pixabay.com/photo/2022/02/04/08/59/soap-6992365_640.jpg'  alt='producto'  /><h1 class='articulos text-center text-success'>" +
              producto.prod_Nombre +
              "</h1><p>$" +
              producto.prod_Precio +
              "</p><!-- Button trigger modal --><button  type='button'  class='btn btn-success mb-2'  data-bs-toggle='modal'  data-bs-target='#exampleModal '" +
              i +
              "'>Mas información</button>";
            productos.innerHTML +=
              "<!-- Modal --><div  class='modal fade w-25'  id='exampleModal'  tabindex='-1'  aria-labelledby='exampleModalLabel'  aria-hidden='true'><div class='modal-dialog modal-dialog-centered'><div class='modal-content'><div class='modal-header'><h1 class='modal-title fs-5 text-success'id='exampleModalLabel'>Mas información</h1><button type='button'class='btn-close'data-bs-dismiss='modal'aria-label='Close'></button></div><div class='modal-body'><i class='fa-regular fa-star'></i><img class='producto_img'src='https://frutosalvaje.com/wp-content/uploads/2021/11/Cepillo-de-Bambu_1-1-1536x1536.png'alt=''/><p class='precio'>" +
              producto.prod_Categoria +
              "</p><h1 class='text-center text-success'>" 
              producto.prod_Nombre +
              "</h1><p class='contenido '>$" +
              producto.prod_Precio +
              "</p><button type='button' class='btn btn-success'>Agregar a Carrito</button></div></div></div></div></div></div>";
          });
        },
      });
    }
  })

  $('#mascotas').on('click', function(){

    on_session();
    var i = 0;    
    if (window.location.pathname == "/src/views/index.html") {
      const productos = document.getElementById("productos");
      $.ajax({
        url: "http://localhost:8080/categoriasProducto/Maternidad",
        type: "GET",
        datatype: "JSON",
        success: (res) => {

          productos.innerHTML = ""
          res.forEach((producto) => {
            i++;
            productos.innerHTML +=
              "<div class='producto mb-4' id='producto'><img  src='https://cdn.pixabay.com/photo/2022/02/04/08/59/soap-6992365_640.jpg'  alt='producto'  /><h1 class='articulos text-center text-success'>" +
              producto.prod_Nombre +
              "</h1><p>$" +
              producto.prod_Precio +
              "</p><!-- Button trigger modal --><button  type='button'  class='btn btn-success mb-2'  data-bs-toggle='modal'  data-bs-target='#exampleModal '" +
              i +
              "'>Mas información</button>";
            productos.innerHTML +=
              "<!-- Modal --><div  class='modal fade'  id='exampleModal'  tabindex='-1'  aria-labelledby='exampleModalLabel'  aria-hidden='true'><div class='modal-dialog modal-dialog-centered'><div class='modal-content'><div class='modal-header'><h1 class='modal-title fs-5 text-success'id='exampleModalLabel'>Mas información</h1><button type='button'class='btn-close'data-bs-dismiss='modal'aria-label='Close'></button></div><div class='modal-body'><i class='fa-regular fa-star'></i><img class='producto_img'src='https://frutosalvaje.com/wp-content/uploads/2021/11/Cepillo-de-Bambu_1-1-1536x1536.png'alt=''/><p class='precio'>" +
              producto.prod_Categoria +
              "</p><h1 class='text-center text-success'>" 
              producto.prod_Nombre +
              "</h1><p class='contenido '>$" +
              producto.prod_Precio +
              "</p><button type='button' class='btn btn-success'>Agregar a Carrito</button></div></div></div></div></div></div>";
          });
        },
      });
    }
  })

  $('#maquillaje').on('click', function(){

    on_session();
    var i = 0;    
    if (window.location.pathname == "/src/views/index.html") {
      const productos = document.getElementById("productos");
      $.ajax({
        url: "http://localhost:8080/categoriasProducto/Maquillaje",
        type: "GET",
        datatype: "JSON",
        success: (res) => {

          productos.innerHTML = ""
          res.forEach((producto) => {
            i++;
            productos.innerHTML +=
              "<div class='producto ms-5 mb-3' id='producto'><img  src='https://cdn.pixabay.com/photo/2022/02/04/08/59/soap-6992365_640.jpg'  alt='producto'  /><h1 class='articulos text-center text-success'>" +
              producto.prod_Nombre +
              "</h1><p>$" +
              producto.prod_Precio +
              "</p><!-- Button trigger modal --><button  type='button'  class='btn btn-success mb-2'  data-bs-toggle='modal'  data-bs-target='#exampleModal '" +
              i +
              "'>Mas información</button>";
            productos.innerHTML +=
              "<!-- Modal --><div  class='modal fade w-25'  id='exampleModal'  tabindex='-1'  aria-labelledby='exampleModalLabel'  aria-hidden='true'><div class='modal-dialog modal-dialog-centered'><div class='modal-content'><div class='modal-header'><h1 class='modal-title fs-5 text-success'id='exampleModalLabel'>Mas información</h1><button type='button'class='btn-close'data-bs-dismiss='modal'aria-label='Close'></button></div><div class='modal-body'><i class='fa-regular fa-star'></i><img class='producto_img'src='https://frutosalvaje.com/wp-content/uploads/2021/11/Cepillo-de-Bambu_1-1-1536x1536.png'alt=''/><p class='precio'>" +
              producto.prod_Categoria +
              "</p><h1 class='text-center text-success'>" 
              producto.prod_Nombre +
              "</h1><p class='contenido '>$" +
              producto.prod_Precio +
              "</p><button type='button' class='btn btn-success'>Agregar a Carrito</button></div></div></div></div></div></div>";
          });
        },
      });
    }
  })

  $('#higiene').on('click', function(){

    on_session();
    var i = 0;    
    if (window.location.pathname == "/src/views/index.html") {
      const productos = document.getElementById("productos");
      $.ajax({
        url: "http://localhost:8080/categoriasProducto/Personal",
        type: "GET",
        datatype: "JSON",
        success: (res) => {

          productos.innerHTML = ""
          res.forEach((producto) => {
            i++;
            productos.innerHTML +=
              "<div class='producto ms-5 mb-3' id='producto'><img  src='https://cdn.pixabay.com/photo/2022/02/04/08/59/soap-6992365_640.jpg'  alt='producto'  /><h1 class='articulos text-center text-success'>" +
              producto.prod_Nombre +
              "</h1><p>$" +
              producto.prod_Precio +
              "</p><!-- Button trigger modal --><button  type='button'  class='btn btn-success mb-2'  data-bs-toggle='modal'  data-bs-target='#exampleModal '" +
              i +
              "'>Mas información</button>";
            productos.innerHTML +=
              "<!-- Modal --><div  class='modal fade w-25'  id='exampleModal'  tabindex='-1'  aria-labelledby='exampleModalLabel'  aria-hidden='true'><div class='modal-dialog modal-dialog-centered'><div class='modal-content'><div class='modal-header'><h1 class='modal-title fs-5 text-success'id='exampleModalLabel'>Mas información</h1><button type='button'class='btn-close'data-bs-dismiss='modal'aria-label='Close'></button></div><div class='modal-body'><i class='fa-regular fa-star'></i><img class='producto_img'src='https://frutosalvaje.com/wp-content/uploads/2021/11/Cepillo-de-Bambu_1-1-1536x1536.png'alt=''/><p class='precio'>" +
              producto.prod_Categoria +
              "</p><h1 class='text-center text-success'>" 
              producto.prod_Nombre +
              "</h1><p class='contenido '>$" +
              producto.prod_Precio +
              "</p><button type='button' class='btn btn-success'>Agregar a Carrito</button></div></div></div></div></div></div>";
          });
        },
      });
    }
  })


});


export const on_session = () => {
  var state = false;
  console.log(sessionStorage.getItem("status"));
  if (sessionStorage.getItem("status") != null) {
    if (sessionStorage.getItem("status") == "usuario") {
      $("#op8")[0].innerHTML = buttons(
        "./perfil.html",
        "inicio2",
        "user",
        "Perfil"
      );
      $("#op9")[0].innerHTML = buttons(
        "./index.html",
        "registro",
        "sign-out-alt",
        "Cerrar Sesion"
      );
      $("#op5")[0].style.display = "none";
      $("#op6")[0].style.display = "none";
      $("#op7")[0].style.display = "none";
      state = true;
    } else if (sessionStorage.getItem("status") == "admin") {
      $("#op8")[0].innerHTML = buttons(
        "./perfil.html",
        "inicio2",
        "user",
        "Perfil"
      );
      $("#op9")[0].innerHTML = buttons(
        "./index.html",
        "registro",
        "sign-out-alt",
        "Cerrar Sesion"
      );
      $("#op4")[0].style.display = "block";
      $("#op5")[0].style.display = "block";
      state = true;
    } else if (sessionStorage.getItem("status") == "repartidor") {
      $("#op8")[0].innerHTML = buttons(
        "./perfil.html",
        "inicio2",
        "user",
        "Perfil"
      );
      $("#op9")[0].innerHTML = buttons(
        "./index.html",
        "registro",
        "sign-out-alt",
        "Cerrar Sesion"
      );
      $("#op4")[0].style.display = "block";
      $("#op5")[0].style.display = "none";
      $("#op6")[0].style.display = "none";
      state = true;
    }
  } else {
    off_session();
  }
  $("#op9").on("click", () => {
    off_session();
  });
  return state;
};

export const buttons = (dir, clas, img, dest) => {
  const button =
    "<a href='" +
    dir +
    "' class='" +
    clas +
    "'><i class='fas fa-" +
    img +
    "'></i><span class='nav-item'>" +
    dest +
    "</span></a>";
  return button;
};

export const off_session = () => {
  if (sessionStorage.length > 0) {
    sessionStorage.removeItem("status");
  }
  $("#op4")[0].style.display = "none";
  $("#op5")[0].style.display = "none";
  $("#op6")[0].style.display = "none";
  $("#op7")[0].style.display = "none";
  $("#op8")[0].innerHTML = buttons(
    "./iniciosesion.html",
    "inicio2",
    "sign-out-alt",
    "Iniciar Sesion"
  );
  $("#op9")[0].innerHTML = buttons(
    "./registrarse.html",
    "registro",
    "tasks",
    "Registrarse"
  );
};

