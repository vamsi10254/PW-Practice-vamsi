let arr = [1, 2, 3];
console.log(arr);
// Add to END
arr.push(4);
console.log(arr);

// Remove from END
let arr2 = [1, 2, 3];
console.log(arr2);
arr2.pop();
console.log(arr2);

// Add to ENDING
let arr3 = [1, 2, 3];
console.log(arr3);
arr3.push(5, 6);
console.log(arr3);

// Add to BEGINNING
let arr4 = [1, 2, 3];
console.log(arr4);
arr4.unshift(0);
console.log(arr4);

// Remove from BEGINNING
let arr5 = [1, 2, 3];
console.log(arr5);
arr5.shift();
console.log(arr5);

// splice(start, deleteCount, ...itemsToAdd)
let arr6 = [1, 2, 3, 4, 5, 6];
arr6.splice(2, 1); // removes 1 item at index 2
console.log(arr6);
arr6.splice(2, 0, 99);
console.log(arr6);
arr6.splice(1, 2, 10, 20);
console.log(arr6);