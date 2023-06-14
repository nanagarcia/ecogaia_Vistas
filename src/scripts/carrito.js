$(document).ready(function(){
  console.log(window.location.pathname)
  var user = sessionStorage.getItem("user")
  $.ajax({
    url: "http://localhost:8080/cotizacionesUsuario/"+ user,
    type: "GET",
    dataType: "JSON",
    success: function(res){
      if (res.length > 0) {
        res.forEach((cotiza) => {
          tablaCarrito.innerHTML += '<tr><td>'
          + cotiza.codigo_cotizacion + '</td><td>'
          + cotiza.Prod_Nombre + '</td><td>'
          + cotiza.cantidad + '</td><td>'
          + cotiza.total + '</td>'
        });
      } else {

        tablaCarrito.innerHTML += "<tr><td colspan='5'><p class='text-center'>No tienes nada en carrito</p></td></tr>"
      }
      
    }
    
  })
})