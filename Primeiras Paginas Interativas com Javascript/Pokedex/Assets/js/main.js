
function convertPokemonToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}


function arrayToHtml (pokemon){
    return `
        <li class="pokemon">
                <span class="number"> #${pokemon.order} </span>
                <span class="name">${pokemon.name} </span>

                <div class="detail">
                    <ol class="types">
                        ${convertPokemonToLi(pokemon.types).join('')}
                    </ol>

                    <img src=${pokemon.sprites.other.dream_world.front_default} alt="${pokemon.name}">
                </div>
                
            </li>
    `
}

const pokemonOl = document.getElementById("pokemonList")

pokeapi.fetchPokemon().then((pokemonList = []) => {
        const newList = pokemonList.map((pokemon) => arrayToHtml(pokemon))
        const newhtml = newList.join('')
        console.log(newhtml)
        pokemonOl.innerHTML = newhtml 
    } )
    .catch((error) => console.error(error))
