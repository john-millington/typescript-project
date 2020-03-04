import Product from './Product';

class Shoe extends Product {
  constructor(desc: string, price: number, name: string, public size: number) {
    super(desc, price, name);
  }
}

export default Shoe;
