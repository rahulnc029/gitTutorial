let age = 20;
const minAge = 18;
let eligible = minAge - age;
let result = (age >= minAge) ? "You are eligible to cast your Vote" : `Sorry you need to wait another ${eligible} years to Vote`;

console.log(result);

