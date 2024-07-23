/* fetch("http://localhost:8080/api/v1/usuarios")
.then(response => response.json())
.then(data => {

    console.log(data); // Aquí manejas los datos recibidos del backend
})
.catch(error => console.error('Error:', error)); */

/* fetch('http://localhost:8080/api/v1/usuarios/todos')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Convertir la respuesta a JSON
  })
  .then(data => {
    console.log('Usuarios obtenidos:', data); // Imprime los datos en la consola del navegador
    
  })
  .catch(error => {
    console.error('Hubo un problema con la petición fetch:', error);
    // Manejar errores de red o de la aplicación aquí
  });
 */


async function cargarUsuarios() {
    try {
        const response = await fetch('http://localhost:8080/api/v1/usuarios/todos');
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const usuarios = await response.json();
        const tablaClientesBody = document.getElementById('tablaClientesBody');
        usuarios.forEach(usuario => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${usuario.id_usuario}</td>
                <td>${usuario.nombre_usuario}</td>
                <td>${usuario.apellido_usuario}</td>
                <td>${usuario.correo_usuario}</td>
                <td>*********</td>
            `;
            tablaClientesBody.appendChild(fila);
        });
    } catch (error) {
        console.error('Error al cargar los usuarios:', error);
    }
}

document.addEventListener('DOMContentLoaded', cargarUsuarios);

