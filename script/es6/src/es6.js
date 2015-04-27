"use strict";
var marked0$0 = [anotherGenerator, generator].map(regeneratorRuntime.mark);
require("babel-runtime/regenerator");
function anotherGenerator(i) {
    return regeneratorRuntime.wrap(function anotherGenerator$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                context$1$0.next = 2;
                return i + 1;

            case 2:
                context$1$0.next = 4;
                return i + 2;

            case 4:
                context$1$0.next = 6;
                return i + 3;

            case 6:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this);
}

function generator(i) {
    return regeneratorRuntime.wrap(function generator$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                context$1$0.next = 2;
                return i;

            case 2:
                return context$1$0.delegateYield(anotherGenerator(i), "t0", 3);

            case 3:
                context$1$0.next = 5;
                return i + 10;

            case 5:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[1], this);
}

var gen = generator(10);

console.log(gen.next().value);