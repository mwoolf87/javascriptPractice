/* let js = "amazing";

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
firstName = "Bob";
console.log(firstName);
*/
//let assigns a variable and can be changed
//if the variable is a constant, write it in uppercase

// in javascript data types are either objects like so:

//let me = {
//     name: 'Jonas',
// };

// or primitive data types like:
// let firstName = 'Jonas';
// let age = 30;

//Number - floating point numbers always have decimals.

//String - sequence of characters used for text, always in quotes '' or "" or `` for template literals.

//Boolean logical type that evaluates true or false, used for making decision.

// Undefined - value taken by a variable that is not defined.

// Symbol Value that is unique and cannot be changed

//BigInt for larger integers that the Number type cant hold.

// single line comment

/* Multi
Line
comment
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Mike");

javascriptIsFun = "YOU KNOW IT!";
console.log(javascriptIsFun);

let year;
year = 1991;
console.log(year);
console.log(typeof year);
*/

/* LET CONST VAR 
let is used when declaring variables that can be reassigned, like age, email

let age = 30;
age = 31;

const is for immutable variables (that cannot be reassigned) like name, birthday etc.

const birthYear = 1991;
*/
// ARITHMETIC OPERATOR
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * ageSarah);
//MULTIPLICATION AND EXPONENTS
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Mike";
const lastName = "Woolf";

console.log(firstName + " " + lastName);

//ASSIGNMENT OPERATOR

let x = 10 + 5; //  15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x -= 5; // x = x - 5
x++; // x = x +1
x--; // x = x -1

console.log(x);

//COMPARISON OPERATORS
//greater than >
console.log(6 > 5); // true
// Less Than <
console.log(6 < 5); // false
//Greater than or Equal to
console.log(10 >= 10); //true
//Less than or Equal to
console.log(10 <= 10); // true
*/

// -------- CHALLENGE 1 ---------
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMI's using the formula(you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

// let marksHeight = 78;
// let marksWeight = 1.69;
// const marksBMI = (marksWeight / marksHeight ** 2) * 100;
// console.log(marksBMI);

// let johnsHeight = 92;
// let johnsWeight = 1.95;
// const johnsBMI = (johnsWeight / johnsHeight ** 2) * 100;
// console.log(johnsBMI);

// let marksHigherBMI = marksBMI > johnsBMI;
// console.log(marksHigherBMI);
// let marksHigherBMI = () => {
//   if (marksBMI > johnsBMI) {
//     console.log(`Marks BMI is higher by (${marksBMI - johnsBMI})`);
//   } else {
//     console.log("Johns BMI is actually higher");
//   }
// };

// console.log(marksHigherBMI());

// const firstName = "Mike";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// let jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

// console.log(jonas);

// let jonas2 = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

// console.log(jonas2);

// console.log(`strings
// with
// multiple
// lines`);

// ------ If Else Statements ------- //
// const age = 15;
// const isOldEnough = age >= 18;
// if (isOldEnough) {
//   console.log("Sara Can drive");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sara is too young. Wait another ${yearsLeft} years`);
// }

// const birthYear = 1991;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

//// ------ Type Conversion and Type Coercion ----- ////

//Type  Conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18);
// console.log(Number("Mike")); // NaN Not a Number
// console.log(typeof NaN);
// console.log(String(23), 23);

// //Type Coercion

// //If you use the + operator it will convert all number to a string all other operators (-, * , /, etc.) will convert the string to a number.
// console.log("I am " + 23 + " years old"); // automatic type coercion
// console.log("I am " + "23" + " years old");
// console.log("23" - "10" - 3);
// console.log("23" + "10" + 3);
// console.log("23" * "2");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// console.log(2 + 3 + 4 + "5"); // '95'converts all numbers to a string 2 + 3 + 4 = 9 + '5' = '95'
// console.log(2 + 3 + 4 - "5"); // 4 converts "5" to a number
// console.log("10" - "4" - "3" - 2 + "5"); // '15' the first four items are converted to a number then converted BACK to a string resulting in a '15' string.

/// ---------- TRUTHY AND FALSY ----------- ////
//There are only 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0)); // false
// console.log(Boolean("")); // false
// console.log(Boolean(undefined)); //false
// console.log(Boolean("Mike")); //true
// console.log(Boolean({})); //true
// console.log(Boolean(NaN)); //false

// const money = 0;

// if (money) {
//   console.log("Don't spend it all");
// } else {
//   console.log("You should get a job");
// }

// let height;
// if (height) {
//   console.log("Yay, height is defined");
// } else {
//   console.log("Height is undefined");
// }

