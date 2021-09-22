const menuDB = require("./../../common/models/db").Menus;
const mealController = require("./../meal/meal.controller")

function getMenuByDate(date) {
    return new Promise((resolve, reject) => {
        menuDB.findOne({ "Date": +date }, (err, menu) => {
          if (err) {
            reject(err);
          } else {
            let mealsDisplayNames = [];
            menu.MealsDisplayNames.forEach(displayName => {
              mealsDisplayNames.push(mealController.getMeal(displayName));
            });
            Promise.all(mealsDisplayNames).then(val => {
              menu.meals = val;
              resolve(menu);
            })
          }
        })
      })
}

module.exports = {
  getMenuByDate
}