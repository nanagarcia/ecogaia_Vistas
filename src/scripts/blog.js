$(document).ready((e) => {
    const container = document.getElementById("container")
  const listar = ()=> {
    $.ajax({
      url: "http://localhost:8080/listarTip",
      type: "GET",
      datatype: "JSON",
      success: (res) => {
        res.forEach((blog) => {
          let cuerpo = ""
          let titulo = ""
          if(blog.cuerpo.length>236){
            cuerpo = blog.cuerpo.slice(0,234) + " ..."
          } else {
            cuerpo = blog.cuerpo
          }
  
          if (blog.titulo.length > 20) {
            titulo = blog.titulo.slice(0,21) + " ..."
          } else {
            titulo = blog.titulo
          }
          container.innerHTML += "<div class='blog-box' id='tip"+blog.codigo_tip+"'><div class='blog-text2'><span>"+blog.fecha+"</span><img src='../public/assets/imgblosgs.jpg' class='blog_in' alt='' /><h2>"+titulo+"</h2><p>"+cuerpo+"</p></div></div>"
        })
      },
    });
  }

  listar()

  $("#blog-search").on("input", (e) => {
    const titulo = e.target.value
    if (titulo == "") {
      container.innerHTML=""
      listar()
    } else {
      $.ajax({
        url: "http://localhost:8080/tituloTip/" + titulo,
        type: "GET",
        datatype: "JSON",
        success: (res) => {
          if (res.length == 0){
            container.innerHTML= '<p>No se encontraron resultados para "'+titulo+'"</p>'
          } else {
            container.innerHTML=""
            res.forEach((blog) => {
              let cuerpo = ""
              let titulo = ""
              if(blog.cuerpo.length>236){
                cuerpo = blog.cuerpo.slice(0,234) + " ..."
              } else {
                cuerpo = blog.cuerpo
              }
      
              if (blog.titulo.length > 20) {
                titulo = blog.titulo.slice(0,21) + " ..."
              } else {
                titulo = blog.titulo
              }
              container.innerHTML += "<div class='blog-box' id='tip"+blog.codigo_tip+"'><div class='blog-text2'><span>"+blog.fecha+"</span><img src='../public/assets/imgblosgs.jpg' class='blog_in' alt='' /><h2>"+titulo+"</h2><p>"+cuerpo+"</p></div></div>"
            })
          }
        },
      })
    }
  })
});
