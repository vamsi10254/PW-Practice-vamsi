const user = {
    firstName: "Raj",
    lastName: "Nath",
    get fullName() {
        return this.firstName + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
};

console.log(user.fullName);
user.fullName = "Amit Sharma";
console.log(user.fullName);

