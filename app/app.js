const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const menuRouter = require("./menu/menu.route");
const mealRouter = require("./meal/meal.route");
const authRouter = require("./auth/auth.route");

const app = express();
const PORT = 3031;

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/menu", menuRouter);
app.use("/meal", mealRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
