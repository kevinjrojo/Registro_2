/*-------JavaScrip para primer formulario ----*/

const form = document.querySelector(".formulario-1");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const siguiente = document.querySelector(".continuar1");
const form2 = document.querySelector(".formulario-2");

siguiente.addEventListener("click", () => {
  form2.classList.remove("formulario");
  form.classList.add("formulario");
});

/*-------JavaScrip para segundo formulario ----*/

let opt1 = document.querySelector(".selec1");
let opt2 = document.querySelector(".selec2");
let opt3 = document.querySelector(".selec3");
let opciones = [];
const limite = 2;

function arregar(elemento) {
  if (opciones.length < limite) {
    console.log("agregado", elemento);
  } else {
    opciones.plice();
    console.log("no se puede");
  }
}

opt1.addEventListener("click", () => {
  opciones.push(opt1.textContent);
  console.log(opciones);
  arregar();
});
opt2.addEventListener("click", () => {
  opciones.push(opt2.textContent);
  console.log(opciones);
  arregar();
});
opt3.addEventListener("click", () => {
  opciones.push(opt3.textContent);
  arregar();
});
form2.addEventListener("submit", function (event) {
  event.preventDefault();
});

/*-------JavaScrip para tercer formulario ----*/

let siguiente2 = document.querySelector(".continuar2");

siguiente2.addEventListener("click", () => {
  const form3 = document.querySelector(".formulario-3");
  const name = document.querySelector(".name").value;
  const email = document.querySelector(".email").value;

  opciones.forEach((opcion) => {
    form3.innerHTML = `<h3 class:"text-2">Datos</h3><br>
    <p>Nombre:<br>${name}</p><br>
    <p>Email:<br>${email}</p><br>
    <p>Especialidad</p>
    <ul><li>${opcion}</li></ul><br>
    <input type="submit" value="Enviar" class="continuar3" required />`;
  });
});
