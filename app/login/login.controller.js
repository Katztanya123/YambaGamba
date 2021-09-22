const loginStore = require("./login.store");

async function getUser(userName, password) {
  let meal = await loginStore.getUser(userName, password);
  return meal;
}

module.exports = {
  getUser
};
