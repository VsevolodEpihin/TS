enum sizeProduct{
  small = 'small',
  large = 'large',
  medium = 'medium',
}

interface IShop{
  items:Object[],
  add:(item:Object)=>Object[],

}

interface BaseProduct{
  name:string,
}

class Shop implements IShop {
  items:object[] = [];

  addGood(item:object) {
      return this.items.push(item);
  }

  get goods() {
      return this.items;
  }
}

interface IBaseProduct{
  name:string,
  price:number,
  discount:boolean,
}

interface IBanana{
  
}

class BaseProduct implements IBaseProduct {
  name;

  price;

  discount;

  constructor(name:string, price:number, discount:boolean) {
      this.name = name;
      this.price = price;
      this.discount = discount;
  }
}

class Banana extends BaseProduct {
  size;

  constructor(price, discount, size) {
      super('banan', price, discount);
      this.size = size;
  }
}

class IceCream extends BaseProduct {
  withGlace;

  constructor(price, discount, withGlace) {
      super(‘iceCream’, price, discount);
      this.withGlace = withGlace;
  }
}

const shop = new Shop();

const iceCream = new IceCream(10, 0, true);
const banana = new Banana(5, 0.1, 'small');

shop.addGood(iceCream);
shop.addGood(banana);

console.log(shop.goods);

