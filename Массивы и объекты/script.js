// Задание #1
// Создайте 2 объекта john и ann с полями name, age, pet и заполните их именем, возрастом и именем питомца соответственно.
// Создайте функцию, которая в параметры принимает объект человека (john или ann), и в качестве результата выводит информацию о нем в консоль: “Меня зовут {name}, мне {age}, у меня есть питомец {pet}”.
// Создайте функцию incrementAge(), которая в параметры принимает объект человека и увеличивает ему возраст на 1.
// Выведите циклом все названия свойств и их значения, которые есть у объекта john.

// const john = {
//   name: 'John',
//   age: 15,
//   pet: 'Jimmy'
// }

// const ann = {
//   name: 'Ann',
//   age: '19',
//   pet: 'Jake'
// }

// const hiPerson = (obj) => {
//   console.log(`Меня зовут ${obj.name}, мне ${obj.age}, у меня есть питомец ${obj.pet}`);
// }
// hiPerson(ann)

// const incrementAge = (obj) => {
//   obj.age++
// }
// incrementAge(john)

// for(key in john){
//   console.log(key,':', john[key]);
// }


// Задание #2
// Создайте функцию, которая на вход принимает массив, а на выходе возвращает сумму его элементов:
// function sum(array) {
//   let result = 0;
//   // for(let i = 0; i < array.length; i++){
//   //   result+=array[i]
//   // }
//   for(key in array){
//     result+=array[key]
//   }
//   return result
// }
// const arr = [1, 50, 20, 75, 90];
// console.log(sum(arr)); // 236

// Задание #3
// Создайте пустой массив names. Добавьте в него 5 любых имен. Выведите массив в консоль. Уберите из начала и конца массива по 1 элементу. Снова выведите массив в консоль.

// const names = [];
// names.push('Никита', 'Даша', 'Костя', 'Дима', 'Паша')
// console.log(names);
// names.pop()
// console.log(names);
// names.shift();
// console.log(names);

// Задание #4
// Дан массив names. Необходимо сделать функцию, которая на основе этого массива генерирует строку c HTML. Она представляет из себя список элементов (<ul>), где каждый элемент списка (<li>) содержит элемент массива.

// const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];
// const body = document.querySelector('body');
// const ul = document.createElement('ul');
// body.insertAdjacentElement('afterbegin', ul);

// const generateHTML = (arr) => {
//   const listItems = arr.map(name => `<li>${name}</li>`).join('');
//   ul.insertAdjacentHTML('beforeend', listItems);
// };

// generateHTML(names);

// Задание #5
// Дан объект:
// Необходимо выполнить деструктуризацию объекта (для всех полей). Выведите полученные переменные в консоль.
// const obj = {
// 	age: 22,
// 	favColor: 'red',
// 	height: 188,
// 	pet: 'dog',
// 	money: 12300
// };

// const {age, favColor, height, pet, money} = obj;
// console.log(age);


// Задание #6
// Даны объекты:
// const obj = {
// 	age: 22,
// 	favColor: 'red',
// 	height: 188,
// 	pet: 'dog',
// 	money: 12300
// };
// const updateObj = {
// 	age: 23,
// 	favColor: 'blue',
// 	money: 11450
// };
// const obj2 = {...obj, ...updateObj};

// console.log(obj2);
/**
 * {
 *	age: 23,
 *	favColor: 'blue',
 *	height: 188,
 *	pet: 'dog',
 *	money: 11450
 * }
 */
// Необходимо создать новый объект obj2, в котором будут все поля объекта obj, но с обновленными значениями полей как у объекта updateObj.