$("#op4").on("click", function () {
  console.log(window.location.pathname)
  var user = sessionStorage.getItem("user");
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
        tablaCarrito.innerHTML +=
          "<tr><td colspan='5'><p class='text-center'>No tienes nada en carrito</p></td></tr>";
      }
    },
  });
});

$(".btn-hamburguesa").on("click", () => {
  $(".barra")[0].style.display = "block"
}) 

$(".cerrar_barra").on("click", () => {
  $(".barra")[0].style.display = "none"
})

