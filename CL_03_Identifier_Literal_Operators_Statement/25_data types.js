let message = "Login Successful";   // string
let cartCount = 5;                  // number
let isVisible = true;               // boolean
console.log(message);
console.log(cartCount);
console.log(isVisible);

console.log(typeof message);
console.log(typeof cartCount);
console.log(typeof isVisible);

console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" - What is the type of null? -typeof null returns "object" due to a historical bug in JavaScript.

console.log(5 == "5");   // true
console.log(5 === "5");  // false

let countFromUI = "5";   // UI returns string
let expectedCount = 5;   // number

if (countFromUI == expectedCount) {
    console.log("Pass");
}

console.log(false == 0);
console.log(false === 0);

