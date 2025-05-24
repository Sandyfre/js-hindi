const accountId = 12345
let accountEmail = "sandeep123@hotmail.com"
var accountPassword = "1234566"
accountCity = "Jaipur"

// accountId = 2 // not allowed
console.log(accountId);

accountEmail = "ahc@hotmail.com"
accountPassword = "123"
accountCity = "Bangalore"


console.table([accountEmail,accountPassword,accountCity])

/*
Prefer not using var 
because of issue in block scope and functional scope

*/