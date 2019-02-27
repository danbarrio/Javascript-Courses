// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe'){
  //console.log('Hello);
  return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet('Steve', 'Smith'));


// FUNCTION EXPRESSIONS

const square = function(x = 3){
  return x*x;
};

console.log(square(8));

