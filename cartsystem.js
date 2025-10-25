const products = [
            {
                id: 1, 
                name: 'Puto',
                price: 50,
                image: 'images/puto.png'
            },
            { 
                id: 2,
                name: 'Kutsinta', 
                price: 45, 
                image: 'images/kutsinta.png' 
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

        // show products
        function showProducts() {
            const productsContainer = document.getElementById('products');
            productsContainer.innerHTML = '';

            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = `
                    border border-amber-300 rounded-lg p-2 hover:shadow-xl transition-shadow
                    bg-white flex flex-col items-center text-center
                `;
                productCard.innerHTML = `
                    <div class="aspect-square w-full bg-gray-100 rounded-md mb-2 overflow-hidden">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
                    </div>
                    <h3 class="text-sm font-semibold text-amber-800 mb-1">${product.name}</h3>
                    <p class="text-xs font-bold text-amber-900 mb-2">₱ ${product.price}</p>
                    <button onclick="addToCart(${product.id})"
                        class="w-full bg-amber-800 hover:bg-amber-600 text-white font-semibold py-1 rounded text-xs transition">
                        Add to Cart
                    </button>
                `;
                productsContainer.appendChild(productCard);
            });
        }

        // Add to cart
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            showCart();
        }

        // Update quantity
        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    showCart();
                }
            }
        }

        // Remove from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            showCart();
        }

        // Calculate total
        function calculateTotal() {
            return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        }

        // Calculate total items
        function getTotalItems() {
            return cart.reduce((total, item) => total + item.quantity, 0);
        }

        // show cart
        function showCart() {
            const cartItemsContainer = document.getElementById('cartItems');
            const emptyCart = document.getElementById('emptyCart');
            const cartTotal = document.getElementById('cartTotal');
            const totalPrice = document.getElementById('totalPrice');
            const cartBadge = document.getElementById('cartBadge');

            if (cart.length === 0) {
                emptyCart.classList.remove('hidden');
                cartItemsContainer.classList.add('hidden');
                cartTotal.classList.add('hidden');
                cartBadge.classList.add('hidden');
                return;
            }

            emptyCart.classList.add('hidden');
            cartItemsContainer.classList.remove('hidden');
            cartTotal.classList.remove('hidden');
            cartBadge.classList.remove('hidden');

            // Update badge
            cartBadge.textContent = getTotalItems();

            // show cart items
            cartItemsContainer.innerHTML = '';
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'border border-amber-300 rounded-lg p-3';
                cartItem.innerHTML = `
                    <div class="flex items-start justify-between mb-2">
                        <div class="flex items-center gap-2">
                            <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-cover rounded">
                            <div>
                                <h3 class="font-semibold text-amber-900">${item.name}</h3>
                                <p class="text-sm text-gray-600">₱ ${item.price} each</p>
                            </div>
                        </div>
                        <button onclick="removeFromCart(${item.id})" class="text-amber-500 hover:text-red-700">
                            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <button onclick="updateQuantity(${item.id}, -1)" class="bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded flex items-center justify-center">
                                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                                </svg>
                            </button>
                            <span class="font-semibold w-8 text-center">${item.quantity}</span>
                            <button onclick="updateQuantity(${item.id}, 1)" class="bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded flex items-center justify-center">
                                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                                </svg>
                            </button>
                        </div>
                        <p class="font-bold text-orange-600">₱ ${item.price * item.quantity}</p>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItem);
            });

            // Update total
            totalPrice.textContent = '₱ ' + calculateTotal();
        }

        // Initialize
        showProducts();