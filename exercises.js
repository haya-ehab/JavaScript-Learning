// // street
// // city
// // zipCode
// // showAddress(address)

// // let address = {

// // street: 'a',
// // city: 'b',
// // zipCode: 'c'
// // };


// // function showAddress(address) {
// //     for (let key in address)
// //         console.log(address[key]);
// // }

// // showAddress(address);


// // let address = createAddress('a', 'b', 'c');

// // console.log(address);


// // factory function 

// function createAddress(street, city, zipCode) {

// return {

//     street,
//     city,
//     zipCode
// };

// }



// let address = createAddress('a', 'b', 'c');

// console.log(address);



// // Constructor Function

// function Address(street, city, zipCode) {

//  this.street = street;
//  this.city = city;
//  this.zipCode = zipCode;
    
// }


// Object Equality

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));


// Construction Function

function Address(street, city, zipCode) {

this.street = street;
this.city = city;
this.zipCode = zipCode;
}

function areEqual(address1, address2) {
return address1.street === address2.street &&
address1.city === address2.city &&
address1.zipCode === address2.zipCode;


}

function areSame(address1, address2) {
return address1 === address2;

}