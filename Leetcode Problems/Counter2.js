/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let current = init;
    return {
        increment: function() {
            current += 1;
            return current;
        },
        decrement: function() {
            current -= 1;
            return current;
        },
        reset: function() {
            current = init;
            return current;
        }
    };
};

// Function create karna
const counter = createCounter(5);

// Function calls ke output print karna
console.log(counter.increment()); // Output: 6
console.log(counter.reset());     // Output: 5
console.log(counter.decrement()); // Output: 4
