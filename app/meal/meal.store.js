const mealDB = require("./../../common/models/db").Meals;

function getMealByDisplayName(displayName) {
    return new Promise((resolve, reject) => {
        mealDB.findOne({ "DisplayName": displayName }, (err, entries) => {
          if (err) {
            reject(err);
          } else {
            resolve(entries);
          }
        })
      })
}

module.exports = {
  getMealByDisplayName
}