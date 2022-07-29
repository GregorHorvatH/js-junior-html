console.log('module 03.2');

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроїд', price: 400, quantity: 7 },
//   { name: 'Захоплення', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   const result = [];

//   for (const obj of arr) {
//     if (prop in obj) {
//       result.push(obj[prop]);
//     }
//   }

//   return result;
// };

// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

// ----- callback function ------
// function fn1(callback) {
//   console.log('hello');

//   callback();
// }

// function fn2() {
//   console.log('world');
// }

// function fn3() {
//   console.log('Nandor');
// }

// fn1(fn2);
// fn1(fn3);

// ------ map -------
// const numbers = [1, 2, 3];

// const map = (arr, callback) => {
//   const res = [];

//   arr.forEach((item) => {
//     res.push(callback(item));
//   });

//   return res;
// };

// console.log(map(numbers, (number) => number * 2)); // [2, 4, 6]
// console.log(map(numbers, (number) => number * 3)); // [3, 6, 9]
// console.log(map(numbers, (number) => number * 4)); // [4, 8, 12]
// console.log(map(numbers, (item) => item * 10)); // [10, 20, 30]

// console.log(map(['Bobby', 'Peter', 'Chris'], (name) => name.toUpperCase()));
// console.log(map(['Bobby', 'Peter', 'Chris'], (name) => name.toLowerCase()));

// ------ filter -------
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filter = (items, callback) => {
//   const res = [];

//   items.forEach((item) => {
//     if (callback(item)) {
//       res.push(item);
//     }
//   });

//   return res;
// };

// console.log(filter(numbers, (number) => number < 4));
// console.log(filter(numbers, (number) => number > 5));
// console.log(filter(numbers, (number) => number > 4 && number < 8));

// console.log(filter(['Bobby', 'Peter', 'Chris'], (name) => name.includes('e')));
// console.log(
//   filter(['Bobby', 'Peter', 'Chris', 'Elemer'], (name) => name.includes('e'))
// );

// ----- find -----
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const users = [
//   { name: 'Bobby', age: 12, eye: 'blue' },
//   { name: 'Chris', age: 20, eye: 'brown' },
//   { name: 'Peter', age: 25, eye: 'green' },
// ];

// const find = (items, callback) => {
//   for (const item of items) {
//     if (callback(item)) return item;
//   }
// };

// console.log(find(numbers, (number) => number > 4));
// console.log(find(numbers, (number) => number === 6));
// console.log(find(numbers, (number) => number === 12));

// console.log(find(users, (user) => user.name === 'Bobby'));
// console.log(find(users, (user) => user.eye === 'green'));
// console.log(find(users, (user) => user.dgdf === 'dfgfg'));
