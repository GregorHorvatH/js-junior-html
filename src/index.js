// console.log('module 02.2');

// ----- default values ------
// function sum(a = 0, b = 0) {
//   return a + b;
// }

// console.log(sum(1, 1));
// console.log(sum(10, 12));
// console.log(sum(100, 23));
// console.log(sum(100));
// console.log(sum());

// ----- arguments ------
// function sum() {
//   if (arguments.length === 0) return 0;

//   let res = 0;

//   for (const item of arguments) {
//     res += item;
//   }

//   return res;
// }

// console.log(sum(1, 10)); // 11
// console.log(sum(1, 1, 1, 1, 1, 1, 4)); // 10
// console.log(sum(5)); // 5
// console.log(sum()); // 0

// =================================
// Example 1 - Индекс массы тела
// Напиши функцию calcBMI(weight, height) которая рассчитывает и возвращает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
// Вес и высота будут специально переданы как строки. Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.
// Индекс массы тела необходимо округлить до одной цифры после запятой;

// function calcBMI(weight, height) {
//   const weightNum = parseFloat(weight);
//   const heightNum = parseFloat(height);
//   const index = weightNum / Math.pow(heightNum, 2);

//   return parseFloat(index.toFixed(2));
// }

// console.log(calcBMI('88.3', '1.75')); // 28.8
// console.log(calcBMI('72', '1.78')); // 22.72
// console.log(calcBMI('65', '1.78')); // 20.52

// =================================
// Example 2 - Меньшее из чисел
// Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.

// function min(a, b) {
//   // if (a < b) return a;
//   // if (b < a) return b;

//   // return a;

//   return a < b ? a : b;
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// =================================
// Example 3 - Площадь прямоугольника
// Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со сторонами, значения которых будут переданы в параметр dimensions в виде строки. Значения гарантированно разделены пробелом.

// function getRectArea(dimensions) {
//   const items = dimensions.split(' ');
//   // const a = items[0];
//   // const b = items[1];
//   const [a, b] = items;

//   const numA = parseInt(a);
//   const numB = parseInt(b);

//   return numA * numB;
// }

// console.log(getRectArea('8 11'));

// =================================
// Example 4 - Логирование элементов
// Напиши функцию logItems(items), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате <номер элемента> - <значение элемента>. Нумерация элементов должна начинаться с 1.
// Например для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// function logItems(items) {
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// =================================
// Example 5 - Логирование контактов
// Напиши функцию printContactsInfo(names, phones) которая выводит в консоль имя и телефонный номер пользователя. В параметры names и phones будут переданы строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.

// function printContactsInfo(names, phones) {
//   const namesArr = names.split(',');
//   const phonesArr = phones.split(',');

//   for (let i = 0; i < namesArr.length; i += 1) {
//     console.log(`${namesArr[i]}: ${phonesArr[i]}`);
//   }
// }

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

// ----- template text ------
// const nandorAge = 16;
// console.log(`Nandor is ${nandorAge} years old`);

// =================================
// Example 6 - Поиск наибольшего элемента
// Напиши функцию findLargestNumber(numbers)которая ищет самое большое число в массиве.

// function findLargestNumber(numbers) {
//   let max = numbers[0];

//   for (const number of numbers) {
//     if (number > max) {
//       max = number;
//     }
//   }

//   return max;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
// console.log(findLargestNumber([-3, -5, -20, -1, -88])); // -1

// =================================
// Example 7 - Среднее значение
// Напишите функцию calAverage() которая принимает произвольное кол-во аргументов и возвращает их среднее значение. Все аругменты будут только числами.

// function calAverage() {
//   let sum = 0;

//   for (const number of arguments) {
//     sum += number;
//   }

//   return sum / arguments.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
