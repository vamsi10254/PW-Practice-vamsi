// 1
let age = 20;
let hasID = false;

if (age > 18 || hasID === true) {
    console.log("Allowed");
} else {
    console.log("Not Allowed");
}

// 2
let age1 = 20;
let hasID1 = false;

if ((age1 > 18 && hasID1 === true) || age1 === 20) {
    console.log("Allowed");
} else {
    console.log("Not Allowed");
}

