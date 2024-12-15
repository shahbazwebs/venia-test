const cartItems = document.getElementById('cart-items');
let currentCart = getCart();
let cartItemsList = Object.keys(currentCart);
// remove this it's just test purpose
let currentProduct = null;

console.log('[DEBUG] currentCart ===> ', currentCart);
renderCartItems();

function renderCartItems() {
    let currentCart = getCart();
    let cartItemsList = Object.keys(currentCart);
    cartItems.innerHTML = ""; // Clear existing items

    cartItemsList.forEach((key) => {
        const item = currentCart[key];
        const itemHTML = `
            <div class="itemContainer">
                <div class="selectedItemAndDetails">
                    <div class="shoppingSelectImg">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="shoppingSelectItemDetails">
                        <h2>${item.title}</h2>
                        <p>Size : Medium</p>
                        <p>Color : Red</p>
                        <p>$${item.price.toFixed(2) * item.quantity}</p>
                    </div>
                </div>
                <div class="selectedItemIncrese">
                    <div class="QuantityBox">
                        <button class="minus" data-key="${key}" aria-label="Decrease">&minus;</button>
                        <input type="number" class="input-box" value="${item.quantity}" min="1" max="10" data-key="${key}">
                        <button class="plus" data-key="${key}" aria-label="Increase">&plus;</button>
                    </div>
                    <div class="itemsOptions">
                        <ul>
                            <li><a href="#"><span>Edit item</span></a></li>
                            <li><button class="remove-item" data-key="${key}">Remove</button></li>
                            <li><a href="#"><span>Save for later</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
        cartItems.innerHTML += itemHTML;
    });

    attachEventListeners();
}

function updateQuantity(index, change) {
    const item = currentCart[index];
    const newQuantity = parseInt(item.quantity) + change;

    if (newQuantity >= 1 && newQuantity <= 10) {
        item.quantity = newQuantity;
        renderCartItems();
    }

    if(change < 0) {
        decreaseQuntity(item);
    } else {
        increaseQuntity(item);
    }
}

function attachEventListeners() {
    document.querySelectorAll(".remove-item").forEach((button) => {
        button.addEventListener("click", (event) => {
            const key = event.target.getAttribute("data-key");
            const item = currentCart[key];
            removeFromCart(item);
            renderCartItems();
        });
    });

    document.querySelectorAll(".minus").forEach((button) => {
        button.addEventListener("click", (event) => {
            const key = parseInt(event.target.getAttribute("data-key"));
            updateQuantity(key, -1);
        });
    });

    document.querySelectorAll(".plus").forEach((button) => {
        button.addEventListener("click", (event) => {
            const key = parseInt(event.target.getAttribute("data-key"));
            updateQuantity(key, 1);
        });
    });

    document.querySelectorAll(".input-box").forEach((input) => {
        input.addEventListener("change", (event) => {
            const key = parseInt(event.target.getAttribute("data-key"));
            const value = parseInt(event.target.value);

            if (value >= 1 && value <= 10) {
                currentCart[key].quantity = value;
                renderCartItems();
            } else {
                alert("Quantity must be between 1 and 10");
                event.target.value = currentCart[key].quantity;
            }
        });
    });
}


// decreaseItems.addEventListener('click', ($event) => {
//     console.log('[DEBUG] currentProduct ===> ', currentProduct, currentProduct, $event);
//     currentProduct = currentCart['1'];
//     const value = parseInt(quantity.value, 10);
//     if(value > 1) {
//         quantity.value = parseInt(quantity.value, 10) - 1;
//         decreaseQuntity(currentProduct);
//     }
// });

// increaseItems.addEventListener('click', ($event) => {
//     console.log('[DEBUG] currentProduct ===> ', currentProduct, currentProduct, $event);
//     currentProduct = currentCart['1'];
//     quantity.value = parseInt(quantity.value, 10) + 1;
//     increaseQuntity(currentProduct);
// });
const addButton = document.getElementById('isMobileMenu');
addButton.addEventListener('click', () => {
    document.body.classList.toggle('isMobileMenuOpend');
});
const removeButton = document.getElementById('removeButtons');
removeButton.addEventListener('click', () => {
    document.body.classList.toggle('isMobileMenuOpend');
});