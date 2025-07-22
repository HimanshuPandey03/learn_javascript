// for of syntax

// for (const element of object) {
  
// }

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
  //console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
  //console.log(`Each char is ${greet}`)
}

//Maps objects h (key in the map may only occur once; it is unique in the map collection.)

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'Frnace')

//console.log(map);

// for (const key of map) {
//   console.log(key);
// }

for (const [key, value] of map) {
  //console.log(key, ':-', value);
}

const myObject = {
  'username': 'himanshu',
  'age': 21 
}

// for (const [key, value] of myObject) {
//   console.log(key, ':-', value);
// }

const myObject1 = {
  js: 'javascript',
  cpp: 'c++',
  cj: 'core java',
  py: 'python'
}

for (const key in myObject1) {
  //console.log(key);
  //console.log(myObject1[key]);
  //console.log(`${key} shortcut is for ${myObject1[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
  //console.log(key);
  //console.log(programming[key]);
}

// forEach loop

const coding = ["js", "ruby", "java", "pyhton", "c++", "c"]

// coding.forEach( function (item) { //call back function
//   console.log(item);
// } )

// coding.forEach( (item) => {
//   console.log(item);
// } )

// function printMe(item){
//   console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item,index,arr) => {
//   console.log(item, index,arr);
// } )

//database se value

const myCoding = [
  {
    languageName: 'javascript',
    languageFileName: '.js'
  }, 
  {
    languageName: 'java',
    languageFileName: '.java'
  }, 
  {
    languageName: 'python',
    languageFileName: '.py'
  },
]

myCoding.forEach( (item) => {
  console.log(item.languageName)
})