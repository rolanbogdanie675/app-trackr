/* 
   Filename: complexProgram.js
   Description: This complex program performs a variety of tasks, including data manipulation, algorithmic calculations,
                and interactive user input/output. It showcases advanced JavaScript concepts and techniques.
*/

// Define a class representing a Person
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

// Instantiate some Person objects
const person1 = new Person("Alice", 28, "female");
const person2 = new Person("Bob", 35, "male");

// Define a function to perform Fibonacci sequence calculation up to a given number
function calculateFibonacci(limit) {
  const fibonacci = [0, 1];
  for (let i = 2; i <= limit; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }
  return fibonacci;
}

// Use the calculateFibonacci function with an example limit
const fibonacciArray = calculateFibonacci(10);

// Define a utility function to check if a number is prime
function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

// Use the isPrime function with some example numbers
console.log(`Is 13 prime? ${isPrime(13)}`);
console.log(`Is 21 prime? ${isPrime(21)}`);

// Simulate user input using the prompt() function
const name = prompt("Enter your name:");
console.log(`Welcome, ${name}!`);

// Create a map of programming languages and their popularity ratings
const languagePopularity = new Map();
languagePopularity.set("JavaScript", 98);
languagePopularity.set("Python", 90);
languagePopularity.set("Java", 82);

// Iterate over the map and display the popularity ratings
for (const [language, popularity] of languagePopularity) {
  console.log(`The popularity of ${language} is ${popularity}%`);
}

// Define an asynchronous function to simulate an API call
async function simulateAPICall() {
  console.log("Starting API call...");
  // Simulate delay with setTimeout
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("API call completed!");
}

// Execute the simulateAPICall function
simulateAPICall(); 

// ... (more complex code follows)