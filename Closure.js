// A closure is the combination of a function bundled together (enclosed) with 
// references to its surrounding state (the lexical environment). In other words, 
// a closure gives you access to an outer function's scope from an inner function. 
// In JavaScript, closures are created every time a function is created, at function creation time.


function makeFunc() {
    const name = 'Masoud';
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc(); // Masoud


// --------------------------

function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12