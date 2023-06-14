$("#op4").on("click",function(){
  tablaCarrito.innerHTML = ""
  var user = sessionStorage.getItem("user")
  $.ajax({
    url: "http://localhost:8080/cotizacionesUsuario/"+ user,
    type: "GET",
    dataType: "JSON",
    success: function(res){
      if (res.length > 0) {
        res.forEach((cotiza) => {
          var nombre = cotiza.Prod_Nombre
          if (cotiza.Prod_Nombre.length > 14) {
            nombre = cotiza.Prod_Nombre.slice(0,14) + "..."
          }
          tablaCarrito.innerHTML += '<tr><td>'
          + cotiza.codigo_carrito + '</td><td>'
          + nombre + '</td><td>'
          + cotiza.cantidad + '</td><td>'
          + cotiza.total + '</td>'
        });
      } else {
        tablaCarrito.innerHTML += "<tr><td colspan='5'><p class='text-center'>No tienes nada en carrito</p></td></tr>"
      }
    }
    
  })
})