document.addEventListener('keyup', e => {
     
    if(e.target.matches('#buscador')){
        document.querySelectorAll('.articulos').forEach(objetos => {
            objetos.textContent.toLowerCase().includes(e.target.value)
            ? objetos.classList.remove('filtro')
            : objetos.classList.add('filtro');

        })
    }
})

