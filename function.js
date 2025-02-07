// function addNum(num) {
//     return num;
// }

// let res = addNum();
// console.log(res);
// console.log(addNum(5));
// console.log(addNum());
// console.log(addNum);

// function toCelsius(fahrenheit) {
//     return (5/9) * (fahrenheit-32);
//   }
  
//   let value = toCelsius();
//   console.log(value);


//   console.log(undefined / 10);
//   console.log(NaN !== NaN);
//   console.log(true + "1" + true);
//   console.log(true + true);
  
//   console.log(true - false);
//   console.log("5" + 1);
//   console.log(undefined + "Hi");
//   console.log(undefined);
//   console.log(null + undefined);



// let x = null;
// console.log(x);



//1. Write a function greet(name) that takes a name as an argument and returns a greeting string, e.g., "Hello, [name]!"

function greet(name) {
    return `Hello ${name}!`;
}

console.log(greet("Rahul"));


// 2. Write a function add(a, b) that takes two numbers as arguments and returns their sum.

function add(a, b) {
    return a+b;
}
console.log(add(2,3));


// 3. Write a function calculateArea(length, width) that calculates and returns the area of a rectangle.

function calculateArea(length, width) {
    return `Area of a Rectangle ${length*width}`;
}
console.log(calculateArea(5,2));

// 4. Define a function expression multiply(a, b) that takes two numbers as arguments and returns their product.


  const multiply = function(a, b) {
    return a*b;
  }
  console.log(multiply(3,2));


//   5. Create an anonymous function that takes an array of numbers and returns the sum of all the numbers

const arrNum = function(num){
    // console.log(num);
    let sum = 0;
    for(let arr of num){
         sum += arr;
    }
    return sum;
}

let num = [1,2,3,4,5];
console.log(arrNum(num));


// 6. Write a function multiplyNumbers(a, b = 1) that multiplies two numbers. If the second argument is not provided, use 1 as the default value.

function multiplyNumbers(a, b=1) {
    return a*b;
}
console.log(multiplyNumbers(3));


// 7. Write a function sum(...numbers) that takes any number of arguments and returns the sum of those arguments.

function sum(...numbers) {
    let total = 0;
    for(let n of numbers){
         total += n;
    }
    return total;
}

let numArr = [1,2,3,4,5];
console.log(sum(...numArr));
console.log(sum(1, 2, 3, 4, 5));


// 8. Write a function reverseArray(arr) that returns a new array with the elements of arr in reverse order.

function reverseArray(arr) {
    
    // console.log(arr.split("").reverse().join());
    console.log(arr.reverse());
    
}
reverseArray([1,2,3,4,5]);
// reverseArray("Rahul");


// 9. Explain and demonstrate the behavior of hoisting with function declarations vs. function expressions. 
// What happens when you call a function before it’s declared?

// hoisting with function declarations

// function declaration is fully hoisted, meaning you can call it before its actual definition in the code.
greeet(); // Hello...
function greeet() {
    console.log("Hello...");
}


// Hoisting with function Expression.

sayHello(); // Cannot access 'sayHello' before initialization
const sayHello = function(){
    console.log("Say Hello...");
}




  
  
  
  
  
  
  
  
  