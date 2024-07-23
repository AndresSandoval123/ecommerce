const express = require('express');
const path = require('path');
const app = express();
const port = 3000;  // Puerto deseado

// Configurar rutas, middleware, etc.

app.use(express.static(path.join(__dirname, 'maqueta')));

// Ruta para la página de inicio
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'maqueta','paginas','publico','home.html'));
});

/* app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
}); */

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor frontend corriendo en http://localhost:${port}`);
});
