//el hecho que tenga este "javascript" muy parecido al otro es por la posicion que se usan las paginas ademas del index...
//por eso opte por hacer dos parecidos que funcionen con sus respectivas paginas en sus respectivos lugares

const guardarProductosCarrito = (productos) => {
    localStorage.setItem("carrito", JSON.stringify(productos));
}

const cargarProductosCarrito = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

const estaEnElCarrito = (id) => {
    const productos_carrito = cargarProductosCarrito();

    return productos_carrito.some(item => item.id === id);
}

const agregarAlCarrito = (id) => {
    const productos = cargarProductosLS();
    const productos_carrito = cargarProductosCarrito();

    if (estaEnElCarrito(id)) {
        let pos = productos_carrito.findIndex(item => item.id === id);
        productos_carrito[pos].cantidad += 1;
    } else {
        const producto = productos.find(item => item.id === id);
        producto.cantidad = 1;
        productos_carrito.push(producto);
    }   
    
    guardarProductosCarrito(productos_carrito);
    renderBotonCarrito();
}

const eliminarProducto = (id) => {
    const productos_carrito = cargarProductosCarrito();
    const productos = productos_carrito.filter(item => item.id !== id);
    guardarProductosCarrito(productos);
    renderProductosCarrito();
    renderBotonCarrito();
}

const vaciarCarrito = () => {
    localStorage.removeItem("carrito");
    renderProductosCarrito();
    renderBotonCarrito();
}

const totalCarrito = () => {
    const productos_carrito = cargarProductosCarrito();

    return productos_carrito.reduce((total, item) => total += item.cantidad, 0);
}

const sumaCarrito = () => {
    const productos_carrito = cargarProductosCarrito();

    return productos_carrito.reduce((total, item) => total += item.cantidad * item.precio, 0);
}

const renderBotonCarrito = () => {
    let salida1 = `<button class="btn btn-warning position-relative" style="transform: translate(0px,6px); width:36px; height:36px;">
	<img src="./images/basket1.svg" alt="Carrito" style="transform: translate(-6px,-5px); width:22px; height:22px;">
		<span class="position-absolute top-0 start-100 badge rounded-pill bg-danger" style="font-size:110%; transform:translate(-21px,-18px);">${totalCarrito()}</span>
    </button>`;
    document.getElementById("boton_carrito1").innerHTML = salida1;
}

const agregarItemProducto = (id) => {
    const productos_carrito = cargarProductosCarrito();
    let pos = productos_carrito.findIndex(item => item.id === id);
    productos_carrito[pos].cantidad += 1;
    guardarProductosCarrito(productos_carrito);
    renderProductosCarrito();
    renderBotonCarrito();
}

const eliminarItemProducto = (id) => {
    const productos_carrito = cargarProductosCarrito();
    let pos = productos_carrito.findIndex(item => item.id === id);
    productos_carrito[pos].cantidad -= 1;
    if (productos_carrito[pos].cantidad == 0) {
        eliminarProducto(id);
    }else{
        guardarProductosCarrito(productos_carrito);
        renderProductosCarrito();
        renderBotonCarrito();
    }
}

const buscarProducto = (id) => {
    const productos = cargarProductosLS();
    return productos.find(item => item.id === id);
}

const guardarProducto = (id) => {
    const producto = buscarProducto(id);
    localStorage.setItem("producto", JSON.stringify(producto));
}

const cargarProducto = () => {
    return JSON.parse(localStorage.getItem("producto"))
}

const verProducto = (id) => {
    const producto = buscarProducto(id);
    localStorage.setItem("producto", JSON.stringify(producto));
    location.href = "ver_producto.html";
}