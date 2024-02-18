/*
You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return either:

true if all developers in the list code in the same language; or
false otherwise.

Example

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];   ====>  true
*/

function isSameLanguage(list) {
  // thank you for checking out the Coding Meetup kata :)
  const baseLanguage = list[0].language;
  for (let developer of list) {
    if (developer.language !== baseLanguage) {
      return false;
    }
  }
  return true;
}

// Another solution
function isSameLanguage2(list) {
  // thank you for checking out the Coding Meetup kata :)
  const firstLanguage = list[0].language;
  return (
    list.filter((developer) => {
      return developer.language === firstLanguage;
    }).length === list.length
  );
}

// Another solution
function isSameLanguage3(list) {
  // thank you for checking out the Coding Meetup kata :)
  return list.every((developer) => developer.language === list[0].language);
}
