document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');

    
    const apiUrl = 'https://fakestoreapi.com/products/';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');
                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>$${product.price}</p>
                    <button>Add to Cart</button>
                `;
                productList.appendChild(productDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            productList.innerHTML = '<p>Failed to load products.</p>';
        });
});