// var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith'
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // Letters, numbers, _, $
// // Can not start with a number

// //Multi word vars
// var firstName = 'John'; // Camel case
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal case
// var firstname;

// LET
// let name
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith'
// console.log(name);

// CONST  (can not be re-assigned)
// const name = 'John';
// console.log(name);
// Can not reassign
// name = 'Sara';
// Have to assign a value
// const greeting;

// If an object is constructed with a const, parameter values within object can be changed, but can not re-declare the object itself (in this case: person)
const person = {
  name: 'John',
  age: 30
}

person.name = 'Sara'
person.age = 32;

console.log(person);
