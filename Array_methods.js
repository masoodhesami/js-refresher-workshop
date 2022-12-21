let arr = [1, 2, 3, 4, 5];

//this methods modified array directly

arr.push(6) // adds items to the end : [1, 2, 3, 4, 5, 6]
arr.pop()   // extracts an item from the end
arr.unshift(0); // adds items to the beginning : [0, 1, 2, 3, 4, 5]
arr.shift() //  extracts an item from the beginning


// arr.splice(start[deleteCount, elem1, elemN]) //  arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place
arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");

let removed = arr.splice(0, 2);

arr.splice(-1, 1); // from index -1 (one step from the end) delete 1 element,


arr.slice([start], [end])
// It returns a new array copying to it all items from index start to end (not including end).
// arr.slice(1, 3) Both start and end can be negative,
// We can also call it without arguments: arr.slice() creates a copy of arr.


// arr.concat(arg1, arg2...)
arr = [1, 2];
// create an array from: arr and [3,4]
console.log(arr.concat([3, 4])); // 1,2,3,4


// iteration 

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
});



// Searching in array

// arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
// arr.includes(item, from) – looks for item starting from index from, returns true if found.
// Usually these methods are used with only one argument: the item to search. By default, the search is from the beginning.

arr = [1, 0, false];

alert(arr.indexOf(0)); // 1
alert(arr.indexOf(null)); // -1
alert(arr.includes(1)); // true

// The method arr.lastIndexOf is the same as indexOf, but looks for from right to left.
let fruits = ['Apple', 'Orange', 'Apple']

alert(fruits.indexOf('Apple')); // 0 (first Apple)
alert(fruits.lastIndexOf('Apple')); // 2 (last Apple)



// Find Items in arrays

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

let user = users.find(item => item.id == 1);

alert(user.name); // John

// ------------ 

users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" },
    { id: 4, name: "John" }
];
// Find the index of the first John
alert(users.findIndex(user => user.name == 'John')); // 0

// Find the index of the last John
alert(users.findLastIndex(user => user.name == 'John')); // 3


// filter :

let results = arr.filter(function (item, index, array) {
    // if true item is pushed to results and the iteration continues
    // returns empty array if nothing found
});

// example : 
users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2



// Transform an array

// The arr.map method is one of the most useful and often used.
// It calls the function for each element of the array and returns the array of results.

let result = arr.map(function (item, index, array) {
    // returns the new value instead of item
});

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6


// reverse :
arr = [1, 2, 3, 4, 5];
arr.reverse();

alert(arr); // 5,4,3,2,1


// split & join :
let names = 'Bilbo, Gandalf, Nazgul';

arr = names.split(', ');

for (let name of arr) {
    alert(`A message to ${name}.`); // A message to Bilbo  (and other names)
}


// example :
let str = "test";

alert(str.split('')); // t,e,s,t



//The call arr.join(glue) does the reverse to split

arr = ['Bilbo', 'Gandalf', 'Nazgul'];
str = arr.join(';'); // glue the array into a string using ;
alert(str); // Bilbo;Gandalf;Nazgul


// reduce/reduceRight 

// When we need to iterate over an array – we can use forEach, for or for..of.
// When we need to iterate and return the data for each element – we can use map.
// The methods arr.reduce and arr.reduceRight also belong to that breed, but are a little bit more intricate. They are used to calculate a single value based on the array.

// define : 

let value = arr.reduce(function (accumulator, item, index, array) {
    // ...
}, [initial]);
// The function is applied to all array elements one after another and “carries on” its result to the next call.

// accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
// item – is the current array item.
// index – is its position.
// array – is the array.

arr = [1, 2, 3, 4, 5];
result = arr.reduce((sum, current) => sum + current, 0);

alert(result); // 15


// reduceRight : doing same job form right to left;