/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

Examples:

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
 */

function generateHashtag(str) {
  const arr = str.trim().split(" ");

  if (arr.length === 0 || (arr.length === 1 && arr[0] === "")) {
    return false;
  }

  const hashtag = arr
    .filter((word) => {
      return word !== "";
    })
    .reduce((acc, word) => {
      return acc + word[0].toUpperCase() + word.slice(1);
    }, "#");

  return hashtag.length > 140 ? false : hashtag;
}

// Noice
function generateHashtag2(str) {
  const hashtag = str.split(" ").reduce((tag, word) => {
    return tag + word.charAt(0).toUpperCase() + word.slice(1);
  }, "#");

  return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
}
