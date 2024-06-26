/*-------JavaScrip para primer formulario ----*/

const form = document.querySelector(".formulario-1");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const siguiente = document.querySelector(".continuar1");
const form2 = document.querySelector(".formulario-2");
const punto2 = document.querySelector(".pnt2");
const text = document.querySelector(".text-2");
const delet = document.querySelector(".next");

siguiente.addEventListener("click", () => {
  const name = document.querySelector(".name").value;
  const email = document.querySelector(".email").value;

  if (!email || !name) {
    preventDefault();
  } else {
    form2.classList.remove("formulario");
    form.classList.add("formulario");
    delet.innerHTML =
      "<p class='text-2'>paso 2 de 3</p><div class='puntos'><img src='./img/circulo-negro.png' alt='' class='punto-1' /><img src='img/circulo-negro.png' alt='' class='punto-1' /><img src='img/circulo.png' alt='' class='pnt3' /></div>";
  }
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
console.log(opciones);
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
  const punto3 = document.querySelector(".pnt3");

  if (opciones == 0) {
    Swal.fire({
      icon: "error",
      title: "Faltan datos",
      text: "Elije una opción",
      background: "#394150",
      color: "#E5E7EB",
    });
  } else {
    form3.classList.remove("formulario");
    form2.classList.add("formulario");
    punto3.classList.add("punto-1");
    delet.innerHTML =
      "<p class='text-2'>paso 3 de 3</p><div class='puntos'><img src='./img/circulo-negro.png' alt='' class='punto-1' /><img src='img/circulo-negro.png' alt='' class='punto-1' /><img src='img/circulo-negro.png' alt='' class='punto-1' /></div>";

    opciones.forEach((opcion) => {
      form3.innerHTML = `<form class="formulario formulario-3" action="https://formsubmit.co/${email}" method="POST">
<h2 class="title">Datos</h2>
    <div class="datos">
    <p class="nombre">Nombre:
    <p class="datosNombre"><br>${name}</p>
    </p>
    <p class="correo">Email:
    <p class="datosEmail"><br>${email}</p>
    </p>
    </div>
    <p>Especialidad:</p>
    <ul><li class="datosEspecialidad">${opcion}</li></ul>
    <input type="submit" value="Enviar" class="continuar3" required />
    <input type="hidden" name="_next" value="https://kevinjrojo.github.io/Registro_2/" />
    <input type="hidden" value="false" name="_captcha" />
    </form>
    `;
    });
  }
});
