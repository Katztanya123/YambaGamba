const menuDB = require("./../../common/models/db").Menus;
const mealController = require("./../meal/meal.controller")

function getMenuByDate(date) {
    return new Promise((resolve, reject) => {
        menuDB.findOne({ "Date": +date },async (err, menu) => {
          if (err) {
            reject(err);
          } else {
            menu.Meals = await getAllMealsForMenu(menu);
            resolve(menu);
          }
        })
      })
}

async function getAllMealsForMenu(menu) {
  let menuPromises = [];
  menu.Meals.forEach(displayName => {
    menuPromises.push(mealController.getMeal(displayName));
  });
  let allMeals = await Promise.all(menuPromises);
  return allMeals;
}

function createNewMenuByUserInput(menu) {
  return new Promise((resolve, reject) => {
    menuDB.insert({ ...menu }, (err, entries) => {
      if (err) {
        reject(err);
      } else {
        resolve(entries);
      }
    });
  });
}

module.exports = {
  getMenuByDate,
  createNewMenuByUserInput
}