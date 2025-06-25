// const numbers = [3, 4]


// // End
// numbers.push(5, 6);

// console.log(numbers);

// // Begginning
// numbers.unshift(1, 2);

// console.log(numebrs);

// // Middle

// numbers.splice(2, 0, 'a', 'b');

// console.log(numbers);

// Finding Elements (Primitives)

// const numbers = [1, 2, 3, 4];

// console.log(numbers.indexOf('1'));

// Finding Elements (Ref Types)

// const courses = [
//     { id: 1, name: 'a'},
//     { id: 2, name: 'b'},
// ];

//  const course = courses.find(function() {

// return course.name === 'a';
// });


// removing elements

// const numbers = [1, 2, 3, 4];

// end
// const last = numbers.pop();
//  beginning
// const first = numbers.shift();
//  middle
// numbers.splice(2, 1);
// console.log(numbers);

// Emptying an Array
// let numbers = [1, 2, 3, 4];
// const another = [1, 2, 3, 4];

// Solution 1 (rec)

// numbers = [];

// solution 2 (rec)
// numbers.length = 0;


// solution 3 
// numbers.splice(0, numbers.length);

// solution 4 (not recomended)
// while (numbers.length > 0)
//     numbers.pop();

// console.log(numbers);
// console.log(another);



// Combining and Slicing Arrays
// const first = [1, 2, 3];
// const second = [4, 5, 6];




//  const combined = first.concat(second);
//  const slice = combined.slice(2, 4);


// console.log(combined);

// The Spread Operator

// const first = [1, 2, 3,];
// const second = [4, 5, 6];

// const combined = first.concat(second);

// const slice = combined.slice();

// Iterating an Array

// const numbers = [1, 2, 3];

//  for ( let number of numbers)

// console.log(number);

// Joining Arrays

// const numbers = [1, 2, 3];
// const joined = numbers.join(', ');
// console.log(joined);

// const message = 'this is my first message';
// const parts = message.split('');
// console.log(parts);

// Sorting Arrays

// const numbers = [2, 3, 1];
// numbers.sort();
// console.log(numbers);

// const courses = [

// { id: 1, name: 'node.js'},
// { id: 2, name: 'react.js'},
// ];

// courses.sort(function(a, b) {

//     // a < b => -1
//     // a > b => 1
//     // a === b => 0
    
//     if (a.name < b.name) return -1;
//     if (a.name > b.name) return 1;
//     else return 0;
// });

// console.log(courses);

// Testing the Elements of an Array

// const numbers = [1, 2, 3];

// const allPositive = numbers.every(function(value) {
//     return value >= 0;
// });

// console.log(allPositive);


// Filtering an Array

// const numbers = [1, -1, 2, 3,];

// const filtered = numbers.filter(function(value)  {

// return value >= 0;



// });

// console.log(filtered);


// Mapping an Array

// const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(n => n >= 0);

// const item = filtered.map(n => '<li>' + n + '</li>');

// const html = '<ul>' + items.join('') + '</ul>';


// console.log(html);

// Reducing An Array 

const numbers = [1, -1, 2, 3];

console.log(sum);

const sum = numbers.reduce((accumaltor, currentValue) => {
    return accumaltor + currentValue;

}, 0);

console.log(sum);
