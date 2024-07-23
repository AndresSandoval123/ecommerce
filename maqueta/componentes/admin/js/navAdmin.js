/* document.getElementById('encabezadohead'); */
const encabezadohead = document.getElementById('encabezadohead');

encabezadohead.innerHTML = `
<div class='contenido'>

<div class='logo'>
<a href='#'><img src='https://i.postimg.cc/xdqv2rgS/logo-Naranja.png' alt=''></a>
</div>
<nav class='nav' id='ham'>
<ul class='barraNavegacion'>
    <li class='itemBarra1'><a href='../../paginas/admin/homeAdmin.html'>INICIO</a></li>
    <li class='itemBarra4'><a href='../../paginas/admin/registroUsu.html'>USUARIOS REGISTRADOS</a></li>
    <li class='itemBarra3'><a href='../../paginas/admin/inventario.html'>INVENTARIO</a></li>
    <li class='itemBarra2'><a href='../../paginas/admin/ventas.html'>VENTAS</a></li>
    <li class='itemCerrarSesion' id='cerrar'><a href='#iniciar'>CERRAR SESION</a></li>
    <li class='itemIniSesion' id='iniciar'><a href='#cerra'>INICIAR SESION</a></li>
</ul>
    <a class='icoMenu'  href='#ham'><i class='bi bi-list'></i></a>
    <a class='icoCerrar' href='#'><i class='bi bi-x-lg'></i></a>
</nav>
<a class='icoUser' href='../../paginas/publico/login.html'><i class='bi bi-person'><p>Admin</p></i></a>
</div>`
