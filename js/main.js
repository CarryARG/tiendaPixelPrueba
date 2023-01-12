const renderProductos = () => {
    const productos = cargarProductosLS();
    let salida1 = "";

    for (let producto of productos) {
        salida1 += `<div class="col-md-3 mb-3">
            <div class="card text-center border border-0">
                <img src="./images/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">$${producto.precio}</p>
                <a href="#" class="btn btn-warning" onClick="agregarAlCarrito(${producto.id});">Agregar al Carrito</a>
                </div>
            </div>
        </div>`;
    }

    document.getElementById("productos").innerHTML = salida1;
}

renderProductos();
renderBotonCarrito();
