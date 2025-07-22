// if statement

// if(condition){  //true
//   //code execute when condition is true. 
// }

// comparison operator => <, >, <=, >=, ==, !=, ===(check type too)., !==

// if (2 === "2") {
//   console.log("executed");
// }

const isuserLoggedIn = true
const temperature = 51

// if(temperature < 50){
//   console.log('less than 50');
// } else{
//   console.log("temperature is greater than 50");
// }
// console.log("Execute.")


// const score = 200

// if(score > 100){
//   var power = 'fly'
//   const power = 'fly'
//   console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// shorthand 

//const balance = 1000
//if(balance > 500) console.log('test'), console.log('test2'); //implict scope

// if(balance < 500){
//   console.log('less than 500');

// } else if(balance < 750){
//   console.log('less than 750');

// }  else if(balance < 900){
//   console.log('less than 900');

// } else{
//   console.log('less than 1200');

// }

const userLoggedIn = true
const debitedCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitedCard){
  console.log('Allow to buy course');
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log('User logged in');
}

