const Datastore = require("nedb");
const Permissions = require("./permissions");
const path = require('path');

let Meals = new Datastore({filename: path.join(__dirname, './dbs/Meals.db'), autoload: true});
let Menus = new Datastore({filename: path.join(__dirname, './dbs/Menus.db'), autoload: true});
let Users = new Datastore({filename: path.join(__dirname, './dbs/Users.db'), autoload: true});


usersData = [
  { Username: "michael", Password: "123", Permission: Permissions.Chef},
  { Username: "ahmed", Password: "1as", Permission: Permissions.KitchenWorker},
  { Username: "refael", Password: "asd", Permission: Permissions.Soldier},
];

menusData = [
  {Date: 123, DisplayName: "ארוחת ערב", Meals: ["Omlet","Cornflaks"]}
]

mealsData = [
  {DisplayName: "Omlet", Description: "2 Eggs WIth sold", IsVegan: false, IsVegeterian: false, IsMeaty: false, IsMilky: false},
  {DisplayName: "Israeli-Salad", Description: "1 Cucuber, 1 Tomato And 1 onion.", IsVegan: true, IsVegeterian: true, IsMeaty: false, IsMilky: false},
  {DisplayName: "Cornflaks", Description: "Cornflaks with milk", IsVegan: true, IsVegeterian: false, IsMeaty: false, IsMilky: true}
]


let initDBData = (data, db) => {
  for (const datum of data) {
    db.insert(datum);
  }
}

//initDBData(mealsData, Meals)
//initDBData(usersData, Users);
//initDBData(menusData, Menus);

module.exports = {
  Meals,
  Menus,
  Users,
  Permissions
};