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

function insert() {

    const newprod = {
        prod_Nombre: $("#prod_Nombre").val(),
        prod_Imagen: $("#prod_Imagen").val(),
        prod_Categoria: $("#prod_Categoria").val(),
        prod_Cantidad: $("#prod_Cantidad").val(),
        prod_Precio: $("#prod_Precio").val()
    }



    $.ajax({
        url: "http://localhost:8080/insertarProducto",
        type: "POST",
        data: newprod,
        datatype: "text/plain",
        success: (res) => {
            alert(res)
            window.location.reload()
        }
    })
}