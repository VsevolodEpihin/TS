class Shop {
  items:string[] = [];

  addGood(item:string) {
      return this.items.push(item);
  }

  get goods() {
      return this.items;
  }
}


class BaseProduct {
  name:string;

  price:number;

  discount:boolean;

  constructor(name:string, price:number, discount:boolean) {
      this.name = name;
      this.price = price;
      this.discount = discount;
  }
}

class Banana extends BaseProduct {
  size:string;

  constructor(price:number, discount:boolean, size:string) {
      super('banan', price, discount);
      this.size = size;
  }
}

class IceCream extends BaseProduct {
  withGlace:boolean;

  constructor(price:number, discount:number, withGlace:boolean) {
      super(`iceCream`, price, discount);
      this.withGlace = withGlace;
  }
}

const shop = new Shop();

const iceCream = new IceCream(10, 0, true);
const banana = new Banana(5, 0.1, 'small');

shop.addGood(iceCream);
shop.addGood(banana);

console.log(shop.goods);

