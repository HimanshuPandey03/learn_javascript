/* Primitive 7 types:
1. string
2. number
3. boolean
4. null
5. undefined
6. Symbol (unique)
7. bigInt
*/

// JavaScript is a dynamic language

const score = 100
const score1 = 100.5

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

//console.log(id === anotherId);


/*
// Reference (Non primitive)
1. Array
2. Objects
3. Functions
*/

const language = ["javascript", "python", "java"]

let myObj = {
  name: "john",
  age: 22,
}

const myFunction = function(){
  console.log("hello world");
}

// console.log(typeof language);
// console.log(typeof id);

// leran more -> https://262.ecma-international.org/5.1/#sec-11.4.3

//******************** Memory in JS ********************

//Two types of memory
//1. Stack (Primitive)[create a copy], 2. Heap (Non-Primitive) [Reference milta hai]

//Example stack
let name = "john"
let anotherName = "doe"
anotherName = "himanshu"

// console.log(name);
// console.log(anotherName);

//example heap
let userOne = {
  email: "user@gmail.com",
  upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "himanshu@google.com"

console.log(userOne.email);
console.log(userTwo.email);

