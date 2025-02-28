class Burger {
  constructor(name) {
    this.ingredients = [];
    this.for = name;
  }

  describe() {
    console.log(`Burger for ${this.for} with ingredients:`);
    this.ingredients.forEach((ingredient) => console.log(ingredient));
  }
}

export default Burger;
