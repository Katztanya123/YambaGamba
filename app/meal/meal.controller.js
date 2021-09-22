const mealStore = require("./meal.store");

async function getMeal(displayName) {
    let meal = await mealStore.getMealByDisplayName(displayName);
    return meal;
}

async function createNewMeal(meal) {
    let newMeal = await mealStore.createNewMealByUserInput(meal);
    return newMeal;
}

module.exports = {
    getMeal,
    createNewMeal
}