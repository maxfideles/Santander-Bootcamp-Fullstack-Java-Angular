const pokemonOl = document.getElementById("pokemonList")
const buttonPagination = document.getElementById("loadMoreButton")
let inputSearch = document.getElementById("inputSearch")
const buttonSearch = document.getElementById("buttonSearch")
const eMessage = document.getElementById("emessage")
const divButtonPag = document.getElementById("pag")
inputSearch.value = 'Search by name'

const maxItens = 34
const limit = 10
let offset = 0
//const urlItens = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
//const urlSearch = `https://pokeapi.co/api/v2/pokemon/${inputSearch.value.toLowerCase()}`

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

function searchedToHtml (pokemon){
    return `
        <li class="pokemon ${pokemon.types.map((typeSlot) => typeSlot.type.name(1))}">
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

inputSearch.addEventListener('click', () =>{
    inputSearch.value = ''
})

buttonSearch.addEventListener('click', () => {
    const pokemonSearch = inputSearch.value
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonSearch.toLowerCase()}`
    if(pokemonSearch != ''){
        fetch(url)
        .then((response) => response.json())
        .then((pokemonDetailed) => convertPokeApiDetailToPokemon(pokemonDetailed))
        .then((pokemonselected) => {
            const newhtml = arrayToHtml(pokemonselected)
            console.log(newhtml)
            pokemonOl.innerHTML = newhtml
            divButtonPag.removeChild(buttonPagination)
            eMessage.innerHTML = ''
        })
        .catch(eMessage.innerHTML = `pokemon not found`) 
    }else{
        eMessage.innerHTML = ''
        pokemonOl.innerHTML = ''
        loadPokemonItens(0,10)
        console.log(divButtonPag)
        divButtonPag.innerHTML = `<button id="loadMoreButton" type="button">Load more</button>`
        
    }

       
        
        
    //console.log(eMessage)
    //eMessage.innerHTML = `${pokemonSearch.toLowerCase()}`
    
})