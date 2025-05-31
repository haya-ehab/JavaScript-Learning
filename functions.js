// // Fuction Declarations vs Expressions

// function sayHi() {

//     console.log('Hi');
// }
// sayHi();

// let sayHi = function(){

//     console.log('Hi');
// };

// sayHi();

// hoisting
// function add(num1, num2) {
//     console.log(num1 + num2);
// }
// add(2, 2); 

// Function Arguments

// function multiply(num1, num2) {

//     return num1 * num2;
// }
// console.log(multiply(2, 2) );

// The Rset Operator

// let course = {

//     name: 'JavaScript for begs'
// , duration: '3 hours'

// };

// let newCourse = {...course};
// console.log(newCourse);

// function multiply(...args){

//     return args.reduce((accumulator, currentValue) => accumulator * currentValue, 1)

// }

// console.log( multiply(1, 2, 3, 4) );

// function multiply(multiplier, ...numebrs) {

//     return numebrs.map(number => number * multiplier);
// }

// console.log(multiply(2, 1, 2, 3, 4) );

//Defualt Parameters

// function writeCode(language) {
// console.log(`Write code in ${language}`)
// }

// writeCode('JavaScript');

// function createUser(name, role = 'guest', status = 'active') {

//     console.log(`User: ${name}, Role: ${role}, Status: ${status}`);
// }

// createUser('Haya');
// createUser('Steven', 'admin', 'active' );

// Getters and Setters

// const course = {

// name: 'JavaScript for begs',
// duration: '3 Hours'
// }

// console.log(`${course.name} is ${course.duration}`)

// // Local vs Global Scope
// {
// const name = 'steven';
// }
// console.log(name);

// Let vs Var

// function display() {
//     for (var i = 0; i < 5; i++) {
//    console.log(i);
//     }
//     console.log(i);
// }
 
// display();

// The 'this' keyword

// const course = { 
// name: 'JavaScript for begs',
// start() {
//     console.log(this.name);
// }

// }

// course.start();

// function startVideo() {
//     console.log(this);
// }

// startVideo();