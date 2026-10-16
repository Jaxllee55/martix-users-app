const paragraph = document.getElementById("p");

async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/10");
  const data = await response.json();

  const { id, name, address, phone, username } = data;

  paragraph.textContent = name;

  console.log(id, name, address, phone, username);

}

getUser();