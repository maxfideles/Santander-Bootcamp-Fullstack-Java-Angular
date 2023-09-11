// fetch API to connect to endpoint
const pokeapi = {}

pokeapi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())

}

pokeapi.fetchPokemon = (offset=0,limit=10) => {
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