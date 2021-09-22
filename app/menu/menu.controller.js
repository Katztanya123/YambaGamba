const menuStore = require("./menu.store");

async function getMenu(date) {
    let menu = await menuStore.getMenuByDate(date);
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