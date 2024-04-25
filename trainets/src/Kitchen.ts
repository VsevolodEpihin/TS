
enum TypePasts {
    spaghetti = 'spaghetti',
    penne = 'penne',
    macaroni = 'macaroni',
}

interface Pizza {
    hasPeperoni: boolean,
    hasSauce: boolean,
    hasCheese: boolean,
    bake():void
}

interface Pasta {
    pastaType: string,
    hasSauce: boolean,
    hasCheese: boolean,
    cook():void
}

interface Kitchen {
    makeDish(dish:object):void
}

class Pizza implements Pizza {
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
  
  class Pasta implements Pasta {
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
  
  
  class Kitchen implements Kitchen {
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
  kitchen.makeDish(pasta);
  