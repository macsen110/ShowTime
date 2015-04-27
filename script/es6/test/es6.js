'use strict';
require("babel-runtime/regenerator");
function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
}

function* generator(i){
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value);
