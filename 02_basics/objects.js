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
// console.log(jsuser.Email);
// console.log(jsuser["Full Name"]);
// console.log(jsuser[Symbol]);

// jsuser.Email = "sandy@googly.com"


//  ========= part 2 ===========

// this is a non singleton object
// const nonSingletonObject = {}

// below is a singleton object

const tindeUser = new Object()
tindeUser.name = "Sandeep"
tindeUser.id = "12345"
tindeUser.isLoggedIn = false

// console.log(tindeUser);


