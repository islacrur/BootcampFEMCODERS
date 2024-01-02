const poke_container = document.getElementById('poke-container');
const pokemon_count = 151;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};

let URL = "https://pokeapi.co/api/v2/pokemon/";

const fetchPromises = [];

for (let i = 1; i <= 150; i++) {
    fetchPromises.push(fetch(URL + i)
    .then((response) => response.json()));
}


Promise.all(fetchPromises)
    .then((pokemon_count) => {
        pokemon_count.forEach((poke) => showPoke(poke));
    })
    .catch((error) => console.error('Error searching Pokemon:', error));



function showPoke(poke) {
    let pokeId = poke.id.toString();
        if(pokeId.length === 1) {
            pokeId = "00" + pokeId;
        }else if(pokeId.length === 2) {
            pokeId = "0" + pokeId;
        }
    

    const createPokemonCard = document.createElement("div");
    createPokemonCard.classList.add("pokemon");
    createPokemonCard.style.backgroundColor = colors[poke.types[0].type.name];
    createPokemonCard.innerHTML = 
    `<div class="img-container">
    <img src=${poke.sprites.other["official-artwork"].front_default} alt=${poke.name}>
    </div>
    <div class="info">
      <span class="number">#${pokeId}</span>
      <h3 class="name">${poke.name}</h3>
      <small class="type">Type: <span>${poke.types[0].type.name}</span></small>
  </div>`;
  poke_container.append(createPokemonCard);

}

//showPoke(poke);

