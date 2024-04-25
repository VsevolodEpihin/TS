
enum SizeProduct {
  small = 'small',
  large = 'large',
  medium = 'medium'
}

type ProductSelect = Banana | IceCream
interface BaseProduct {
  name: string
  price: number
  discount: number
}

interface Shop <T> {
  items: T[]
  (item: T): T[]
}
class Shop <T> implements Shop <T> {
  items: T[] = []

  addGood (item: T): number {
    return this.items.push(item)
  }

  get goods (): T[] {
    return this.items
  }
}

class BaseProduct implements BaseProduct {
  name: string

  price: number

  discount: number

  constructor (name: string, price: number, discount: number) {
    this.name = name
    this.price = price
    this.discount = discount
  }
}

class Banana extends BaseProduct {
  size: SizeProduct

  constructor (price: number, discount: number, size: SizeProduct) {
    super('banana', price, discount)
    this.size = size
  }
}

class IceCream extends BaseProduct {
  withGlace: boolean

  constructor (price: number, discount: number, withGlace: boolean) {
    super('iceCream', price, discount)
    this.withGlace = withGlace
  }
}

const shop = new Shop<ProductSelect>()

const iceCream = new IceCream(10, 0, true)
const banana = new Banana(5, 0.1, SizeProduct.small)

shop.addGood(iceCream)
shop.addGood(banana)

console.log(shop.goods)
