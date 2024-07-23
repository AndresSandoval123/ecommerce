/* document.getElementById('encabezadohead'); */
const encabezadohead = document.getElementById('encabezadohead');

encabezadohead.innerHTML = `
<div class='contenido'>

<div class='logo'>
      <a href='/maqueta/paginas/publico/home.html'><img src='https://i.postimg.cc/xdqv2rgS/logo-Naranja.png' alt=''></a>
      </div>
      <nav class='nav' id='ham'>
        <ul class='barraNavegacion' id='barraNavegacion'>
        <li class='itemBarra1'><a  id='inicio' href='../../paginas/publico/home.html'>INICIO</a></li>
        <li class='itemBarra2'><a id='producto' href='../../paginas/publico/productos.html'>PRODUCTOS</a></li>
        <li class='itemBarra3'><a id='nosotros' href='../../paginas/publico/nosotros.html'>NOSOTROS</a></li>
        <li class='itemBarra4'><a id='contacto' href='../../paginas/publico/contactanos.html'>CONTACTANOS</a></li>
        <li class='itemCerrarSesion' id='cerrar'><a href='#iniciar'>CERRAR SESION</a></li>
        <li class='itemIniSesion' ><a id='iniciar' href='../../paginas/publico/login.html'>INICIAR SESION</a></li>
        </ul>
        <a class='icoMenu'  href='#ham'><i class='bi bi-list'></i></a>
        <a class='icoCerrar' href='#'><i class='bi bi-x-lg'></i></a>
        </nav>
        <div class='barraBusqueda'>
        <button><i class='bi bi-search'></i></button>
        <input type='text' placeholder='Busca tu producto'>
        </div>
        <a class='icoUser' href='../../paginas/publico/login.html'><i class='bi bi-person'></i></a>
        <a class='icoCarrito' id='btnAbrirCarrito' href='#'><i class='bi bi-cart3'></i></a>
        </div>`;

    const seleccionado = ()=> {
      const pagina = window.location.pathname;
      const link = document.querySelectorAll(".barraNavegacion a");
      for (let i of link){
        if( i.getAttribute("href") === pagina){
          i.classList.add("activo");
        }else{
          i.classList.remove("activo");
        }
      }
    
  } 
    seleccionado();

