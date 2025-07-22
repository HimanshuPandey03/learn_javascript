const user = {
  username: 'himanshu',
  price: 999,
  welcomeMessage: function(){
    console.log(`${this.username}, welcome to website`);
    // console.log(this);
  }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this); //{}

// console > console.log(this) 

// function one(){
//   console.log(this);
// }

// one()

// function one(){
//   let username = 'himanshu'
//   console.log(this.username);
// }

// one()

const one = () => {
  let username = 'himanshu'
  //console.log(this.username);
}
//one()

// Arrow function

// const addTwo = (num1 , num2) => {
//   return num1 + num2
// }

//const addTwo = (num1, num2) => num1 + num2 //implicit

//const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: 'himanshu'})

console.log(addTwo(3,7));