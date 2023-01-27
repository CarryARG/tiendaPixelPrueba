//aca se aplica el formulario para registrar nuestra compra
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let nroDocumento = document.getElementById("nroDocumento");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let direccion = document.getElementById("direccion");
let pais = document.getElementById("pais");
let provincia = document.getElementById("provincia");
let ciudad = document.getElementById("ciudad");
let codPostal = document.getElementById("codPostal");

document.getElementById("enviarForm").addEventListener("click", validarCampos);

const completarCampos = () => {
    let resultado = document.getElementById("resultado");
    let mensaje = `<div class="alert alert-danger" role="alert">Error! Faltan campos por completar!</div>`;
    Swal.fire({
        icon: 'error',
        title: 'Oops... :(',
        text: 'Parece que hay un error en el formulario',
      })
    resultado.innerHTML = mensaje;
}

const registrarCompra = () => {
    let tarjetaCredito = document.getElementById("tarjetaCredito");
    tarjetaCredito.value === "SI" ? aceptarCompra() : declinarCompra();
}

const renderBotonValidarCompra = () => {
    let botonValidarCompra = `<p><a class="container col-2 btn btn-warning d-flex text-center" type="button" onClick="ticket()">
    <b class="fs-4 text-center container">Aceptar Compra</b></a></p>`;
    document.getElementById("botonValidarCompra").innerHTML = botonValidarCompra;
}

const aceptarCompra = () => {
    const formCompletar = {
        nombre:nombre.value,
        apellido:apellido.value,
        nroDocumento:nroDocumento.value,
        email:email.value,
        telefono:telefono.value,
        direccion:direccion.value,
        pais:pais.value,
        provincia:provincia.value,
        ciudad:ciudad.value,
        codPostal:codPostal.value
    }
    const formulario = {
        ...formCompletar
    }

    let resultado = document.getElementById("resultado");
    let mensaje = `<div class="alert alert-success" role="alert"><p><b class="fs-3">Revise que sus datos hayan sido ingresados correctamente: </b></p>
    <p>Nombre: <b>${formulario.nombre}</b><br></p>
    <p>Apellido: <b>${formulario.apellido}</b><br></p>
    <p>Nro. Documento: <b>${formulario.nroDocumento}</b><br></p>
    <p>E-mail: <b>${formulario.email}</b><br></p>
    <p>Nro. Telefono: <b>${formulario.telefono}</b><br></p>
    <p>Direccion: <b>${formulario.direccion}</b><br></p>
    <p>Pais: <b>${formulario.pais}</b><br></p>
    <p>Provincia: <b>${formulario.provincia}</b><br></p>
    <p>Ciudad: <b>${formulario.ciudad}</b><br></p>
    <p>Cod. Postal: <b>${formulario.codPostal}</b><br></p>
    </div>`;
    Swal.fire({
        position: 'top',
        icon: 'success',
        title: '¡Datos Correctos!',
        title: 'Revise que sus datos hayan sido ingresados correctamente',
        showConfirmButton: false,
        timer: 2000
      })
    resultado.innerHTML = mensaje;
    renderBotonValidarCompra();
}

const declinarCompra = () => {
    let resultado = document.getElementById("resultado");
    let mensaje = `<div class="alert alert-danger" role="alert">Error! Necesita poseer una tarjeta de credito para validar esta Compra!</div>`;
    Swal.fire({
        icon: 'error',
        title: 'Oops... :(',
        text: 'Parece que hay un error en el formulario',
      })
    resultado.innerHTML = mensaje;
}


//terribles funciones :C
function validarCampos() {
    (nombre.value != "" && apellido.value != "" && nroDocumento.value != "" && email.value != "" && telefono.value != "" && direccion.value != "" && pais.value != "" && provincia.value != "" && ciudad.value != "" && codPostal.value != "") ? registrarCompra() : completarCampos();    
}

function ticket(){
    document.getElementById('botonValidarCompra').style.display = 'none';

    const fin = setTimeout(() => {
        Swal.fire({
            icon: 'success',
            title: 'Generando Ticket de Compra',
            position: 'top',
            showConfirmButton: false,
            timer: 1000  
        })
        window.location.href = "../../paginas/carrito/compraExitosa.html"
    } , 3000)
    let cargando = document.getElementById("cargando");
    let mensaje2 = `<div class="text-center"><div class="spinner-border container" style="width: 6rem; height: 6rem;" role="status">
    <span class="visually-hidden">Loading...</span>
    </div></div>`;
    cargando.innerHTML = mensaje2;
}

