async function fetchUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    const randomUsers = getRandomUsers(users, 5);
    displayUsers(randomUsers);
  } catch (err) {
    console.log("Error fetching users: ", err);
    document.getElementById(
      "userInfo"
    ).innerHTML = `<p style="color:red;">Failed to load users.</p>`;
  }
}

function getRandomUsers(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function displayUsers(users) {
  const container = document.getElementById("userInfo");
  container.innerHTML = "";

  users.forEach((user) => {
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.padding = "15px";
    card.style.marginTop = "10px";
    card.style.borderRadius = "8px";
    card.style.backgroundColor = "#f9f9f9";

    card.innerHTML = `
    <h3>${user.name}</h3>
    <p><strong>Email: </strong>${user.email}</p>
    <p><strong>Phone: </strong>${user.phone}</p>
    <p><strong>Company: </strong>${user.company.name}</p>
    <p><em>Fetched at: ${new Date().toLocaleTimeString()}</em></p>

    `;

    container.appendChild(card);
  });
}

document.getElementById("loadUserBtn").addEventListener("click", fetchUsers);
