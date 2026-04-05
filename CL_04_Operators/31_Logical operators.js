// && -> AND Gate
// || -> OR Gate

let a = true;
let b = false;
console.log(a && b); //  AND
console.log(a || b); //  OR
console.log(!a); // Reverse of a


// AND Gate (&&)
// True only when both conditions are true.
// False if one or both are false.

console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

// OR Gate (||)
// True if at least one condition is true.
// False only when both are false.

console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

// NOT Operator (!)
// Reverses the boolean value.

console.log(!true);  // false
console.log(!false); // true
