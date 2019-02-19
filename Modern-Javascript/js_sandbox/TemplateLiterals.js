const name = 'John';
const age = 31;
const job = 'Web Developer';
const city = 'Miami';
let html;

// Without Template Strings (es5) OLD WAY
html = '<ul><li>Name: ' + name + '</li><li> ' + age + ' </li><li> ' + job + '</li><li> ' + city + '</li></ul>';

html = '<ul>' +
       '<li>Name: ' + name + '</li>' +
       '<li>Age: ' + age + '</li>' +
       '<li>Job: ' + job + '</li>' +
       '<li>City: ' + city + '</li>' +
       '</ul>';

function hello(){
  return 'hello';
}


// With Template Strings AKA Template Literals (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2+2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;