import Product from '../Products';

class Basket {
  items: Array<Product>;

  constructor() {
    this.items = [];
  }

  add(item: Product) {
    this.items.push(item);
  }

  remove(item: Product) {
    this.items = this.items.filter(current => current.id !== item.id);
  }

  total() {
    let total = 0;
    this.items.forEach(item => {
      total += item.price;
    });

    return total;
  }
}

export default Basket;
