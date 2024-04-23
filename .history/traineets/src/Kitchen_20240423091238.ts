
enum typePasts{
    spaghetti = 'spaghetti'
}

class Pizza {
  hasPepperoni:boolean;

  hasSauce:boolean;

  hasCheese:boolean;

  bakeTime = 30;

  constructor(hasPepperoni:boolean, hasSauce:boolean, hasCheese:boolean) {
      this.hasPepperoni = hasPepperoni;
      this.hasSauce = hasSauce;
      this.hasCheese = hasCheese;
  }

  bake() {
      setTimeout(console.log, this.bakeTime, 'Enjoy your pizza!');
  }
}



class Pasta {
  pastaType:string;

  hasSauce:boolean;

  hasCheese:boolean;

  cookTime: number = 30;

  constructor(pastaType:string, hasSauce:boolean, hasCheese:boolean) {
      this.pastaType = pastaType;
      this.hasCheese = hasCheese;
      this.hasSauce = hasSauce;
  }

  cook() {
      setTimeout(console.log, this.cookTime, 'Enjoy your pasta!');
  }
}


class Kitchen {
  makeDish(dish:object) {
      if (dish instanceof Pasta) {
          dish.cook();
      } else if (dish instanceof Pizza) {
          dish.bake();
      }
      throw new Error('Unknown dish');
  }
}

const kitchen = new Kitchen();
const pizza = new Pizza(true, true, false);
const pasta = new Pasta('spaghetti', true, true);

kitchen.makeDish(pasta);
kitchen.makeDish(pasta);

