<script>
    // Масив продуктів
    const products = [
        {
            name: "Product 1",
            description: "This is the description for product 1.",
            price: 100,
            image: "images/product1.jpg"
        },
        {
            name: "Product 55",
            description: "This is the description for product 2.",
            price: 150,
            image: "images/product2.jpg"
        },
        {
            name: "Product 3",
            description: "This is the description for product 3.",
            price: 200,
            image: "images/product3.jpg"
        }
        // Додавайте більше продуктів за необхідністю
    ];

    // Функція для рендерингу продуктів на сторінку
    function renderProducts() {
        const productsContainer = document.getElementById('products-container');
        products.forEach(product => {
            const productCard = `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p><strong>Price: $${product.price}</strong></p>
                    <button>Add to Cart</button>
                </div>
            `;
            productsContainer.innerHTML += productCard;
        });
    }

    // Виклик функції для відображення продуктів
    renderProducts();
</script>
