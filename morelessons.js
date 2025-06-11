// if customer has more than 100 points,
// they are gold customer otherwise,
// they are silver customer

// let points = 90;
// let type = points  > 100 ? 'gold' : 'silver';


// console.log(type);



// let a = 'red';
// let b = 'blue';

// let c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);

// hour 
// if hour is between 6am and 12pm :good morning!
//if hour is between 12pm and 6pm: good afternoon !
// otherwise: good evening!

// if - else

// // if (condition) {

// statement
// }

// else if (anothercondition) {

//     statement
// }

// else if (yetanothercondition)
//     statement
// else 
// statement


// let hour = 10;
// if (hour >= 6 && hour < 12) {
//     console.log('good morning!');
// }

// else if (hour >= 12 && hour <6) {

//     console.log('good afternoon!');
// }

// else  
// console.log('good evening!');

// switch - case

// let role = 'mod';

// switch (role) {
//     case 'guest':
//         console.log('guest user');
//         break;


// case 'mod':

// console.log('mod user');
// break;

// default:
//     console.log('unknown user');
// }

// same but using if - else

// let role = 'mod'
// if (role === 'guest') {

//     console.log('hi guest user');
// }

// else if (role === 'mod') {

//     console.log('hi mod user');
// }

// else 
// console.log('hi unknown user');

// loops

// for (let i = 0; i <= 10; i++) {

//     console.log('Hello User', i);
// }


// for (let i = 1; i <= 5; i++) {

// if (i % 10 !== 0) console.log(i);

// }

// // while 
// // هنعمل نفس الكلام الي عملناه في اللوبس بس بالوايل

// let i = 0;
// while (1 <= 5) { 

// if (i % 2 !== 0) console.log(i);
// i++; }


// }


// do .. while 

// let i = 0;
// do {

// if (i % 2 !== 0) console.log(i);
// i++;
// }
// while (i <= 5);

// for
// while
// do-while

//for-in 

// const person = {
//     name: 'haya',
//     age: 16
// };

// for (let key in person)
//     console.log(key, person[key]);
// const colors = ['red', 'green', 'blue'];

// for (let index in colors)
//     console.log(index);''

// for..of

 
// break and continue

// let i = 0;
// while (i <= 10) {

// if (i === 5) break;
// console.log(i);
// i++;


// }


// exercise

// write a function that takes two numbers
// and returns the max of the two


let number = max(1, 2);
console.log(number);
function max(a, b) {

if (a > b ) return a;
else return b;

}
