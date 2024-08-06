console.log("=======================================1===================================");
function squareOfWordLength(word) {
    let length = word.length;
    let lengthSquare = length * length;
    console.log(`The length of the word "${word}" is ${length}, and its square is ${lengthSquare}.`);
    return lengthSquare;
}



squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Web Developer Smart");

console.log("=======================================2.1===================================");



function analyzeString() {
  
    let str = "I am Angular Developer";

    
    let strLength = str.length;
    let wordCount = str.split(" ").length;

    let divisionResult = strLength / wordCount;
    console.log(`The length of the string is ${strLength}, and the total number of words is ${wordCount}.`);
    console.log(`String length divided by total words: ${divisionResult}`);


    console.log("=======================================2.2===================================");
    
    let multiplicationResult = strLength * wordCount;
    console.log(`String length multiplied by total words: ${multiplicationResult}`);
}


analyzeString();
