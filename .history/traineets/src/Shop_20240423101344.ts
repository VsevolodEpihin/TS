enum sizeProduct{
  small = 'small',
  large = 'large',
  medium = 'medium',
}
type sizeProductUnion = 'small' | 'large' | 'medium'

class Shop implements IShop {
  items:object[] = [];

  addGood(item:object) {
      return this.items.push(item);
  }

  get goods() {
      return this.items;
  }
}

interface IShop{
  items:Object[],
  add:(item:Object)=>Object[],

}

interface BaseProduct{
  name:string,
}

interface IBaseProduct{
  name:string,
  price:number,
  discount:boolean,
}

interface IBanana{
  size: sizeProductUnion;
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

class Banana implements IBanana {
  size:sizeProductUnion;

  constructor(price:number, discount:boolean, size:sizeProductUnion) { 
      super('banan', price, discount);
      this.size = size;
  }
}

class IceCream extends BaseProduct {
  withGlace;

  constructor(price, discount, withGlace) {
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

