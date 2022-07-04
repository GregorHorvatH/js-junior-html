console.log('module 02.1');

// const num1 = [1, 2, 3, 4, 5];
// const num2 = num1;

// console.log('--- before ---');
// console.log(num1);
// console.log(num2);

// num2[0] = 10;
// console.log('--- after ---');
// console.log(num1);
// console.log(num2);

// ====== example ======
// const text = 'Hello'; // olleH
// const reversedText = text.split('').reverse().join('');

// console.log(reversedText);

// ==== push / pop ====
// const num1 = [1, 2, 3, 4, 5];
// console.log(num1);

// num1.push(2345);
// console.log(num1);

// console.log(num1.pop());
// console.log(num1);

// console.log(num1.shift());
// console.log(num1);

// ==== concat ====
// const num1 = [1, 2, 3];
// const num2 = [4, 5];

// console.log(num1);
// console.log(num2);

// // const num3 = num1.concat(num2);
// const num3 = [...num1, ...num2];
// console.log(num3);

// ==== splice - delete ====
// const num1 = [1, 2, 3, 4, 5];

// num1.splice(1, 3);
// console.log(num1);

// ==== splice - insert ====
//                   3.5
// const num1 = [1, 2, 3, 4, 5];

// num1.splice(3, 0, 3.5, 3.6, 3.7, 3.8, 3.9);
// console.log(num1);

// ==== splice - change/update ====
//                     7
// const num1 = [1, 2, 3, 4, 5];

// num1.splice(3, 1, 7);
// console.log(num1);

// Example 1 - Базовые операции с массивом
// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggy» в начало массива.

// const genres = ['Jazz', 'Blues'];
// genres.push('Rock&Roll');
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift());
// genres.unshift('Country', 'Reggae');

// console.log(genres);

// Example 2 - Массивы и строки
// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых хранятся в переменной values в виде строки. Значения гарантированно разделены пробелом.

// const values = '8 11';
// const numbers = values.split(' ');
// // const a = numbers[0];
// // const b = numbers[1];
// const [a, b] = numbers;
// const s = a * b;

// console.log(s);

// Example 3 - Перебор массива
// Напиши скрипт для перебора массива fruits циклом for. Для каждого элемента массива выведи в консоль строку в формате номер_элемента: значение_элемента. Нумерация элементов должна начинаться с 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// Example 4 - Массивы и циклы
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

// Example 5 - Массивы и строки
// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего. Результирующая строка не должна начинаться или заканчиваться пробельным символом. Скрипт должен работать для любой строки.

// const string = 'Welcome to the future';
// const arr = string.split(' ');
// arr.shift();
// arr.pop();
// const text = arr.join(' ');

// console.log(text);

// Example 6 - Массивы и строки
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

// const string = 'Welcome to the future';
// // const reversed = string.split('').reverse().join('');
// const arr = string.split('');
// const newArr = [];
// // let reversed = '';

// // for (let i = arr.length - 1; i >= 0; i -= 1) {
// //   reversed += arr[i];
// // }

// for (const letter of arr) {
//   // reversed = letter + reversed;
//   newArr.unshift(letter);
// }

// const reversed = newArr.join('');
// console.log(reversed);

// Example 7 - Сортировка массива с циклом
// Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.

// const numbers = [2, 1, 3, 5, 4];

// for (let x = 0; x < numbers.length - 1; x += 1) {
//   console.log('----');
//   console.log('x:', numbers[x]);

//   for (let y = x + 1; y < numbers.length; y += 1) {
//     console.log('y:', numbers[y]);

//     if (numbers[x] > numbers[y]) {
//       const tmp = numbers[x]; // 2

//       numbers[x] = numbers[y]; // 1 = 1
//       numbers[y] = tmp;
//     }
//   }
// }

// console.log(numbers);

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// for (let x = 0; x < langs.length - 1; x += 1) {
//   console.log('----');
//   console.log('x:', langs[x]);

//   for (let y = x + 1; y < langs.length; y += 1) {
//     console.log('y:', langs[y]);

//     if (langs[x].slice(0, 1) > langs[y].slice(0, 1)) {
//       const tmp = langs[x]; // 2

//       langs[x] = langs[y]; // 1 = 1
//       langs[y] = tmp;
//     }
//   }
// }

// console.log(langs);

// Example 8 - Поиск элемента
// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для любого массива чисел. Используй цикл для решения задачи.

// const numbers = [17, 2, 94, 1, 23, -5, 37];
// let min = numbers[0]; // 17
// let max = numbers[0];

// for (const number of numbers) {
//   if (number < min) {
//     min = number; // 1
//   }

//   if (number > max) {
//     max = number; // 94
//   }
// }

// console.log(min); // 1
// console.log(max); // 1
