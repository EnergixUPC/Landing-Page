// Mostrar ventana de pago
const paymentModal = document.getElementById('paymentModal');
const closePayment = document.getElementById('closePayment');

// Agregar evento a los botones de comprar
const buyButtons = document.querySelectorAll('.buyButton .button');
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('Botón de comprar clicado');
    if (paymentModal) paymentModal.style.display = 'flex';
  });
});

// Cerrar ventana de pago
if (closePayment) {
  closePayment.addEventListener('click', () => {
    console.log('Botón de cerrar clicado');
    if (paymentModal) paymentModal.style.display = 'none';
  });
}
