// Sample test results
let results = ["pass", "fail", "pass", "skip", "pass"];

let pass = 0;
let fail = 0;
let skip = 0;

// Loop through the array
for (let i = 0; i < results.length; i++) {

    if (results[i] === "pass") {
        pass++;
    }
    else if (results[i] === "fail") {
        fail++;
    }
    else if (results[i] === "skip") {
        skip++;
    }

}

