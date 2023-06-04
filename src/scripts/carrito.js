$(document).ready(function(){

  $.ajax({
    url: "http://localhost:8080/listarCotizacion",
    type: "GET",
    dataType: "JSON",
    success: function(res){
      console.log(res)

      res.forEach((cotiza) => {

        tablaCarrito.innerHTML += '<tr><td>'
        + cotiza.codigo_cotizacion + '</td><td>'
        + cotiza.codigo_prod + '</td><td>'
        + cotiza.cantidad + '</td><td>'
        + cotiza.total + '</td>'
      });
    }
    
  })
})