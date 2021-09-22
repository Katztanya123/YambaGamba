const mealStore = require("./meal.store");

async function getMeal(displayName) {
    let meal = await mealStore.getMealByDisplayName(displayName);
    return meal;
}

module.exports = {
    getMeal
}