const uuid = require("uuid");

function getID() {
  return uuid.v1();
}

const initialUsers = () => {
  return [
    { id: getID(), kullanıcıAdı: "Ezel", şifre: "1234" },
    { id: getID(), kullanıcıAdı: "Ramazan", şifre: "12345" },
    { id: getID(), kullanıcıAdı: "Aksoy", şifre: "123456" },
  ];
};
const users = initialUsers();
function getAll() {
  return users;
}

function createUser(user) {
  user.id = getID();
  user.push(user);
}

function findUser(user) {
  let find = false;
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].kullanıcıAdı === user.kullanıcıAdı &&
      users[i].şifre === user.şifre
    ) {
      find = true;
      break;
    }
  }
  return find;
}

function checkName(userName) {
  let chechedName = users.find((item) => {
    item.kullanıcıAdı === userName;
  });
  return chechedName;
}
module.exports = { getAll, getID, checkName, findUser, createUser };
