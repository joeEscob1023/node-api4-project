const { nanoid } = require("nanoid");

function getId() {
  return nanoid().slice(0, 5);
}

const initializeUsers = () => [
  { id: getId(), username: "ed123", password: "password" },
  { id: getId(), name: "mary123", password: "password" },
];

const find = () => {
  // SELECT * FROM users;
  return Promise.resolve(users);
};

const findById = (id) => {
  // SELECT * FROM users WHERE id = 1;
  const user = users.find((d) => d.id === id);
  return Promise.resolve(user);
};

const insert = ({ username, password }) => {
  // INSERT INTO users (username, password) VALUES ('foo', 'bar');
  const newUser = { id: getId(), username, password };
  users.push(newUser);
  return Promise.resolve(newUser);
};

// FAKE IN-MEMORY USERS "TABLE"
let users = initializeUsers();

module.exports = {
  find,
  findById,
  insert, // ONLY TESTS USE THIS ONE
};
