// function sayMyName(){
//   console.log('himanshu');
// }
// sayMyName()

// function addTwoNumber(num1, num2){
//   console.log(num1 + num2);
// }
// addTwoNumber(3,4) 
// addTwoNumber(6, "9")
// addTwoNumber(6, null)

// function addTwoNumber(num1, num2){
//   console.log(num1, num2);
// }

function addTwoNumber(num1, num2){
  //let result = num1 + num2
  //console.log('Himanshu')
  //return result
  //console.log('Himanshu') unreachable code!!
  return num1 + num2

}

const result = addTwoNumber(3, 5)

//console.log("Result: ",result);

function loginUserMessage(username){
  return `${username} just logged in`
}
//console.log(loginUserMessage('Himanshu'))
//console.log(loginUserMessage()) //undefined

// function loginUserMessage(username){
//   if(username === undefined){         //!username
//     console.log("please enter a username");
//     return
//   }
//   return `${username} just logged in`
// }
// console.log(loginUserMessage())

function loginUserMessage(username = "sam"){ //default value sam
  if(username === undefined){      
    console.log("please enter a username");
    return
  }
  return `${username} just logged in`
}
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){     //rest operator(...) use for multiple arguments at a time. 
  return num1
}

//console.log(calculateCartPrice(200))
//console.log(calculateCartPrice(500,1000,890, 2000))

const user = {
  username: 'himanshu',
  age: 21
}
function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
}
//handleObject(user)
handleObject({
  username:'sam',
  age: 25
})

const myNewArray = [200, 600, 100, 500]

function returnSecondValue(getArray){
  return getArray[3]
}
//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([2000, 2500, 3000, 6000]));
