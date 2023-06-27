function add (codigo, id) {
    
    $.ajax({
        url: "http://localhost:8080/usuario/"+ id,
        type: "GET",
        datatype: "JSON",
        success: (res) => {
            $.ajax({
                url: "http://localhost:8080/insertarFavoritos/"+codigo+"/"+res.id_usuario,
                type:"POST",
                success: (res)=> {
             }
            })
        }
    })
}



function add(codigo, id) {
  $.ajax({
    url: "http://localhost:8080/usuario/" + id,
    type: "GET",
    datatype: "JSON",
    success: (res) => {
      $.ajax({
        url:
          "http://localhost:8080/insertarFavoritos/" +
          codigo +
          "/" +
          res.id_usuario,
        type: "POST",
        success: (res) => {
          if (res) {
            alerta.style.background="#EBD166"
            mostrarOculto("El producto se agrego a tus favoritos")   
          } else if (!res) {
            alerta.style.background="#EBD166"
            mostrarOculto("El producto se elimino de tus favoritos")   
          } else {
            alerta.style.background="#EBD166"
            mostrarOculto("No se puedo agregar el producto a tus favoritos")   
          }
        },
      });
    },
  });
}

function addCar(codigo, correo) {
  $.ajax({
    url:
      "http://localhost:8080/insertarCarrito/" +
      correo +
      "/" +
      codigo +
      "/" +
      1,
    type: "POST",
    success: (res) => {
      if (res) {
        alerta.style.background="#EBD166"
        mostrarOculto("El producto se agrego a tu carrito") 
      } else if (!res) {
        alerta.style.background="#EBD166"
        mostrarOculto("El producto se elimino de carrito") 
      } else {
        alerta.style.background="#EBD166"
        mostrarOculto("No se puedo agregar el producto al carrito") 
      }
    },
  });
}

function insert() {
  const newprod = {
    prod_Nombre: $("#prod_Nombre").val(),
    prod_Imagen: $("#prod_Imagen").val(),
    prod_Categoria: $("#prod_Categoria").val(),
    prod_Cantidad: $("#prod_Cantidad").val(),
    prod_Precio: $("#prod_Precio").val(),
  };

  $.ajax({
    url: "http://localhost:8080/insertarProducto",
    type: "POST",
    data: newprod,
    datatype: "text/plain",
    success: (res) => {
      alerta.style.background="#EBD166"
      mostrarOculto(res)  
      window.location.reload();
    },
  });
}

function deleteFav(codigo) {
  $.ajax({
    url: "http://localhost:8080/eliminarFavoritos/" + codigo,
    type: "DELETE",
    success: (res) => {
      alerta.style.background="#EBD166"
      mostrarOculto(res)   
      window.location.reload();
    },
  });
}

function deleteCar(codigo) {
  $.ajax({
    url: "http://localhost:8080/eliminarCarrito/" + codigo,
    type: "DELETE",
    success: (res) => {
      alerta.style.background="#EBD166"
      mostrarOculto(res)       
      window.location.reload();
    },
  });
}

function comprar() {
  $.ajax({
    url: "http://localhost:8080/compra/" + sessionStorage.getItem("user"),
    type: "GET",
    datatype: "JSON",
    success: (res) => {
      alerta.style.background="#EBD166"
      mostrarOculto(res) 
    },
  });
}

function sumCar(id, total, nombre) {
  var tdcantidad = $("#" + id)[0];
  var tdtotal = $("#" + total)[0];
  var sumtotal = parseInt(tdtotal.innerHTML);
  var cantidad = parseInt(tdcantidad.innerHTML);
  tdcantidad.innerHTML = cantidad + 1;

  $.ajax({
    url: "http://localhost:8080/nombreProducto/"+ nombre,
    type: "GET",
    datatype: "JSON",
    success: (res) => {
        tdtotal.innerHTML = sumtotal + res[0].prod_Precio
        $.ajax({
            url: "http://localhost:8080/sumarCarrito/" + id.slice(5, 6),
            type: "POST",
            datatype: "JSON",
            success: (res1) => {
              alerta.style.background="#EBD166"
              mostrarOculto(res1)  
            },
          });
    }
  })
}

function resCar(id, total, nombre) {
    var tdcantidad = $("#" + id)[0];
    var tdtotal = $("#" + total)[0];
    var restotal = parseInt(tdtotal.innerHTML);
    var cantidad = parseInt(tdcantidad.innerHTML);
    tdcantidad.innerHTML = cantidad - 1;
  
    $.ajax({
      url: "http://localhost:8080/nombreProducto/"+ nombre,
      type: "GET",
      datatype: "JSON",
      success: (res) => {
          tdtotal.innerHTML = restotal - res[0].prod_Precio
          $.ajax({
              url: "http://localhost:8080/restarCarrito/" + id.slice(5, 6),
              type: "POST",
              datatype: "JSON",
              success: (res1) => {
                alerta.style.background="#EBD166"
                mostrarOculto(res1)  
              },
            });
      }
    })
  }

  function mostrarOculto(frase){
    var alerta = document.getElementById("alerta");
    
    alerta.innerHTML= "<img src='../public/assets/alert_error.png'><span id='mensaje'></span>"
    var mensaje = document.getElementById("mensaje");
    alerta.classList.add("mostrar");
      mensaje.innerHTML=frase
      setTimeout(function() {
        alerta.classList.remove("mostrar");
      }, 3000);
  }
