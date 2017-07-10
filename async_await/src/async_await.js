import Promise from 'promise-polyfill';
import "regenerator-runtime/runtime";
import * as lodash from 'lodash';
import underscore from 'underscore';
import * as react from 'react';
var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, time);
    })
};
var arr = [1,2,3]
console.log(lodash.head(arr));
console.log(underscore);
console.log(react)
console.log(111)
var start = async function () {
    // 在这里使用起来就像同步代码那样直观
    console.log('start');
    await sleep(3000);
    console.log('end');
};

start();