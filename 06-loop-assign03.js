function oddPositionedChars(word) {
    for (let index = 0; index < word.length; index++) {
        if (index % 2 == 0 && word[index] !== ' ') {
            console.log(`Character '${word[index]}' at position ${index + 1}`);
        }
    }
}

let string1 = "Hard work always pays back";
let string2 = "Soon I will be UI IT Champ";

oddPositionedChars(string1);
console.log(`==============fOR STRING 2nd=================`);
oddPositionedChars(string2);
