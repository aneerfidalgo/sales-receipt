const subtotal = 19.75;
const taxRate = 0.07;

function calaculateTotal(subtotal, tax) {
  return subtotal + tax;
}

function calaculateTax(subtotal, taxRate) {
  const tax = subtotal * taxRate;
  return tax;
}

console.log("Subtotal:     ", subtotal.toFixed(2));

const myTax = calaculateTax(subtotal, taxRate);

const myTotal = calaculateTotal(subtotal, myTax);

console.log("Tax:     ", myTax.toFixed(2));
console.log("------------------");
console.log("TOTAL:         ", myTotal.toFixed(2));
