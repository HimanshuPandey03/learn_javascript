const name = "john "
const age = 21

//console.log("his name is " + name + "and his age is " + age);

//console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = new String('BGMI Mobile Game'); //new keyword is for object String('') constructor.

//String Methods

// console.log(gameName[0]);
// console.log(gameName.__proto__);
 console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('M'));

const newString = gameName.substring(0,3); // not allow negative number(index)
//console.log(newString);

const anotherString = gameName.slice(-15, 7); //allow negative number(index) (behind the scene is 16 - 15 = (1,7)
console.log(anotherString);

const newstringOne = "      Himanshu      "
// console.log(newstringOne);
// console.log(newstringOne.trim());

const url = "https://himanshu.com/himanshu%21pandey"

// console.log(url.replace('%21', '-'));
// console.log(url.includes('himanshu'));

