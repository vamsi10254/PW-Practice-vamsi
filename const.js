// Case 1 – Primitive Value (Simple Type)

const age = 25;
age = 30;
console.log(age); // will get an error "Assignment to constant variable."

// Case 2 – Object . const does NOT mean the value cannot change.It means: The variable reference cannot be reassigned.
const user = {
    name: "vamc",
    role: "QA"
};

user.role = "SDET";

console.log(user); 
