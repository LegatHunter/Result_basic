// Задание #1
// Реализуйте функцию isPrimeNumber(), которая принимает число и возвращает true, если оно простое, иначе — false.

// function isPrimeNumber(num) {
//   if (num <= 1) {
//     return false;
//   }
//   if (num === 2) {
//     return true;
//   }
//   if (num % 2 === 0) {
//     return false;
//   }
//   for (let i = 3; i <= Math.sqrt(num); i += 2) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPrimeNumber(21));

// Задание #2
// Напишите функцию func(), которая принимает num, min, max:
// Если число num < min, то функция возвращает min ** 2.
// Если число num > max, функция возвращает max ** 2.
// Если число num < max - (max - min) / 2, то функция возвращает num ** 2.
// Иначе возвращает округленное вниз значение num.

// function func(num, min, max) {
//   if (num < min) {
//     return min ** 2;
//   }
//   if (num > max) {
//     return max ** 2;
//   }
//   if (num < (max-(max-min)/2)) {
//     return num ** 2;
//   }
//   return Math.floor(num)
// }

// console.log(func(3, 1, 10)); // 9
// console.log(func(15, 1, 10)); // 100
// console.log(func(5, 1, 10)); // 25
// console.log(func(8.5, 1, 10)); // 8

// Задание #3
// Создайте функцию isPerfectNumber(), которая принимает целое положительное число в параметры и возвращает true, если число является совершенным, и false в противном случае.

// function isPerfectNumber(number) {
//   if (number <= 1) {
//     return false;
//   }
//   let sum = 0;
//   for (let i = 1; i <= Math.floor(number / 2); i++) {
//     if (number % i === 0) {
//       sum += i;
//     }
//   }
//   return sum === number;
// }

// console.log(isPerfectNumber(6));   // true
// console.log(isPerfectNumber(28));  // true
// console.log(isPerfectNumber(12));  // false
// console.log(isPerfectNumber(16));  // false

// Задание #4
// Напишите функцию getNumberDigit(), которая принимает число (number) и индекс цифры в числе (digitPosition). Возвращает она цифру числа number, находящуюся на позиции digitPosition.
// Если происходит попытка чтения числа на позиции, которой не существует (например, количество цифр в числе меньше, чем передано в digitPosition), то верните undefined.
// P. S. Нельзя использовать приведение числа к строке.


// function getNumberDigit(number, digitPosition) {
//   if (number < 0) {
//     number = -number;
//   }

//   let tempNumber = number;
//   let digitCount = 0;
//   while (tempNumber > 0) {
//     tempNumber = Math.floor(tempNumber / 10);
//     digitCount++;
//   }

//   if (digitPosition >= digitCount) {
//     return undefined;
//   }
//   for (let i = 0; i < digitCount - digitPosition - 1; i++) {
//     number = Math.floor(number / 10);
//   }

//   return number % 10;
// }

// console.log(getNumberDigit(123, 0)); // 3
// console.log(getNumberDigit(123, 1)); // 2
// console.log(getNumberDigit(123, 2)); // 1
// console.log(getNumberDigit(1, 2)); // undefined
// console.log(getNumberDigit(-123, 0)); // 3
// console.log(getNumberDigit(-123, 1)); // 2
// console.log(getNumberDigit(-123, 2)); // 1

