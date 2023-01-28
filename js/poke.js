const getRandomInt = (num1, num2) => {
    return Math.round(Math.random() * (num1, num2));
}

const consultarPokemon = async () => {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/" + getRandomInt(1, 151));
    const data = await respuesta.json();
    
    let pokeRandom = `<div class="card  rounded border border-5 border-success">
    <img src="${data.sprites.front_default}" alt="${data.name}" class="card-img-top text-center bg-success">
    <div class="card-body text-center">
    <p class="card-body-title text-capitalize fs-1"><b>${data.name}</b></p>
    </div>
    <ul class="card-footer list-group list-group-flush text-start">
    <li class="list-group-item">Hp: ${data.stats[0].base_stat}</li>
                <li class="list-group-item card-footer-social">Experiencia: ${data.base_experience}</li>
                <li class="list-group-item card-footer-social">Ataque: ${data.stats[1].base_stat}</li>
                <li class="list-group-item card-footer-social">Ataque Especial: ${data.stats[3].base_stat}</li>
                <li class="list-group-item card-footer-social">Defensa: ${data.stats[2].base_stat}</li>
              </ul>
    </div>`;


    document.getElementById("tarjetaPokemon").innerHTML = pokeRandom;
}
consultarPokemon();