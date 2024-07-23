fetch("http://localhost:8080/api/v1/usuarios")
.then(response => response.json())
.then(data => {
    console.log(data); // Aquí manejas los datos recibidos del backend
})
.catch(error => console.error('Error:', error));

