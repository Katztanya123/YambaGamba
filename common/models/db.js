const Datastore = require("nedb");
const Permissions = require("./permissions").permissionsData;

let Meals = new Datastore();
let Menus = new Datastore();
let Users = new Datastore();


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

initDBData(usersData, Users);

module.exports = {
  Meals,
  Menus,
  Users,
  Permissions
};