const productos  ={
    "masculino": {
    "sudaderas": [
      {
        "producto_id": 1,
        "imagen": "https://i.postimg.cc/0NGTpktG/Ref-1-Casual-Gris-Claro.png",
        "nombre": "Sudadera Casual",
        "descripcion": "Sudadera cálida y confortable en diferentes colores.",
        "tallas": ["L","XL","XXL","XXXL"],
        "colores": ["Gris","Negro","Azul"],
        "precio": 20000,
        "cantidadEnStock": {
          "Gris": {
            "L": 10,
            "XL": 15,
            "XXL": 5,
            "XXXL": 8
          },
          "Negro": {
            "L": 7,
            "XL": 12,
            "XXL": 6,
            "XXXL": 9
          },
          "Azul": {
            "L": 6,
            "XL": 14,
            "XXL": 9,
            "XXXL": 11
          }
        }
      },
      {
        "producto_id": 2,
        "imagen": "https://i.postimg.cc/zf1mbbkX/Ref-1-Casual-Negro.png",
        "nombre": "Sudadera Deportiva",
        "descripcion": "Sudadera suave y cálida para el ejercicio.",
        "tallas": ["L","XL","XXL","XXXL"],
        "colores": ["Gris","Negro","Azul"],
        "precio": 25000,
        "cantidadEnStock": {
          "Gris": {
            "L": 9,
            "XL": 13,
            "XXL": 10,
            "XXXL": 6
          },
          "Negro": {
            "L": 12,
            "XL": 10,
            "XXL": 7,
            "XXXL": 8
          },
          "Azul": {
            "L": 6,
            "XL": 9,
            "XXL": 11,
            "XXXL": 5
          }
        }
      }
    ],
    "busos": [
      {
        "producto_id": 3,
        "imagen": "https://i.postimg.cc/442rvF10/Ref-2-Buso-Capota-Beige.png",
        "nombre": "Buso deportivo",
        "descripcion": "Buso casual para hombre calido y confortable.",
        "tallas": ["L","XL","XXL","XXXL"],
        "colores": ["Beis","Gris","Negro"],
        "precio": 15000,
        "cantidadEnStock": {
          "Beis": {
            "L": 10,
            "XL": 8,
            "XXL": 7,
            "XXXL": 5
          },
          "Gris": {
            "L": 6,
            "XL": 7,
            "XXL": 9,
            "XXXL": 8
          },
          "Negro": {
            "L": 8,
            "XL": 12,
            "XXL": 10,
            "XXXL": 6
          }
        }
      },
      {
        "producto_id": 4,
        "imagen": "https://i.postimg.cc/HsfRRcR4/Ref-2-Buso-Capota-Gris.png",
        "nombre": "Buso deportivo",
        "descripcion": "Buso casual para hombre calido y confortable.",
        "tallas": ["L","XL","XXL","XXXL"],
        "colores": ["Beis","Gris","Negro"],
        "precio": 15000,
        "cantidadEnStock": {
          "Beis": {
            "L": 12,
            "XL": 15,
            "XXL": 6,
            "XXXL": 8
          },
          "Gris": {
            "L": 9,
            "XL": 11,
            "XXL": 7,
            "XXXL": 5
          },
          "Negro": {
            "L": 7,
            "XL": 8,
            "XXL": 10,
            "XXXL": 9
          }
        }
      },
      {
        "producto_id": 5,
        "imagen": "https://i.postimg.cc/Ss5tBRNz/Ref-2-Buso-Capota-Beis-1.png",
        "nombre": "Buso deportivo",
        "descripcion": "Buso casual para hombre calido y confortable.",
        "tallas": ["L","XL","XXL","XXXL"],
        "colores": ["Beis","Gris","Negro"],
        "precio": 15000,
        "cantidadEnStock": {
          "Beis": {
            "L": 14,
            "XL": 10,
            "XXL": 12,
            "XXXL": 9
          },
          "Gris": {
            "L": 11,
            "XL": 9,
            "XXL": 8,
            "XXXL": 6
          },
          "Negro": {
            "L": 10,
            "XL": 8,
            "XXL": 7,
            "XXXL": 12
          }
        }
      }
    ],
    "conjuto_pantaloneta": [
      {
        "producto_id": 6,
        "imagen": "https://i.postimg.cc/BnHk0ZGW/Ref-3-Conj-Pantaloneta-Negro.png",
        "nombre": "Conjunto Pantaloneta",
        "descripcion": "Conjunto para hombre comodo y confortable.",
        "tallas": ["L","XL","XXL","XXXL"],
        "colores": ["Negro","Azul","Rojo"],
        "precio": 10000,
        "cantidadEnStock": {
          "Negro": {
            "L": 10,
            "XL": 8,
            "XXL": 7,
            "XXXL": 5
          },
          "Azul": {
            "L": 6,
            "XL": 7,
            "XXL": 9,
            "XXXL": 8
          },
          "Rojo": {
            "L": 8,
            "XL": 12,
            "XXL": 10,
            "XXXL": 6
          }
        }
      },
      {
        "producto_id": 7,
        "imagen": "https://i.postimg.cc/6QhP8H3Y/Ref-3-Conj-Pantaloneta-Azul.png",
        "nombre": "Conjunto Pantaloneta",
        "descripcion": "Conjunto para hombre comodo y confortable.",
        "tallas": ["L","XL","XXL","XXXL"],
        "colores": ["Negro","Azul","Rojo"],
        "precio": 10000,
        "cantidadEnStock": {
          "Negro": {
            "L": 12,
            "XL": 15,
            "XXL": 6,
            "XXXL": 8
          },
          "Azul": {
            "L": 7,
            "XL": 8,
            "XXL": 10,
            "XXXL": 9
          },
          "Rojo": {
            "L": 9,
            "XL": 11,
            "XXL": 7,
            "XXXL": 5
          }
        }
      },
      {
        "producto_id": 8,
        "imagen": "https://i.postimg.cc/W4VKbR2d/Ref-3-Conj-Pantaloneta-Rojo.png",
        "nombre": "Conjunto Pantaloneta",
        "descripcion": "Conjunto para hombre comodo y confortable.",
        "tallas": ["L","XL","XXL","XXXL"],
        "colores": ["Negro","Azul","Rojo"],
        "precio": 10000,
        "cantidadEnStock": {
          "Negro": {
            "L": 14,
            "XL": 10,
            "XXL": 12,
            "XXXL": 9
          },
          "Azul": {
            "L": 11,
            "XL": 9,
            "XXL": 8,
            "XXXL": 6
          },
          "Rojo": {
            "L": 10,
            "XL": 8,
            "XXL": 7,
            "XXXL": 12
          }
        }
      }
    ]
  },
  "femenino": {
    "leguis": [
      {
        "producto_id": 9,
        "imagen": "https://i.postimg.cc/ydm83CR2/Ref-1-Leguis-Gris.png",
        "nombre": "Leggings Deportivos Mujer",
        "descripcion": "Leggings elásticos para máxima movilidad.",
        "tallas": ["L","XL","XXL","XXXL"],
        "colores": ["Gris","Negro","Azul"],
        "precio": 10000,
        "cantidadEnStock": {
          "Gris": {
            "L": 8,
            "XL": 12,
            "XXL": 5,
            "XXXL": 7
          },
          "Negro": {
            "L": 10,
            "XL": 14,
            "XXL": 6,
            "XXXL": 8
          },
          "Azul": {
            "L": 7,
            "XL": 11,
            "XXL": 8,
            "XXXL": 6
          }
        }
      },
      {
        "producto_id": 10,
        "imagen": "https://i.postimg.cc/NFQf1C7F/Ref-1-Leguis-Negro1.png",
        "nombre": "Leggings Deportivos Mujer",
        "descripcion": "Leggings elásticos para máxima movilidad.",
        "tallas": ["L","XL","XXL","XXXL"],
        "colores": ["Gris","Negro","Azul"],
        "precio": 10000,
        "cantidadEnStock": {
          "Gris": {
            "L": 11,
            "XL": 13,
            "XXL": 8,
            "XXXL": 6
          },
          "Negro": {
            "L": 9,
            "XL": 15,
            "XXL": 10,
            "XXXL": 7
          },
          "Azul": {
            "L": 6,
            "XL": 12,
            "XXL": 9,
            "XXXL": 11
          }
        }
      },
      {
        "producto_id": 11,
        "imagen": "https://i.postimg.cc/8kbC1DN6/Ref-1-Leguis-Azul-Oscuro.png",
        "nombre": "Leggings Deportivos Mujer",
        "descripcion": "Leggings elásticos para máxima movilidad.",
        "tallas": ["L","XL","XXL","XXXL"],
        "colores": ["Gris","Negro","Azul"],
        "precio": 10000,
        "cantidadEnStock": {
          "Gris": {
            "L": 8,
            "XL": 6,
            "XXL": 9,
            "XXXL": 11
          },
          "Negro": {
            "L": 12,
            "XL": 10,
            "XXL": 7,
            "XXXL": 8
          },
          "Azul": {
            "L": 10,
            "XL": 7,
            "XXL": 12,
            "XXXL": 5
          }
        }
      }
    ],
    "sudaderas": [
      {
        "producto_id": 12,
        "imagen": "https://i.postimg.cc/wBhp0cBm/Ref-2-Estilos-Libre-Gris.png",
        "nombre": "Sudadera Deportiva",
        "descripcion": "Sudadera confortable para hacer ejercicio en diferentes colores.",
        "tallas": ["L","XL","XXL","XXXL"],
        "colores": ["Gris","Negro","Neon"],
        "precio": 10000,
        "cantidadEnStock": {
          "Gris": {
            "L": 9,
            "XL": 8,
            "XXL": 7,
            "XXXL": 11
          },
          "Negro": {
            "L": 15,
            "XL": 12,
            "XXL": 10,
            "XXXL": 8
          },
          "Neon": {
            "L": 8,
            "XL": 10,
            "XXL": 6,
            "XXXL": 12
          }
        }
      },
      {
        "producto_id": 13,
        "imagen": "https://i.postimg.cc/8C8GRnTG/Ref-2-Estilos-Libre-Negro.png",
        "nombre": "Sudadera Deportiva",
        "descripcion": "Sudadera confortable para hacer ejercicio en diferentes colores.",
        "tallas": ["L","XL","XXL","XXXL"],
        "colores": ["Gris","Negro","Neon"],
        "precio": 10000,
        "cantidadEnStock": {
          "Gris": {
            "L": 10,
            "XL": 12,
            "XXL": 7,
            "XXXL": 9
          },
          "Negro": {
            "L": 13,
            "XL": 11,
            "XXL": 8,
            "XXXL": 6
          },
          "Neon": {
            "L": 11,
            "XL": 9,
            "XXL": 10,
            "XXXL": 7
          }
        }
      },
      {
        "producto_id": 14,
        "imagen": "https://i.postimg.cc/sXsR8QB0/Ref-2-Estilos-Libre-Ne-n.png",
        "nombre": "Sudadera Deportiva",
        "descripcion": "Sudadera confortable para hacer ejercicio en diferentes colores.",
        "tallas": ["L","XL","XXL","XXXL"],
        "colores": ["Gris","Negro","Neon"],
        "precio": 10000,
        "cantidadEnStock": {
          "Gris": {
            "L": 10,
            "XL": 12,
            "XXL": 7,
            "XXXL": 9
          },
          "Negro": {
            "L": 13,
            "XL": 11,
            "XXL": 8,
            "XXXL": 6
          },
          "Neon": {
            "L": 11,
            "XL": 9,
            "XXL": 10,
            "XXXL": 7
          }
        }
      }
    ],
    "conjuntos_short": [
      {
        "producto_id": 15,
        "imagen": "https://i.postimg.cc/tRrHSg92/Ref-3-Conjunto-con-short-Negro.png",
        "nombre": "Conjunto Short",
        "descripcion": "El conjuto perfecto para hacer ejercicio.",
        "tallas": ["L","XL","XXL","XXXL"],
        "colores": ["Negro","Rojo","Verde"],
        "precio": 15000,
        "cantidadEnStock": {
          "Negro": {
            "L": 9,
            "XL": 8,
            "XXL": 7,
            "XXXL": 11
          },
          "Rojo": {
            "L": 15,
            "XL": 12,
            "XXL": 10,
            "XXXL": 8
          },
          "Verde": {
            "L": 8,
            "XL": 10,
            "XXL": 6,
            "XXXL": 12
          }
        }
      },
      {
        "producto_id": 16,
        "imagen": "https://i.postimg.cc/pr1bpssg/Ref-3-Conjunto-con-short-Rojo.png",
        "nombre": "Conjunto Short",
        "descripcion": "El conjuto perfecto para hacer ejercicio.",
        "tallas": ["L","XL","XXL","XXXL"],
        "colores": ["Negro","Rojo","Verde"],
        "precio": 15000,
        "cantidadEnStock": {
          "Negro": {
            "L": 9,
            "XL": 8,
            "XXL": 7,
            "XXXL": 11
          },
          "Rojo": {
            "L": 15,
            "XL": 12,
            "XXL": 10,
            "XXXL": 8
          },
          "Verde": {
            "L": 8,
            "XL": 10,
            "XXL": 6,
            "XXXL": 12
          }
        }
      },
      {
        "producto_id": 17,
        "imagen": "https://i.postimg.cc/kXBPkd49/Ref-3-Conjunto-con-short-Verde.png",
        "nombre": "Conjunto Short",
        "descripcion": "El conjuto perfecto para hacer ejercicio.",
        "tallas": ["L","XL","XXL","XXXL"],
        "colores": ["Negro","Rojo","Verde"],
        "precio": 15000,
        "cantidadEnStock": {
          "Negro": {
            "L": 9,
            "XL": 8,
            "XXL": 7,
            "XXXL": 11
          },
          "Rojo": {
            "L": 15,
            "XL": 12,
            "XXL": 10,
            "XXXL": 8
          },
          "Verde": {
            "L": 8,
            "XL": 10,
            "XXL": 6,
            "XXXL": 12
          }
        }
      }
    ]
  },
  "infantil": {
    "sudaderas": [
      {
        "producto_id": 18,
        "imagen": "https://i.postimg.cc/ZRRwC4X5/Ref-3-Con-Cremallera-Caf.png",
        "nombre": "Sudadera Deportiva",
        "descripcion": "Sudadera calida y confortable.",
        "tallas": ["L","XL","XXL","XXXL"],
        "colores": ["Cafe","Gris","Rosado"],
        "precio": 35000,
        "cantidadEnStock": {
          "Cafe": {
            "L": 7,
            "XL": 6,
            "XXL": 9,
            "XXXL": 8
          },
          "Gris": {
            "L": 6,
            "XL": 10,
            "XXL": 5,
            "XXXL": 9
          },
          "Rosado": {
            "L": 9,
            "XL": 6,
            "XXL": 11,
            "XXXL": 7
          }
        }
      },
      {
        "producto_id": 19,
        "imagen": "https://i.postimg.cc/PxR2D0kz/Ref-3-Con-Cremallera-Gris.png",
        "nombre": "Sudadera Deportiva",
        "descripcion": "Sudadera calida y confortable.",
        "tallas": ["L","XL","XXL","XXXL"],
        "colores": ["Cafe","Gris","Rosado"],
        "precio": 35000,
        "cantidadEnStock": {
          "Cafe": {
            "L": 8,
            "XL": 9,
            "XXL": 10,
            "XXXL": 6
          },
          "Gris": {
            "L": 12,
            "XL": 10,
            "XXL": 7,
            "XXXL": 5
          },
          "Rosado": {
            "L": 9,
            "XL": 6,
            "XXL": 8,
            "XXXL": 7
          }
        }
      },
      {
        "producto_id": 20,
        "imagen": "https://i.postimg.cc/brSL9LyX/Ref-3-Con-Cremallera-Rosa.png",
        "nombre": "Sudadera Deportiva",
        "descripcion": "Sudadera calida y confortable.",
        "tallas": ["L","XL","XXL","XXXL"],
        "colores": ["Cafe","Gris","Rosado"],
        "precio": 35000,
        "cantidadEnStock": {
          "Cafe": {
            "L": 8,
            "XL": 9,
            "XXL": 10,
            "XXXL": 6
          },
          "Gris": {
            "L": 12,
            "XL": 10,
            "XXL": 7,
            "XXXL": 5
          },
          "Rosado": {
            "L": 9,
            "XL": 6,
            "XXL": 8,
            "XXXL": 7
          }
        }
      }
    ],
    "busos": [
      {
        "producto_id": 21,
        "imagen": "https://i.postimg.cc/X7yDfNqZ/Ref-2-Sin-Logo-Amarillo.png",
        "nombre": "Buso deportivo",
        "descripcion": "Buso unisex calido y confortable.",
        "tallas": ["L","XL","XXL","XXXL"],
        "colores": ["Amarillo","Naranja","Rosado"],
        "precio": 30000,
        "cantidadEnStock": {
          "Amarillo": {
            "L": 7,
            "XL": 6,
            "XXL": 9,
            "XXXL": 8
          },
          "Naranja": {
            "L": 6,
            "XL": 10,
            "XXL": 5,
            "XXXL": 9
          },
          "Rosado": {
            "L": 9,
            "XL": 6,
            "XXL": 11,
            "XXXL": 7
          }
        }
      },
      {
        "producto_id": 22,
        "imagen": "https://i.postimg.cc/RZ7sYPc4/Ref-2-Sin-Logo-Naranja.png",
        "nombre": "Buso deportivo",
        "descripcion": "Buso unisex calido y confortable.",
        "tallas": ["L","XL","XXL","XXXL"],
        "colores": ["Amarillo","Naranja","Rosado"],
        "precio": 30000,
        "cantidadEnStock": {
          "Amarillo": {
            "L": 8,
            "XL": 9,
            "XXL": 10,
            "XXXL": 6
          },
          "Naranja": {
            "L": 12,
            "XL": 10,
            "XXL": 7,
            "XXXL": 5
          },
          "Rosado": {
            "L": 9,
            "XL": 6,
            "XXL": 8,
            "XXXL": 7
          }
        }
      },
      {
        "producto_id": 23,
        "imagen": "https://i.postimg.cc/vZF23Rx0/Ref-2-Sin-Logo-Rosa.png",
        "nombre": "Buso deportivo",
        "descripcion": "Buso unisex calido y confortable.",
        "tallas": ["L","XL","XXL","XXXL"],
        "colores": ["Amarillo","Naranja","Rosado"],
        "precio": 30000,
        "cantidadEnStock": {
          "Amarillo": {
            "L": 8,
            "XL": 9,
            "XXL": 10,
            "XXXL": 6
          },
          "Naranja": {
            "L": 12,
            "XL": 10,
            "XXL": 7,
            "XXXL": 5
          },
          "Rosado": {
            "L": 9,
            "XL": 6,
            "XXL": 8,
            "XXXL": 7
          }
        }
      }
    ],
    "conjuntos": [
      {
        "producto_id": 24,
        "imagen": "https://i.postimg.cc/3RSbBd2G/Ref-1-Logo-Grande-Azul-Oscuro.png",
        "nombre": "Conjunto Infantil",
        "descripcion": "Conjunto unixes comodo, con estilo y confortable.",
        "tallas": ["L","XL","XXL","XXXL"],
        "colores": ["Azul","Negro","Rojo"],
        "precio": 50000,
        "cantidadEnStock": {
          "Azul": {
            "L": 7,
            "XL": 6,
            "XXL": 9,
            "XXXL": 8
          },
          "Negro": {
            "L": 6,
            "XL": 10,
            "XXL": 5,
            "XXXL": 9
          },
          "Rojo": {
            "L": 9,
            "XL": 6,
            "XXL": 11,
            "XXXL": 7
          }
        }
      },
      {
        "producto_id": 25,
        "imagen": "https://i.postimg.cc/dQfxZZsP/Ref-1-Logo-Grande-Negro.png",
        "nombre": "Conjunto Infantil",
        "descripcion": "Conjunto unixes comodo, con estilo y confortable.",
        "tallas": ["L","XL","XXL","XXXL"],
        "colores": ["Azul","Negro","Rojo"],
        "precio": 50000,
        "cantidadEnStock": {
          "Azul": {
            "L": 8,
            "XL": 9,
            "XXL": 10,
            "XXXL": 6
          },
          "Negro": {
            "L": 12,
            "XL": 10,
            "XXL": 7,
            "XXXL": 5
          },
          "Rojo": {
            "L": 9,
            "XL": 6,
            "XXL": 8,
            "XXXL": 7
          }
        }
      },
      {
        "producto_id": 26,
        "imagen": "https://i.postimg.cc/kG2Yhqyp/Ref-1-Logo-Grande-Rojo.png",
        "nombre": "Conjunto Infantil",
        "descripcion": "Conjunto unixes comodo, con estilo y confortable.",
        "tallas": ["L","XL","XXL","XXXL"],
        "colores": ["Azul","Negro","Rojo"],
        "precio": 50000,
        "cantidadEnStock": {
          "Azul": {
            "L": 8,
            "XL": 9,
            "XXL": 10,
            "XXXL": 6
          },
          "Negro": {
            "L": 12,
            "XL": 10,
            "XXL": 7,
            "XXXL": 5
          },
          "Rojo": {
            "L": 9,
            "XL": 6,
            "XXL": 8,
            "XXXL": 7
          }
        }
      }
    ]
  }
}
localStorage.setItem("productos",JSON.stringify(productos));