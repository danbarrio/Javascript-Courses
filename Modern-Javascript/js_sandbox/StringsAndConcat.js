const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append 
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('l');
// from right to left
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt(2);
// get last char even if string changes
val = firstName.charAt(firstName.length - 1)

// substring()  pull a section from a string
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
// start from the end and get the last 3 characters
val = firstName.slice(-3);

// split   splits each item of string into an array element
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Brad', 'Jack');

// includes()   checks whether string contains value and returns TRUE or FALSE
val = str.includes('foo');

console.log(val);