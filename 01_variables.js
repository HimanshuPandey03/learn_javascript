const accountId = 404;
let accountEmail = "demo@google.com";
var accountPassword = "12345";
accountCity = "Mumbai";
let accountState;

//accountId = 405 //not allowed. 
accountEmail = "test01@gmail.com"
accountPassword = "212121"
accountCity = "Bangaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
  Prefer not to use var
  because of issue in block scope and functional scope
*/
