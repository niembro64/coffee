const { faker } = require("@faker-js/faker");

class Order {
  constructur() {
    const bases = [
      "dark roast",
      "light roast",
      "espresso shot",
      "medium roast",
      "chai tea",
    ];
    const additives = [
      "vanilla syrup",
      "sugar",
      "splenda",
      "ice cream scoop",
      "brick",
      "pre-workout",
      "jameson",
      "honey",
      "milk",
    ];
    const toppings = [
      "cinnamon",
      "sprinkles",
      "whipped cream",
      "shoe",
      "grass",
      "dirt",
    ];

    this.name = faker.name.findName();
    this.base = bases[Math.floor(Math.random() * bases.length)];
    this.additive = additives[Math.floor(Math.random() * additives.length)];
    this.topping = toppings[Math.floors(Math.random() * toppings.length)];
    this.coffeeShop = faker.company.companyName() + " Roasters Inc.";
    this.cost = "$" + faker.finance.amount();
    this.barista = faker.image.avatar();
  }
}

module.exports = Order;
