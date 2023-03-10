//debo decir que me inspire mucho en una de las clases haciendo una pagina similar a mcdonnalds como ejemplo xd

const productos = [
    {id:1, nombre:"Slime Verde", descripcion:"Slime comun que te puedes encontrar en cualquier parte del mundo.", precio:200, imagen:"slime_verde.png", categoria:"slimes"},
    {id:2, nombre:"Slime Rojo", descripcion:"Un tipo variado de slime que solo se puede encontrar en lugares con altas temperaturas climaticas.", precio:500, imagen:"slime_rojo.png", categoria:"slimes"},
    {id:3, nombre:"Slime Celeste", descripcion:"Un tipo variado de slime que solo se puede encontrar cerca de las playas o lagos.", precio:500, imagen:"slime_celeste.png", categoria:"slimess"},
    {id:4, nombre:"Slime Violeta", descripcion:"Un tipo de slime muy raro de encontrarse. Son mas fuertes y rapidos que sus demas variantes.", precio:20000, imagen:"slime_violeta.png", categoria:"slimes"},
    {id:5, nombre:"Tubo con Agua", descripcion:"Un tubo con agua que se usa para crear pociones", precio:50, imagen:"tuboDeEnsayo_agua.png", categoria:"pocion"},
    {id:6, nombre:"Pocion de Mana menor", descripcion:"Una pocion de mana de grado menor que recupera la energia de quien la tome", precio:200, imagen:"tuboDeEnsayo_celeste.png", categoria:"pocion"},
    {id:7, nombre:"Pocion de Vida menor", descripcion:"Una pocion de vida de grado menor que recupera la vitalidad de quien la tome", precio:200, imagen:"tuboDeEnsayo_rojo.png", categoria:"pocion"},
    {id:8, nombre:"Jarron de Luna", descripcion:"Un jarron con una luna dibujada en su centro, sirve para darle mas detalle al entorno donde el jugador este viviendo", precio:5000, imagen:"jarron.png", categoria:"decoraciones"},
    {id:9, nombre:"Manzana Roja", descripcion:"Una manzana roja que otorga regeneracion de vida por un corto periodo de tiempo", precio:100, imagen:"manzana_roja.png", categoria:"comida"},
    {id:10, nombre:"Manzana Verde", descripcion:"Una manzana verde que otorga regeneracion de vida por un mediano periodo de tiempo", precio:300, imagen:"manzana_verde.png", categoria:"comida"},
    {id:11, nombre:"Token Dorado", descripcion:"Una moneda muy valiosa que puede utilizarse para intercambiar por objetos de mayor rareza en tiendas especiales.", precio:10000, imagen:"moneda.png", categoria:"token"},
    {id:12, nombre:"Espada comun", descripcion:"Una espada hecha de hierro con un mango de bronce y adornado con unas perlas.", precio:1500, imagen:"espada.png", categoria:"armas"}
];

const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductosLS(productos);

