// fetch API to connect to endpoint

const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//it returns a Promisse. It means, it's an assynchronus process
fetch(url)
    //not using arrow function: .then(function(response){return response.json})
    .then((response) =>response.json())
    .then((jsonBody) => jsonBody)
    .catch((error) => console.error(error))
