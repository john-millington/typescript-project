import Product from './Product';

class Shirt extends Product {
  constructor(desc: string, price: number, name: string, public collar: number, public sleeve: number) {
    super(desc, price, name);
  }
}

export default Shirt;
