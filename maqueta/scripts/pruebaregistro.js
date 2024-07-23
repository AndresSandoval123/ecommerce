/* const baseURL = "http://localhost:8080/api/v1/usuarios";


document.getElementById("btnCrearCuenta").addEventListener("click", function(event) {
    event.preventDefault();
    enviarPeticion('post');
});

async function enviarPeticion(metodo) {
    const nombre_usuario = document.getElementById("nombres").value;
    const apellido_usuario = document.getElementById("apellidos").value;
    const correo_usuario = document.getElementById("correo").value;
    const contrasena_usuario = document.getElementById("password").value;
 
    const cliente = {
        nombre_usuario: nombre_usuario,
        apellido_usuario: apellido_usuario,
        correo_usuario: correo_usuario,
        contrasena_usuario: contrasena_usuario
    };
 
    try {
        let response;
        if (metodo === 'post') {
            response = await fetch(`${baseURL}/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cliente)
            });
        } else if (metodo === 'put') {
            const id = prompt("Ingrese el ID del cliente a actualizar:");
            response = await fetch(`${baseURL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cliente)
            });
        } else if (metodo === 'delete') {
            const id = prompt("Ingrese el ID del cliente a eliminar:");
            response = await fetch(`${baseURL}/${id}`, {
                method: 'DELETE'
            });
        }
 
        if (!response.ok) {
            throw new Error('Error en la solicitud.');
        }
 
        const data = await response.json();
        console.log("Respuesta del servidor:", data);
        alert("Operación realizada exitosamente!");
 
    document.getElementById("myForm").reset();
 
    } catch (error) {
        console.error("Error al realizar la operación:", error);
        alert("Error al realizar la operación. Por favor, revise los datos ingresados o el ID proporcionado.");
    }
}
 
async function traerTodosClientes() {
    try {
        const response = await fetch(`${baseURL}/todos`);
        if (!response.ok) {
            throw new Error('Error en la solicitud.');
        }
 
        const data = await response.json();
        console.log("Todos los clientes:", data);
        alert("Clientes obtenidos correctamente. Revisa la consola para ver los detalles.");
    } catch (error) {
        console.error("Error al obtener todos los clientes:", error);
        alert("Error al obtener todos los clientes. Verifica la consola para más detalles.");
    }
}
console.log(cliente);
 */