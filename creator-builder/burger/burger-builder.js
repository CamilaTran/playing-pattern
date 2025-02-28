import Burger from "./burger.js";

class BurgerBuilder {
  constructor(name) {
    this.burger = new Burger(name);
  }

  addBun() {
    this.burger.ingredients.push("🍞 - a bun");
    return this;
  }

  addMeat() {
    this.burger.ingredients.push("🍖 - a grounded beef ");
    return this;
  }

  addVegetable() {
    this.burger.ingredients.push("🌱 -  vegetable ");
    return this;
  }

  addSoup() {
    this.burger.ingredients.push("🍅 - ketchup and mustard");
    return this;
  }

  addCheese() {
    this.burger.ingredients.push("🧀 - cheese");
    return this;
  }

  build() {
    return this.burger;
  }
}

export default BurgerBuilder;
