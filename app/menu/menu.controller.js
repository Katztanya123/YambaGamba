const menuStore = require("./menu.store");

async function getMenu(date) {
    let menu = await menuStore.getMenuByDay(date);
    console.log(menu);
    return menu;
}

async function createNewMenu(menu) {
    let newMenu = await menuStore.createNewMenuByUserInput(menu);
    return newMenu;
}

module.exports = {
    getMenu,
    createNewMenu
}