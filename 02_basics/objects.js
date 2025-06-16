//  Singleton
// Object.create
//  object literals

const nSym = Symbol("Key1")

const jsuser = {
        name: "Sandeep",
        "Full Name": "Sandeep Kumar Sutar",
        age: 32,
        [Symbol]: "Key1",
        Email: "sks@google.com",
        LastLoginDays: ["Monday", "Twesday"]


}
console.log(jsuser.Email);
console.log(jsuser["Full Name"]);
console.log(jsuser[Symbol]);

jsuser.Email = "sandy@googly.com"


//  ========= part 2 ===========




