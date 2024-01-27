/*
Write a function that takes in a string of one or more words, and returns the same string,
but with all words that have five or more letters reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. Spaces will be included only when 
more than one word is present.

Examples:
"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
*/

// My way
function spinWords(string) {
  let words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 4) {
      words[i] = word.split("").reverse().join("");
    }
  }
  return words.join(" ");
}

// Another way
function spinWords2(string) {
  return string
    .split(" ")
    .map((word) => {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}
