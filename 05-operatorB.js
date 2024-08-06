

function greaterNumber(num1, num2) {
    const greater = num1 > num2 ? num1 : num2;
    console.log(`The greater number between ${num1} and ${num2} = ${greater}.`);
}

console.log("===================================1=======================================");
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log("===================================2=======================================");
function isEvenOrOddNum(num) {
    const isEven = num % 2 === 0;
    console.log(`The number ${num} = ${isEven ? 'even' : 'odd'}.`);
    return isEven;
}


isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log("===================================3=======================================");
function wordLength(word) {
    const length = word.length;
    const result = length % 2 === 0 ? 'EVEN' : 'ODD';
    console.log(`The length of the word "${word}" = ${result}.`);
    return result;
}


wordLength("JavaScript");
wordLength("developer");
wordLength("Google");
