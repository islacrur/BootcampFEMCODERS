const poke_container = document.getElementById('poke-container');
const pokemon_count = 150;
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

for (i=1; i<=150; i++) {
    fetch(URL + i)
        .then((response) => response.json())
        .then((data) => showPoke(data));
}

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



/* 

<div class="pokemon" style="background-color: rgb(222,253,224);">
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur">
    </div>
    <div class="info">
        <span class="number">001</span>
        <h3 class="name">Bulbasaur</h3>
        <small class="type">Type: <span>grass</span></small>
    </div>
</div> 

*/

/******************************/
/******************************/

//Vamos a mostrar nuestros Pokemon en una DIV que se llame "poke-container" para ello creamos una variable con este nombre que traiga del HTML este elemento, por ejempo por id

//Creamos una constante para la URL y creamos un bucle FOR (i=1;1<=150;i++) dentro del cual haremos Fetch de la URL+i(para que después del slash de la URL añada los números de los Pokemon del primero al último) y .then para la response y la data

//  


/******************************/
/******************************/