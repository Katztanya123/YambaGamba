const express = require("express");
const mealController = require("./meal.controller");

const router = express.Router();

router.get("/:displayName", async (req, res)  => {
    try {
        let meal = await mealController.getMeal(req.params.displayName);
        res.send(meal);
    } catch(e) {
        throw e;
    }
});


module.exports = router;