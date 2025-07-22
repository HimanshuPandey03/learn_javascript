// let a = 10
// const b = 20
// var c = 30

{} //comes with function if, if-eles etc. called scope

//global scope (value avaible in block scope)
//var c = 300

let a = 300

//block scope ( value bhar nhi jati :) )
if (true) {
  let a = 10
  const b = 20
  //var c = 30
  //console.log("Inner: ",a);
}

//console.log(a); ReferenceError: a is not defined
//console.log(b); ReferenceError: b is not defined
//console.log(c); // 30

//console.log(a); //print 300

//Note: in brower > right click > inspect  > console when we check scope here is different. and in code environment node ke through example lo run karenge voh different hai. 


//nested scope

function one(){
  const username = "himanshu"

  function two(){
    const website = "facebook"
    console.log(username);
  }
  //console.log(website);
  two()
}
//one()

if (true) {
  const username = 'john'
  if (username === 'john') {
    const website = ' facebook'
    //console.log(username + website);
  }
  //console.log(website);
}
//console.log(username);

console.log(addone(5));
function addone(num){
  return num + 1
}
//addone(5)


addTwo(5) // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){ //addTwo variable hai. 
  return num + 2
}
//addTwo(5)