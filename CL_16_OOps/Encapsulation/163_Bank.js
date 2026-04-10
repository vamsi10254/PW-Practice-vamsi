class ICICI {
    #balance;

    constructor(name, balance) {
        this.#balance = balance;
        this.name = name;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        } else {
            console.log("Not allowed")
        }
    }
}

let vamsi = new ICICI("vamsi", 1000);
console.log(vamsi.getBalance());
vamsi.setBalance(10000000, false);
console.log(vamsi.getBalance());

let vamsi_father = new ICICI("vamsi", 2000);
console.log(vamsi_father.getBalance());
vamsi_father.setBalance(300000, true);
console.log(vamsi_father.getBalance());