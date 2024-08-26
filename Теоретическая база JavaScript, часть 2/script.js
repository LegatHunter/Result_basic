// Задание #1
// Дан объект машины:

// const car = {
//   name: 'Hyundai Solaris',
// 	type: 'sedan',
// 	maxSpeed: '320',
// 	color: 'red',
// }
// Необходимо написать написать функцию, которая принимает объект машины и возвращает строку с HTML, заполненную значениями переданного объекта.
// <article>
//     <div>
//         <h2>Hyundai Solaris</h2>
//         <span>sedan</span>
//     </div>
//     <div>
//         <span>Maximum speed:</span>
//         <span>320</span>
//     </div>
//     <div>
//         <span>Color:</span>
//         <span>red</span>
//     </div>
// </article>

// function cars (obj){
//   return `
//   <article>
//     <div>
//         <h2>${obj.name}</h2>
//         <span>${obj.type}</span>
//     </div>
//     <div>
//         <span>Maximum speed:</span>
//         <span>${obj.maxSpeed}</span>
//     </div>
//     <div>
//         <span>Color:</span>
//         <span>${obj.color}</span>
//     </div>
// </article>
//   `
// }

// Задание #2
// Необходимо написать функцию countWords(), которая принимает предложение и подсчитывает количество слов в нем.

// function countWords(str){
//   return str.split(' ').length
// }
// const sentence = "Hello, how are you?";
// console.log(countWords(sentence)); // 4

// Задание #3
// Необходимо написать функцию getInitials(), которая принимает полное имя в виде строки (например, “John Doe”) и возвращает инициалы в формате “J. D.”.
// const fullName = "John Doe";
// const initials = getInitials(fullName);
// console.log(initials); // "J. D."

// function getInitials(str) {
//   const arr = str.toUpperCase().split(' ');
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > 0) { // Проверяем, что элемент не пустой
//       newArr.push(arr[i][0] + ".");
//     }
//   }
//   return newArr.join(' ');
// }
// console.log(getInitials('Nik Flo')); // N. F.

// Задание #4
// Необходимо написать функцию generateGoogleString(), которая принимает число и возвращает сроку ”Google” с указанным количеством букв “o”. При этом минимальное количество букв “о” равно 2.
// console.log(generateGoogleString(4));
// // Goooogle
// console.log(generateGoogleString(0));
// // Google
// console.log(generateGoogleString(-2));
// // Google

// function generateGoogleString(num) {
//   const g = []
//   for (let i = 2; i < num; i++) {
//     g.push('o');
//   }
//   return `Goo` + g.join('') +`gle`
// }
// console.log(generateGoogleString(4));
// // Goooogle
// console.log(generateGoogleString(0));
// // Google
// console.log(generateGoogleString(-2));
// // Google

// Задание #5
// Реализуйте функцию countVowels(), которая подсчитывает количество гласных букв (латинских и кириллических) в переданной строке.
// const str = "Hello, Привет!";
// console.log(countVowels(str)); // 4

// function countVowels(str) {
//   const vowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я", 'a', 'e', 'i', 'o', 'u', 'y'];
//   const strNew = str.toLowerCase();
//   let count = 0;

//   for (let i = 0; i < strNew.length; i++) {
//     if (vowels.includes(strNew[i])) {
//       count++;
//     }
//   }

//   return count;
// }

// const str = "Hello, Привет!";
// console.log(countVowels(str)); // 5
