{
    let message = "Hello"; // only visible in this block
    alert(message); // Hello
}

alert(message); // Error: message is not defined

// -----------------

{
    const myVar = 10;
    console.log(myVar * 2 + 1); // 21
}

{
    const myVar = "Hello There!";
    console.log(myVar); // Hello There!
}

// -----------------

const a = 'a';

for (let i = 0; i < 5; ++i) {
    // do some 💫magic💫 with i;
    console.log(i);
}

function f(x, y, z) {
    console.log(x * y + z);
}


// ------------------

// Global Block
const constant = 3.14;
console.log(a) // ERROR ❌
{
    // Inner Block #1
    const a = 2; 
    console.log(a * constant); // 6.28 ✅
    console.log(b); // ERROR ❌
    {
        // Inner Block #2
        const b = 5;
        console.log(a * b * constant) // 31.4 ✅
    }
}