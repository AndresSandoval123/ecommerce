document.addEventListener("DOMContentLoaded", function () {
  const botonVision = document.getElementById("botonVision1");
  const botonMision = document.getElementById("botonMision1");
  const botonProyecto = document.getElementById("botonProyecto1");
  const botonPropuestaValor = document.getElementById("botonPropuestaValor1");

  const imgVision = document.getElementById("imgVision1");
  const imgMision = document.getElementById("imgMision1");
  const imgProyecto = document.getElementById("imgProyecto1");
  const imgPropuestaValor = document.getElementById("imgPropuestaValor1");

  botonVision.addEventListener("click", function () {
    ocultarInfor();
    imgVision.classList.add("mostrar");
  });

  botonMision.addEventListener("click", function () {
    ocultarInfor();
    imgMision.classList.add("mostrar");
  });

  botonProyecto.addEventListener("click", function () {
    ocultarInfor();
    imgProyecto.classList.add("mostrar");
  });
  
  window.addEventListener("load", ()=>imgPropuestaValor.classList.add("mostrar"))

  botonPropuestaValor.addEventListener("click", function () {
    ocultarInfor();
    imgPropuestaValor.classList.add("mostrar");
  });
  // ocultar todos los contenidos
  function ocultarInfor() {
    imgVision.classList.remove("mostrar");
    imgMision.classList.remove("mostrar");
    imgProyecto.classList.remove("mostrar");
    imgPropuestaValor.classList.remove("mostrar");
  }
});

// CREACIÓN DE FUNCIÓN LOGICA PARA EL SLIDE DE LOS DESARROLLADORES
// TRAYENDO INFORMACIÓN DEL HTML (Class), PERO ESTA ES UNA COLECCIÓN DE LISTAS

const cardDevs = document.getElementsByClassName("cardDevs");

// TRAYENDO INFORMACIÓN DEL HTML (Id), ESTE ES UN ELEMENTO
const containerCardDevs = document.getElementById("containerCardDevs");

// CREACIÓN DE UN ARRAY, ESTOY CONVIRTIENDO UNA COLECCIÓN DE LISTAS (cardDevs) EN UN ARRAY POR MEDIO DEL METODO FROM
const arrayCardDevs = Array.from(cardDevs);

//  REPETIR EL FOREACH 2 VECES (<2)
for (let i = 0; i < 2; i++) {
  // ITERAR EL ARRAY CON EL FOREACH
  arrayCardDevs.forEach((element) => {
    // TOMAR CADA ELEMENTO DEL ARRAY Y SE ENVIA AL CONTAINER CARD DEVS EN FORMATO HTML (EL + ME CONCATENA CADA ELEMENTO DEL ARRAY)
    containerCardDevs.innerHTML += `<div class ='cardDevs'> ${element.innerHTML} </div>`;
  });
}

// CREACIÓN DE FUNCIÓN LOGICA PARA EL SLIDE DE VALORES
// TRAER UNA LISTA DEL HTML POR MEDIO DE LA CLASS
const cardValores = document.getElementsByClassName("cardValores");

// TRAE UN ELEMENTO POR ID DEL HTML
const containerCardValores = document.getElementById("containerCardValores");

// TRANSFORMAR UNA LISTA EN ARRAY
const arrayCardValores = Array.from(cardValores);

//  ITERACIÓN DEL FOREACH 2 VECES
for (let i = 0; i < 2; i++) {
  // ITERACIÓN SOBRE UN ARRAY
  arrayCardValores.forEach((element) => {
    // ENVIAR AL HTML UN ELEMENTO DEL ARRAY
    containerCardValores.innerHTML += `<div class ='cardValores'> ${element.innerHTML} </div>`;
  });
}

// ITERACIÓN PARA PAUSAR EL CARRUSEL
const animacion = containerCardDevs.getAnimations();
function pausar() {
  animacion[0].pause();
}
const play = () => {
  animacion[0].play();
};
containerCardDevs.addEventListener("mouseover", pausar, false);
containerCardDevs.addEventListener("mouseout", play, false);
