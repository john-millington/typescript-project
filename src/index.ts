import Basket from './Basket';
import { Shirt, Shoe } from './Products';

const mybasket: Basket = new Basket();
const myshirt: Shirt = new Shirt('White Gingham Check', 125.99, 'Gingham Check', 15, 35);
const myshoe: Shoe = new Shoe('Black Oxford Brogue', 250, 'Brogue', 11);

mybasket.add(myshirt);
mybasket.add(myshoe);
console.log(mybasket.total());

mybasket.remove(myshirt);
console.log(mybasket.total());
