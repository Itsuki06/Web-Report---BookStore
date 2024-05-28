

document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.box-product');

    items.forEach(item => {
        const originalPriceElement = item.querySelector('.original-price');
        const originalPriceText = originalPriceElement.innerText.replace('₫', '').trim();
        const originalPrice = parseFloat(originalPriceText.replace('.', ''));

        const discountElement = item.querySelector('.percent b');
        const discountText = discountElement.innerText.replace('%', '').trim();
        const discountPercentage = parseFloat(discountText);

        const discountedPrice = originalPrice * (1 - discountPercentage / 100);

        const priceElement = item.querySelector('.price');
        priceElement.innerText = discountedPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    });
});


