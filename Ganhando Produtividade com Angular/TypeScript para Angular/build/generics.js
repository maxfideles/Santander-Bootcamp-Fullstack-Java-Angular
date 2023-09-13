"use strict";
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 20], [2, 76]);
const strArray = concatArray(["Max", "Silva"], ["da Cruz"]);
console.log(numArray);
console.log(strArray);
