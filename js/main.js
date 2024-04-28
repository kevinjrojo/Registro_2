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
const form3 = document.querySelector(".formulario-3");
const punto3 = document.querySelector(".pnt3");

continue2.addEventListener("click", () => {
  form2.classList.add("formulario");
  form3.classList.remove("formulario");
  punto3.classList.add("punto-1");
});

const continuar3 = document.querySelector(".continuar3");

continuar3.addEventListener("click", () => {
  Swal.fire({
    title: "Datos Enviados",
    icon: "success",
  });
  form.classList.remove("formulario");
  form3.classList.add("formulario");
  punto3.classList.remove("punto-1");
  punto2.classList.remove("punto-1");
});

continuar3.addEventListener("submit", () => {});
