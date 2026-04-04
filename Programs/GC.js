
// let a = 90 - 100
// let b = 80 - 89
// let c = 70 - 79
// let d = 60 - 69
// let f = 0 - 59

// let num = "enter number";
// console.log("enter number");
// if (num >= 90 && num <= 100) console.log(a);
// else if (num >= 80 && num <= 89) console.log(b);
// else if (num >= 70 && num <= 79) console.log(c);
// else if (num >= 60 && num <= 69) console.log(d);
// else console.log(f);


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter number: ", function (num) {

    num = Number(num);

    if (num >= 90 && num <= 100) console.log("A");
    else if (num >= 80 && num <= 89) console.log("B");
    else if (num >= 70 && num <= 79) console.log("C");
    else if (num >= 60 && num <= 69) console.log("D");
    else console.log("F");

    rl.close();
});

