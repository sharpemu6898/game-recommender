const titulo = document.getElementById("titulo");
console.log(titulo);

const banner = document.getElementById("banner");
console.log(banner);

const botonInicio = document.getElementById("boton-inicio");
const opcionesTest = document.getElementById("opciones-test");

function mostrarPantalla(pantalla) {
  switch (pantalla) {
    case "inicio":
      opcionesTest.innerHTML = `
        <h2 class="subtitulo-opciones">
          Tu próxima aventura te espera
        </h2>

        <button id="test-gustos" class="boton-test">
          Descubre nuevas aventuras en base a tus gustos
        </button>

        <button id="test-personalidad" class="boton-test">
          Avanza a nuevas aventuras acorde a tu personalidad
        </button>
      `;
      break;

    case "gustos":
      opcionesTest.innerHTML = `
        <h2 class="subtitulo-opciones">
          Basado en tus preferencias
        </h2>

        <button id="genero-accion" class="boton-test">Acción</button>
        <button id="genero-terror" class="boton-test">Terror</button>
        <button id="genero-aventura" class="boton-test">Aventura</button>
        <button id="genero-simulacion" class="boton-test">Simulación</button>
      `;
      break;

    case "personalidad":
      opcionesTest.innerHTML = `
        <h2 class="subtitulo-opciones">
          Basado en tu forma de ser
        </h2>

        <button id="personalidad-retos" class="boton-test">Amante de los retos</button>
        <button id="personalidad-curioso" class="boton-test">Curioso</button>
        <button id="personalidad-adrenalina" class="boton-test">Amante de la adrenalina</button>
        <button id="personalidad-historias" class="boton-test">Apasionado de grandes historias</button>
      `;
      break;

    default:
      opcionesTest.innerHTML = "";
  }
}

botonInicio.addEventListener("click", function () {
  banner.style.display = "none";
  botonInicio.style.display = "none";

  mostrarPantalla("inicio");
});

opcionesTest.addEventListener("click", function (evento) {
  const botonGustos = evento.target.closest("#test-gustos");
  const botonPersonalidad = evento.target.closest("#test-personalidad");

  if (botonGustos) {
    mostrarPantalla("gustos");
  } else if (botonPersonalidad) {
    mostrarPantalla("personalidad");
  }
});
