// loops called iterations

// for syntax

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }

for (let index = 0; index <= 10; index++) {
  const element = index;
  if (element == 5) {
    //console.log("5 is best number");
  }
  if (element == 5) {
    continue;
  }
  //console.log(element);
}

for (let i = 1; i <= 10; i++) {
  //console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i * j);
  }
}

let myArray = ["A", "B", "C", "D"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`Detected 5`);
//     break
//   }
//   console.log(`Value of i is ${index}`);
  
// }

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    //console.log(`Detected 5`);
    continue
  }
  //console.log(`Value of i is ${index}`); 
}

// while loop
let index = 0
while (index <= 10) {
  //console.log(`Value of index is ${index}`);
  index = index + 2
}

let myArray1 = ['A', 'B', 'C', 'D']
let arr = 0
while (arr < myArray1.length){
  //console.log(`value is ${myArray1[arr]}`);
  arr = arr + 1 //arr++
}

// do while loop

let score = 11

do{
  //console.log(`Score is ${score}`);
  score++
} while(score <= 10);

