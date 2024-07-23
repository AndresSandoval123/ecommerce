/* const btnCrearCuenta = document.getElementById("btnCrearCuenta");
const nombres = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const passwordconf = document.getElementById("passwordconf");
let usuarioRegistrados = [];
 */
export const usuariosLocal = JSON.parse(localStorage.getItem("nuevoUsuario"));

/*
// console.log(usuariosLocal)

if(usuariosLocal != null){
  usuarioRegistrados = usuariosLocal
}

btnCrearCuenta.addEventListener("click", (e) => {
  e.preventDefault();

  // VALIDACIÓN UN CAMPO VACIO

  if (
    nombres.value === "" ||
    apellidos.value === "" ||
    correo.value === "" ||
    password.value === "" ||
    passwordconf.value === ""
  ) {
    return Swal.fire({
      text: "Debes ingresar todos los valores",
      confirmButtonColor: "#F27F0C",
    });
  }

  // VALIDACIÓN NOMBRE
  if (nombres.value === "" || nombres.value.length < 3) {
    return Swal.fire({
      text: "El nombre debe contener 3 o más caracteres",
      confirmButtonColor: "#F27F0C",
    });
  }

  // VALIDACIÓN APELLIDO
  if (apellidos.value === "" || apellidos.value.length < 3) {
    return Swal.fire({
      text: "El apellido debe contener 3 o más caracteres",
      confirmButtonColor: "#F27F0C",
    });
  }

  // VALIDACIÓN CORREO
  if (!correo.value.includes("@")) {
    return Swal.fire({
      text: "Ingrese un correo valido",
      confirmButtonColor: "#F27F0C",
    });
  }

  // VALIDACIÓN CONTRASEÑA NO COINCIDEN
  if (password.value !== passwordconf.value) {
    return Swal.fire({
      text: "Las contraseñas no coinciden",
      confirmButtonColor: "#F27F0C",
    });
  }

  // VALIDACIÓN CONTRASEÑA CARACTERES
  if (password.value.length <= 5 || password.value.length >= 20) {
    return Swal.fire({
      text: "Ingrese una contraseña de 5 a 20 caracteres",
      confirmButtonColor: "#F27F0C",
    });
  }

// CREACIÓN DE NUEVO USUARIO 
const nuevoUsuario = {
  "nombres": nombres.value,
  "apellidos": apellidos.value,
  "correo": correo.value.toLowerCase(),
  "password": password.value
} 

//console.log(nuevoUsuario) // verificar en consola

usuarioRegistrados.push(nuevoUsuario);
  
registroForm.reset()

localStorage.setItem("nuevoUsuario", JSON.stringify(usuarioRegistrados))

if(nuevoUsuario == nuevoUsuario){
  return Swal.fire({
    text: "Usuario registrado exitosamente",
      confirmButtonColor: "#F27F0C",
  })
}

});   */


document.getElementById("btnCrearCuenta").addEventListener("click", function(event) {
  event.preventDefault();

  const nombres = document.getElementById("nombres").value;
  const apellidos = document.getElementById("apellidos").value;
  const correo = document.getElementById("correo").value;
  const password = document.getElementById("password").value;
  const passwordconf = document.getElementById("passwordconf").value;

  if (nombres.length < 3) {
      return Swal.fire({
        text: "El nombre debe contener 3 o más caracteres",
        confirmButtonColor: "#F27F0C",
      });
  }
  if (apellidos.length < 3) {
      return Swal.fire({
        text: "El apellido debe contener 3 o más caracteres",
        confirmButtonColor: "#F27F0C",
      });
  }
  if (!correo.includes("@")) {
    return Swal.fire({
      text: "Ingrese un correo valido",
      confirmButtonColor: "#F27F0C",
    });
  }
  if (password !== passwordconf) {
    return Swal.fire({
      text: "Las contraseñas no coinciden",
      confirmButtonColor: "#F27F0C",
    });
  }
  if (password.length < 5 || password.length > 20) {
    return Swal.fire({
      text: "Ingrese una contraseña de 5 a 20 caracteres",
      confirmButtonColor: "#F27F0C",
    });
  }

  const usuario = {
      nombre_usuario: nombres,
      apellido_usuario: apellidos,
      correo_usuario: correo,
      contrasena_usuario: password
  };
  return Swal.fire({
    text: "Usuario registrado exitosamente",
      confirmButtonColor: "#F27F0C",
  }),
  enviarPeticion('post', usuario);
});

const baseURL = "http://localhost:8080/api/v1/usuarios";

async function enviarPeticion(metodo, usuario) {
  try {
      let response;
      if (metodo === 'post') {
          response = await fetch(`${baseURL}/add`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(usuario)
          });
      }

      if (!response.ok) {
          throw new Error('Error en la solicitud.');
      }

      const data = await response.json();
      console.log("Respuesta del servidor:", data);

      document.getElementById("registroForm").reset();

  } catch (error) {
      console.error("Error al realizar la operación:", error);
      alert("Error al realizar la operación. revise los datos ingresados.");
  }
}


