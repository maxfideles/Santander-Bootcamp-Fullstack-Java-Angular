// fetch API to connect to endpoint

const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


function arrayToHtml (pokemon){
    return `
        <li class="pokemon">
                <span class="number"> #001 </span>
                <span class="name">${pokemon.name} </span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
                </div>
                
            </li>
    `
}

const pokemonOl = document.getElementById("pokemonList")


//it returns a Promisse. It means, it's an assynchronus process
fetch(url)
    //not using arrow function: .then(function(response){return response.json})
    .then((response) =>response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => {
        
        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            pokemonOl.innerHTML += arrayToHtml(pokemon)
        }

    } )
    .catch((error) => console.error(error))
