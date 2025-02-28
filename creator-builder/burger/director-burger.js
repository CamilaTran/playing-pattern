class BurgerDirector {
  static makeCheeseBurger(builder) {
    return builder
      .addBun()
      .addCheese()
      .addMeat()
      .addSoup()
      .addVegetable()
      .build();
  }

  static makeVeggieBurger(builder) {
    return builder.addMeat().addSoup().addVegetable().build();
  }
}

export default BurgerDirector;