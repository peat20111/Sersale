document.addEventListener('DOMContentLoaded', function() {
    // Завантажуємо дані з JSON файлу
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById('product-list');

            products.forEach(product => {
                // Створюємо HTML для кожного товару
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                        <input type="hidden" name="cmd" value="_s-xclick">
                        <input type="hidden" name="hosted_button_id" value="${product.paypal_id}">
                        <input type="submit" value="Купити зараз" class="buy-button">
                    </form>
                `;

                // Додаємо створений елемент на сторінку
                productList.appendChild(productElement);
            });
        })
        .catch(error => console.error('Помилка при завантаженні даних:', error));
});
