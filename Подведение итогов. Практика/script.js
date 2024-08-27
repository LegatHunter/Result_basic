// Самостоятельно или совместно с Владиленом разработайте приложение «Список пользователей».
// На экране должен выводиться список и поле ввода над ним. При вводе текста необходимо, чтобы пользователи моментально фильтровались. Причем фильтрация не должна зависеть от регистра текста, также введенная фраза может быть в любом месте имени или фамилии.


const users = [
  { id: '001', name: "Алексей", surname: "Иванов" },
  { id: '002', name: "Иван", surname: "Петров" },
  { id: '003', name: "Егор", surname: "Сидоров" },
  { id: '004', name: "Мария", surname: "Смирнова" },
  { id: '005', name: "Анна", surname: "Кузнецова" },
  { id: '006', name: "Дмитрий", surname: "Попов" },
  { id: '007', name: "Ольга", surname: "Васильева" },
  { id: '008', name: "Сергей", surname: "Соколов" },
  { id: '009', name: "Екатерина", surname: "Михайлова" },
  { id: '010', name: "Александр", surname: "Федоров" }
];

function displayUsers(filteredUsers) {
  const userList = document.querySelector('.user-list');
  userList.innerHTML = '';
  filteredUsers.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = `${user.name} ${user.surname}`;
      userList.appendChild(listItem);
  });
}

function filterUsers(searchText) {
  const filteredUsers = users.filter(user => {
      const fullName = `${user.name} ${user.surname}`.toLowerCase();
      return fullName.includes(searchText.toLowerCase());
  });
  displayUsers(filteredUsers);
}

document.querySelector('.inputName').addEventListener('input', (event) => {
  const searchText = event.target.value;
  filterUsers(searchText);
});

displayUsers(users);