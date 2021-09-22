const menuStore = require("./menu.store");

async function getMenu(date) {
    let menu = await menuStore.getMenuByDate(date);
    return menu;
}

module.exports = {
    getMenu
}