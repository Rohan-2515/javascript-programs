function isPalindrome(str) {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}

console.log("Is this string 'madam' palindrome :-",isPalindrome("madam")); // true
console.log("Is this string 'dad' palindrome :-",isPalindrome("dad"));   // true
console.log("Is this string 'hello' palindrome :-",isPalindrome("hello")); // false

console.log("==========================anagram================================");


function areAnagrams(str1, str2) {
    
    str1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
    str2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();

    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log("is this strings 'slient', 'listen' are anagram :-",areAnagrams("Silent", "Listen")); // true
console.log("is this strings 'Hello', 'world' are anagram :-",areAnagrams("Hello", "World"));   // false
console.log("is this strings 'Such', 'much' are anagram :-",areAnagrams("Such", "Much"));     // false
