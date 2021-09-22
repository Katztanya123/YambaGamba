const express = require("express");
const menuController = require("./menu.controller");

const router = express.Router();

router.get("/:date", async (req, res)  => {
    try {
        let menu = await menuController.getMenu(req.params.date);
        res.send(menu);
    } catch(e) {
        throw e;
    }
});

router.post("/create-new-menu", async (req, res)  => {
    try {
        let menu = await menuController.createNewMenu(req.body);
        res.send(menu);
    } catch(e) {
        throw e;
    }
});

module.exports = router;