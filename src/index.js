console.log('module 04.2');

// ---- map ----
// const numbers = [1, 2, 3];

// console.log(numbers.map((item) => item * 2));
// console.log(numbers.map((item) => item * 3));
// console.log(numbers.map((item) => `<div>${item}</div>`));

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Ківі', score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// console.log(students.map((item) => item.name));
// console.log(students.map((item) => item.score));

// ---- flatMap -----
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(arr.flatMap((item) => item));

// ---- filter -----
// const values = [51, -3, 27, 21, -68, 42, -37];

// console.log(values.filter((item) => item > 0));
// console.log(values.filter((item) => item < 0));

// ----- find -----
// const values = [51, -3, 27, 21, -68, 42, -37];

// console.log(values.find((item) => item > 0));
// console.log(values.find((item) => item < 0));
// console.log(values.find((item) => item > 100)); // undefined

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Ківі', score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// console.log(students.find((student) => student.score === 94));

// ----- findIndex -----
// const values = [51, -3, 27, 21, -68, 42, -37];

// console.log(values.findIndex((item) => item > 20)); // 0
// console.log(values.findIndex((item) => item < -10)); // 4

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 },
//   { name: 'Аякс', score: 37 }, // 2
//   { name: 'Ківі', score: 94 },
//   { name: "Х'юстон", score: 64 }, // 4
// ];

// console.log(students.findIndex((student) => student.name === 'Аякс'));
// console.log(students.findIndex((student) => student.score === 64));

// ----- every -----
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Ківі', score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// console.log(students.every((student) => student.score > 10));
// console.log(students.every((student) => student.score > 30));
// console.log(students.every((student) => student.score > 50));

// ----- some -----
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Ківі', score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// console.log(students.some((student) => student.score > 10));
// console.log(students.some((student) => student.score > 30));
// console.log(students.some((student) => student.score > 50));
// console.log(students.some((student) => student.score > 95));

// ----- reduce -----
// const numbers = [2, 7, 3, 14, 6];

// const sum = numbers.reduce((acc, value) => {
//   acc += value;

//   return acc;
// }, 0);
// console.log(sum);

// const min = numbers.reduce((acc, value) => {
//   if (value < acc) {
//     acc = value;
//   }

//   return acc;
// });
// console.log(min);

// const max = numbers.reduce((acc, value) => {
//   if (value > acc) {
//     acc = value;
//   }

//   return acc;
// });
// console.log(max);

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Ківі', score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const scoreSum = students.reduce((acc, student) => {
//   acc += student.score;

//   return acc;
// }, 0);
// console.log(scoreSum);

// // sum
// let sum = 0;
// numbers.forEach((value) => (sum += value));
// console.log(sum);

// // min
// let min = numbers[0];

// numbers.forEach((value) => {
//   if (value < min) {
//     min = value;
//   }
// });

// console.log(min);

// // max
// let max = numbers[0];

// numbers.forEach((value) => {
//   if (value > max) {
//     max = value;
//   }
// });

// console.log(max);

// ----- sort -----
// const numbers = [3, 1, 12, 4, 2, 5, 10, 6, 0, 8, 20, 7, 11, 30, 9];
// numbers.sort((a, b) => b - a);

// console.log(numbers);

// const names = [
//   { name: 'Bobby', age: 20 },
//   { name: 'Andris', age: 13 },
//   { name: 'Nandor', age: 16 },
// ];

// names.sort((a, b) => a.name.localeCompare(b.name));

// console.log(names);

// ----- chaining -----
// const names = [
//   { name: 'Bobby', age: 20 },
//   { name: 'Andris', age: 13 },
//   { name: 'Nandor', age: 16 },
//   { name: 'Ándris', age: 13 },
//   { name: 'apple', age: 13 },
//   { name: 'ape', age: 13 },
//   { name: 'Cecil', age: 13 },
//   { name: 'Csaba', age: 13 },
// ]
//   .sort((a, b) => a.name.localeCompare(b.name))
//   .map((user) => user.name)
//   .reverse()
//   .join(', ');

// console.log(names);

// ----- map ------
const users = [
  { name: 'Bobby', age: 20 },
  { name: 'Andris', age: 13 },
  { name: 'Nandor', age: 16 },
  { name: 'Ándris', age: 13 },
  { name: 'apple', age: 13 },
  { name: 'ape', age: 13 },
  { name: 'Cecil', age: 13 },
  { name: 'Csaba', age: 13 },
];

const updatedAges = users.map((user) => {
  const newUser = {
    ...user,
    age: user.age + 1,
  };

  return newUser;
});

console.log(updatedAges);
