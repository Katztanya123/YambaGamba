export async function GetMenus() {
  let day = new Date();
  let weekday = [];
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Sunday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var name = weekday[day.getDay()];

  let menu = await fetch(`http://localhost:3031/menu/${name}`);
  menu = await menu.json();
  return menu;
}
