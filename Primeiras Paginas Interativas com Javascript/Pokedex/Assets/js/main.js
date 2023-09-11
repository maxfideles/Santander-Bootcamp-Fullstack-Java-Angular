// fetch API to connect to endpoint

const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//it returns a Promisse. It means, it's an assynchronus process
fetch(url)
    .then(function(response){
        console.log(response)
    })
console.log('vai curinthia')