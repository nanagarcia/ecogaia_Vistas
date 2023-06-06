$(document).ready(() => {
    on_session()
})


export const on_session = ()=> {
    var state = false;
    console.log(sessionStorage.getItem("status"))
    if (sessionStorage.getItem("status") != null) {
        if (sessionStorage.getItem("status") == "usuario"){
            $("#op8")[0].innerHTML = buttons("./perfil.html", "inicio2", "user", "Perfil")
            $("#op9")[0].innerHTML = buttons("./index.html", "registro", "sign-out-alt", "Cerrar Sesion")
            $("#op5")[0].style.display = "none"
            $("#op6")[0].style.display = "none"
            $("#op7")[0].style.display = "none"
            state = true;
        } else if (sessionStorage.getItem("status") == "admin") {
            $("#op8")[0].innerHTML = buttons("./perfil.html", "inicio2", "user", "Perfil")
            $("#op9")[0].innerHTML = buttons("./index.html", "registro", "sign-out-alt", "Cerrar Sesion")
            $("#op4")[0].style.display = "block"
            $("#op5")[0].style.display = "block"
            state = true;
        } else if (sessionStorage.getItem("status") == "repartidor") {
            $("#op8")[0].innerHTML = buttons("./perfil.html", "inicio2", "user", "Perfil")
            $("#op9")[0].innerHTML = buttons("./index.html", "registro", "sign-out-alt", "Cerrar Sesion")
            $("#op4")[0].style.display = "block"
            $("#op5")[0].style.display = "none"
            $("#op6")[0].style.display = "none"
        }
    } else {
        off_session()
    }
    $("#op9").on("click", () => {
        off_session()
    })
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
    $("#op6")[0].style.display = "none"
    $("#op7")[0].style.display = "none"
    $("#op8")[0].innerHTML = buttons("./iniciosesion.html", "inicio2", "sign-out-alt", "Iniciar Sesion")
    $("#op9")[0].innerHTML = buttons("./registrarse.html", "registro", "tasks", "Registrarse")
}