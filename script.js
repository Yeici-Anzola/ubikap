const botonesAcceso = document.querySelectorAll("[data-opcion]");
const opcionesRegistro = document.getElementById("opcionesRegistro");
const formularioTelefono = document.getElementById("formularioTelefono");
const mensaje = document.getElementById("mensaje");
const aviso = document.getElementById("aviso");

const pantallaRegistro = document.getElementById("pantallaRegistro");
const pantallaLogin = document.getElementById("pantallaLogin");

const botonVolver = document.getElementById("volver");
const botonIniciarSesion = document.getElementById("iniciarSesion");
const botonAyuda = document.getElementById("botonAyuda");
const botonRegresarRegistro = document.getElementById("regresarRegistro");
const formularioLogin = document.getElementById("formularioLogin");

function mostrarAviso(texto) {
  aviso.textContent = texto;
  aviso.classList.remove("oculto");

  setTimeout(() => {
    aviso.classList.add("oculto");
  }, 3500);
}

botonesAcceso.forEach((boton) => {
  boton.addEventListener("click", () => {
    const opcion = boton.dataset.opcion;

    if (opcion === "teléfono") {
      opcionesRegistro.classList.add("oculto");
      formularioTelefono.classList.remove("oculto");

      mensaje.textContent =
        "Escribe tu número para recibir un código de acceso.";

      document.getElementById("telefono").focus();
    } else {
      mostrarAviso(`Seleccionaste continuar con ${opcion}.`);
    }
  });
});

botonVolver.addEventListener("click", () => {
  formularioTelefono.classList.add("oculto");
  opcionesRegistro.classList.remove("oculto");

  mensaje.textContent =
    "Ingresa para encontrar lugares y compartir tu ubicación.";
});

formularioTelefono.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const telefono = document.getElementById("telefono").value;

  mostrarAviso(`Enviamos un código al número ${telefono}.`);
});

botonIniciarSesion.addEventListener("click", () => {
  pantallaRegistro.classList.add("oculto");
  pantallaLogin.classList.remove("oculto");

  document.getElementById("usuario").focus();
});

botonRegresarRegistro.addEventListener("click", () => {
  pantallaLogin.classList.add("oculto");
  pantallaRegistro.classList.remove("oculto");
});

formularioLogin.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const usuario = document.getElementById("usuario").value;

  mostrarAviso(`Bienvenido, ${usuario}.`);
});

botonAyuda.addEventListener("click", () => {
  mostrarAviso("Puedes ingresar como invitado o crear una cuenta.");
});