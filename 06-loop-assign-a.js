console.log(`======================Q(1)================================`);

var sentence = "I am very good IT Developer";
var vowels = "aeiou";
var vowelCount = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    char = char.toLowerCase();
    if (vowels.includes(char)) {
        vowelCount++;
    }
}
console.log(`Total Number of Voel is: ${vowelCount}`);

console.log(`====================Q(2)==============================`);


var sum = 0;
for(let index = 0; index <= 5; index++){
    sum = sum + index;
}

var cube = 0;
for(let index = 0; index <= 5; index++){
    cube = cube + index * index * index;
}
console.log(`Sum of Cube of numbers from 1 to 5 is: ${cube}`);
