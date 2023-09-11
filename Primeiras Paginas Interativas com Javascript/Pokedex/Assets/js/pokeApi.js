// fetch API to connect to endpoint

const pokeapi = {}

pokeapi.fetchPokemon = (offset=0,limit=10) => {
    //fetch returns a Promisse. It means, it's an assynchronus process
    return  fetch(url)
            //not using arrow function: .then(function(response){return response.json})
            .then((response) =>response.json())
            .then((jsonBody) => jsonBody.results)
            .catch((error) => console.error(error))
}