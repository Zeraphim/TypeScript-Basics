/*

Make sure to run

`npm install -g typescript`

To run this script, use

`npx tsc [filename].ts`

this compiles the Typescript code to Javascript code.

*/

let userName = 'Zeraphim'; // You can hover over the variable name and see it's type.

// userName = 23; // Error: Type '34' is not assignable to type 'string'.

// Explicitly assign variable type

let firstName: string;

firstName = 'JC'; // This works as well

// Number
let userAge = 30;

// Boolean
let isValid = true;


// Union - multiple types (can be string or number)

let userID: string | number = "abc1";
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

let user: {
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number;
};

user = {
    name: 'JC',
    age: 30,
    isAdmin: true,
    id: 'abc'
};


// user = {}; // this will cause an error because the object is not structured correctly.


// Arrays

let hobbies: Array<string>;
// let hobbies: string[]; // this works too
// number[], boolean[], object[]
// {name: string, age: number}[]

hobbies = ['Sports', 'Cooking', 'Reading', 'Gaming'];




const API_KEY:string = 'abc123';

// Functions

function add(a: number, b: number) {
    return a + b;
}

function multiply(a: number, b: {name: string, age: number}) {
    return a * b.age;
}

// Function that doesn't return anything (void)

function printResult(result: number): void {
    console.log('Result: ' + result);
    // return result;
    // This will cause an error because we explicitly defined the funtion to not return anything with `void`
}


function calculate(
    a:number,
    b:number,
    calcFn: (a: number, b: number) => number // calcFn takes two number parameters and returns a number value as well
) {
    calcFn(a, b);
}

calculate(10, 20, add); // 30


// Custom Types - Aliases

type AddFn = (a: number, b: number) => number;

function calculate2(
    a:number,
    b:number,
    calcFn: AddFn // Instead of the long definition, we can use the custom type
) {
    calcFn(a, b);
}

type StringOrNum = string | number;

type User = {
    name: string;
    age: number;
    isAdmin: boolean;
    id: StringOrNum;
};

// Interface

// Used for defining object types

interface Credentials {
    password: string;
    email: string;
    pin: number;
}

let creds: Credentials;

creds = {
    password: 'abc123',
    email: 'jc@gmail.com',
    pin: 1234
};

// When to use `type` or `interface`?

// Use `interface` when you're defining an object type - it is limited only on object types

// Use `type` when you're defining a type alias (a new name for an existing type)

class AuthCredentials implements Credentials {
    password: string;
    email: string;
    pin: number;
    userName: string; // You can also add another property that is not in the interface but it needs to contain at least password, email, and pin

    // constructor(password: string, email: string, pin: number) {
    //     this.password = password;
    //     this.email = email;
    //     this.pin = pin;
    // }
}

function login(credentials: Credentials) {
    console.log('Logging in...');
}

login(new AuthCredentials());

// Interface is also extendable, you can add more properties to it

interface AuthCredentials2 {
    password: string;
    email: string;
}

// Adding new property

interface AuthCredentials2 {
    pin: number;
} // This will add the `pin` property to the `AuthCredentials2` interface

// This is particularly useful when creating a library in which a lot of developers will use around the world, they can simply add another property to your existing interfaces.

// Merging Types

// Let's say we want two types Admin and AppUser, Admin contains permissions which is a string and AppUser contains a userName which is also a string. We want to keep the two of them separate from each other but we also need a type that merges the two types.

type Admin = {
    permissions: string[];
}

type AppUser = {
    userName: string;
}

// Combining Admin and AppUser
type AppAdmin = Admin & AppUser;

// Now AppAdmin is the combination of Admin and AppUser types

let admin: AppAdmin;

admin = {
    permissions: ['read', 'write'],
    userName: 'JC'
};

// Merging using interface

interface Admin2 {
    permissions: string[];
}

interface AppUser2 {
    userName: string;
}

interface AppAdmin2 extends Admin2, AppUser2 {}

let admin2: AppAdmin2;

admin2 = {
    permissions: ['read', 'write'],
    userName: 'JC'
};

// Literal types

// What if we want a certain variable to only accept specific values

let role // admin, user, editor only

role = 'admin'; // This is valid
role = 'user'; // This is valid
role = 'editor'; // This is valid
role = 'guest'; // but we can also store another value in it

type Role = 'admin' | 'user' | 'editor';


let role2: Role;

role2 = 'admin'; // This is valid
role2 = 'user'; // This is valid
role2 = 'editor'; // This is valid
// role2 = 'guest'; // This is invalid

// Type Guards

function performAction(action: string | number, role: Role) {
    if (role === 'admin' && typeof action === 'string') {
        console.log('Performing action as admin');
    } else if (role === 'user' && typeof action === 'number') {
        console.log('Performing action as user');
    } else if (role === 'editor') {
        console.log('Performing action as editor');
    }
}

// Use JavaScript's typeof operator as shown above to check if you're dealing with a string, number, boolean, object, function, symbol or bigint type



// Generic Types

let roles:Array<Role>;
// let roles:Role[]; // This works too

roles = ['admin', 'user', 'editor'];

// Adding custom generic type

type DataStorage<T> = {
    storage: T[];
    add: (data: T) => void; // can also be T[] 
}

const textStorage: DataStorage<string> = {
    storage: [],
    add(data) {
        this.storage.push(data);
    }
}

const userStorage: DataStorage<User> = {
    storage: [],
    add(User) {}
}

// Using two placeholders

function merge<T, U>(a: T, b: U) {
    return {
        ...a,
        ...b
    }
}

const newUser = merge<{name: string}, {age: number}> (
    {name: 'JC'},
    {age: 30}
);

newUser.name; // JC
newUser.age; // 30

