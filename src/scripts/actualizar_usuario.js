$(document).ready((e) => {
  const id = sessionStorage.getItem("status");
  var nombre = $("#nombre");
  var telefono = $("#telefono");
  var direccion = $("#direccion");
  var correo = $("#correo");
  var contrasenia = $("#contrasenia");
  var rol = "";
  $.ajax({
    url: "http://localhost:8080/usuarioId/" + id,
    type: "GET",
    datatype: "JSON",
    success: (res) => {
      nombre.val(res.usu_nombre);
      telefono.val(res.usu_telefono);
      direccion.val(res.usu_direccion);
      correo.val(res.usu_correo);
      contrasenia.val(res.usu_contrasenia);
      rol = res.rol;
    },
  });

  $("#actualizar").on("click", () => {
    if (contrasenia.val() == $("#con_contrasenia").val()) {
      $.ajax({
        url: "http://localhost:8080/actualizarUsuario",
        type: "PUT",
        data: {
          id_Usuario: id,
          usu_nombre: nombre.val(),
          usu_telefono: telefono.val(),
          usu_direccion: direccion.val(),
          usu_correo: correo.val(),
          usu_contrasenia: contrasenia.val(),
          rol: rol,
        },
        success: (res) => {
          alert(res);
          location.reload()
        },
        error: (xhr, status, error) => {
          console.log(error);
          console.log(xhr.responseText); // Información sobre el error
        },
      });
    } else {
      alert("Las contraseñas no coinciden");
    }
  });
});
