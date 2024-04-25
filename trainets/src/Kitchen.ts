
enum TypePasts {
    spaghetti = 'spaghetti',
    penne = 'penne',
    macaroni = 'macaroni',
}

interface PizzaType {
    hasPepperoni: boolean,
    hasSauce: boolean,
    hasCheese: boolean,
    bake():void
}

interface PastaType {
    pastaType: string,
    hasSauce: boolean,
    hasCheese: boolean,
    cook():void
}

interface KitchenType {
    makeDish(dish:object):void
}

class Pizza implements PizzaType {
    hasPepperoni;
  
    hasSauce;
  
    hasCheese;
  
    bakeTime: number = 30;
  
    constructor(hasPepperoni: boolean, hasSauce: boolean, hasCheese: boolean) {
        this.hasPepperoni = hasPepperoni;
        this.hasSauce = hasSauce;
        this.hasCheese = hasCheese;
    }
  
    bake(): void {
        setTimeout(console.log, this.bakeTime, 'Enjoy your pizza!');
    }
  }
  
  class Pasta implements PastaType {
    pastaType;
  
    hasSauce;
  
    hasCheese;
  
    cookTime: number = 30;
  
    constructor(pastaType: string, hasSauce: boolean, hasCheese: boolean) {
        this.pastaType = pastaType;
        this.hasCheese = hasCheese;
        this.hasSauce = hasSauce;
    }
 
    cook(): void {
        setTimeout(console.log, this.cookTime, 'Enjoy your pasta!');
    }
  }
  
  class Kitchen implements KitchenType {
    makeDish(dish: object) {
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
  const pasta = new Pasta(TypePasts.spaghetti, true, true);
  
  kitchen.makeDish(pasta);
  kitchen.makeDish(pizza);
  