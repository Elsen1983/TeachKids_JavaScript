

/**
--------------
THEORY Part
--------------
1. What are Complex Data Types?
In JavaScript, we have data types that can store more than one value. These are called complex data types. 
The most important complex data types are arrays and objects. Let's learn what they are and how we can use them!

2. Arrays
An array is like a special box that can hold many items inside. 
These items can be numbers, words, or even a mix of different types. We use arrays when we want to keep many things together in one place.

Example of an Array:
let favoriteGames = ["Minecraft", "Fortnite", "Mario Kart"];  // This is an array

In this example, we have an array called `favoriteGames`. It contains three items: "Minecraft", "Fortnite", and "Mario Kart". 
Arrays are useful because we can put many values inside them and access them one by one.

How to Use Arrays:
To get an item from an array, we use its index. The index is the position of the item in the array, and it starts from `0`.

console.log(favoriteGames[0]);  // This will print "Minecraft"
console.log(favoriteGames[2]);  // This will print "Mario Kart"

You can also add items to an array:
favoriteGames.push("Zelda");  // Adds "Zelda" to the end of the array

3. Objects
An object is like a box that can hold different types of information about something. Think of it as a way to store many properties about one thing, like details about your pet or a book.

Example of an Object:
let pet = {
    name: "Buddy",
    type: "dog",
    age: 3
};

In this example, we have an object called `pet` that has three properties: `name`, `type`, and `age`. Each property has a value: the name is "Buddy", the type is "dog", and the age is `3`.

How to Use Objects:
To get a value from an object, we use the dot notation:

console.log(pet.name);  // This will print "Buddy"
console.log(pet.age);   // This will print "3"

You can also change a value inside an object:
pet.age = 4;  // Changes the age to 4

4. Other Complex Data Types
Null: This is a value that represents "nothing" or "empty". We use `null` when we want to say that a variable doesn't have a value yet.
Undefined: When we create a variable but don't give it a value, it is `undefined`. This means it has no value assigned to it yet.
Function: A function is like a set of instructions that you can use again and again. It's a bit more advanced, but think of it as a way to tell the computer to do something for you.


5. Tasks

Tasks for Arrays:
1. Create an array called `favoriteFoods` with three of your favorite foods. Print the first item in the array.
2. Add a new food to your `favoriteFoods` array using the `.push()` method.
3. Create an array called `numbers` with three different numbers. Add the first and second numbers together and print the result.

Tasks for Objects:
1. Create an object called `book` that has properties for `title`, `author`, and `pages`. Fill in the values with your favorite book's details.
2. Print the `title` of the `book` object to the console.
3. Change the number of `pages` in the `book` object and print the new value.

Bonus Task for Fun:
1. Create an object called `player` with properties for `name`, `score`, and `level`. Create an array called `games` that holds different game names. 
Then add the `games` array to the `player` object as a new property called `favoriteGames`. Print the player's name and their favorite games to the console.
* */ 

// TASK for ARRAYS


// TASK for Objects


// Bonus TASK
