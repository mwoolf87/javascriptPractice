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
/*
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
*/

// ------------ ARRAYS -------------//
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

//Two Ways to make arrays
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
console.log(friends[0]); // arrays are zero based and start at zero. so Steven is an index of 1 and Peter is an index of 2.
console.log(friends[1]);
console.log(friends[2]);
console.log(friends.length); //.length logs the number of elements in the array.
console.log(friends[friends.length - 1]); //.length -1 will always log the last element in an array because it takes the number of elements in an array, in this case 3, and subtracts the index by 1 which is index 2 aka peter
const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

friends[2] = "Jay"; //mutates the array to replace "Peter" with "Jay"
console.log(friends);

//only primitive values(string, number, bigint, boolean, undefined, symbol, and null) are immutable, but arrays are not a primitive value so single array elements can be mutated.

const firstName = "Jonas";
const jonas = [firstName, "Schedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);
console.log(jonas[4][0]); // accesses the array then the 0 index of the array which is 'Michael'

// -- Extercise -- //
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];
// console.log(calcAge(years));
years + 10;
("1990,1967,2002,2010,201810"); // turns the array into a string and adds 10 to the last element in the array. you cannot to mathematical operations on arrays.

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1])
];
console.log(ages);
*/

const friends = ["Michael", "Steven", "Peter"];
// --- add elements -- //
const newFriend = friends.push("Jay"); // adds the string 'Jay' to the end of an array. this will mutate the existing array.
console.log(friends);
console.log(newFriend); // returns the length of the new array which is 4

friends.unshift("John"); // adds the string 'John' to the beginning of the array
console.log(friends);

// --- remove elements --- //
const popped = friends.pop(); // removes the last element in an array, and can return the removed element
console.log(popped); // returns // 'Jay'
console.log(friends);

friends.shift(); // removes the first element in an array.
console.log(friends);
