// // ===== scope =====
// const global = 'global';

// if (true) {
//   const blockA = 'block A';

//   // Бачимо глобальну + локальну A
//   console.log(global); // 'global'
//   console.log(blockA); // block A

//   // Змінні blockB і blockC не знайдені в доступних областях видимості.
//   // Буде помилка звернення до змінної.
//   // console.log(blockB); // ReferenceError: blockB is not defined
//   // console.log(blockC); // ReferenceError: blockC is not defined

//   if (true) {
//     const global = 'global B';
//     const blockB = 'block B';

//     // Бачимо глобальну + зовнішню A + локальну B
//     console.log(global); // global
//     console.log(blockA); // block A
//     console.log(blockB); // block B

//     // Змінна blockC не знайдена в доступних областях видимості.
//     // Буде помилка звернення до змінної.
//     // console.log(blockC); // ReferenceError: blockC is not defined
//   }
// }

// console.log(blockA); // block A

// ==== for ====
// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// ==== while ====
// let i = 0;

// while (i < 5) {
//   console.log(i);
//   i += 2;
// }

// ==== do while ====
// let i = 10;

// do {
//   console.log(i);
//   i += 2;
// } while (i < 5);

// let i = 1;

// console.log((i = i + 1)); // 2
// console.log((i += 1)); // 3
// console.log(i++); // 3 - post-increment
// console.log(i); // 4
// console.log(++i); // 5 - pre-increment

// ==== break ====
// i = i + 1; i += 1
// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     console.log('find!', i);
//     break;
//   }

//   console.log(i);
// }

// ===== continue =====
// for (let i = 0; i < 10; i++) {
//   if (i % 2 !== 0) {
//     console.log('wrong:', i);
//     continue;
//   }

//   console.log('find!', i);
// }

// ====== GAME - guess the number ======
// const x = Math.floor(Math.random() * 100) + 1;
// let counter = 0;
// let userInput;
// // console.log(x);

// do {
//   userInput = Number(prompt('Enter your number'));
//   counter++;

//   if (x < userInput) {
//     console.log('<');
//   } else if (x > userInput) {
//     console.log('>');
//   }
// } while (x !== userInput);

// console.log('Hurray!', counter);

// ===== ternary if =======
// const x = 5;

// if (x === 5) {
//   console.log('hello');
// } else {
//   console.log('bye');
// }

// console.log(x === 5 ? 'hello' : 'bye');

// Example 1 - Ввод пользователя и ветвления
// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать: "Какое официальное название JavaScript?". Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!", в противном случае - "Не знаете? ECMAScript!"

// const userInput = prompt('Какое официальное название JavaScript?');

// console.log(userInput === 'ECMAScript' ? 'Hurray!' : 'not hurray');

// Example 2 - Отображение времени (if...else)
// Напиши скрипт для отображения часов и минут в консоли браузера в виде строки формата "14 ч. 26 мин.". Если значение переменной minutes равно 0, то выводи строку "14 ч.", без минут.

// const hours = 14;
// const minutes = 0;
// let timestring;

// if (minutes > 0) {
//   timestring = `${hours} ч. ${minutes} мин.`;
// } else {
//   timestring = `${hours} ч.`;
// }

// console.log(timestring);

// Example 3 - Ветвеления
// Напиши скрипт, который выводит в консоль строку "Это положительное число", если в prompt пользователь ввел число больше нуля. Если был введен ноль, выводи в консоль строку "Это ноль". Если передали отрицательное число, в консоли должна быть строка "Это отрицательное число".

// const userInput = Number(prompt('Введите число'));

// if (userInput < 0) {
//   console.log('<');
// } else if (userInput > 0) {
//   console.log('>');
// } else {
//   console.log('=');
// }

// Example 4 - Вложенные ветвления
// Напиши скрипт, который сравнивает числа в переменных a и b. Если оба значения больше 100, то выведи в консоль максимальное из них. В противном случае в консоли должна быть сумма значения b и числа 512.

// const a = 120;
// const b = 180;

// if (a > 100 && b > 100) {
//   console.log(a > b ? a : b);
// } else {
//   console.log(b + 512);
// }

// Example 5 - Форматирование ссылки (endsWith)
// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /. Если нет, добавь в конец значения link этот символ. Используй конструкцию if...else.

// let link = 'https://my-site.com/about';
// // Пиши код ниже этой строки

// if (!link.endsWith('/')) {
//   link += '/';
// }

// // Пиши код выше этой строки
// console.log(link);

// // Example 6 - Форматирование ссылки (includes и логическое «И»)
// // Напиши скрипт который проверяет заканчивается ли значение переменной link символом /. Если нет, добавь в конец значения link этот символ, но только в том случае, если в link есть подстрока "my-site". Используй конструкцию if...else.

// // let link = 'https://somesite.com/about';
// let link = 'https://my-site.com/about';
// // Пиши код ниже этой строки

// if (!link.endsWith('/') && link.includes('my-site')) {
//   link += '/';
// }

// // Пиши код выше этой строки
// console.log(link);

// // Example 7 - Форматирование ссылки (тернарный оператор)
// // Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.

// // let link = 'https://somesite.com/about';
// let link = 'https://my-site.com/about';

// // if (link.includes('my-site') && !link.endsWith('/')) {
// //   link += '/';
// // }

// link += link.includes('my-site') && !link.endsWith('/') ? '/' : '';

// console.log(link);

//
