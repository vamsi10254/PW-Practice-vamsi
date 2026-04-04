
// console.log(username);
// let username = "Dutta";


let a = 5;
let b = ++a;
console.log(a);
console.log(b);

let a = 10;
console.log(++a + ++a);


const age = 25;
// age = 30;
console.log(age);



function test() {
    return 10;
}

console.log(test());
console.log(test);

let arr = [10, 20, 30];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


let i = 0;

while (i < 7) {

    i++;

    if (i === 5) {
        continue;
    }

    console.log(i);
}

const nums = [2, 5, 8, 11, 14, 17];
for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}

for (i = 1; i <= 7; i++) {
    console.log(i);
}

for (let i = 1; i <= 3; i++) {
    console.log(i);
}

console.log("outside loop:", i);


for (i = 0; i < tests.length; i++) {
    runTest(i);
}

for (const i = 1; i <= 5; i++) {
    console.log(i);
}

const nums = [10, 20, 30];

const users = ["admin", "customer", "guest"];

for (const user of users) {
    console.log("Run test for", user);
}