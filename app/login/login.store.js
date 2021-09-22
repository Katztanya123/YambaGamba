const userDb = require("./../../common/models/db").Users;

function getUser(userName, password) {
  return new Promise((resolve, reject) => {
    userDb.findOne(
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

module.exports = {
  getUser,
};
