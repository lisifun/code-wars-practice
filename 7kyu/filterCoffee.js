/*
You love coffee and want to know what beans you can afford to buy it.

The first argument to your search function will be a number which represents your budget.

The second argument will be an array of coffee bean prices.

Your 'search' function should return the stores that sell coffee within your budget.

The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.
*/

function search(budget, prices) {
  // return array of prices that are within budget
  let str = "";
  prices = prices.sort((a, b) => a - b);
  prices.forEach((price) => {
    if (price <= budget) {
      return (str += price + ",");
    }
  });
  return str.slice(0, str.length - 1);
}

// Another solution
function search2(budget, prices) {
  // return array of prices that are within budget
  return prices
    .filter((price) => price <= budget)
    .sort((a, b) => a - b)
    .join(",");
}

// Another solution
function search3(budget, prices) {
  prices.sort((a, b) => a - b);
  let result = "";
  for (let price of prices) {
    if (budget >= price) {
      result += price + ",";
    }
  }
  return result.slice(0, result.length - 1);
  // return array of prices that are within budget
}

// Another solution
function search4(budget, prices) {
  // return array of prices that are within budget
  prices.sort((a, b) => a - b);
  return prices
    .filter((price) => {
      return budget >= price;
    })
    .join(",");
}
