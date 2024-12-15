const productDetail = document.getElementById('product-detail');
const moreProductDetail = document.getElementById('more-product-detail');
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
const quantity = document.getElementById('quantity');
const increaseItems = document.getElementById('increaseItems');
const decreaseItems = document.getElementById('decreaseItems');
const addToCartBtn = document.getElementById('addToCart');
const carouselProductImages = Array.from(document.getElementsByClassName('carousel-product-image'));

let currentProduct = null;

console.log('[DEBUG] productId ===> ', productId);

fetch(`https://fakestoreapi.com/products/${productId}`)
.then(res => res.json())
.then(product => {
    currentProduct = product;
    currentProduct['quantity'] = 1;
    console.log('[DEBUG] product ===> ', product);

    carouselProductImages.forEach(imageTag => {
        imageTag.src = product.image;
    });

    if(!productDetail) return;
    productDetail.innerHTML = `
            <ul class="breadcrumb">
                <li>Clothing</li>
                <li>Women's</li>
                <li>Outerwear</li>
            </ul>
            <h2>${product.title}</h2>
            <p>$${product.price}</p>
            <ul class="rating">
                ${renderStars(product.rating.rate)}
                <li>(${product.rating.count})</li>
            </ul>
            <span>${product.description} <a href="">Read more</a></span>
        `;

        moreProductDetail.innerHTML = `
        <h2>${product.title}</h2>
        <h4>Description</h4>
        <p>${product.description}</p>
        `;
});

increaseItems.addEventListener('click', ($event) => {
    quantity.value = parseInt(quantity.value, 10) + 1;
});

decreaseItems.addEventListener('click', ($event) => {
    const value = parseInt(quantity.value, 10)
    if(value > 1) {
        quantity.value = parseInt(quantity.value, 10) - 1;
    }
});

addToCartBtn.addEventListener('click', ($event) => {
    console.log('[DEBUG] currentProduct ===> ', currentProduct, $event);
    if(!currentProduct) return;
    currentProduct.quantity = parseInt(quantity.value);
    addToCart(currentProduct);
    window.location.href = '/pages/shopping-bags/shopping-bags.html';
});

function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5; 
    const emptyStars = 5 - Math.ceil(rating);

    let starsHTML = '';

    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fa fa-star"></i>';
    }
    if (halfStar) {
        starsHTML += '<i class="fa fa-star-half-alt"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="fa fa-star-o"></i>';
    }

    return starsHTML;
}
const addButton = document.getElementById('isMobileMenu');
addButton.addEventListener('click', () => {
    document.body.classList.toggle('isMobileMenuOpend');
});
const removeButton = document.getElementById('removeButtons');
removeButton.addEventListener('click', () => {
    document.body.classList.toggle('isMobileMenuOpend');
});