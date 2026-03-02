// 1
let age = 20;
let hasID = false;

if (age > 18 || hasID === true) {
    console.log("Allowed");
} else {
    console.log("Not Allowed");
}

// 2
let age = 20;
let hasID = false;

if ((age > 18 && hasID === true) || age === 20) {
    console.log("Allowed");
} else {
    console.log("Not Allowed");
}

