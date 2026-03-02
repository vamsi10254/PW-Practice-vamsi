// 1
let isActive = false;
let isVerified = true;

if (!isActive && isVerified) {
    console.log("Allow Access");
} else {
    console.log("Deny Access");
}

// 2

let isActive = true;
let isVerified = false;

if (!isActive || isVerified) {
    console.log("Allow");
} else {
    console.log("Deny");
}

