//  Function Declarations vs Expressions

// Function Declartion

// function walk() {

//     console.log('walk');

// }

// Function Expression
// let or const
// let run = function() {
//     console.log('run');
// };


// Hoisting
// What is Hoisting? 
// Hoisting is moving the function to the top of the file

// Arguments

// function sum() {

//     let total = 0;
//     for (let value of arguments)
//         total += value;
//     return total;
// }

// console.log(sum(1, 2, 3, 4, 5, 10));


// The Rest Operator

// function sum(discount, ...prices) {
//     let total = 0;

//      return args.reduce((a, b) => a + b);

// }

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Default Parameters

// function interest(principal, rate, years) {

//     rate = rate || 3.5;
//     years = years || 5;
//     return principal * rate / 100 * years;
// }

// console.log(interest(1000));

// Getters and Setters

// const person = {

//     firstname: 'Haya',
//     lastname: 'Ehab',
//     get fullName() {
//         return `${person.firstname} ${person.lastname}`

//     },
//     set fullName(value) {
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.firstName = parts[1];
//     }
// };


// person.fullName = 'John Smith';

// // getters => access properties
// // setters => changes or mutate them

// console.log(person);


// Try and Catch

// const person = {
//     firstNmae: 'Haya',
//     lastName: 'Ehab',
//     set fullName(value) {
//         if (typeof value !== 'string') return;

//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// try {

//     person.fullName = '';
// }

// catch (e) {
//     alert(e);
// }


// console.log(person);


// Local vs Global Scope

// GLobal Scope means: this code can be accessible everywhere
// Local Scope means: Only accessible inside that function or block.

// Global Scope
// const color = 'red';

// function start() {
//     const message = 'hi';
//     // Local Scope
//     const color = 'blue';
//     console.log(color);
// }

// function stop() {
//     const message = 'bye';
// }

// start()

// Let vs Var 
// Var: Function-Scoped Works. only inside a Function.
// Let: Block-Scoped. Works only inside a {} Block.

// function start() {
//     for (var i = 0; i < 5; i++) {
//         if (true) {
//             var color = 'red';
//         }
//     }
//     console.log(color);
// }

// start();

// The This Keyword

// method -> obj

// const video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     }
// };
// video.stop = function() {
//     console.log(this);
// };
// video.stop();

// // function -> global (window, global)

// const video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     }
// };

// function Video(title) {
//     this.title = title;
//     console.log(this);
// }

// const v = new Video('b'); // {}

//  Changing This

// function playVideo() {
//     console.log(this);
// }

// playVideo.call({ name: 'Haya'}, 1, 2, 3);
// playVideo.apply({ name: 'Haya'});
// playVideo.bind({ name: 'Haya'})
// playVideo();