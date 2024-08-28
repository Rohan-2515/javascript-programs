const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log(" ");
console.log("1. Log the array element with its index using forEach() with arrow function");
console.log(" ");

 
arrayNumbers.forEach((num, index) => {
    console.log(`Element: ${num}, Index: ${index}`);
});

console.log(" ");
console.log("2. find the positive numbers form the array using forEach loop");
console.log(" ");

arrayNumbers.forEach(num => {
    if (num > 0) {
        console.log(`Positive number: ${num}`);
    }
});

console.log(" ");
console.log("3. Find the negative numbers, add into a new array, and log the new array on the console using an arrow function");
console.log(" ");

const negativeNumbers = [];
arrayNumbers.forEach(num => {
    if (num < 0) {
        negativeNumbers.push(num);
    }
});
console.log('Negative numbers array:', negativeNumbers);

console.log(" ");
 console.log("4. Find the even numbers and log on console using forEach() with arrow function");
 console.log(" ");
 
arrayNumbers.forEach(num => {
    if (num % 2 === 0) {
        console.log(`Even number: ${num}`);
    }
});

console.log(" ");
console.log("5. Find the sum of all elements from arrayNumbers and log the sum value on the console");
console.log(" ");

let sum = 0;
arrayNumbers.forEach(num => {
    sum += num;
});
console.log('Sum of all elements:', sum);

console.log(" ");
console.log("6. Log the only even-indexed array value on the console. forEach() with arrow function preferred");
console.log(" ");

arrayNumbers.forEach((num, index) => {
    if (index % 2 === 0) {
        console.log(`Even-indexed element: ${num}, Index: ${index}`);
    }
});
