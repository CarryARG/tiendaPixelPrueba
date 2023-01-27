//aca si hago click me lleva al producto en detalle
const renderProductos = () => {
    const productos = cargarProductosLS();
    let salida1 = "";

    for (let producto of productos) {
        salida1 += `<div class="col-md-3 mb-3">
            <a href="#" onClick="verProducto(${producto.id});" class="text-decoration-none text-dark" style="color: #000000; background-color:yellow;" title="Ver ${producto.nombre};">
                <div class="container card text-center border border-2 border-warning">
                    <img src="images/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text fw-bold">$${producto.precio}</p>
                    </div>
                </div>
            </a>
        </div>`;
    }

    document.getElementById("productos").innerHTML = salida1;
}

renderProductos();
renderBotonCarrito();

//aca aplica el botonsito ese para llevarme a ver el coso que me interesa comprar
const renderbotonMenu = () => {
    let botonMenu = `<button style="transform: translate(0px,7px); width: 34px; height: 35px;" class="bg-warning navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" style="transform: translate(-5px,0); width: 20px; height: 20px;"></span>
  </button>`;
  
    document.getElementById("botonaso").innerHTML = botonMenu;
    renderbotonMenu();
}

renderbotonMenu();
