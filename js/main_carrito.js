const renderProductosCarrito = () => {
    const productos_carrito = cargarProductosCarrito();
	let salida2 = "";

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
            <td class="align-middle">${producto.cantidad} X ${producto.precio}</td>
            <td class="align-middle">$${producto.cantidad * producto.precio}</td>
            <td class="align-middle text-end"><a href="#" title="Eliminar Producto" onClick="eliminarProducto(${producto.id});"><img src="../../images/trash3.svg" alt="Eliminar Producto" width="16" /></a></td>`;
        }

		salida2 += `<tr>
        <td colspan="3"><b>Suma Total</b></td>
        <td><b>$${sumaCarrito()}</b></td>
        <td>&nbsp;</td>
        </tr>
        </tbody>
        </table>`;
    } else {
		salida2 = `<div class="alert alert-danger text-center" role="alert">No se encontraron Productos en el Carrito!</div>`;
    }

	document.getElementById("productos_seleccionados").innerHTML = salida2;
}

renderProductosCarrito();
renderBotonCarrito();
