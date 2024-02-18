/*
You will be given an array of objects (hashes in ruby) representing data about 
developers who have signed up to attend the coding meetup that you are organising 
for the first time.

Your task is to return the number of JavaScript developers coming from Europe.

Examples

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];   ===>  1
*/

function countDevelopers(list) {
  // your awesome code here :)
  return list
    .filter((developer) => {
      return developer.language === "JavaScript";
    })
    .filter((developer) => {
      return developer.continent === "Europe";
    }).length;
}

// Another solution
function countDevelopers2(list) {
  // your awesome code here :)
  return list.filter((developer) => {
    return (
      developer.language === "JavaScript" && developer.continent === "Europe"
    );
  }).length;
}
