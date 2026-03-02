
//  1
function sayHello() {
    console.log("Hello");
}

sayHello();


// 2
function add() {
    console.log(2 + 3);
}

add();


// 3 - These are called parameters.add(10 ,20) - a and b are already declared as parameters inside the function.
function add(a, b) {
    console.log(a + b);
}

add(10, 20);

// a and b → Parameters  and 10 and 20 → Arguments


// 4
let priceFromUI = "500";
let tax = 50;

console.log(priceFromUI + tax);  // 50050 (String + Number = String). this is wrong in realtime


// 5
let priceFromUI = "500";
let tax = 50;

console.log(Number(priceFromUI) + tax);  // 550 (Number + Number = Number). this is correct in realtime


// 6
console.log("10" * 2);   // 20
console.log("10" / 2);   // 5
console.log("10" + 2);   // "102"

