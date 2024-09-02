const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

console.log(" ");
console.log("1. Add 10 to each element and log the new array result");
console.log(" ");


const addedTen = arrayNumbers.map(num => num + 10);
console.log('Array after adding 10:', addedTen);

console.log(" ");
console.log("2. Cube each array element and log the result");
console.log(" ");


const cubedNumbers = arrayNumbers.map(num => Math.pow(num, 3));
console.log('Array after cubing each element:', cubedNumbers);

console.log(" ");
console.log("3. Add the index value to its corresponding array element and log the new array result");
console.log(" ");


const indexAdded = arrayNumbers.map((num, index) => num + index);
console.log('Array after adding index value to each element:', indexAdded);
