/*******************************************************************************
Write a function `greaterCallbackValue` that accepts a value and two callbacks
as arguments. The function should pass the value to both callbacks and return the
result of the callback that is greater.

Examples:

let doubler = function (n) {
    return 2 * n;
}

let squarer = function (n) {
    return n * n;
}

console.log(greaterCallbackValue(5, doubler, squarer));     // 25
console.log(greaterCallbackValue(1, doubler, squarer));     // 2
console.log(greaterCallbackValue(9, Math.sqrt, doubler));   // 18
*******************************************************************************/

let greaterCallbackValue = function(num, cb1, cb2) {
    let result1 = cb1(num)
    let result2 = cb2(num)

    if (result1 > result2) {
        return result1
    } else {
        return result2
    }
};

// testing portion
const assert = require("assert")

describe("greaterCallbackValue => return greater value from the two result of two callback", () => {
    it("", () => {
        let doubler = (n) => {
            return 2 * n
        }
        let squarer = (n) => {
            return n * n
        }
        let result = greaterCallbackValue(5, doubler, squarer)
        let expRes = 25
        assert.equal(result, expRes)
    })
})


/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = greaterCallbackValue;
