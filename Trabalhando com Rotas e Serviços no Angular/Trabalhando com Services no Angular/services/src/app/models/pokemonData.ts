export type PokemonData = {
    name:string,
    id:number,
    sprites:any,
    types: [{
        slot:number,
        type:{
            name:string,
        }
    }]
}