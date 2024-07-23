import { mostrarProductoModal } from "/maqueta/scripts/modal.js";

const tarjeta = document.getElementById("tarjeta");
const indicadorPagina = document.getElementById("indicadorPagina");
let atras = document.getElementById("atras");
let siguiente = document.getElementById("siguiente");

// TRAER BD LOCAL STORAGE
let llamar = localStorage.getItem("productos");
let convertir = JSON.parse(llamar);

// FUNCIÓN PAGINACIÓN
function mostrarContenido(numPagina) {
  tarjeta.innerHTML = "";
  
  let elemtPorPagina = 7;
  let siguientePagina = (numPagina - 1) * elemtPorPagina;
  let paginaAnterior = siguientePagina + elemtPorPagina;
  let producMostrados = [];
  let totalproducMostrados = 0;

  // RECORRER OBJETOS PARA MOSTRAR
  for (let categoria in convertir) {
    for (let tipo in convertir[categoria]) {

      let convertirCategoria = convertir[categoria];
      let convertirCategoriaTipo = convertirCategoria[tipo];

      producMostrados = producMostrados.concat(convertirCategoriaTipo);
      totalproducMostrados += convertirCategoriaTipo.length;

      for (let productoUnidad in convertirCategoriaTipo) {

        let variableProductoUnidad = convertirCategoriaTipo[productoUnidad];

        tarjeta.addEventListener("click", (e) => {
          const idTarjeta = e.target.id;
          mostrarProductoModal(idTarjeta, variableProductoUnidad);
        });
      }
    }
  }

  const totalPaginas = Math.ceil(totalproducMostrados / elemtPorPagina);

  indicadorPagina.textContent = `${numPagina}/${totalPaginas}`;

  // PRODUCTOS POR PÁGINA
  for (

    let i = siguientePagina;

    i < paginaAnterior && i < producMostrados.length;
    i++
  ) {
    const element = producMostrados[i];

    tarjeta.innerHTML += `
            <div class="contenTarjeta" id="contenTarjeta" >
                <img class="imgTar" src='${element.imagen}'>
                <div class="texTarj">
                    <h4 class="nomTar" >${element.nombre}</h4>
                    <h4 class="precio">$ ${element.precio}</h4>
                </div>
                <div class="opciones">
                    <button id="id${element.producto_id}">Ver Detalle</button>
                </div>
            </div
        `;
  }

// EVENTO PÁGINA ANTERIOR PRODUCTOS
  atras.addEventListener("click", function () {
    if (numPagina > 1) {
      mostrarContenido(numPagina - 1);
    }
  });

// EVENTO PÁGINA SIGUIENTE PRODUCTOS
  siguiente.addEventListener("click", function () {
    if (numPagina < totalPaginas) {
      mostrarContenido(numPagina + 1);
    }
  });
}

mostrarContenido(1);