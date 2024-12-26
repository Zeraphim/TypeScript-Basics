/*

Make sure to run

`npm install -g typescript`

To run this script, use

`npx tsc [filename].ts`

this compiles the Typescript code to Javascript code.

*/
var userName = 'Zeraphim'; // You can hover over the variable name and see it's type.
// userName = 23; // Error: Type '34' is not assignable to type 'string'.
// Explicitly assign variable type
var firstName;
firstName = 'JC'; // This works as well
// Number
var userAge = 30;
// Boolean
var isValid = true;
// Union - multiple types (can be string or number)
var userID = "abc1";
// This tells Typescript that the variable can be either a string or a number.
userID = 123;
// userID = true // Error: Type 'true' is not assignable to type 'string | number'.
// The problem with declaring an object type is that you can't define the structure of the object
// let user: object;
// A user object can be written as this
/*
user {
    name: 'JC',
    age: 30,
    isAdmin: true,
    id: 'abc'
};
*/
// Or it can be an empty object
// user = {};
// We can do this instead
var user;
user = {
    name: 'JC',
    age: 30,
    isAdmin: true,
    id: 'abc'
};
// user = {}; // this will cause an error because the object is not structured correctly.
// Arrays
var hobbies;
// let hobbies: string[]; // this works too
// number[], boolean[], object[]
// {name: string, age: number}[]
hobbies = ['Sports', 'Cooking', 'Reading', 'Gaming'];
var API_KEY = 'abc123';
// Functions
function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b.age;
}
// Function that doesn't return anything (void)
function printResult(result) {
    console.log('Result: ' + result);
    // return result;
    // This will cause an error because we explicitly defined the funtion to not return anything with `void`
}
function calculate(a, b, calcFn // calcFn takes two number parameters and returns a number value as well
) {
    calcFn(a, b);
}
calculate(10, 20, add); // 30
