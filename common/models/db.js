const Datastore = require("nedb");
const Permissions = require("./permissions").permissionsData;
const path = require('path');

let Meals = new Datastore({filename: path.join(__dirname, './dbs/Meals.db'), autoload: true});
let Menus = new Datastore({filename: path.join(__dirname, './dbs/Menus.db'), autoload: true});
let Users = new Datastore({filename: path.join(__dirname, './dbs/Users.db'), autoload: true});


usersData = [
  { Username: "michael", Password: "123", Permission: Permissions.Chef},
  { Username: "ahmed", Password: "1as", Permission: Permissions.KitchenWorker},
  { Username: "refael", Password: "asd", Permission: Permissions.Soldier},
];


let initDBData = (data, db) => {
  for (const datum of data) {
    db.insert(datum);
  }
}

//initDBData(usersData, Users);

module.exports = {
  Meals,
  Menus,
  Users,
  Permissions
};