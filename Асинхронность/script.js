// Задание #1
// Определите порядок вывода в следующем фрагменте кода без его запуска.

// console.log('a');
// new Promise((resolve, reject) => {
// 	console.log('b');
// 	setTimeout(() => {
// 		console.log('c');
// 		resolve();
// 	}, 0);
// })
//   .then(() => console.log('d'));
// console.log('e');
// setTimeout(() => console.log('f'), 0);
// console.log('g');

//a => b => e => g=> c => d => f

// Определите для себя, почему вывод произошел именно в таком порядке.




// Задание #2
// Напишите код, который получает список задач по URL и выводит их в виде списка (<ul>) на страницу.
// Примечание. Сетевые запросы можно выполнять с помощью функции fetch(), работающей на основе Promise API.

// async function fetchTasks() {
//   try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//       if (!response.ok) {
//           throw new Error('Network response was not ok');
//       }
//       const tasks = await response.json();
//       displayTasks(tasks);
//   } catch (error) {
//       console.error('There was a problem with the fetch operation:', error);
//   }
// }

// function displayTasks(tasks) {
//   const taskList = document.querySelector('.task-list');
//   tasks.forEach(task => {
//       const listItem = document.createElement('li');
//       listItem.textContent = task.title;
//       taskList.appendChild(listItem);
//   });
// }

// fetchTasks();

// Задание #3
// Напишите функцию sumWithDelay(), которая принимает delay, a, b и возвращает a + b через delay миллисекунд. Функция должна работать на основе Promise API.

// function sumWithDelay(delay, a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b);
//     }, delay);
//   });
// }

// async function start() {
//   const result = await sumWithDelay(10000, 5, 5);
//   console.log(result); // 10
// }

// start();



// Задание #4
// Напишите функцию, имитирующую запрос к серверу за получением пользователя. Она принимает id и с задержкой 2500 миллисекунд возвращает пользователя из массива USERS с соответствующим id. В случае отсутствия пользователя сгенерировать обработать исключение.

// const USERS = [
//   { id: '001', name: "Алексей", age: 25 },
//   { id: '002', name: "Иван", age: 28 },
//   { id: '003', name: "Егор", age: 30 },
// ];

// function fetchUser(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const user = USERS.find(user => user.id === id);
//       if (user) {
//         resolve(user);
//       } else {
//         reject(new Error(`User with id ${id} not found`));
//       }
//     }, 2500);
//   });
// }

// async function start() {
//   try {
//     const result = await fetchUser('001');
//     console.log(result);
//   } catch (error) {
//     console.error(error.message);
//   }

//   try {
//     const result = await fetchUser('004');
//     console.log(result);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// start();
