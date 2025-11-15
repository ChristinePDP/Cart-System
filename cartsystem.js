const main = document.querySelector('main');
console.log(main);

const h1 = main.firstElementChild;
console.log(h1);

const article = h1.nextElementSibling;
console.log(article);

const div = article.firstElementChild;
console.log(div);

const section = div.firstElementChild;
console.log(section);

const h2 = section.firstElementChild;
console.log(h2);

const products = h2.nextElementSibling;
console.log(products);

console.log(products.children);

const product = main.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.nextElementSibling;
console.log(product.children);

const productArray = Array.from(products.children);
console.log(productArray);

const cart = main
    .firstElementChild
    .nextElementSibling
    .firstElementChild
    .nextElementSibling
    .firstElementChild
    .firstElementChild
    .nextElementSibling;
console.log(cart);

productArray.forEach((product) => {
    const button = product.querySelector('button');

        button.addEventListener('click', () => {
        const h3 = product.firstElementChild;
        const p = h3.nextElementSibling;
        
        const div = document.createElement('div');
        div.className = 'animate-slideIn mb-2 flex justify-between items-center bg-amber-50 p-3 rounded-lg border border-amber-200';
        cart.appendChild(div);

        const name = document.createElement('span');
        name.innerText = h3.innerText;
        name.className = ' animate-slideIn font-semibold text-gray-900';
        div.appendChild(name);

        const price = document.createElement('span');
        price.innerText = p.innerText;
        price.className = 'animate-slideIn font-bold text-amber-900';
        div.appendChild(price);
    });
});