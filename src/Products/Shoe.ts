import Product from './Product';

class Shoe extends Product {
  size: number;

  constructor(desc: string, price: number, name: string, size: number) {
    super(desc, price, name);

    this.size = size;
  }
}

export default Shoe;
