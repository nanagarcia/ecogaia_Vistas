//Variables
const carrito = document.getElementById("carrito"),
      Listaproductos = document.getElementById("productos"),
      contenedorCarrito = document.querySelector('.buy-card .lista'),
      vaciarCarritoBtn = document.querySelector('#vaciar_carrito');

let articulosCarrito = [];

agregarProductosCarrito()

function agregarProductosCarrito(){
  Listaproductos.addEventListener('click', agregarProducto);

  carrito.addEventListener('click', eliminarProducto);

  vaciarCarritoBtn.addEventListener('click', e => {
    articulosCarrito = [];
    limpiarHTML()
  })

}

function agregarProducto(e){
  if(e.target.classList.contains("agregar-carrito")){
    const productoseleccionado = e.target.parentElement.parentElement;
    leerInfo(productoseleccionado)
  }
}

function eliminarProducto(e){
  if(e.target.classList.contains("borrar-producto")){
    const prodctoId = e.target.getAttribute('data-id');

    //Eliminar del arreglo del articulosCarrito por el data-id
    articulosCarrito = articulosCarrito.filter(produ => produ.id !== prodctoId)
    carritoHTML()
  }
}

//Leer el contenido de nuestro HTML al que le dimos click y extrae la info del curso
function leerInfo(produ) {
  //Crear un objeto con el contenido del curso actual
  const infoProdu = {
      imagen : produ.querySelector('producto_img').src,
      titulo: produ.querySelector('titulo').textContent,
      precio: produ.querySelector('.precio').textContent,
      id : produ.querySelector('button').getAttribute('data-id'),
      cantidad : 1
  }

  //Revisa si un elemento ya existe en el carrito
  const existe = articulosCarrito.some(produ => produ.id === infoProdu.id)

  if (existe) {
      //Actualizar la cantidad
      const productos = articulosCarrito.map(produ => {
          if (produ.id === infoProdu.id) {
              produ.cantidad++;
              return produ 
          } else {
              return produ;
          }
      });
      [...articulosCarrito,infoProdu]
  } else {
      //Agregamos elementos al carrito de compras
      articulosCarrito = [...articulosCarrito,infoProdu]
  }
  carritoHTML()
}

//Muestra el carrito en el HTML

function carritoHTML() {
  limpiarHTML()
  //Recorre el carrito de compras y genera el HTML
  articulosCarrito.forEach(produ => {
      const fila = document.createElement('div');
      fila.innerHTML = `
          <img src="${produ.imagen}"></img>
          <p>${produ.titulo}</p>
          <p>${produ.precio}</p>
          <p>${produ.cantidad}</p>
          <p><span class="borrar-curso" data-id="${produ.id}">X</span></p>
      `;

      contenedorCarrito.appendChild(fila)
  });
}

//Elimina los cursos de la lista_de_cursos
function limpiarHTML() {
  while (contenedorCarrito.firstChild) {
      contenedorCarrito.removeChild(contenedorCarrito.firstChild)
  }
}
