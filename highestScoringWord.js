/*
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet
You need to return the highest scoring word as a string.

* If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.

Examples:

'man i need a taxi up to ubud' => 'taxi';
'what time are we climbing up the volcano' => 'volcano'; 
'take me to semynak' => 'semynak';   
*/

function high(x) {
  let arrScore = x.split(" ").map((word) => {
    return word.split("").reduce((acc, char, index) => {
      return acc + word.charCodeAt(index) - 96;
    }, 0);
  });

  return x.split(" ")[arrScore.indexOf(Math.max(...arrScore))];
}
