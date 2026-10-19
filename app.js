// GET User Elements
const getUserParagraph = document.getElementById("getUserParagraph");
const getUserInput = document.getElementById("getUserInput");
const getUserForm = document.getElementById("getUserForm");

// GET Users Elements
const getUsersForm = document.getElementById("getUsersForm");
const getUsersList = document.getElementById("getUsersList");

// POST User Elements
const postUserParagraph = document.getElementById("postUserParagraph");
const postUserNameInput = document.getElementById("postUserNameInput");
const postUserPhoneInput = document.getElementById("postUserPhoneInput");
const postUserForm = document.getElementById("postUserForm");

// PUT User Elements
const putUserInput = document.getElementById("putUserInput");
const putUserParagraph = document.getElementById("putUserParagraph");
const putUserNameInput = document.getElementById("putUserNameInput");
const putUserPhoneInput = document.getElementById("putUserPhoneInput");
const putUserForm = document.getElementById("putUserForm");

// PATCH User Elements
const patchUserInput = document.getElementById("patchUserInput");
const patchUserParagraph = document.getElementById("patchUserParagraph");
const patchUserNameInput = document.getElementById("patchUserNameInput");
const patchUserPhoneInput = document.getElementById("patchUserPhoneInput");
const patchUserForm = document.getElementById("patchUserForm");

// DELETE User Elements
const deleteUserParagraph = document.getElementById("deleteUserParagraph");
const deleteUserInput = document.getElementById("deleteUserInput");
const deleteUserForm = document.getElementById("deleteUserForm");

// Function that gets a user
async function getUser(userId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const data = await response.json();
  console.log(data);

  return data;
}

// Function that gets users
async function getUsers() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const data = await response.json();
  console.log(data);

  return data;
}

// Function that posts (creates) a new user
async function postUser(name, phone) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/`, {
    method: "POST",
    body: JSON.stringify({
      name,
      phone,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();
  return data;
}

// Function that puts (completely update) a new user
async function putUser(userId, name, phone) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    method: "PUT",
    body: JSON.stringify({
      id: userId,
      name,
      phone,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();
  return data;
}

// Function that patchs (partially update) a new user
async function patchUser(userId, name, phone) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    method: "PATCH",
    body: JSON.stringify({
      phone,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();
  console.log(data);

  return data;
}

// Function that deletes a user
async function deleteUser(userId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    method: "DELETE",
  });
  const data = await response.json();
  console.log(data);

  return data;
}

// Form to get a user
getUserForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const userID = getUserInput.value;
  const user = await getUser(userID);
  const { id, name, phone } = user;
  getUserParagraph.textContent = `My name is ${name}. My userID is ${id}. Call me on ${phone}.`;
  return;
});

// Form to get users
getUsersForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const users = await getUsers();
  getUsersList.innerHTML = users.map(function (user, index, users) {
    const { id, name, phone } = user;
    return `<li>My name is ${name}. My userID is ${id}. Call me on ${phone}.</li>`;
  });
});

postUserForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  const name = postUserNameInput.value;
  const phone = postUserPhoneInput.value;
  const user = await postUser(name, phone);

  const { name: username, phone: userphone, id } = user;
  postUserParagraph.textContent = `My name is ${username}. My userID is ${id}. Call me on ${userphone}.`;
  return;
});

putUserForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const userID = putUserInput.value;
  const name = putUserNameInput.value;
  const phone = putUserPhoneInput.value;
  const user = await putUser(userID, name, phone);

  const { name: username, phone: userphone, id } = user;
  putUserParagraph.textContent = `My name is ${username}. My userID is ${id}. Call me on ${userphone}.`;
  return;
});

patchUserForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const userID = patchUserInput.value;
  const name = patchUserNameInput.value;
  const phone = patchUserPhoneInput.value;
  const user = await patchUser(userID, name, phone);

  const { name: username, phone: userphone, id } = user;
  console.log(username, phone, id);

  patchUserParagraph.textContent = `My name is ${username}. My userID is ${id}. Call me on ${userphone}.`;
  return;
});

// Form to delete a user
deleteUserForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const userID = deleteUserInput.value;
  const user = await deleteUser(userID);
  const { id, name, phone } = user;
  deleteUserParagraph.textContent = `My name is ${name}. My userID is ${id}. Call me on ${phone}.`;
  return;
});
