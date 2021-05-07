"use strict";

/// --------- FUNCTIONS --------- ///

// a function can reuse a piece of code, but also receive and return data back/
// a return statement (shown below) on line 18 is used to output a value from the function and terminate execution

// function logger() {
//   console.log("My name is Mike");
// }

// logger(); // This process is called running/calling/ or invoking the function

// function fruitProcessor(apples, oranges) {
// the fruits listed above between the parens are called parameters - these are placeholders to receive input values. Like local variables of a function

//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(3, 0); // the items in these parens are called arguments - these are the actual values of function parameters  to input data
// console.log(appleJuice);
// const appleOrangeJuice = fruitProcessor(3, 4);
// console.log(appleOrangeJuice);

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
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1987);
// console.log(age2);

// Arrow function

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1987);
// console.log(age3);

// const yearsUntilRetirement = (firstName, birthYear) => {
//   const age = 2021 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement("Mike", 1987));
// console.log(yearsUntilRetirement("Cheryl", 1959));

// --- using functions to add another function---- ///

// function cutFruitPieces(fruit) {
//   return fruit * 3;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (firstName, birthYear) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return `${firstName} retires in ${retirement} years`; // once a condition is satisfied it exits the function and returns the requested value.
//     console.log("will not return");
//   } else {
//     return -1;
//     console.log("this will not return either");
//   }
// };

// console.log(yearsUntilRetirement("Mike", 1987));
// console.log(yearsUntilRetirement("Jonas", 1950));

/// ----------- Coding Challenge 1 ------------- ///

const calcAverage = (score1, score2, score3) =>
  Math.round((score1 + score2 + score3) / calcAverage.length);

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(
      `The Dolphins win by a average score of (${avgDolphins} - ${avgKoalas})`
    );
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(
      `The Koalas win in an upset! averaging ${avgKoalas} over the dolphins ${avgDolphins}`
    );
  } else {
    console.log("no team wins...");
  }
};

console.log(checkWinner(avgDolphins, avgKoalas));

avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);

console.log(checkWinner(avgDolphins, avgKoalas));
