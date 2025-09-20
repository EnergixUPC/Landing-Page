const products = document.querySelectorAll('.product');
let current = 0;

function showProduct(index) {
  products.forEach((p, i) => {
    p.style.display = i === index ? 'block' : 'none';
  });
}

setInterval(() => {
  current = (current + 1) % products.length;
  showProduct(current);
}, 5000);

showProduct(current);