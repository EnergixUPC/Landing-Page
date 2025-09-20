document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faqItem');

    faqItems.forEach(item => {
        const question = item.querySelector('.faqQuestion');
        
        question.addEventListener('click', () => {
            // Alterna la clase 'active' en el faqItem padre
            item.classList.toggle('active');
        });
    });
});