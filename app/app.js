const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const menuRouter = require("./menu/menu.route");
const mealRouter = require("./meal/meal.route");
const loginRouter = require("./login/login.route");

const app = express();
const PORT = process.env.PORT || 8080;

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/menu", menuRouter);
app.use("/meal", mealRouter);
app.use("/login", loginRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
