const titulo = document.getElementById("titulo");
console.log(titulo);

const banner = document.getElementById("banner");
console.log(banner);

const botonInicio = document.getElementById("boton-inicio");
const opcionesTest = document.getElementById("opciones-test");

botonInicio.addEventListener("click", function () {
  banner.style.display = "none";
  botonInicio.style.display = "none";

  opcionesTest.innerHTML = `
    <button id="test-gustos" class="boton-test">
      Descubre nuevas aventuras en base a tus gustos
    </button>

    <button id="test-personalidad" class="boton-test">
      Avanza a nuevas aventuras acorde a tu personalidad
    </button>
  `;

  const botonGustos = document.getElementById("test-gustos");
  const botonpersonalidad = document.getElementById("test-personalidad");
});
