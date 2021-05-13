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

// -- Exercise -- //
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
/*
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

console.log(friends.indexOf("Steven")); // returns the index of the element requested. In this case, Steven is the 1 index of the array.

console.log(friends.indexOf("Bob")); // if an element does not exist in an array then is will return -1.

console.log(friends.includes("Steven")); // includes returns true or false if an element exists in an array. Steven returns true, while bob returns false, since he does not exist in the array. its important to note that includes uses strict equality.
console.log(friends.includes("Bob"));
*/

// ------ Coding Challenge 2 ------ //
/*
const calcTip = bill => {
  if (bill <= 300 && bill >= 50) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]; // using bracket notation to use the calTip function on the specified index
const tips2 = bills.forEach(bill => {
  console.log(calcTip(bill));
}); // using the .forEach() method on logging each tip value
console.log(bills, tips);
*/

// ------------- OBJECTS ------------- //
// Objects left side is the key, right side is the value, known as a key-value pair. Keys are also known as properties, in the example below jonas has 5 properties.
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"]
// };

// to access the properties above, we use either . < dot notation, or bracket notation

// console.log(jonas.lastName); // returns 'Schmedtmann' in dot notation, we have to use the final property name
// console.log(jonas["lastName"]); // returns 'Schmedtmann' in bracket notation, we have to use the computed property name
// const nameKey = "Name";
// console.log(jonas[`first${nameKey}`]); //jonas
// console.log(jonas["last" + nameKey]); //Schmedtmann

// Challenge
//Jonas has 3 friends, and his best friend is called Michael
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`
// );
/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  //   calcAge(birthYear) {
  //     return 2037 - this.birthYear;// this allows the developer to access the object property birthyear
  //   }
  calcAge() {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary() {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    } and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  }
};
console.log(jonas.calcAge());
console.log(jonas.getSummary());
console.log(jonas.age);

// console.log(jonas.calcAge());
// console.log(jonas["calcAge"](1991));
*/
// ----- Challenge 3 ------//
/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBmi() {
    this.bmi = Math.round(this.mass / this.height ** 2);
    return this.bmi;
  }
};
const john = {
  fullName: "John Smith",
  mass: 192,
  height: 1.95,
  calcBmi() {
    this.bmi = Math.round(this.mass / this.height ** 2);
    return this.bmi;
  }
};

mark.calcBmi();
john.calcBmi();
console.log(mark.bmi, john.bmi);
if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName} has a higher BMI`);
} else {
  console.log(`${john.fullName} has a higher BMI than ${mark.fullName}`);
}
*/
//------------ The For Loop ----------- //

//for loop keeps running while condition is true
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights rep ${rep}`);
}

const jonas = [
  "Jonas",
  "Schmed",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"]
];
const types = [];

for (let i = 0; i < jonas.length; i++) {
  //reading from jonas array
  console.log(jonas[i], typeof jonas[i]);
  // filling types array
  //   types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// CONTINUE AND BREAK
console.log("----ONLY STRINGS ----");
//Continue
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}
//Break

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "number") break;
  console.log(jonas[i], typeof jonas[i]);
}
*/
const jonas = [
  "Jonas",
  "Schmed",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"]
];
// reverse for loop jonas.length -1 indicates the last element in the array
/*
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----- Starting exercise ${exercise} -----`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights rep ${rep}`);
  }
}
*/

// ---------------- CHALLENGE 4 --------------- //
const bills = [22, 295, 176, 440, 37, 105, 10, 110, 86, 52];
const tips = [];
const totals = [];

const calcTip = bill => {
  if (bill <= 300 && bill >= 50) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

console.log(tips);
console.log(totals);
