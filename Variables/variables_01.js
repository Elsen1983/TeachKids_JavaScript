/**
--------------
THEORY Part
--------------
What is a Variable?

A variable is like a box where we can store data. 
This data can be numbers, text, or other values. 
In JavaScript, we create variables using the keywords let, const, and var.

Keywords:

let: Used for variables that can change their value.
const: Used for variables that cannot change their value, meaning they are constant.
var: This is an older way to create variables, but nowadays, it is recommended to use let and const.

Primitive Data Types in JavaScript:
In JavaScript, there are several types of data that we can store in variables. 
These are called primitive data types because they are the simplest types of data. 
Here are the main primitive types:
Number: Stores numerical values. Examples: 5, 10.5, -3
String: Stores text. A string is a group of characters inside quotes. Examples: "Hello", "JavaScript"
Boolean: Stores either true or false. This is useful for making decisions. Examples: true, false
Undefined: A variable that has been declared but not given a value is undefined. Example: let x; (Here x is undefined)
Null: Represents an empty value or "nothing". Example: let emptyValue = null;

Examples of Creating Variables:

In this example, we have different types of variables: a let variable that stores your age, a const variable with your name, 
a var variable with your favorite number, a boolean variable (isHappy), an undefined variable (x), and a null variable (emptyValue).

let age = 11;  // This is a number
const name = "Adam";  // This is a string
var favoriteNumber = 7;  // This is also a number
let isHappy = true;  // This is a boolean
let x;  // This is undefined
let emptyValue = null;  // This is null


Understanding Variable Transformations:

Variables allow us to perform different kinds of calculations and transformations. 
Think of variables like boxes that can hold different values, and we can use those values to do math or create new words.
When we do things like adding two numbers together or combining words, it's like opening up two boxes, using what's inside, 
and putting the result into a new box. These calculations happen in the computer's memory, which you can imagine as a big shelf 
where all the boxes (variables) are stored. Each box has a label so we can easily find it.

For example:

If we create two let variables with numbers and add them, the computer will take the values from those boxes, add them together, 
and then put the result in a new box (variable).
When we multiply a number by 2, it's like taking what's inside the box, doubling it, and putting the new value back in the same box.

Memory is where all these boxes are stored, and it helps the computer remember the values we work with.

 */

// TASK 1 - let variables
// a - Create a let variable with the name of your favorite video game. Change the value of the variable to another game!
// b - Create a let variable that stores an animal's age, then update its value as if the animal gets older year by year!
// c - Create two let variables with different numbers, then add them together and store the result in a new variable.
// d - Create two let variables with numbers, then subtract one from the other and store the result in a new variable.
// e - Create a let variable with a number, then multiply it by 2 and store the new value in the same variable.
// f - Create a let variable that stores true or false (a boolean) to represent if you have completed your homework.


// TASK 2 - const variables:
// a - Create a const variable with the name of your favorite book. Try changing its value—what happens?
// b - Create a const variable to store your birth year.
// c - Create a const variable that stores your favorite color. Try to print it to the console. Use console.log(variable) for this task.
// d - Create two const variables with different strings, then combine them to create a sentence and print it to the console.
// e - Create a const variable that stores your hometown and print a message like "I live in [hometown]!".
// f - Create a const variable that stores false to represent if you are currently hungry. Print it to the console.

// SOLUTIONS:
// TASK 1 - let variables
// a
let favoriteGame = 'Minecraft' 
favoriteGame = 'Roblox'

// b
let foxAge = 2
foxAge = foxAge + 1
foxAge += 1
foxAge ++
console.log(foxAge)

// c
let teacher = 1
let principal= 2
let shcool = principal + teacher

// d
let one = 1
let two = 2
let twoMinusOne = two - one

// e
let tree = 3
tree = tree * 2

// f
let homeworkDone = true

// TASK 2 - const variables

// a
const favoritebook = "the bad guys"
favoritebook = "nothing"
//const is not chanchable

// b
const birthYear = 2014

// c
const favroiteColour = "red and black"
console.log(favroiteColour)
//console.log will paste it into the console log

// d
const wordOne = "Hi, "
const wordTwo = "my "
const wordTree = "name "
const wordFour = "is "
const wordFive = "Eric "
let sentence = wordOne + ' ' + wordTwo + wordTree + wordFour + wordFive
console.log(sentence)

// e
const hometown = "Bandon"
let message = "I live in " + hometown
console.log(message)

const homeTown = "Cork"
let messageTown = `I live in ${homeTown}`
console.log(messageTown)

// use the following just for console log
const homeCountry = 'Ireland'
console.log('I live in ', homeCountry)

// f
const hungry = false
console.log(hungry)

// make a game where you feed billy and when he is full happy will be set to true
