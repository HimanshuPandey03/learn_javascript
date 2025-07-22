// array is object, storing a coleection of multiple items under single variable name
// Js arrays are resizable and can contain a mix of different data types. 
// in array indexing start with 0 and length with 1

const myArr = [0, 1, 2, 3, 4, 5]
const language = ["C", "C++", "Java", "Python", "C#"]
const myNum = new Array(1, 2, 3, 4, 5)

//console.log(myArr[3]);

// Array methods

// myArr.push(6)
// myArr.pop()

//myArr.unshift(9)
//myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

// console.log("Original array: A ", myArr); //original array
const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("Using slice method B ",myArr); //slice

const myn2 = myArr.splice(1,3)
// console.log("Using splice methode C ",myArr); //splice
// console.log(myn2);

const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1,2,3, [4,5,6],7,[6,7, [4,5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Himanshu"))
// console.log(Array.from("Himanshu"))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));