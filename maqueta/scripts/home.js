import { mostrarProductoModal } from "./modal.js";

const btnIzq = document.querySelector(".bxs-chevron-left");
const btnDer = document.querySelector(".bxs-chevron-right");
const contenedorTarjetasHomeJS = document.getElementById(
  "contenedorTarjetasHomeJS"
);
const productosHome = JSON.parse(localStorage.getItem("productos"));

let cantProductos = 0;
//RECORRER OBJETO
for ( let categoria in productosHome) {
  let categorias = productosHome[categoria];
  for (let producto in categorias) {
    let tipoDeRopa = categorias[producto];
    for (let prendas in tipoDeRopa) {
      let prenda = tipoDeRopa[prendas];
      contenedorTarjetasHomeJS.innerHTML += `
      <div id='tarjetaProductHome${prenda.producto_id}' class="tarjetaProductoHome">
        <div class="imgTarjetaHome"> <img src= ${prenda.imagen}>  </div>
        <p> ${prenda.nombre} </p> 
        <p class="pOrange"> ${prenda.precio} </p>
        <button id="id${prenda.producto_id}">Ver Detalle</button>
      </div>
        `;

      const tarjetaProductoHome = document.getElementById(`tarjetaProductHome${prenda.producto_id}`);
      
      contenedorTarjetasHomeJS.addEventListener("click", (e)=>{
        const idTarjeta = e.target.id
        mostrarProductoModal(idTarjeta, prenda)
      } )

      cantProductos++;
    }
  }
}

// FUNCIONALIDAD BOTONES DER E IZQ TARJETAS PRODUCTOS HOME
let trasladar = 0;
btnDer.addEventListener("click", () => {
  let valorCantidadProductos = cantProductos * -300 + 300;
  if (trasladar > valorCantidadProductos) {
    trasladar -= 300;
    let trasladarTarjeta = trasladar.toString();
    contenedorTarjetasHomeJS.style.translate = `${trasladarTarjeta}px`;
  }
});

btnIzq.addEventListener("click", () => {
  if (trasladar < 0) {
    trasladar += 300;
    let trasladarTarjeta = trasladar.toString();
    contenedorTarjetasHomeJS.style.translate = `${trasladarTarjeta}px`;
  }
});
