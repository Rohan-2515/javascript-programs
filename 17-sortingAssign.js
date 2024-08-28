const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];

console.log(" ");
console.log("1. Reverse the array");
console.log(" ");

const arrayreverse = arrayRollNumbers.reverse();
console.log(arrayreverse);

console.log(" ");
console.log("2. Use the sort() method without any custom sorting logic and notice the issue");
console.log(" ");


const defaultSortedArray = [...arrayRollNumbers].sort();
console.log('Default Sorted Array:', defaultSortedArray);

console.log(" ");
console.log("3. Sort the array in ascending order using custom logic");
console.log(" ");


const arrayascen = arrayRollNumbers.sort((n1,n2) =>{
    return n1>n2 ? 1 : -1;
});
console.log(arrayascen);

console.log(" ");
console.log("4. Find the greatest number from the array");
console.log(" ");


const greatestNumber = Math.max(...arrayRollNumbers);
console.log('Greatest Number:', greatestNumber);

console.log(" ");
console.log("5. Find the smallest number from the array");
console.log(" ");

const smallestNumber = Math.min(...arrayRollNumbers);
console.log('Smallest Number:', smallestNumber);

console.log(" ");
console.log("6. Remove duplicates from the array");
console.log(" ");

const uniqueArray = [...new Set(arrayRollNumbers)];
console.log('Array with Duplicates Removed:', uniqueArray);
