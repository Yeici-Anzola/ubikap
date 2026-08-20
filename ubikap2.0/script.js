
document.addEventListener("DOMContentLoaded", () => {

    const tarjetas = document.querySelectorAll(".tarjeta");

    tarjetas.forEach((tarjeta) => {

        tarjeta.addEventListener("click", () => {

            tarjeta.style.transform = "scale(0.97)";

            setTimeout(() => {
                tarjeta.style.transform = "";
            }, 150);

        });

    });

});
function buscarPagina() {

    let busqueda = document.getElementById("buscar").value
        .toLowerCase()
        .trim();

    if (busqueda === "hamburguesa") {

        window.location.href = "hamburguesa.html";

    } else {

        alert("No encontramos esa opción.");

    }
}
document.getElementById("buscar").addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        buscarPagina();
    }

});
const claro = document.getElementById("btnClaro");
const oscuro = document.getElementById("btnOscuro");
const lectura = document.getElementById("btnLectura");

claro.addEventListener("click", () => {
    document.body.className = "claro";
})

oscuro.addEventListener("click", () => {
    document.body.className = "oscuro";
})

lectura.addEventListener("click", () => {
    document.body.className = "lectura";
})
