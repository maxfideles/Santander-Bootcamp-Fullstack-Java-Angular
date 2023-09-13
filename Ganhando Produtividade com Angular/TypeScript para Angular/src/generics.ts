function concatArray <T> (... itens:T[]): T[]{
    
    return new Array().concat(... itens)
     
}

const numArray = concatArray<number[]>([1,20],[2,76])
const strArray = concatArray<string[]>(["Max","Silva"],["da Cruz"])

console.log(numArray)
console.log(strArray)