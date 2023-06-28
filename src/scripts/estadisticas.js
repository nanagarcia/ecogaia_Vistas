import { on_session } from "./index.js";

$(document).ready(() => {
    $(".barra")[0].style.backgroundColor = "#000000"
})

$(".btn-hamburguesa").on("click", () => {
    $(".barra")[0].style.display = "block"
  }) 
  
  $(".cerrar_barra").on("click", () => {
    $(".barra")[0].style.display = "none"
  })
  