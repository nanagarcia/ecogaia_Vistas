$(document).ready((e) => {
    $("#log_in").on("click", () => {
        const email = $("#correo").val()
        const pass = $("#contrasenia").val()
        console.log(email + pass)

        $.ajax({
            url: "http://localhost:8080/validarUsuario/"+email+"/"+pass,
            type: "GET",
            datatype: "JSON",
            success: (res) => {
                if(res){
                    console.log("bien")
                } else {
                    console.log("mal")
                }
            }
        })
    })
})