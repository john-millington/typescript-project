let index = 0;
const identifier = () => {
  return ++index;
};

class Product {
  id: number;

  constructor(public description: string, public price: number, public name: string) {
    this.id = identifier();
  }
}

export default Product;
