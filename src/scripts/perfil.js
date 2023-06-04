import { on_session } from "./index.js";

$(document).ready((e) => {
    const table = document.querySelector(".table-content")
    var id = sessionStorage.getItem("status")
  $.ajax({
    url: "http://localhost:8080/favoritosUsuario/"+id,
    type: "GET",
    datatype: "JSON",
    success: (res) => {
        table.innerHTML = ""
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
