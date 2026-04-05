// Null — "intentionally nothing"

let selectedItem = null;
console.log(selectedItem);

let searchResult = null;
console.log(searchResult);

// Undefined — "not yet assigned"
let declaredOnly;                     // automatically undefined
console.log(declaredOnly);           // undefined


// Equality comparisons
console.log(null == undefined);       //True      (loose equality)

console.log(null === undefined);    // False -  (strict — different types)

console.log(typeof null);           // "object" (historical bug)
console.log(typeof undefined);      // "undefined"