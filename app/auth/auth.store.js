const userDB = require("../../common/models/db").Users;

function getUser(userName, password) {
  return new Promise((resolve, reject) => {
    userDB.findOne(
      { Username: userName, Password: password },
      (err, entries) => {
        if (err) {
          reject(err);
        } else {
          resolve(entries);
        }
      }
    );
  });
}

function createNewUserInput(username, password, permission) {
  return new Promise((resolve, reject) => {
    userDB.insert(
      {
        Username: username,
        Password: password,
        Permission: permission,
      },
      (err, entries) => {
        if (err) {
          reject(err);
        } else {
          resolve(entries);
        }
      }
    );
  });
}

module.exports = {
  getUser,
  createNewUserInput,
};
