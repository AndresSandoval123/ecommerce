/* se llama los id del html */
let tarjeta = document.getElementById("tarjeta");
let atras = document.getElementById("atras");
let siguiente = document.getElementById("siguiente");
let indicadorPagina = document.getElementById("indicadorPagina");
let elemtPorPagina = 3; // Número de productos por página
let llamar = localStorage.getItem("productos"); /* llamamos el localStorage suministrado */ 
let convertir = JSON.parse(llamar)/* convertimos el string importado a formato JSON */

/* Recorremos de esta manera el objeto de producto, debido a su estructura y gerarquia, entramos al objeto luego
al arreglom luego iteramos sobre el arreglo para poder entrar al elemento que queremos llamar. */
for (categoria in convertir){
    for( tipo in convertir[categoria]){
        convertir[categoria][tipo].forEach(element => {

            tarjeta.innerHTML+=`
            <div class="contenTarjeta">
            <img class="imgTar" src='${element.imagen}'>
            <div class="texTarj">
            <h4 class="nomTar" >${element.nombre}</h4>
            <h4 class="precio">$ ${element.precio}</h4>
            </div>
            <div class="opciones">
                <button id="btnComprar">COMPRAR</button>
                <a href="#">Ver Detalle</a>
            </div>
            </div>
            `
        });
    }
}
//Funcion para mostrar el contenido en la pagina
function mostrarContenido(){
    tarjeta.innerHTML = ""; //para que se limpie 
}


siguiente.addEventListener("click", ()=>{
    pagina +=1;
});
atras.addEventListener("click", ()=>{
    pagina -=1;
});