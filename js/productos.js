const productos = [
    {id:1, nombre:"Slime Verde", calorias:771, descripcion:"Slime comun que te lo encontras en cualquier parte del mundo.", precio:200, imagen:"slime_verde.png", categoria:"hamburguesas"},
    {id:2, nombre:"Slime Rojo", calorias:505, descripcion:"Un tipo variado de slime que solo se puede encontrar en lugares con altas temperaturas climaticas.", precio:500, imagen:"slime_rojo.png", categoria:"hamburguesas"},
    {id:3, nombre:"Slime Celeste", calorias:513, descripcion:"Un tipo variado de slime que solo se puede encontrar cerca de las playas o lagos.", precio:500, imagen:"slime_celeste.png", categoria:"hamburguesas"},
    {id:4, nombre:"Slime Violeta", calorias:238, descripcion:"Un tipo de slime muy raro de encontrarse. Son mas fuertes y rapidos que sus demas variantes.", precio:20000, imagen:"slime_violeta.png", categoria:"nuggets"},
    {id:5, nombre:"Tubo con Agua", calorias:424, descripcion:"Un tubo con agua que se usa para crear pociones", precio:50, imagen:"tuboDeEnsayo_agua.png", categoria:"postres"},
    {id:6, nombre:"Pocion de Mana menor", calorias:339, descripcion:"Una pocion de mana de grado menor que recupera la energia de quien la tome", precio:200, imagen:"tuboDeEnsayo_celeste.png", categoria:"postres"},
    {id:7, nombre:"Pocion de Vida menor", calorias:0, descripcion:"Una pocion de vida de grado menor que recupera la vitalidad de quien la tome", precio:200, imagen:"tuboDeEnsayo_rojo.png", categoria:"postres"},
    {id:8, nombre:"Jarron de Luna", calorias:359, descripcion:"Un jarron con una luna dibujada en su centro, sirve para darle mas detalle al entorno donde el jugador este viviendo", precio:5000, imagen:"jarron.png", categoria:"bebidas"},
    {id:9, nombre:"Manzana Roja", calorias:257, descripcion:"Una manzana roja que otorga regeneracion de vida por un corto periodo de tiempo", precio:100, imagen:"manzana_roja.png", categoria:"postres"},
    {id:10, nombre:"Manzana Verde", calorias:100, descripcion:"Una manzana verde que otorga regeneracion de vida por un mediano periodo de tiempo", precio:300, imagen:"manzana_verde.png", categoria:"postres"},
    {id:11, nombre:"Token Dorado", calorias:131.9, descripcion:"Una moneda muy valiosa que puede utilizarse para intercambiar por objetos de mayor rareza en tiendas especiales.", precio:10000, imagen:"moneda.png", categoria:"desayuno-merienda"},
    {id:12, nombre:"Espada comun", calorias:200, descripcion:"Una espada hecha de hierro con un mango de bronce y adornado con unas perlas.", precio:1500, imagen:"espada.png", categoria:"desayuno-merienda"}
];

const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductosLS(productos);