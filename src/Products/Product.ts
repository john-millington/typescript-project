let index = 0;
const identifier = () => {
  return ++index;
};

class Product {
  description: string;
  id: number;
  price: number;
  name: string;

  constructor(desc: string, price: number, name: string) {
    this.id = identifier();
    
    this.description = desc;
    this.price = price;
    this.name = name;
  }
}

export default Product;
