import Product from './Product';

class Shirt extends Product {
  collar: number;
  sleeve: number; 

  constructor(desc: string, price: number, name: string, collar: number, sleeve: number) {
    super(desc, price, name);

    this.collar = collar;
    this.sleeve = sleeve;
  }
}

export default Shirt;
