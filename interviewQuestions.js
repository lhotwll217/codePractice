/*
  Write me a function that will take in a string and return another string
    with all the letters in each word reversed (but the words in the original order still).
    e.g. "Hello world" -> "olleH dlrow"
*/

function escape(str) {
  return str.replace("\n", "\\n").replace("\t", "\\t");
}

function reverseWordsNaive(text) {
  // Split the text into words by using a space as a delimeter, map each word to its reverse by splitting into
  // a letter array, reversing the letter array and joining it back into a string, then join the words
  // together again, inserting the space that was removed.
  return text
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

function isWhitespace(letter) {
  return [" ", "\n", "\t"].includes(letter);
}

function reverseWords(text) {
  let currentWord = [];
  const result = [];

  // Split text string into an array of letters and iterate over each letter
  text.split("").forEach((letter) => {
    if (isWhitespace(letter)) {
      // If letter is whitespace, add currentWord in reverse order to the result, letter by letter
      // since we're using .pop() it will take the elements from the end of the array to the front
      while (currentWord.length > 0) {
        result.push(currentWord.pop());
      }

      // Add the whitespace letter after currentWord (reversed)
      result.push(letter);
    } else {
      // If the letter is not whitespace, add it to the currentWord
      currentWord.push(letter);
    }
  });

  // After looping through the whole set of letters, check if we have a word that needs to be added
  // in case the string did not end in whitespace.
  while (currentWord.length > 0) {
    result.push(currentWord.pop());
  }

  // Join the array of letters back into a single string
  return result.join("");
}

const simpleExample = "Hello world";
const complexExample = "Dear World,\n\tHello there.  How are you today?";

console.log(
  `Naive: [${escape(simpleExample)}] => [${escape(
    reverseWordsNaive(simpleExample)
  )}]`
);
console.log(
  `Naive: [${escape(complexExample)}] => [${escape(
    reverseWordsNaive(complexExample)
  )}]`
);

console.log(
  `Robust: [${escape(simpleExample)}] => [${escape(
    reverseWords(simpleExample)
  )}]`
);
console.log(
  `Robust: [${escape(complexExample)}] => [${escape(
    reverseWords(complexExample)
  )}]`
);
