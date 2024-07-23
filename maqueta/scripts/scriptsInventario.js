document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();

    document.getElementById('agregarProductoBtn').addEventListener('click', async function(event) {
        event.preventDefault();
        agregarProducto();
    });

    document.getElementById('filtroId').addEventListener('keyup', function() {
        filtrarProductos();
    });

    document.getElementById('filtroNombre').addEventListener('keyup', function() {
        filtrarProductos();
    });
});

async function cargarProductos() {
    try {
        const response = await fetch('http://localhost:8080/api/v1/productos/todos');
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const productos = await response.json();
        mostrarProductos(productos);
    } catch (error) {
        console.error('Error al cargar los productos:', error);
    }
}

function mostrarProductos(productos) {
    const tablaProductosBody = document.getElementById('tablaProductosBody');
    tablaProductosBody.innerHTML = ''; // Limpiar la tabla antes de cargar nuevos datos
    productos.forEach(producto => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${producto.id_producto}</td>
            <td>${producto.nombre_producto}</td>
            <td>${producto.precio_producto}</td>
            <td>${producto.talla}</td>
            <td>${producto.color}</td>
            <td><img src="${producto.imagen[0]?.url_imagen}" alt="Imagen 1" width="50"></td>
            <td><img src="${producto.imagen[1]?.url_imagen}" alt="Imagen 2" width="50"></td>
        `;
        tablaProductosBody.appendChild(fila);
    });
}

async function agregarProducto() {
    const nombre = document.getElementById('productNombre').value;
    const precio = document.getElementById('productPrecio').value;
    const talla = document.getElementById('talla').value;
    const cantidad = document.getElementById('productCantidad').value;
    const color = document.getElementById('color').value;

    const producto = {
        nombre_producto: nombre,
        descripcion: `Descripción del producto ${nombre}`, // Puedes cambiar esto para permitir la entrada del usuario
        color: color,
        talla: talla,
        stockDisponible: cantidad,
        precio_producto: precio,
        categoria: "Ropa Deportiva", // Puedes cambiar esto para permitir la entrada del usuario
        imagen: [
            {
                url_imagen: "https://i.postimg.cc/default-img1.png" // Reemplaza con la URL real o agrega lógica para cargar la imagen
            },
            {
                url_imagen: "https://i.postimg.cc/default-img2.png" // Reemplaza con la URL real o agrega lógica para cargar la imagen
            }
        ]
    };

    try {
        const response = await fetch('http://localhost:8080/api/v1/productos/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        });

        if (response.ok) {
            alert('Producto agregado con éxito');
            cargarProductos(); // Recargar la lista de productos
        } else {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error al agregar el producto:', error);
        alert('Hubo un problema al agregar el producto');
    }
}

function filtrarProductos() {
    const filtroId = document.getElementById('filtroId').value.toLowerCase();
    const filtroNombre = document.getElementById('filtroNombre').value.toLowerCase();

    const filas = document.querySelectorAll('#tablaProductosBody tr');
    filas.forEach(fila => {
        const id = fila.cells[0].textContent.toLowerCase();
        const descripcion = fila.cells[1].textContent.toLowerCase();

        if (id.includes(filtroId) && descripcion.includes(filtroNombre)) {
            fila.style.display = '';
        } else {
            fila.style.display = 'none';
        }
    });
}