/* /* const fetch2 = fetch("/maqueta/lista.json").then((response)=>response.json()).then((data)=>console.log(data.products.women[0].sizes.XXL.colors.black)); 
const productCard = document.getElementById("productCard");

async function consuApi(){
    const response = await fetch("/maqueta/consumoApi/lista.json")
    const data = await response.json()
    const catMen = data.products.men
    const catwomen = data.products.women

    for(let i = 0; i < catMen.length; i++){
        productCard.innerHTML+=`
        <div class="principal">
        <h2>${catMen[i].name}</h2>
        <div class="contenedorImagen">
        <img class="imgmio" src="${catMen[i].img}">
        </div>
        <h2>${catMen[i].tallas[1]}</h2>
        </div>
        `
    }
    catwomen.forEach(productWomen => {
        /* console.log(productWomen);  
        productCard.innerHTML+=`
        <div class="principal">
        <h2>${productWomen.name}</h2>
        <div class="contenedorImagen">
        <img class="imgmio" src="${productWomen.img}">
        </div>
        </div>
        `
    });
}
consuApi();
/* console.log(fetch2); */ 

/* const fs = require("fs") */
/* const path = require("path") */
/* const pathJson = path.join(__dirname,"/lista.json") */


/* async function traerJsonConPro(){
    const response = await fetch("/maqueta/consumoApi/lista.json")
    console.log(response);
}
traerJsonConPro() */
/* function crearPro(){
    const nuevoProducto = {
        product_id:9,
        img: "https://i.postimg.cc/CxsrcfL6/Alexa.jpg",
        name: "foto",
        description: "cara de alexa",
        sizes:{
            XL: {
                colors: {
                  black: 10,
                  blue: 8,
                  red: 5
                }
              },
              XXL: {
                colors: {
                  black: 7,
                  blue: 6,
                  red: 4
                }
              },
              XXXL: {
                colors: {
                  black: 5,
                  blue: 4,
                  red: 3
                }
              }   
        },
        tallas:["XL","XXL","XXXL"]
    }
    const dataProdJson= JSON.stringify(nuevoProducto,null,4)/* convierte a json la info//
    fs.writeFileSync(pathJson,dataProdJson,"UTF-8")

} 
crearPro() */
