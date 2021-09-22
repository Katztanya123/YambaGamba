const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const menuRouter = require("./menu/menu.route");
const mealRouter = require("./meal/meal.route");

const app = express();
const PORT = process.env.PORT || 8080;

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use('/menu', menuRouter);
app.use('/meal', mealRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});