import"./modulepreload-polyfill-B5Qt9EMX.js";const r=document.getElementById("cart-items");let i=getCart();console.log("[DEBUG] currentCart ===> ",i);s();function s(){let n=getCart(),a=Object.keys(n);r.innerHTML="",a.length||(r.innerHTML='<div class="emptyState"><h3>You have removed the selected items. Please navigate to the category page to choose a new product.</h3><a href="/">Go to Home</a></div>'),a.forEach(t=>{const e=n[t],c=`
            <div class="itemContainer">
                <div class="selectedItemAndDetails">
                    <div class="shoppingSelectImg">
                        <img src="${e.image}" alt="${e.name}">
                    </div>
                    <div class="shoppingSelectItemDetails">
                        <h2>${e.title}</h2>
                        <p>Size : Medium</p>
                        <p>Color : Red</p>
                        <p>$${e.price.toFixed(2)*e.quantity}</p>
                    </div>
                </div>
                <div class="selectedItemIncrese">
                    <div class="QuantityBox">
                        <button class="minus" data-key="${t}" aria-label="Decrease">&minus;</button>
                        <input type="number" class="input-box" value="${e.quantity}" min="1" max="10" data-key="${t}">
                        <button class="plus" data-key="${t}" aria-label="Increase">&plus;</button>
                    </div>
                    <div class="itemsOptions">
                        <ul>
                            <li><a href="#"><span>Edit item</span></a></li>
                            <li><button class="remove-item" data-key="${t}">Remove</button></li>
                            <li><a href="#"><span>Save for later</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        `;r.innerHTML+=c}),l()}function o(n,a){const t=i[n],e=parseInt(t.quantity)+a;e>=1&&e<=10&&(t.quantity=e,s()),a<0?decreaseQuntity(t):increaseQuntity(t)}function l(){document.querySelectorAll(".remove-item").forEach(n=>{n.addEventListener("click",a=>{const t=a.target.getAttribute("data-key"),e=i[t];removeFromCart(e),s()})}),document.querySelectorAll(".minus").forEach(n=>{n.addEventListener("click",a=>{const t=parseInt(a.target.getAttribute("data-key"));o(t,-1)})}),document.querySelectorAll(".plus").forEach(n=>{n.addEventListener("click",a=>{const t=parseInt(a.target.getAttribute("data-key"));o(t,1)})}),document.querySelectorAll(".input-box").forEach(n=>{n.addEventListener("change",a=>{const t=parseInt(a.target.getAttribute("data-key")),e=parseInt(a.target.value);e>=1&&e<=10?(i[t].quantity=e,s()):(alert("Quantity must be between 1 and 10"),a.target.value=i[t].quantity)})})}const d=document.getElementById("isMobileMenu");d.addEventListener("click",()=>{document.body.classList.toggle("isMobileMenuOpend")});const u=document.getElementById("removeButtons");u.addEventListener("click",()=>{document.body.classList.toggle("isMobileMenuOpend")});
