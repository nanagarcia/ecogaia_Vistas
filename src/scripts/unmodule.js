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