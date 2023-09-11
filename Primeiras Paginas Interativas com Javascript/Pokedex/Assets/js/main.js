const pokemonOl = document.getElementById("pokemonList")
const buttonPagination = document.getElementById("loadMoreButton")

const maxItens = 34
const limit = 10
let offset = 0

loadPokemonItens(offset,limit)
function arrayToHtml (pokemon){
    return `
        <li class="pokemon ${pokemon.type}">
                <span class="number"> #${pokemon.number} </span>
                <span class="name">${pokemon.name} </span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src=${pokemon.picture} alt="${pokemon.name}">
                </div>
                
            </li>
    `
}

function loadPokemonItens(offset,limit){
    pokeapi.fetchPokemon(offset,limit).then((pokemonList = []) => {
        const newList = pokemonList.map((pokemon) => arrayToHtml(pokemon))
        const newhtml = newList.join('')
        console.log(newhtml)
        pokemonOl.innerHTML += newhtml 
    } )
    .catch((error) => console.error(error))
}


buttonPagination.addEventListener('click',() => {

    offset += limit
    const qtTotalLoaded = offset + limit

    if(qtTotalLoaded>=maxItens){
        const newQtList = maxItens - offset 
        loadPokemonItens(offset,newQtList)

        buttonPagination.parentElement.removeChild(buttonPagination)

    }else{
        loadPokemonItens(offset,limit)

    }
    

})
