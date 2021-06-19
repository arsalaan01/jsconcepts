// Exporting modules
console.log('Exporting Modules!!');

const shippingCost = 10;
const cart = [];

// named export for single or multiple things
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product}`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };
