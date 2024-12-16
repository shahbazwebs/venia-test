const cartKey = "shoppingCart";

function getCart() {
    const cart = JSON.parse(localStorage.getItem(cartKey));
    return cart;
}

function addToCart(product, quantity) {
    let cart = JSON.parse(localStorage.getItem(cartKey));
    if(cart[product.id]) {
        cart[product.id].quantity += quantity;
    } else {
        cart[product.id] = product;
    }
    saveCart(cart);
}

function removeFromCart(product) {
    let cart = JSON.parse(localStorage.getItem(cartKey));
    if (cart[product.id]) {
        delete cart[product.id];
        saveCart(cart);
    }
}

function increaseQuntity(product) {
    let cart = JSON.parse(localStorage.getItem(cartKey));
    if (cart[product.id]) {
        cart[product.id].quantity += 1;
        saveCart(cart);
    }
}

function decreaseQuntity(product) {
    let cart = JSON.parse(localStorage.getItem(cartKey));
    if (cart[product.id] && cart[product.id].quantity > 0) {
        cart[product.id].quantity -= 1;
        saveCart(cart);
    }
}

function saveCart(cart) {
    localStorage.setItem(cartKey, JSON.stringify(cart));
}
