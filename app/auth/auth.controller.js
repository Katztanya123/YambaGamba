const loginStore = require("./auth.store");
const permissions = require("../../common/models/permissions");

async function getUser(userName, password) {
  let user = await loginStore.getUser(userName, password);
  return user;
}

async function createUser(userName, password) {
  user.permission = permissions.Soldier;
  let register = await loginStore.createNewUserInput(userName, password, permission);
  return register;
}

module.exports = {
  getUser,
  createUser
};
