// filter======

const numbers = [23, 3, 1, 67, 89, 5, 2, 8, 90];
const maxNumbers = numbers.filter(number => number > 20);
console.log(maxNumbers);/* [ 23, 67, 89, 90 ] */

const minNumbers = numbers.filter(number => number < 20);
console.log(minNumbers);/* [ 3, 1, 5, 2, 8 ] */

const products = [
    { name: 'phone', price: 2000, color: 'black' },
    { name: 'laptop', price: 32000, color: 'green' },
    { name: 'glasse', price: 500, color: 'white' },
    { name: 'watch', price: 990, color: 'black' },
    { name: 'bottle', price: 90, color: 'blue' },
];

const expensive = products.filter(product => product.price > 1000);
console.log(expensive);/* output=== [
    { name: 'phone', price: 2000, color: 'black' },
    { name: 'laptop', price: 32000, color: 'green' }
  ]
   */
const color = products.filter(product => product.color == "black");
console.log(color);/* output=== [
    { name: 'phone', price: 2000, color: 'black' },
    { name: 'watch', price: 990, color: 'black' }
  ]
 */
const color2 = products.filter(product => product.color == "yellow");
console.log(color2);/* output=== [] */


// find=======

const whiteItem = products.find(product => product.color == "white");
console.log(whiteItem);/* output=== { name: 'glasse', price: 500, color: 'white' } */


const whiteItem2 = products.find(product => product.color == "yellow");
console.log(whiteItem2);/* output=== undefined */

const blackItem = products.find(product => product.color == "black");
console.log(blackItem);

