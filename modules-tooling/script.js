// Importing modules
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing Modules!!');
//console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// Mixed import of default and named  --not recommended
// import add, { addToCart,cart totalPrice as price, tq } from './shoppingCart.js';
// add('pizza', 3);
// add('bread', 5);
// add('apples', 4);
// console.log(cart);
//console.log(price);

// Default import
import add from './shoppingCart.js';
add('pizza', 2);
