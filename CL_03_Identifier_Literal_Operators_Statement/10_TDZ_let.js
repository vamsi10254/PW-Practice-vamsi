let a = 10;
console.log(a);
if (true) {
    console.log(a); //TDZ
    let a = 20;
}

/*
Temporal Dead Zone (TDZ) behavior with let

10
ReferenceError: Cannot access 'a' before initialization

Inside the if block, you declared:
let a = 20;
Because of block scope, this creates a new variable a inside the if block.

But due to hoisting behavior of let, the variable a inside the block is
reserved in memory from the start of the block —
however it is not initialized yet.

So this line: console.log(a); tries to access the block-level a, not the outer a = 10.
Since the block a is still in Temporal Dead Zone (TDZ)
(from start of block until initialization line), JavaScript throws error.


Temporal Dead Zone (TDZ) simple meaning

TDZ = Time between variable hoisting and initialization where
 variable cannot be accessed

 For let and const:
 Block start → TDZ → initialization line → usable

 Correct Ways to Fix

 1. Initialize before using

 let a = 10;
 if (true) {
    let a = 20;
    console.log(a); // 20
 }

 2. Access outer variable correctly

 let a = 10;
 if (true) {
    console.log(a); // 10
    let a = 20; // new variable
 }

 3. Use different variable names

 let a = 10;
 if (true) {
    let b = 20;
    console.log(a); // 10
    console.log(b); // 20
 }

*/

/* Interview one-line answer

 let variables are hoisted but not initialized.
Accessing them before initialization inside the same block results
in a Temporal Dead Zone error */