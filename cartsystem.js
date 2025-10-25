const products = [
            {
                id: 1, 
                name: 'Puto',
                price: 50,
                image: ''
            },
            { 
                id: 2,
                name: 'Kutsinta', 
                price: 45, 
                image: '' 
            },
            {
                id: 3, 
                name: 'Bibingka', 
                price: 60, 
                image: 'images/bibingka.png' 
            },
            { 
                id: 4, 
                name: 'Turon', 
                price: 35, 
                image: 'images/turon.png' 
            },
            { 
                id: 5, 
                name: 'Banana Cue', 
                price: 30, 
                image: 'images/bananacue.png' 
            },
            {
                 id: 6, 
                 name: 'Halo-Halo', 
                 price: 80, 
                 image: 'images/halohalo.png' 
            },
        ];

        let cart = [];

        // Show products
        function showProducts() {
            const productsContainer = document.getElementById('products');
            productsContainer.innerHTML = '';

            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow';
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded-lg mb-3">
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">${product.name}</h3>
                    <p class="text-xl font-bold text-blue-600 mb-4">₱${product.price}</p>
                    <button onclick="addToCart(${product.id})" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                        Add to Cart
                    </button>
                `;
                productsContainer.appendChild(productCard);
            });
        }

        
        // Initialize
        showProducts();
