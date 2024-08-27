// Задание #1
// Напишите функцию calculateAge(), которая принимает день рождения и возвращает количество лет.

// function calculateAge(data) {
//   const nowData = new Date();
//   return Math.floor((nowData - data) / 86400000 / 365);
// }
// const birthDate = new Date("1990-05-20");
// const age = calculateAge(birthDate);
// console.log(age);

// Задание #2
// Напишите функцию getDateDifference(), которая возвращает разницу в днях между двумя датами.

// function getDateDifference(date1, date2) {
//   return -(date1 - date2) / 86400000;
// }
// const date1 = new Date("2027-06-01");
// const date2 = new Date("2027-06-10");
// const difference = getDateDifference(date1, date2);
// console.log(difference); // 9

// Задание #3
// Напишите функцию getTimeUntilDate(date), которая возвращает объект с информацией о том, сколько времени осталось от текущей даты до переданной.

// function getTimeUntilDate(date) {
//   const dateNow = new Date();
//   const timeDifference = date - dateNow;

//   const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

//   const obj = {
//     days,
//     hours,
//     minutes,
//     seconds
//   };

//   return obj;
// }

// const targetDate = new Date("2027-12-31T23:59:59");
// const timeUntilTargetDate = getTimeUntilDate(targetDate);
// console.log(timeUntilTargetDate);
// { days: 100, hours: 20, minutes: 45, seconds: 31 }

// Задание #4
// Напишите функцию isWeekend(), которая проверяет, является ли указанная дата выходным днем.

// function isWeekend(date) {
//   const dayOfWeek = date.getDay();
//   return dayOfWeek === 0 || dayOfWeek === 6;
// }

// const date1 = new Date('2027-07-10');  // Суббота
// const date2 = new Date('2027-07-12');  // Понедельник
// console.log(isWeekend(date1));  // true
// console.log(isWeekend(date2));  // false

// Задание #5
// Напишите функцию, которая проверяет, является ли год високосным. Возвращает true, если да, иначе — false.

// function isLeapYear(year) {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         return true;
//       } else {
//         return false;
//       }
//     } else {
//       return true;
//     }
//   } else {
//     return false;
//   }
// }

// console.log(isLeapYear(2023)); // false
// console.log(isLeapYear(2024)); // true
// console.log(isLeapYear(2000)); // true
// console.log(isLeapYear(1900)); // false

// Задание #6
// Напишите функцию, которая возвращает последнее число месяца.

// function getLastDayOfMonth(year, month) {
//   const nextMonth = new Date(year, month + 1, 1);
//   nextMonth.setDate(nextMonth.getDate() - 1);
//   return nextMonth.getDate();
// }

// // июнь 2027
// console.log(getLastDayOfMonth(2027, 5)); // 30

// // февраль 2027
// console.log(getLastDayOfMonth(2027, 1)); // 28

// // январь 2027
// console.log(getLastDayOfMonth(2027, 0)); // 31
