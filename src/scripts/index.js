$(document).ready(() => {
    on_session()
    console.log($("#cat")[0])
})


export const on_session = ()=> {
    var state = false;
    if (sessionStorage.getItem("status") != null) {
        $("#op6")[0].innerHTML = buttons("./perfil.html", "inicio2", "user", "Perfil")
        $("#op7")[0].innerHTML = buttons("./registrarse.html", "registro", "sign-out-alt", "Cerrar Sesion")
        $("#op4")[0].style.display = "block"
        $("#op5")[0].style.display = "block"
        state = true;
    } else {
        off_session()
    }
    $("#op7").on("click", () => {
        off_session()
    })
    console.log(state)
    return state
}

export const buttons = (dir, clas, img, dest) => {
    const button = "<a href='"+dir+"' class='"+clas+"'><i class='fas fa-"+ img +"'></i><span class='nav-item'>"+ dest +"</span></a>"
    return button
}

export const off_session = () => {
    if (sessionStorage.length > 0) {
        sessionStorage.removeItem("status")
    }
    $("#op4")[0].style.display = "none"
    $("#op5")[0].style.display = "none"
    $("#op6")[0].innerHTML = buttons("./iniciosesion.html", "inicio2", "sign-out-alt", "Iniciar Sesion")
    $("#op7")[0].innerHTML = buttons("./registrarse.html", "registro", "tasks", "Registrarse")
}