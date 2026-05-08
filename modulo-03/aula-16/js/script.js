class Pokemon {
    name = '';
    types = '';
    image = '';
    stats = '';

    constructor(name, types, image, stats) {
        this.name = name;
        this.types = types;
        this.image = image;
        this.stats = stats;
    }
};

const input = document.querySelector("#pokemonInput");
const pokemonCard = document.querySelector("#pokemonCard");
const loadingCard = document.querySelector("#loadingCard");
const pokemonName = document.querySelector("#pokemonName");
const pokemonTypes = document.querySelector("#pokemonTypes");
const pokemonImage = document.querySelector("#pokemonImage");
const pokemonStats = document.querySelector("#pokemonStats");

document.querySelector("#searchBtn").addEventListener('click', (e) => {
    buscarPokemon(input.value);
});

async function buscarPokemon(nome) {
    const url = `https://pokeapi.co/api/v2/pokemon/${nome}`;

    pokemonCard.style.display = 'none';
    loadingCard.style.display = 'block';

    try {
        console.log(`Fetch em ${url}`);
        const response = await fetch(url);
        const dados = await response.json();
        displayPokemon(new Pokemon(
            dados.name,
            dados.types.map((e) => e.type.name).join(', '),
            dados.sprites.front_default,
            dados.stats.map((e) => `${e.stat.name}: ${e.base_stat}`).join("<br>")
        ));
    } catch (e) {
        console.log(`Erro: ${e}`);
        displayPokemon(new Pokemon('ERRO', 'ERRO', 'ERRO', 'ERRO'));
    }
    
}

function displayPokemon(pokemon) {
    pokemonCard.style.display = 'block';
    loadingCard.style.display = 'none';
    pokemonName.innerHTML = pokemon.name;
    pokemonTypes.innerHTML = pokemon.types;
    pokemonImage.setAttribute('src', pokemon.image);
    pokemonStats.innerHTML = pokemon.stats;
}
