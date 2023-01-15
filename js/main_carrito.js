const renderbotonMenu = () => {
    let botonMenu = `<button style="transform: translate(0px,7px); width: 34px; height: 35px;" class="bg-warning navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" style="transform: translate(-5px,0); width: 20px; height: 20px;"></span>
  </button>`;
  
    document.getElementById("botonaso").innerHTML = botonMenu;
}

renderbotonMenu();

const renderProductosCarrito = () => {
    const productos_carrito = cargarProductosCarrito();
	let salida2 = "";
    let salida3 = "";

    if (totalCarrito() > 0) {    
		salida2 = `<table class="table">
        <tbody>
        <tr>
        <td colspan="6" class="text-end"><a href="#" class="btn btn-warning" onClick="vaciarCarrito()">Vaciar Carrito <img src="../../images/trash3.svg" alt="Vaciar Carrito" width="16" /></a></td>
        </tr>`;

        for (let producto of productos_carrito) {
			salida2 += `<tr>
            <td><img src="../../images/${producto.imagen}" alt="${producto.nombre}" width="64" /></td>
            <td class="align-middle">${producto.nombre}</td>
            <td class="align-middle"><button class="btn btn-warning rounded" title="eliminarItem" onClick="eliminarItemProducto(${producto.id});"> - </button> ${producto.cantidad} <button class="btn btn-warning rounded" title="agregarItem" onClick="agregarItemProducto(${producto.id});"> + </button></td>
            <td class="align-middle">${producto.cantidad} X ${producto.precio}</td>
            <td class="align-middle">$${producto.cantidad * producto.precio}</td>
            <td class="align-middle text-end"><a href="#" title="Eliminar Producto" onClick="eliminarProducto(${producto.id});"><img src="../../images/trash3.svg" alt="Eliminar Producto" width="16" /></a></td>`;
        }

		salida2 += `<tr>
        <td colspan="4"><b>Suma Total</b></td>
        <td><b>$${sumaCarrito()}</b></td>
        <td>&nbsp;</td>
        </tr>
        </tbody>
        </table>`;
        
        salida3 += `<table class="table">
        <tbody>
        <tr>
        <td colspan="6" class="text-center border-0"><a href="../../paginas/carrito/error.html" class="btn btn-warning fs-2"> Continuar Compra <alt="Continuar Compra" width="48" /></a></td>
        </tr>`;

    } else {
		salida2 = `<div class="alert alert-danger text-center" role="alert">No se encontraron Productos en el Carrito!</div>`;
        salida3 = ``;
    }

	document.getElementById("productos_seleccionados").innerHTML = salida2;
    document.getElementById("continuar").innerHTML = salida3;
    
}


renderProductosCarrito();
renderBotonCarrito();