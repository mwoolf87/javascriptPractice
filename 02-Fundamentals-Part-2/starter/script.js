"use strict";

/// --------- FUNCTIONS --------- ///

// a function can reuse a piece of code, but also receive and return data back/

function logger() {
  console.log("My name is Mike");
}

logger(); // This process is called running/calling/ or invoking the function

function fruitProcessor(apples, oranges) {
  // the fruits listed above between the parens are called parameters

  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(3, 0); // the items in these parens are called arguments
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(3, 4);
console.log(appleOrangeJuice);

// ------ FUNCTION DECLARATION ------//
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// to save a function value you need to store it into a variable
// const age1 = calcAge1(1987);
// console.log(age1);

// ------- FUNCTION EXPRESSION ------ //
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1987);
// console.log(age2);

// ----- ARROW FUNCTIONS ------- //

//  function expression example
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1987);
console.log(age2);

// Arrow function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1987);
console.log(age3);

const yearsUntilRetirement = (firstName, birthYear) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement("Mike", 1987));
console.log(yearsUntilRetirement("Cheryl", 1959));
