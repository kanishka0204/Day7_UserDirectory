const users = [
      { name: "Kanishka", branch: "Artificial Intelligence and Data Science", email: "kanishka@gmail.com", year: 2025 },
      { name: "Bob Smith", branch: "Mechanical", email: "bob@example.com", year: 2023 },
      { name: "Charlie Lee", branch: "Electrical", email: "charlie@example.com", year: 2024 },
      { name: "Simran", branch: "Civil", email: "simran@example.com", year: 2022 },
      { name: "Shreya", branch: "Computer Science", email: "shreya@example.com", year: 2021 },
      { name: "Falguni Verma", branch: "Electronics", email: "falguni@example.com", year: 2023 }
    ];

    let filteredUsers = [...users];

    const userList = document.getElementById('user-list');
    const searchInput = document.getElementById('searchInput');

    function renderUsers(userArray) {
      userList.innerHTML = '';

      if (userArray.length === 0) {
        userList.innerHTML = '<p>No users found.</p>';
        return;
      }

      userArray.forEach(user => {
        const card = document.createElement('div');
        card.className = 'user-card';
        card.innerHTML = `
          <h3>${user.name}</h3>
          <p>${user.branch}</p>
        `;
        userList.appendChild(card);
      });
    }

    function filterUsers() {
      const searchText = searchInput.value.toLowerCase();
      filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchText) ||
        user.branch.toLowerCase().includes(searchText)
      );
      renderUsers(filteredUsers);
    }

    function sortUsers() {
      filteredUsers.sort((a, b) => a.year - b.year);
      renderUsers(filteredUsers);
    }

    searchInput.addEventListener('input', filterUsers);
    renderUsers(users);