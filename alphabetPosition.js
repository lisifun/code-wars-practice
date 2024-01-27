/*
In this kata you are required to, given a string, replace every letter 
with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

Examples:

"The sunset sets at twelve o' clock." => "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
*/

function alphabetPosition(text) {
  let result = [];
  text = text
    .split("")
    .map((char) => {
      return char.toLowerCase();
    })
    .join("");
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char >= "a" && char <= "z") {
      result.push(text.charCodeAt(i) - 96);
    }
  }
  return result.join(" ");
}
