const express = require("express");
const loginController = require("./login.controller");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let userName = req.body.username;
    let password = req.body.password;
    let user = await loginController.getUser(userName, password);
    res.send(user);
  } catch (e) {
    throw e;
  }
});

module.exports = router;
