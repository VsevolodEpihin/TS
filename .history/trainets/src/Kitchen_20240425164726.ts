
enum PastType {
    spaghetti= 'spaghetti',
    penne = 'penne',
    macaroni = 'macaroni',
}

type selectProduct = Pasta | Pizza

interface ProductType {
  hasSauce: boolean,
  hasCheese: boolean,
}

interface ProductPizza extends ProductType {
  bakeTime: number,
  hasPepperoni: boolean,
  bake(): void,
}

interface ProductPasta extends ProductType {
  cookTime: number,
  pastaType: string,
  cook(): void,
}

interface KitchenType{
    makeDish(dish: selectProduct) :void
}

class Pizza implements ProductPizza {
  hasPepperoni;
  hasSauce;
  hasCheese;
  bakeTime: number = 30;

  constructor (hasPepperoni: boolean, hasSauce: boolean, hasCheese: boolean) {
    this.hasPepperoni = hasPepperoni
    this.hasSauce = hasSauce
    this.hasCheese = hasCheese
  }

  bake (): void {
    setTimeout(console.log, this.bakeTime, 'Enjoy your pizza!')
  }
}

class Pasta implements ProductPasta {
  pastaType;
  hasSauce;
  hasCheese;
  cookTime: number = 30

  constructor (pastaType: string, hasSauce: boolean, hasCheese: boolean) {
    this.pastaType = pastaType
    this.hasCheese = hasCheese
    this.hasSauce = hasSauce
  }

  cook (): void {
    setTimeout(console.log, this.cookTime, 'Enjoy your pasta!')
  }
}

class Kitchen {
  makeDish (dish: selectProduct): void {
    if (dish instanceof Pasta) {
      dish.cook()
    } else{
      dish.bake()
    }
  }
}

const kitchen = new Kitchen()
const pizza = new Pizza(true, true, false)
const pasta = new Pasta(PastType.spaghetti, true, true)

kitchen.makeDish(pasta)
kitchen.makeDish(pizza)