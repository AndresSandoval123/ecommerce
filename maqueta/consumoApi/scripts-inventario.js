// scripts-inventario.js

/*
evento que se dispara en automatico cuando el Dom o la pagina se hata cargado
y ayuda para que el json funcione ligero en las funcionalidades de los filtros
*/
document.addEventListener("DOMContentLoaded", function() {
    cargarProductosDesdeJSON();
});

let currentId = 0; // inicializa los id en 0

/* Función para obtener el ID máximo actual para operar con el incrementrarlos luego 
despues de cada registro
*/
function getMaxId() {
    const rows = document.querySelectorAll('#tablaProductosBody tr');
    let maxId = 0;
    rows.forEach(row => {
        const id = parseInt(row.cells[0].textContent);
        if (id > maxId) {
            maxId = id;
        }
    });
    return maxId;
}

// Función para cargar productos desde el JSON y que incremente Id en uno
function cargarProductosDesdeJSON() {
    fetch('/maqueta/consumoApi/scripts-inventario-productos.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(producto => {
                agregarProductoATabla(producto);
            });
            // obtenido el ultimo Id incrementamos apartir de el
            currentId = getMaxId() + 1; // Actualiza currentId después de cargar los productos
        })
        .catch(error => console.error('Error al cargar productos:', error));
}

// Función para agregar un nuevo producto desde el formulario
document.getElementById('agregarProductoBtn').addEventListener('click', agregarProducto);

function agregarProducto() {
    // Obtiene los valores del formulario
    var id = currentId++; // Usar y luego incrementar el ID actual
    var nombre = document.getElementById('productNombre').value;
    var precio = document.getElementById('productPrecio').value;
    var talla = document.getElementById('talla').value;
    var color = document.getElementById('color').value;
    var imagen1 = document.getElementById('productImagen1').files[0];
    var imagen2 = document.getElementById('productImagen2').files[0];

    // Convierte las imágenes a una URL
    var reader1 = new FileReader();
    var reader2 = new FileReader();

    reader1.onload = function(e) {
        var imageUrl1 = e.target.result;
        reader2.onload = function(e) {
            var imageUrl2 = e.target.result;
            // Crea un nuevo producto y lo agrega a la tabla
            var nuevoProducto = {
                id: id,
                nombre: nombre,
                precio: parseFloat(precio).toFixed(2),
                talla: talla,
                color: color,
                imagen1: imageUrl1,
                imagen2: imageUrl2
            };
            agregarProductoATabla(nuevoProducto);

            // Limpia el formulario después de agregar el producto
            document.getElementById('productoForm').reset();
        }
        reader2.readAsDataURL(imagen2);
    }
    reader1.readAsDataURL(imagen1);
}

// Función para agregar un producto a la tabla
function agregarProductoATabla(producto) {
    // Crea una nueva fila en la tabla
    var table = document.getElementById('tablaProductosBody');
    var newRow = table.insertRow();

    // Inserta las celdas en la nueva fila
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);

    // Agrega el contenido a las celdas
    cell1.innerHTML = producto.id;
    cell2.innerHTML = producto.nombre;
    cell3.innerHTML = "$ " + producto.precio;
    cell4.innerHTML = producto.talla;
    cell5.innerHTML = producto.color;
    cell6.innerHTML = '<img src="' + producto.imagen1 + '" width="30">';
    cell7.innerHTML = '<img src="' + producto.imagen2 + '" width="30">';
}

// Función para filtrar la tabla
function filtrarTabla(tipo) {
    const input = document.getElementById(`filtro${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`).value.toLowerCase();
    const table = document.getElementById('tablaProductosBody');
    const rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let match = false;
        if (tipo === 'id') {
            match = cells[0].textContent.toLowerCase().includes(input);
        } else if (tipo === 'nombre') {
            match = cells[1].textContent.toLowerCase().includes(input);
        }
        rows[i].style.display = match ? '' : 'none';
    }
}
