const mainCarrito = document.getElementById("mainCarrito");

mainCarrito.innerHTML = `
<div class="contenedorTitulo">
    <div class="btnCerrarCarrito" id="btnCerrarCarrito">X</div>
    <h2 class="tituloCarrito">CARRITO DE COMPRAS</h2>
</div>
<div class="contenedorProductos">
    <div id="contenedorCards" class="contenedorCards">
        
    </div>
    <div class="carritoResumen">
        <button class="btnVaciarCarrito">Vaciar Carrito</button>
        <h3>Total del Carrito: $ <span id="totalizadoProductos"> </span> </h3>
            <button class="btnComprar" ><a href="../../paginas/publico/datosEnvio.html">COMPRAR</a></button>
    </div>
</div>
`;
const contenedorCards = document.getElementById("contenedorCards");
const btnAbrirCarrito = document.getElementById("btnAbrirCarrito");
const btnCerrarCarrito = document.getElementById("btnCerrarCarrito");
const totalizadoProductos = document.getElementById ("totalizadoProductos");

// APERTURA Y CIERRE CARRITO DE COMPRAS
btnAbrirCarrito.addEventListener("click", () => {
  mainCarrito.style.right = "0";
  mainCarrito.style.top = "0";
});

btnCerrarCarrito?.addEventListener("click", () => {
  mainCarrito.style.right = "-100%";
});

// FUNCIÓN PINTAR CARRITO
export function capturarDatosProducto(
  btnAgregar,
  dataProducto,
  tallaProducto,
  sumar,
  restar,
  cantidadProductos
) {
  let convertirCantidadProdutos = parseInt(cantidadProductos.innerHTML);

  const productoCarrito = {
    imagen: dataProducto.imagen,
    nombre: dataProducto.nombre,
    precio: dataProducto.precio,
    talla,
    convertirCantidadProdutos,
  };

  // ESCUCHADOR PARA AUMENTAR O QUITAR PRODUCTOS
  sumar.addEventListener("click", () => {
    convertirCantidadProdutos++;
    cantidadProductos.innerHTML = convertirCantidadProdutos;
    productoCarrito.convertirCantidadProdutos = convertirCantidadProdutos;
  });

  restar.addEventListener("click", () => {
    convertirCantidadProdutos--;
    cantidadProductos.innerHTML = convertirCantidadProdutos;
    productoCarrito.convertirCantidadProdutos = convertirCantidadProdutos;
  });
  
  let arregloTarjetas = [];
  let carritoLocal = JSON.stringify(localStorage.getItem("carrito"))
  console.log(carritoLocal);
  let productosTotalesCarrito = '';

  btnAgregar.addEventListener("click", () => {
  
  
    productoCarrito.talla = tallaProducto.value;
    let multiplicarValorProducto = productoCarrito.precio * productoCarrito.convertirCantidadProdutos;

    contenedorCards.innerHTML+=`
    <div id="tarjetaPrtoId${dataProducto.producto_id}" class="cardProducto">
        <img src=${productoCarrito.imagen} alt="Conjunto verde olivo">
        <div class="detallesProducto">
            <h4>${productoCarrito.nombre}</h4>
            <p>Talla: ${productoCarrito.talla}</p>
            <p>Precio: ${productoCarrito.precio}</p>
            <div class="cantidadProducto">
                <button id="btnRestar${dataProducto.producto_id}" class="btnRestar">-</button>
                <span id="totalProductosCarrito${dataProducto.producto_id}">${productoCarrito.convertirCantidadProdutos}</span>
                <button id="btnSumarCarrito${dataProducto.producto_id}" class="btnAgregar">+</button>
            </div>
            <div class="resumenCompra">
                <p>Total: <span id="totalCarritoCompras">${multiplicarValorProducto}</span> </p>
                <button id="btnEliminar${dataProducto.producto_id}" class="btnEliminar">Eliminar</button>
            </div>
        </div>
    </div>`;

    console.log(productosTotalesCarrito);

    // agregarProductosAlCarrito(arregloTarjetas, productosTotalesCarrito)
    // console.log(arregloTarjetas);

    localStorage.setItem("carrito", arregloTarjetas)

    const tarjetaPrtoId = document.getElementById(`tarjetaPrtoId${dataProducto.producto_id}`);
    const btnSumarCarrito = document.getElementById(
      `btnSumarCarrito${dataProducto.producto_id}`
    );
    const totalProductosCarrito = document.getElementById(
      `totalProductosCarrito${dataProducto.producto_id}`
    );
    const btnRestar = document.getElementById(
      `btnRestar${dataProducto.producto_id}`
    );
    const btnEliminar = document.getElementById(
      `btnEliminar${dataProducto.producto_id}`
    );

    const totalCarritoCompras = document.getElementById("totalCarritoCompras")

    // const idProducto = tarjetaPrtoId.id.split("d")[1];
    let infoSumarCarrito = 0;

    // contenedorCards.addEventListener("click", (e) => {
      // let clickId = e.target.id.split("").pop();

      console.log(totalCarritoCompras);

      // if(clickId === idProducto){
        totalizadoProductos.innerHTML=multiplicarValorProducto;

        btnSumarCarrito.addEventListener("click", () => {
          infoSumarCarrito = 1 + productoCarrito.convertirCantidadProdutos;
          totalProductosCarrito.innerHTML = infoSumarCarrito;
          productoCarrito.convertirCantidadProdutos = infoSumarCarrito;
          totalCarritoCompras.innerHTML = infoSumarCarrito * productoCarrito.precio
          totalizadoProductos.innerHTML=infoSumarCarrito * productoCarrito.precio;
        });
    
        btnRestar.addEventListener("click", () => {
          if (infoSumarCarrito > 0) {
            infoSumarCarrito = infoSumarCarrito - 1;
            totalProductosCarrito.innerHTML = infoSumarCarrito;
            productoCarrito.convertirCantidadProdutos = infoSumarCarrito;
            totalCarritoCompras.innerHTML = infoSumarCarrito * productoCarrito.precio
            totalizadoProductos.innerHTML=infoSumarCarrito * productoCarrito.precio;
          }
        });
    
        btnEliminar.addEventListener("click", () => {
          contenedorCards.innerHTML = ``;
          console.log("eliminando");
        });


      // }
    // });

    console.log(arregloTarjetas);
    
  });
}

// function agregarProductosAlCarrito(arregloTarjetas, producto){
//   arregloTarjetas.push(producto)
// }