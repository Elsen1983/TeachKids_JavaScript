

/**
1. What are Conditional Statements?
Very often when you write code, you want the computer to make decisions for you. 
Conditional statements let you do this! 
They let you choose what happens based on different situations. 
In JavaScript, we have three forms of the if...else statement:

`if` statement: Use this to specify a block of code to be executed if a condition is true.
`else` statement: Use this to specify a block of code to be executed if the same condition is false.
`else if` statement: Use this to specify a new condition to test if the first condition is false.

2. The `if` Statement
Use the `if` statement to specify a block of JavaScript code to be executed if a condition is true.

Example:
Make a "Good day" greeting if the hour is less than 18:00:

let hour = 13;
if (hour < 18) {
  greeting = "Good day";
}

If `hour` is less than 18, then the greeting will be "Good day".

3. The `else` Statement
Use the `else` statement to specify a block of code to be executed if the condition is false.

 Example:
If the hour is less than 18, create a "Good day" greeting; otherwise, create a "Good evening":

let hour = 20;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

If `hour` is greater than or equal to 18, then the greeting will be "Good evening".

4. The `else if` Statement
Use the `else if` statement to specify a new condition if the first condition is false.

 Example:
If time is less than 10:00, create a "Good morning" greeting. 
If not, but time is less than 20:00, create a "Good day" greeting. 
Otherwise, create a "Good evening":

let time = 20;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

Depending on the value of `time`, the greeting changes.

5. Tasks

 Task 1 - `if` Statement
Check if a number is positive.
1. Declare a variable with a number.
2. Create a simple `if` statement that prints the message "The number is positive" if the number is greater than 0.
3. Test it with both a positive and a negative number.

 Task 2 - `if...else` Statement
Check if a number is positive or not.
1. Declare a variable with a number.
2. Create an `if...else` statement that prints "The number is positive" if the number is greater than 0, and "The number is either negative or 0" if it's not.
3. Test it with different numbers and explain what happens.

 Task 3 - `if...else if...else` Statement
Check if a number is positive, zero, or negative.
1. Declare a variable with a number.
2. Create an `if...else if...else` statement that prints "The number is positive" if the number is greater than 0, "The number is 0" if the number is 0, and "The number is negative" if it's less than 0.
3. Test it with positive, negative, and zero values.

 Task 4 - Pokémon Battle
Let's simulate a Pokémon battle!
1. Declare two variables for the Pokémon names.
2. Declare two variables for the health of the Pokémon.
3. Declare two variables for the attack power of the Pokémon.
4. Use a random number generator to decide which Pokémon starts the fight (`0` means the first Pokémon is faster, `1` means the second Pokémon starts).
5. Create an `if...else` statement to print which Pokémon goes first.

 Task 5 - Weather Decision
1. Declare a variable called `weather` and give it a value like "sunny", "rainy", or "cloudy".
2. Use an `if...else if...else` statement to print different activities based on the weather (e.g., "Go for a walk" if it's sunny, "Stay inside" if it's rainy, etc.).

 Task 6 - Favorite Number Guessing Game
1. Declare a variable with your favorite number.
2. Ask the user (using `prompt()`) to guess your favorite number.
3. Use an `if...else if...else` statement to tell the user if they guessed too high, too low, or got it right!
 */


