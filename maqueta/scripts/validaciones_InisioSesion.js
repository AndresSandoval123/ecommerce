import { usuariosLocal } from "./validaciones-input.js";


// seleccionamos los los id de el HTML
const ingresarForm = document.getElementById('ingresarForm'),
    correoIng = document.getElementById('correoIng'),
    passwordIng = document.getElementById('passwordIng');

console.log(correoIng)

// validar el correo en consola
console.log(correoIng)

// escuchador funcion anonima
ingresarForm.addEventListener('submit', (e) => {
    e.preventDefault(); // evita que el formulario se refresque

    console.log(usuariosLocal.find((usuario) => {
        if(correoIng.value == "user@admin.com" && passwordIng.value == 123456){
            return Swal.fire({
                text: "Bienvenido Administrador",
                confirmButtonColor: "#F27F0C",
            }).then(()=>{/* con .then seguido del callback tendra la funcion de direccionar al usuario al inicio*/
                window.location.href ='../../paginas/admin/homeAdmin.html'
            })   
        }else if (correoIng.value != usuario.correo) {
            // alerta desde la libreria Swal.fire
            return Swal.fire({
                text: "Correo no registrado",
                confirmButtonColor: "#F27F0C",
            });
        } else if (passwordIng.value != usuario.password) {
            return Swal.fire({
                text: "Contraseña invalida",
                confirmButtonColor: "#F27F0C",
            })
        } else if (correoIng.value === usuario.correo && passwordIng.value === usuario.password) {
            return Swal.fire({
                text: "Ingresaste exitosamente",
                confirmButtonColor: "#F27F0C",
            }).then(()=>{/* con .then seguido del callback tendra la funcion de direccionar al usuario al inicio*/
                window.location.href ='../../paginas/publico/home.html'
            })
        }else{
            return
        }
    }))
})
