// OOP
// Camel Notation
// pascal Notation

// const circle = {
// radius: 1,
// location: {
//     x: 1,
//     y: 1
// },
// isVisible: true,
// draw: function() {
//     console.log('draw');
// }
// };
// circle.draw(); 

// const circle2 = {
// radius: 1,
// location: {
//     x: 1,
//     y: 1
// },
// isVisible: true,
// draw: function() {
//     console.log('draw');
// }
// };
// circle.draw(); 

//  Factory Function

//  function createCircle(radius) {

// return {

// radius,
// draw() {

// console.log('draw');
// }
// };
//  }


//  const circle1 = createCircle(1);
//  console.log(circle1);

// const circle2 = createCircle(2);
// console.log(circle2);

// Constructor Function

// function Circle(radius) {
// this.radius = radius;
// this.draw = function() {
//     console.log('draw');
// }
// }


// const circle = new Circle(1);
// const x = {};


// cloning an object

const circle = {

    radius: 1,
    draw() {
        console.log('draw');
    }
};

// const another = {};

// for (let key in circle) 
//     another[key] = circle[key];
// console.log(another);
// or

// const another = Object.assign({}, circle);
// console.log(another);

// garbage collection 

// ----

// string primitive

// const message = 'This is my\n' + 
// '\'first\' message';
 
// // string object

// //  const another = new String('hi')

//  // template Literals

//  // object {}
//  // Boolean true, false
//  // string '', ""
//  // template ``

//  const another = `This is my 
//  first message`;

// date

// const now  = newDate();
// const date1 = newDate('June 20 2025 04:40 PM');

