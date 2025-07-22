// Immediately Invoked Function Expressions (IIFE)
// global scope ke pollution se problem hoti hai kai baar toh us global jo variable uske pollution ko hatane ke liye iife ka use kiya  
// function database(){
//   console.log(`DB Connected`);
// }
// database()

(function chai(){
  //named IIFE
  console.log(`DB Connected`);
})();

// (() => {
//   console.log(`DB Connected Too`);
// })();

((name) => { //name is parameter
  //unname IIFE
  console.log(`DB Connected Too ${name}`);
})('POCO')