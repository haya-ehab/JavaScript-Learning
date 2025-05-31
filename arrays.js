// // Adding Elements
// const numbers = [5, 4, 3, 2, 1];

// //numbers.push(7, 8, 9,);
// //console.log(numbers);

// //numbers.unshift(25);
// //console.log(numbers);

// // numbers.splice(1, 0, 25, 24,);
// // console.log(numbers);
//   // finding Elements (Ref Types)

//   const employees = [
//   {


//     id: 1,
//     name: 'Alice'
//  },
//   {

//     id: 2,
//    name: 'Haya'
//  },
//  {
//      id: 3,
//    name: 'Ehab'
//  },

//   ];

// //   const employee = employees.find(function(e) {
// // return e.name === 'James'
// //   });

//  const employee = employees.find((e) => e.name === 'James');
    
// //   function add(num1, num2) {

// //     return num1 + num2;
// //   }

//   const add = (num1, num2) => {

//     return num1 + num2;

//   }


// Removing Elements


// const numbers = [1, 2, 3, 4, 5];

// const LastElement = numbers.pop();
// console.log(`lastElement: ${LastElement}`);

// const firstElement = numbers.shift();
// console.log(`firstElement:${firstElement}`);

// Emptying an Array

// const numbers = [1, 2, 3, 4, 5];

// let numbers = [1, 2, 3, 4, 5];
// let anotherArray = numbers;

// // while (numbers.length > 0)
// //   numbers.pop();

// // numbers.length = 0;
// // console.log(numbers);

// // const deletedNumbers = numbers.splice(0, numbers.length);
// // console.log(`deletedNumbers: ${deletedNumbers}`);

// numbers = [];

// Combining  and Slicing Arrays

// const exampleNumbersA = [1, 2, 3,];
// const exampleNumbersB = [4, 5, 6,];

// const combinedArray = exampleNumbersA.concat(exampleNumbersB);
// console.log(combinedArray);

// const firstSlice = combinedArray.slice(0 ,4);


// Spread Operator 

// const exampleNumbersA = [1, 2, 3,];
// const exampleNumbersB = [4, 5, 6,];

// let combined = [...exampleNumbersA, ...exampleNumbersB];
// console.log(combined);

// //Iterating an Array 

// const numbers = [1, 2, 3, 4, 5];

// // for (let number of numbers)
// //   console.log(number);

// numbers.forEach((number) => {
//     console.log(number);
// });

//Joining Arrays

// const numbers = [1, 2, 3, 4, 5];
// const joinedNumbers = numbers.join(', ');
// console.log(joinedNumbers);


// const courseName = 'JavaScript for Begs';

// // const parts = courseName.split(' ');
// // const urlSlug = parts.join('-');



// console.log(urlSlug);


// Sorting Arrays
// let characters = ['c', 'd', 'b', 'a'];

//  characters.sort();
// console.log(characters);

// let employees = [

//     {id:1, name: 'haya' },
//     {id:2, name: 'seif' },
//     {id:3, name: 'martin' },
//     {id:4, name: 'gihan' },
//     {id:5, name: 'ehab' },

// ];

// employees.sort((a, b) => {

// const lowercaseA = a.name.toLowerCase();
// const lowercaseB = b.name.toLowerCase();

// if (lowercaseA < lowercaseB) return -1;
// if (lowercaseA > lowercaseB) return 1;
// return 0;

// });
// console.log(employees);
 
// testing the elements of an array

// const numbers = [2, 4, 6, 8, 10];

// const areAllEven = numbers.every(number => { return number % 2 === 0 

// });
// console.log(`areAllEven: ${areAllEven}`);

// Filtering an Array 

//const numbers =  [1, 2, 3, 4, 5, 6];

// const employees = [

// { id: 1, name:'haya', role:'Dev'},
// { id: 2, name:'ehab', role:'Dev'},
// { id: 3, name:'gihan', role:'Dev'},
// { id: 4, name:'seif', role:'Dev'},
// { id: 5, name:'aboud', role:'Dev'},

// ];

// const developers = employees.filter(employee => employee.role === 'Dev');
// console.log(developers);



// Mapping an Array
// was too lazy to continue and write code at that moment

// //Joining Arrays again by mistake

// // const numbers = [1, 2, 3, 4, 5];
// // const joinedNumbers = numbers.join(', ');
// // console.log(joinedNumbers);

// const courseName = 'JavaScript for Begs';
// const parts = courseName.split(' ');
// console.log(parts);


// Reducing an Array

// const numebrs = [1, 10, 5, 14];
// // let sum = 0;
// //for (const num of numbers)
// // sum += num;
// // console.log( Total sum: $(sum));

// const sum = numebrs.reduce((accumulator, currentValue)=> {
//     return accumulator + currentValue;
// }, 0);
// console.log(`Total sum: ${sum}`);


//