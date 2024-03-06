function isIsogram(str) {
  // Convert the string to lowercase to ignore letter case
  const lowercaseStr = str.toLowerCase();

  // Create an empty object to store encountered letters
  const letterMap = {};

  // Iterate through each letter in the string
  for (let i = 0; i < lowercaseStr.length; i++) {
    const letter = lowercaseStr[i];

    // If the letter is already in the letterMap, it's a repeating letter, so return false
    if (letterMap[letter]) {
      return false;
    }

    // Otherwise, mark the letter as encountered in the letterMap
    letterMap[letter] = true;
  }

  // If the loop completes without returning false, the string is an isogram
  return true;
}

// Test cases
console.log(isIsogram("Dermatoglyphics")); // Output: true
console.log(isIsogram("moose")); // Output: false
console.log(isIsogram("aba")); // Output: false