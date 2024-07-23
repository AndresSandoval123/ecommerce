import { capturarDatosProducto } from "../componentes/publico/carritoComprasComponente.js";

export function mostrarProductoModal(idTarjeta, dataTarjeta) {
  let inforProducto = document.getElementById("inforProducto");

  // VALIDACIÓN ENTRE TARJETA PRODUCTO Y PRODUCTO BASE DE DATOS PARA MOSTRARLO EN EL MODAL EN CASO DE COINCIDIR
  if (idTarjeta.includes(dataTarjeta.producto_id)) {
    // INYECCCIÓN DE HTML PARA MODAL
    inforProducto.innerHTML = `
      <div class="contenidoProducto" id="contenidoProducto"> 

        <div class="btnCerrar">
          <i id='cerrarModal' class="bi bi-x-circle"></i>
        </div>

        <div class="nombreProducto">
          <h2>${dataTarjeta.nombre}</h2>
          <img class="imgProducto" src='${dataTarjeta.imagen}'>
        </div> 
        
        <div class="escritorio">     
          <div class="descripcionProducto">
            <p>${dataTarjeta.descripcion}</p>            
          </div>

          <section class="colorCantidad">                                        
            <div id="restar" class="restar">-</div>
            <p id="cantidadProductos"> 1 </p>  
            <div id="sumar" class="sumar">+</div>
          </section>

          <section id="tallaProducto" class="tallas">                           
            <label for="talla"> <strong> Talla:</strong></label>
            <select id="talla">
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
              <option value="XXXL">XXXL</option>
            </select>   
          </section>

          <div class="precio">    
            <h3>$ ${dataTarjeta.precio}</h3>
          </div>

          <div class="carrito">                    
            <button id="btnAgregarCarrito">Agregar al carrito
              <i class='bi bi-cart3'></i>
            </button>                    
          </div> 

          <div class="frase">
            <h4>No estás gordita, estás doblemente buen@😘</h4>
          </div>  
        </div>
        
      </div>`;

    const contenidoProducto = document.getElementById("contenidoProducto");
    const cerrarModal = document.getElementById("cerrarModal");
    const btnAgregarCarrito = document.getElementById("btnAgregarCarrito");
    const talla = document.getElementById("talla");
    const sumar = document.getElementById("sumar");
    const restar = document.getElementById("restar");
    let cantidadProductos = document.getElementById("cantidadProductos");

    console.log(cantidadProductos.innerHTML);

    // APERTURA MODAL
    inforProducto.style.display = "flex";


    // PINTAR CARRITO
    capturarDatosProducto(btnAgregarCarrito, dataTarjeta, talla, sumar, restar, cantidadProductos)

    // CIERRE MODAL
    cerrarModal.addEventListener("click", () => {
      contenidoProducto.classList.add("modalcerrado");
      inforProducto.style.display = "none";
      contenidoProducto.classList.remove("modalcerrado");
    });
  }
}