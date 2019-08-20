// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.
const items1 = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

parentFunc = arr => {
  upperCase = arr1 => {
    let newArr = arr1.map(e => e.toUpperCase());
    return newArr;
  }
  return upperCase(arr);
}

console.log(parentFunc(items1));


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  let count = 0;
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  const counter = () => {
    count++;
    return count; // doesn't work when I console.log(myCounter());
    // console.log(count) works when I just call myCounter();
  }
  // 3- Return the `counter` function.
  return counter();
};
// Example usage: 
const myCounter = counterMaker();
console.log(myCounter()); // 1
myCounter(); // 2 ---- doesn't log/stays at 1

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  let count = 0;
  // `increment` should increment a counter variable in closure scope and return it.
  increment = () => {
    count++;
    return count;
  }
  // `decrement` should decrement the counter variable and return it.
  decrement = () => {
    count--;
    return count;
  }
};
