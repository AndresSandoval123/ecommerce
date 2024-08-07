let nombres = document.getElementById("nombres");/* se llama los id del html */
let llamar = localStorage.getItem("productos"); /* llamamos el localStorage suministrado */ 

let convertir = JSON.parse(llamar)/* convertimos el string importado a formato JSON */

/* Recorremos de esta manera el objeto de producto, debido a su estructura y gerarquia, entramos al objeto luego
al arreglom luego iteramos sobre el arreglo para poder entrar al elemento que queremos llamar. */
for (categoria in convertir){
    for( tipo in convertir[categoria]){
        convertir[categoria][tipo].forEach(element => {
            nombres.innerHTML=`
            <h1>${element.nombre}</h1>
            <h1>${element.producto_id}</h1>
            <img src="${element.imagen}">
            `
        });
    }
}



/*const productosprueba = {
    "masculino": [
      {
        "producto_id": 1,
        "imagen": "url_imagen_1",
        "nombre": "Camiseta Deportiva Hombre",
        "descripcion": "Camiseta de entrenamiento ligera y transpirable.",
        "tallas": ["L", "XL", "XXL", "XXXL"],
        "colores": ["Negro", "Azul", "Rojo", "Verde", "Gris"],
        "precio": 100,
        "cantidadEnStock": {
          "Negro": { "L": 10, "XL": 15, "XXL": 5, "XXXL": 8 },
          "Azul": { "L": 7, "XL": 12, "XXL": 6, "XXXL": 9 },
          "Rojo": { "L": 5, "XL": 10, "XXL": 8, "XXXL": 7 },
          "Verde": { "L": 8, "XL": 9, "XXL": 7, "XXXL": 10 },
          "Gris": { "L": 6, "XL": 14, "XXL": 9, "XXXL": 11 }
        }
      },
      {
        "producto_id": 2,
        "imagen": "url_imagen_2",
        "nombre": "Pantalones Deportivos Hombre",
        "descripcion": "Pantalones cómodos para actividades deportivas.",
        "tallas": ["L", "XL", "XXL", "XXXL"],
        "colores": ["Negro", "Gris", "Azul", "Verde", "Rojo"],
        "precio": 100,
        "cantidadEnStock": {
          "Negro": { "L": 9, "XL": 13, "XXL": 10, "XXXL": 6 },
          "Gris": { "L": 12, "XL": 10, "XXL": 7, "XXXL": 8 },
          "Azul": { "L": 6, "XL": 9, "XXL": 11, "XXXL": 5 },
          "Verde": { "L": 10, "XL": 8, "XXL": 9, "XXXL": 12 },
          "Rojo": { "L": 7, "XL": 12, "XXL": 6, "XXXL": 11 }
        }
      },
      {
        "producto_id": 3,
        "imagen": "url_imagen_3",
        "nombre": "Chaqueta Deportiva Hombre",
        "descripcion": "Chaqueta resistente al viento y agua.",
        "tallas": ["L", "XL", "XXL", "XXXL"],
        "colores": ["Negro", "Azul", "Gris", "Verde", "Rojo"],
        "precio": 100,
        "cantidadEnStock": {
          "Negro": { "L": 10, "XL": 8, "XXL": 7, "XXXL": 5 },
          "Azul": { "L": 6, "XL": 7, "XXL": 9, "XXXL": 8 },
          "Gris": { "L": 8, "XL": 12, "XXL": 10, "XXXL": 6 },
          "Verde": { "L": 7, "XL": 10, "XXL": 5, "XXXL": 9 },
          "Rojo": { "L": 9, "XL": 6, "XXL": 11, "XXXL": 7 }
        }
      },
      {
        "producto_id": 4,
        "imagen": "url_imagen_4",
        "nombre": "Shorts Deportivos Hombre",
        "descripcion": "Shorts ligeros y cómodos para el deporte.",
        "tallas": ["L", "XL", "XXL", "XXXL"],
        "colores": ["Negro", "Gris", "Azul", "Verde", "Rojo"],
        "precio": 100,
        "cantidadEnStock": {
          "Negro": { "L": 12, "XL": 15, "XXL": 6, "XXXL": 8 },
          "Gris": { "L": 9, "XL": 11, "XXL": 7, "XXXL": 5 },
          "Azul": { "L": 7, "XL": 8, "XXL": 10, "XXXL": 9 },
          "Verde": { "L": 5, "XL": 6, "XXL": 8, "XXXL": 12 },
          "Rojo": { "L": 8, "XL": 9, "XXL": 5, "XXXL": 10 }
        }
      },
      {
        "producto_id": 5,
        "imagen": "url_imagen_5",
        "nombre": "Sudadera Deportiva Hombre",
        "descripcion": "Sudadera cálida y confortable.",
        "tallas": ["L", "XL", "XXL", "XXXL"],
        "colores": ["Negro", "Azul", "Gris", "Verde", "Rojo"],
        "precio": 100,
        "cantidadEnStock": {
          "Negro": { "L": 14, "XL": 10, "XXL": 12, "XXXL": 9 },
          "Azul": { "L": 11, "XL": 9, "XXL": 8, "XXXL": 6 },
          "Gris": { "L": 10, "XL": 8, "XXL": 7, "XXXL": 12 },
          "Verde": { "L": 8, "XL": 6, "XXL": 10, "XXXL": 11 },
          "Rojo": { "L": 7, "XL": 5, "XXL": 9, "XXXL": 8 }
        }
      }
    ],
    "femenino": [
      {
        "producto_id": 6,
        "imagen": "url_imagen_6",
        "nombre": "Camiseta Deportiva Mujer",
        "descripcion": "Camiseta ajustada para mayor comodidad.",
        "tallas": ["L", "XL", "XXL", "XXXL"],
        "colores": ["Rosa", "Negro", "Blanco", "Azul", "Verde"],
        "precio": 100,
        "cantidadEnStock": {
          "Rosa": { "L": 8, "XL": 12, "XXL": 5, "XXXL": 7 },
          "Negro": { "L": 10, "XL": 14, "XXL": 6, "XXXL": 8 },
          "Blanco": { "L": 5, "XL": 9, "XXL": 7, "XXXL": 11 },
          "Azul": { "L": 7, "XL": 11, "XXL": 8, "XXXL": 6 },
          "Verde": { "L": 6, "XL": 13, "XXL": 9, "XXXL": 12 }
        }
      },
      {
        "producto_id": 7,
        "imagen": "url_imagen_7",
        "nombre": "Leggings Deportivos Mujer",
        "descripcion": "Leggings elásticos para máxima movilidad.",
        "tallas": ["L", "XL", "XXL", "XXXL"],
        "colores": ["Negro", "Gris", "Rosa", "Azul", "Morado"],
        "precio": 100,
        "cantidadEnStock": {
          "Negro": { "L": 9, "XL": 15, "XXL": 10, "XXXL": 7 },
          "Gris": { "L": 11, "XL": 13, "XXL": 8, "XXXL": 6 },
          "Rosa": { "L": 8, "XL": 10, "XXL": 7, "XXXL": 9 },
          "Azul": { "L": 6, "XL": 12, "XXL": 9, "XXXL": 11 },
          "Morado": { "L": 10, "XL": 9, "XXL": 11, "XXXL": 5 }
        }
      },
      {
        "producto_id": 8,
        "imagen": "url_imagen_8",
        "nombre": "Chaqueta Deportiva Mujer",
        "descripcion": "Chaqueta ligera para el entrenamiento.",
        "tallas": ["L", "XL", "XXL", "XXXL"],
        "colores": ["Negro", "Azul", "Rosa", "Blanco", "Verde"],
        "precio": 100,
        "cantidadEnStock": {
          "Negro": { "L": 12, "XL": 10, "XXL": 7, "XXXL": 8 },
          "Azul": { "L": 10, "XL": 7, "XXL": 12, "XXXL": 5 },
          "Rosa": { "L": 8, "XL": 6, "XXL": 9, "XXXL": 11 },
          "Blanco": { "L": 7, "XL": 14, "XXL": 8, "XXXL": 9 },
          "Verde": { "L": 9, "XL": 8, "XXL": 10, "XXXL": 6 }
        }
      },
      {
        "producto_id": 9,
        "imagen": "url_imagen_9",
        "nombre": "Shorts Deportivos Mujer",
        "descripcion": "Shorts cómodos y transpirables.",
        "tallas": ["L", "XL", "XXL", "XXXL"],
        "colores": ["Negro", "Gris", "Rosa", "Azul", "Blanco"],
        "precio": 100,
        "cantidadEnStock": {
          "Negro": { "L": 15, "XL": 12, "XXL": 10, "XXXL": 8 },
          "Gris": { "L": 9, "XL": 8, "XXL": 7, "XXXL": 11 },
          "Rosa": { "L": 8, "XL": 10, "XXL": 6, "XXXL": 12 },
          "Azul": { "L": 7, "XL": 11, "XXL": 9, "XXXL": 5 },
          "Blanco": { "L": 6, "XL": 9, "XXL": 12, "XXXL": 10 }
        }
      },
      {
        "producto_id": 10,
        "imagen": "url_imagen_10",
        "nombre": "Sudadera Deportiva Mujer",
        "descripcion": "Sudadera suave y cálida para el ejercicio.",
        "tallas": ["L", "XL", "XXL", "XXXL"],
        "colores": ["Rosa", "Negro", "Gris", "Azul", "Verde"],
        "precio": 100,
        "cantidadEnStock": {
          "Rosa": { "L": 11, "XL": 9, "XXL": 10, "XXXL": 7 },
          "Negro": { "L": 13, "XL": 11, "XXL": 8, "XXXL": 6 },
          "Gris": { "L": 10, "XL": 12, "XXL": 7, "XXXL": 9 },
          "Azul": { "L": 9, "XL": 7, "XXL": 11, "XXXL": 8 },
          "Verde": { "L": 8, "XL": 6, "XXL": 9, "XXXL": 10 }
        }
      }
    ],
    "infantil": [
      {
        "producto_id": 11,
        "imagen": "url_imagen_11",
        "nombre": "Camiseta Deportiva Niño",
        "descripcion": "Camiseta ligera y cómoda para niños.",
        "tallas": ["L", "XL", "XXL", "XXXL"],
        "colores": ["Rojo", "Azul", "Verde", "Amarillo", "Blanco"],
        "precio": 100,
        "cantidadEnStock": {
          "Rojo": { "L": 10, "XL": 8, "XXL": 7, "XXXL": 5 },
          "Azul": { "L": 7, "XL": 6, "XXL": 9, "XXXL": 8 },
          "Verde": { "L": 8, "XL": 12, "XXL": 10, "XXXL": 6 },
          "Amarillo": { "L": 6, "XL": 10, "XXL": 5, "XXXL": 9 },
          "Blanco": { "L": 9, "XL": 6, "XXL": 11, "XXXL": 7 }
        }
      },
      {
        "producto_id": 12,
        "imagen": "url_imagen_12",
        "nombre": "Pantalones Deportivos Niño",
        "descripcion": "Pantalones cómodos para niños activos.",
        "tallas": ["L", "XL", "XXL", "XXXL"],
        "colores": ["Negro", "Gris", "Azul", "Verde", "Rojo"],
        "precio": 100,
        "cantidadEnStock": {
          "Negro": { "L": 12, "XL": 10, "XXL": 7, "XXXL": 5 },
          "Gris": { "L": 9, "XL": 6, "XXL": 8, "XXXL": 7 },
          "Azul": { "L": 8, "XL": 9, "XXL": 10, "XXXL": 6 },
          "Verde": { "L": 7, "XL": 11, "XXL": 6, "XXXL": 8 },
          "Rojo": { "L": 6, "XL": 12, "XXL": 9, "XXXL": 5 }
        }
      }
    ]
}*/

/* for(producto in convertir){


    convertir[producto].forEach(element => {
    nombres.innerHTML=`
        <h1>${element.nombre}</h1>
    `
    });
} 
    se rrecorre de esta manera para el Json creado por ale, debido aque ingresa a un objeto y luego a un arreglo.
*/