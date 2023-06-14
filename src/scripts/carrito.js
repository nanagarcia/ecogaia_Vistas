<<<<<<< HEAD
$(document).ready(function(){
  console.log(window.location.pathname)
  var user = sessionStorage.getItem("user")
=======
$("#op4").on("click", function () {
  console.log(window.location.pathname)
  var user = sessionStorage.getItem("user");
>>>>>>> 1e122b8a8dc1d9c07b1744767a0e6bd7dedc8493
  $.ajax({
    url: "http://localhost:8080/cotizacionesUsuario/" + user,
    type: "GET",
    dataType: "JSON",
    success: function (res) {
      if (res.length > 0) {
        res.forEach((cotiza) => {
          var nombre = cotiza.Prod_Nombre;
          if (cotiza.Prod_Nombre.length > 8) {
            nombre = cotiza.Prod_Nombre.slice(0, 8) + "...";
          }
          tablaCarrito.innerHTML +=
            "<tr><td>" +
            cotiza.codigo_carrito +
            "</td><td>" +
            nombre +
            "</td><td>" +
            cotiza.cantidad +
            "</td><td>" +
            cotiza.total +
            '</td><td><i class="fa fa-trash" onclick="deleteCar(' +
            cotiza.codigo_carrito +
            ')"></i></td>';
        });
      } else {
<<<<<<< HEAD

        tablaCarrito.innerHTML += "<tr><td colspan='5'><p class='text-center'>No tienes nada en carrito</p></td></tr>"
=======
        tablaCarrito.innerHTML +=
          "<tr><td colspan='5'><p class='text-center'>No tienes nada en carrito</p></td></tr>";
>>>>>>> 1e122b8a8dc1d9c07b1744767a0e6bd7dedc8493
      }
    },
  });
});
