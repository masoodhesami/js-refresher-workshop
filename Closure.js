//Global variables can be made local (private) with closures.
//A closure gives you access to an outer function’s scope
// from an inner function
//closure give you access to the functions
//and variables outside the function.

// Initiate counter global
let counter = 0;

function add() {
  counter += 1;
}

add();
add();
add();
console.log(counter)
// output ??


let counter2 = 0;

function add() {
  let counter2 = 0;
  counter2 += 1;
}

add();
add();
add();
console.log(counter2)
// output ?? 



function makeFunc() {
    const name = 'Masoud';
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc(); // Masoud



function outer() {
    const outerData = "outer";
    function inner() {
        const innerData = "inner";
        console.log(`${outerData} and ${innerData}`);
    }
    inner();
}


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