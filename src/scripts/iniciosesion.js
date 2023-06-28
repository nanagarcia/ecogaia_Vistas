import { on_session } from "./index.js";
import { mostrarOculto } from "./index.js";


$(document).ready((e) => {
  $("#log_in").on("click", () => {
    const email = $("#correo").val();
    const pass = $("#contrasenia").val();
    console.log(email + pass);
    if (email == "" || pass == "") {      

      alerta.style.background="#E97578"
      mostrarOculto("Completa todos los campos")


     } else {
      $.ajax({
        url: "http://localhost:8080/validarUsuario/" + email + "/" + pass,
        type: "GET",
        datatype: "JSON",
        success: (res) => {
          if (res.error != "Usuario o contraseña incorrectos") {
            alerta.style.background="#dc3545"
            mostrarOculto(res)
            sessionStorage.setItem("status", res.rol);
            sessionStorage.setItem("user", res.res)
            window.location.href = "index.html";
          } else {
            alerta.style.background="#dc3545"
            mostrarOculto(res.error)
          }
        },
        error: (xhr, status, error) => {
          console.log(error);
          console.log(xhr.responseText); // Información sobre el error
        },
      });
    }
  });
});

<<<<<<< HEAD
$(".btn-hamburguesa").on("click", () => {
  $(".barra")[0].style.display = "block"
}) 

$(".cerrar_barra").on("click", () => {
  $(".barra")[0].style.display = "none"
})
=======

>>>>>>> e108a3f6d81ffb4599ae9969980fc5614e33bea5
