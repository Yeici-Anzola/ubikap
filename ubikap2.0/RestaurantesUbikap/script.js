const buscador=document.getElementById("buscar");
const restaurantes=document.querySelectorAll(".restaurante");

function buscarRestaurante(){
    const texto=buscador.value.toLowerCase().trim();

    restaurantes.forEach(restaurante=>{
        const datos=restaurante.dataset.nombre;

        restaurante.style.display=
            datos.includes(texto)?"block":"none";
    });
}

buscador.addEventListener("input",buscarRestaurante);

function verRestaurante(nombre){
    alert("Has seleccionado: "+nombre);
}