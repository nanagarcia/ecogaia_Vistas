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
                    console.log(res)
                }
            })
        }
    })
}