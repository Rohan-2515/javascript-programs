function stringHandsOn() {
    // Given string with leading and trailing spaces
    let str = " Hey you are doing good, keep it up ";

    console.log("Original string:", str);

    console.log("=============================1==================================");
    

    let originalLength = str.length;
    console.log("Length of the original string:", originalLength);

    console.log("=============================2==================================");
   
    let trimmedStr = str.trim();
    console.log("Trimmed string:", trimmedStr);
    console.log("Length of the trimmed string:", trimmedStr.length);

    console.log("=============================3==================================");

    let spacesRemoved = originalLength - trimmedStr.length;
    console.log("Number of extra spaces removed:", spacesRemoved);

    console.log("=============================4==================================");
   
    let firstChar = trimmedStr.charAt(0);
    let lastChar = trimmedStr.charAt(trimmedStr.length - 1);
    console.log("First and last character after trim():", firstChar + lastChar);

    console.log("=============================5==================================");

    let wordCount = trimmedStr.split(" ").length;
    console.log("Total number of words:", wordCount);

    console.log("=============================6==================================");

    let substring = trimmedStr.substring(22);
    console.log("Substring starting from index 22:", substring);

    console.log("=============================7==================================");

    let indexGood = trimmedStr.indexOf("good");
    console.log("Index of the word 'good':", indexGood);

    console.log("=============================8==================================");
  
    let endsWithUp = trimmedStr.endsWith("up");
    console.log("Does the string end with 'up'?:", endsWithUp);

    console.log("=============================9==================================");

    let startsWithHey = trimmedStr.startsWith("Hey");
    console.log("Does the string start with 'Hey'?:", startsWithHey);
}


stringHandsOn();
