// write a function that counts the number of vowels in a given string and returns that value

const vowelCounter = function(data) {
  let vowelsCount = 0;
  // Put your solution here

  let string = data.toString();

  for (let i = 0; i <= data.length -1; i++) {

    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || 
    string.charAt(i) == "o" || string.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }

  return vowelsCount
  
};

console.log(vowelCounter("orange"));
console.log(vowelCounter("Cornerstone"));
console.log(vowelCounter("aeiou"));