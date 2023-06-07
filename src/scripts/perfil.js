import { on_session } from "./index.js";

$(document).ready((e) => {
    const table = document.querySelector(".table-content")
    var user = sessionStorage.getItem("user")

    $.ajax({
        url: "http://localhost:8080/usuario/"+user,
        type: "GET",
        datatype: "JSON",
        success: (res) => {
            if (res.usu_nombre.length > 20) {
                $("#userName")[0].innerHTML = res.usu_nombre.slice(0,15) + " ..."
            } else {
                $("#userName")[0].innerHTML = res.usu_nombre
            }
            
            $("#userEmail")[0].innerHTML = res.usu_correo
        }
    })

  $.ajax({
    url: "http://localhost:8080/favoritosUsuario/"+user,
    type: "GET",
    datatype: "JSON",
    success: (res) => {
        table.innerHTML = ""
        $("#cantFav")[0].innerHTML = res.length
        var i = 0
        if (res.length > 0) {
            res.forEach(fav => {
                i++
                table.innerHTML +="<tr id='fav"+i+"'><th scope='row'>"+i+"</th><td><img width='20' src='https://frutosalvaje.com/wp-content/uploads/2021/11/Cepillo-de-Bambu_1-1-1536x1536.png' alt='imgProd'></td><td><h5>"+fav.prod_Nombre+"</h5></td><td><p>"+fav.prod_Precio+"</p></td><td><p>"+fav.prod_Cantidad+"</p></td></tr>"
            });
        } else {
            table.innerHTML = "<tr><td colspan='5'><p class='text-center'>No tienes favoritos</p></td></tr>"
        }
    }
  });

  
});
