const express = require("express");
const app = express();
const port = 9000; // normally 8000
const { faker } = require("@faker-js/faker");

app.listen(port, () => {
  console.log(`running on port: ${port}`);
});

app.get("/api", (req, res) => {
  res.json({ message: "you found the route" });
});
app.get("/api/fake", (req, res) => {
  const response = {
    name: faker.name.findName(),
    catchPhrase: faker.hacker.phrase(),
  };
  res.json(response);
});

app.get("/api/order", (req, res) => {
  const bases = [
    "dark roast",
    "light roast",
    "espresso shot",
    "medium roast",
    "chai tea",
  ];

  const order = {
    name: faker.name.findName(),
    base: bases[Math.floor(Math.random() * bases.length)],
    additive: "",
  };
  res.json(order);
});
