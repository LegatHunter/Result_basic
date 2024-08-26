// Задание #1
// Напишите функцию calculateAge(), которая принимает день рождения и возвращает количество лет.


// const birthDate = new Date('1990-05-20');
// const age = calculateAge(birthDate);
// console.log(age);



// Задание #2
// Напишите функцию getDateDifference(), которая возвращает разницу в днях между двумя датами.


// const date1 = new Date('2027-06-01');
// const date2 = new Date('2027-06-10');
// const difference = getDateDifference(date1, date2);
// console.log(difference); // 9



// Задание #3
// Напишите функцию getTimeUntilDate(date), которая возвращает объект с информацией о том, сколько времени осталось от текущей даты до переданной.


// const targetDate = new Date('2027-12-31T23:59:59');
// const timeUntilTargetDate = getTimeUntilDate(targetDate);
// console.log(timeUntilTargetDate);
// // { days: 100, hours: 20, minutes: 45, seconds: 31 }



// Задание #4
// Напишите функцию isWeekend(), которая проверяет, является ли указанная дата выходным днем.


// const date1 = new Date('2027-07-10');  // Суббота
// const date2 = new Date('2027-07-12');  // Понедельник
// console.log(isWeekend(date1));  // true
// console.log(isWeekend(date2));  // false



// Задание #5
// Напишите функцию, которая проверяет, является ли год високосным. Возвращает true, если да, иначе — false.


// console.log(isLeapYear(2023)); // false
// console.log(isLeapYear(2024)); // true



// Задание #6
// Напишите функцию, которая возвращает последнее число месяца.


// // июнь 2027
// console.log(getLastDayOfMonth(2027, 5)); // 30

// // февраль 2027
// console.log(getLastDayOfMonth(2027, 1)); // 28

// // январь 2027
// console.log(getLastDayOfMonth(2027, 0)); // 31