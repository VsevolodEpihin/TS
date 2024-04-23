enum sizeProduct{
  small = 'small',
  large = 'large',
  medium = 'medium',
}
type sizeProductUnion = 'small' | 'large' | 'medium'

class Shop {
  items:object[] = [];

  addGood(item:object) {
      return this.items.push(item);
  }

  get goods() {
      return this.items;
  }
}

interface BaseProduct{
  name:string,
}

interface IBaseProduct{
  name?:string,
  price:number,
  discount:number,
}

interface IBanana extends IBaseProduct{
  size: sizeProductUnion;
}

class BaseProduct implements IBaseProduct {
  name;

  price;

  discount;

  constructor(name:string, price:number, discount:number) {
      this.name = name;
      this.price = price;
      this.discount = discount;
  }
}

class Banana extends BaseProduct {

  price: number;
  discount: number;
  size:sizeProductUnion;

  constructor(price:number, discount:number, size:sizeProductUnion) { 
      super('banan', price, discount);
      this.size = size;
  }
}

class IceCream extends BaseProduct {
  withGlace:boolean;

  constructor(price:number, discount:number, withGlace:boolean) {
      super('iceCream', price, discount);
      this.withGlace = withGlace;
  }
}

const shop = new Shop();

const iceCream = new IceCream(10, 0, true);
const banana = new Banana(5, 0.1, 'small');

shop.addGood(iceCream);
shop.addGood(banana);

console.log(shop.goods);

