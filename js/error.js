const renderbotonMenu = () => {
    let botonMenu = `<button style="transform: translate(0px,7px); width: 34px; height: 35px;" class="bg-warning navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" style="transform: translate(-5px,0); width: 20px; height: 20px;"></span>
  </button>`;
  
    document.getElementById("botonaso").innerHTML = botonMenu;
}

renderbotonMenu();

