const express = require("express");
const loginController = require("./auth.controller");
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    let userName = req.body.username;
    let password = req.body.password;
    let user = await loginController.getUser(userName, password);
    res.send(user);
  } catch (e) {
    throw e;
  }
});

router.post("/register", async (req, res)  => {
  try {
    let userName = req.body.username;
    let password = req.body.password;
    let register = await loginController.createUser(userName, password);
    res.send(register);
  } catch(e) {
      throw e;
  }
});

module.exports = router;
