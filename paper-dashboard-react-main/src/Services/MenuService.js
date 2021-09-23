export async function GetMenu() {
  let menu = await fetch("http://localhost:3031/menu/123");
  menu = await menu.json();
  console.log(menu);
  return menu;
}
