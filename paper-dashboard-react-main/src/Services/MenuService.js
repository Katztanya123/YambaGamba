export async function GetMenus() {
  let menu = await fetch("http://localhost:3031/menu/Sunday");
  menu = await menu.json();
  return menu;
}
