const banner = document.getElementById("banner");
const botonInicio = document.getElementById("boton-inicio");
const opcionesTest = document.getElementById("opciones-test");

const estadoTest = {
  ruta: null,
  genero: null,
  referente: null,
  puntos: {},
};

function mostrarPantalla(pantalla) {
  switch (pantalla) {
    case "inicio":
      opcionesTest.innerHTML = `
        <h2 class="subtitulo-opciones">
          Tu próxima aventura te espera
        </h2>

        <button
          type="button"
          class="boton-test boton-ruta"
          data-pantalla="gustos"
        >
          Descubre nuevas aventuras en base a tus gustos
        </button>

        <button
          type="button"
          class="boton-test boton-ruta"
          data-pantalla="personalidad"
        >
          Avanza a nuevas aventuras acorde a tu personalidad
        </button>
      `;
      break;

    case "gustos":
      opcionesTest.innerHTML = `
        <h2 class="subtitulo-opciones">
          Basado en tus preferencias
        </h2>

        <button type="button" class="boton-test">
          Acción
        </button>

        <button
          type="button"
          class="boton-test"
          data-pantalla="terror"
        >
          Terror
        </button>

        <button type="button" class="boton-test">
          Aventura
        </button>

        <button type="button" class="boton-test">
          Simulación
        </button>
      `;
      break;

    case "terror":
      opcionesTest.innerHTML = `
        <h2 class="subtitulo-opciones">
          Escoge tu referente de terror
        </h2>

        <div class="lista-referentes">
          <button
            type="button"
            class="tarjeta-referente"
            data-referente="resident-evil"
          >
            <img
              class="imagen-referente"
              src="estilo/assets/Resident Evil.jpg"
              alt="Portada de Resident Evil"
            />

            <span class="nombre-referente">
              Resident Evil
            </span>
          </button>

          <button
            type="button"
            class="tarjeta-referente"
            data-referente="silent-hill"
          >
            <img
              class="imagen-referente"
              src="estilo/assets/Silent hill.jpg"
              alt="Portada de Silent Hill"
            />

            <span class="nombre-referente">
              Silent Hill
            </span>
          </button>
        </div>
      `;
      break;

    case "personalidad":
      opcionesTest.innerHTML = `
        <h2 class="subtitulo-opciones">
          Basado en tu forma de ser
        </h2>

        <button type="button" class="boton-test">
          Amante de los retos
        </button>

        <button type="button" class="boton-test">
          Curioso
        </button>

        <button type="button" class="boton-test">
          Amante de la adrenalina
        </button>

        <button type="button" class="boton-test">
          Apasionado de grandes historias
        </button>
      `;
      break;

    default:
      opcionesTest.innerHTML = "";
  }
}

function iniciarCuestionario(referente) {
  estadoTest.referente = referente;

  console.log("Estado actual del test:", estadoTest);

  // Aquí mostraremos las preguntas más adelante.
}

botonInicio.addEventListener("click", function () {
  banner.style.display = "none";
  botonInicio.style.display = "none";

  mostrarPantalla("inicio");
});

opcionesTest.addEventListener("click", function (evento) {
  const botonPantalla = evento.target.closest("[data-pantalla]");
  const botonReferente = evento.target.closest("[data-referente]");

  if (botonPantalla) {
    const siguientePantalla = botonPantalla.dataset.pantalla;

    switch (siguientePantalla) {
      case "gustos":
        estadoTest.ruta = "gustos";
        break;

      case "personalidad":
        estadoTest.ruta = "personalidad";
        break;

      case "terror":
        estadoTest.genero = "terror";
        break;

      default:
        console.warn(`Pantalla desconocida: ${siguientePantalla}`);
        return;
    }

    mostrarPantalla(siguientePantalla);
    return;
  }

  if (botonReferente) {
    iniciarCuestionario(botonReferente.dataset.referente);
  }
});
