import BurgerBuilder from "./burger-builder.js";
import BurgerDirector from "./director-burger.js";

const cheese = BurgerDirector.makeCheeseBurger(new BurgerBuilder("Mai"));
console.log(cheese.describe());

const veggie = BurgerDirector.makeVeggieBurger(new BurgerBuilder("Chau"));
console.log(veggie.describe());