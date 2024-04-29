const form = document.querySelector(".formulario-1");
const form2 = document.querySelector(".formulario-2");
const continue1 = document.querySelector(".continuar1");
const punto2 = document.querySelector(".pnt2");

continue1.addEventListener("click", () => {
  form2.classList.remove("formulario");
  form.classList.add("formulario");
  punto2.classList.add("punto-1");
});

const continue2 = document.querySelector(".continuar2");
const punto3 = document.querySelector(".pnt3");
const form3 = document.querySelector(".formulario-3");

continue2.addEventListener("click", () => {
  punto3.classList.add("punto-1");
  form3.classList.remove("formulario");
  form2.classList.add("formulario");

  mostrarDatos();
});

function mostrarDatos() {
  const nombre = document.querySelector(".name").value;
  const email = document.querySelector(".email").value;
  const form3 = document.querySelector(".formulario-3");

  form3.innerHTML = `<h2 class="title">Datos</h2>
 <p>Nombre: ${nombre} </p>
 <p>Email: ${email} </p>
 <p>Topics:</p>
 <ul>
   <li>User experience</li>
   <li>Graphic Desing</li>
 </ul>
 <input type="button" value="Confirm" class="continuar3" />`;
}
