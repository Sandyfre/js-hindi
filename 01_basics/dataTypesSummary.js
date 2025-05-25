//premative - are call by value
// String, number, boolean, null, undefined, symbol, BigInt


// js is dinamically typed language or statically typed language?
// Ans- Js is dynamically typed language which means variables can hold different types of values during runtime.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail
const id = Symbol("1234")
const newId = Symbol("1234")

// console.log(id === newId);



//nonpremitive - call by referance

// object, array, Functions

const heros = ["Ironman", "Spiderman", "Batman"]

let myObj ={
    name:"Sandeep",
    age:33,

}

const myFunction = function(){
    console.log("Hellow World");
    
}

console.log(typeof myFunction);


// to be proficient in JS master objects and web events