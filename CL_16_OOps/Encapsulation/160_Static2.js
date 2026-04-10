class Student {
    static collegeName = "PW AT Batch";

    constructor(name) {
        this.name = name;
    }
    static display() {
        console.log(this.name + " are part of the ", Student.collegeName)
    }
}

let amit = new Student("Akash");
let miti_jha = new Student("Sudheep");
let sumu = new Student("Raghu");
let padmini = new Student("Padma");

console.log(Student.collegeName);
console.log(amit.name);
console.log(miti_jha.name);