console.log("========================================1=========================================");

const array = [3, 9, 7, 6, 19, 29, 53];

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function countPrimes(arr) {
  let primeCount = 0;
  arr.forEach(num => {
    if (isPrime(num)) {
      primeCount++;
    }
  });
  return primeCount;
}

const numberOfPrimes = countPrimes(array);
console.log("The Total count of prime Number in array is:", numberOfPrimes);

console.log("============================================2==========================================");

function spaceCount(str) {
  
    let count = 0;
   
    for (let i = 0; i < str.length; i++) {
      
      if (str[i] === ' ') {
        count++;
      }
    }
    
   
    return count;
  }
  
  
  const testString1 = "Revision is the mother of success";
  const testString2 = "JavaScript is the language of internet world";
  
  console.log("Number of spaces in testString1:", spaceCount(testString1)); 
  console.log(" ");
  
  console.log("Number of spaces in testString2:", spaceCount(testString2));
  

