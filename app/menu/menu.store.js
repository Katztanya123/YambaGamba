const menuDB = require("./../../common/models/db").Menus;
const mealController = require("./../meal/meal.controller");

function getMenuByDay(day) {
  return new Promise((resolve, reject) => {
    menuDB.find({ Day: day }, async (err, menus) => {
      if (err) {
        reject(err);
      } else {
        if (menus !== null) {
            let menuPromises = menus.map(async menu => {
              menu.Meals = await getAllMealsForMenu(menu);
              return menu;
            })
            let allMenus = await Promise.all(menuPromises);
            resolve(allMenus);
        }
      }
    });
  });
  
}

async function getAllMealsForMenu(menu) {
  let menuPromises = [];
  menu.Meals.forEach((displayName) => {
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
  getMenuByDay,
  createNewMenuByUserInput,
};