//// ------- Equality Operators ------- ////

// const age = 18;
// if (age === 18) console.log("You just became and adult!");

// strict equal === does NOT perform type coercion while loose equal == does. example below

// 18 == '18' // true
// 18 === '18' // false

// const number = Number(prompt("Whats your favorite number?"));
// console.log(number);

// if (number === 23) {
//   console.log("Cool! 23 rocks!");
// } else if (number === 7) {
//   console.log("7 is pretty good as well");
// } else {
//   console.log("number is not 23 or 7");
// }

//!= loose NOT operator !== strict NOT operator;

//// ------ BOOLEAN LOGIC OPERATORS ------ /////

// AND OPERATOR && NEEDS ALL CONDITIONS ARE TRUE
// OR OPERATOR || NEEDS ONLY ONE CONDITION TO BE TRUE
// ! NOT Operator (has precedence over && and ||) when the condition is NOT  something its true;
// !false results in true;

//////// ------ LOGICAL OPERATORS ------------ ////////

// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision); //true
// console.log(hasDriversLicense && hasGoodVision); // if Either A or B is false then the return is false.
// console.log(hasDriversLicense || hasGoodVision); // in this case this is true if either A or B is true
// console.log(!hasDriversLicense); //false

// if (hasGoodVision && hasDriversLicense) {
//   console.log("Sara is able to drive");
// } else {
//   console.log("Someone else should drive");
// }

// const isTired = true;
// console.log(hasDriversLicense || hasGoodVision || isTired); //true

////// ------ Challenge 3 -------- /////

//dolphins 96, 108, 89
//koalas = 88, 91, 110

//Test data1
//dolphins 97. 112, 101
//koalas 109 95 123

//test data 2
// dolphins 97, 112, 101
// koalas 109, 95, 106
// let dolphinsAverage = (98 + 108 + 89) / 3;
// let koalasAverage = (88 + 91 + 110) / 3;
// if (dolphinsAverage > koalasAverage) {
//   console.log("Dolphins are sick!");
// } else {
//   console.log("Dolphins suck!");
// }
// let dolphinsAverage2 = (97 + 112 + 101) / 3;
// let koalasAverage2 = (109 + 95 + 123) / 3;

// if (dolphinsAverage2 > koalasAverage2 && dolphinsAverage2 >= 100) {
//   console.log("Dolphins win!");
// } else if (dolphinsAverage2 < koalasAverage2 && koalasAverage2 >= 100) {
//   console.log("koalas win");
// } else if (dolphinsAverage2 === koalasAverage2) {
//   console.log("Dolphins suck!");
// }

// let dolphinsAverage3 = (97 + 112 + 81) / 3;
// let koalasAverage3 = (109 + 95 + 85) / 3;

// if (dolphinsAverage3 > koalasAverage3 && dolphinsAverage3 >= 100) {
//   console.log("Dolphins win!");
// } else if (dolphinsAverage3 < koalasAverage3 && koalasAverage3 >= 100) {
//   console.log("koalas win");
// } else if (
//   dolphinsAverage3 === koalasAverage3 &&
//   dolphinsAverage3 >= 100 &&
//   koalasAverage3 >= 100
// ) {
//   console.log("You Both win!");
// } else {
//   console.log("You Both lose, go home!!");
// }

//// ----- TERNARY OPERATORS ------- ////

// const age = 19;
// const drink = age >= 18 ? "I like to drink wine" : "I like to drink water"; // I like to drink wine

// console.log(drink);
// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`); // I like to drink wine
// let drink2;
// if (age >= 18) {
//   console.log("wine");
// } else {
//   console.log("water");
// }

/////// ---- Challenge 4 ------ //////
/*
const bill1 = 275;
const bill2 = 40;
const bill3 = 430;
const tip1 = bill1 <= 300 && bill1 >= 50 ? bill1 * 0.15 : bill1 * 0.2;
const tip2 = bill2 <= 300 && bill2 >= 50 ? bill2 * 0.15 : bill2 * 0.2;
const tip3 = bill3 <= 300 && bill3 >= 50 ? bill3 * 0.15 : bill3 * 0.2;
console.log(
  `The bill was $${bill1}, the tip is $${tip1}, and the total is $${
    bill1 + tip1
  }`
);
console.log(
  `The bill was $${bill2}, the tip is $${tip2}, and the total is $${
    bill2 + tip2
  }`
);
console.log(
  `The bill was $${bill3}, the tip is $${tip3}, and the total is $${
    bill3 + tip3
  }`
);
*/
