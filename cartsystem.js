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

productArray.forEach((product) => {

    const button = product.querySelector('button');

    button.addEventListener('click', () => {
        const h5 = document.createElement('h5');
        h5.innertext = button.firstElementSibling;
        cart.appendChild(product);
    });
});

const cart = main
    .firstElementChild
    .nextElementSibling
    .firstElementChild
    .nextElementSibling
    .firstElementChild
    .firstElementChild
    .nextElementSibling
    ;
console.log(cart);



