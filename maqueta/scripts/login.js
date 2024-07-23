const btnIng = document.getElementById("btnIng"),
      btnCrear = document.getElementById("btnCrear"),
      secIngresar = document.querySelector(".secIngresar"),
      secRegistro = document.querySelector(".secRegistro");

btnIng.addEventListener("click", e => {
    secRegistro.classList.add("dinami")
    secIngresar.classList.remove("dinami")
})
btnCrear.addEventListener("click", e => {
  secIngresar.classList.add("dinami")
  secRegistro.classList.remove("dinami")
})