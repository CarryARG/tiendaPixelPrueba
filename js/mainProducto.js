const renderbotonMenu = () => {
    let botonMenu = `<button style="transform: translate(0px,7px); width: 34px; height: 35px;" class="bg-warning navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" style="transform: translate(-5px,0); width: 20px; height: 20px;"></span>
  </button>`;
  
    document.getElementById("botonaso").innerHTML = botonMenu;
}

renderbotonMenu();

const renderProducto = () => {
    const producto = cargarProducto();
    let salida1 = `<div class="col-md-6 text-center">
        <img src="images/${producto.imagen}" alt="${producto.nombre}" class="img-fluid" />
    </div>
    <div class="col-md-6">
        <h1 class="fw-bold">${producto.nombre}</h1>
        <p><b>Descripcion:</b> ${producto.descripcion}</p>
        <p><b>$${producto.precio}</b></p>
        <p><a href="#" class="btn btn-warning" onClick="agregarAlCarrito(${producto.id});"> Agregar (+) </a></p>
    </div>`;
    document.getElementById("producto").innerHTML = salida1;
}

renderProducto();
renderBotonCarrito();