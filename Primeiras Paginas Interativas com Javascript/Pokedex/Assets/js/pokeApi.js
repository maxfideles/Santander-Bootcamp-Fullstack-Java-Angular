// fetch API to connect to endpoint
const pokeapi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type 
    pokemon.picture = pokeDetail.sprites.other.dream_world.front_default

    return pokemon

}

pokeapi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)

}

pokeapi.fetchPokemon = (offset,limit) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    //fetch returns a Promisse. It means, it's an assynchronus process
    return  fetch(url)
            //not using arrow function: .then(function(response){return response.json})
            .then((response) =>response.json())
            .then((jsonBody) => jsonBody.results)
            .then((pokemons) => pokemons.map(pokeapi.getPokemonDetails))
            .then((detailsRequest) => Promise.all(detailsRequest))
            .then((pokemonDetails) => pokemonDetails)
            .catch((error) => console.error(error))

}