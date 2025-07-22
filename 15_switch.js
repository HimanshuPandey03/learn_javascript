// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }

const month = 3

switch (month){
  case 1:
    console.log('January');
    break;
  case 2:
    console.log('February');
    break;
  case 3:
    console.log('March');
    break;
  case 4:
    console.log('April');
    break;
  default:
    console.log('default case match');
    break;
}


//truthy and falsy value in js.

const userEmail = [] //'himanshu@gmail.com' 

if (userEmail) {
  console.log('Got user email');
}else{
  console.log("Don't have user email");
}

// falsy values => false, 0, -0, BigInt 0n, "", null, undefined, NaN. 

// truthy values => true, "0", 'false', " ", [] empty array, {} empty object, function(){} empty function

// if (userEmail.length === 0){
//   console.log('Array is empty');
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
  console.log('Object is empty');
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

console.log(val1);

