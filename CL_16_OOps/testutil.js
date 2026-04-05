export let BASE_URL = "https://facebook.com";

export function formatUpperCaseString(sname) {
    return sname.toUpperCase();
}

let fname = "Vamsi"; // This is not exported. That's why you cannot import it into other classes. 