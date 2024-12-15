const categoryFilters = document.getElementById('category-filters');
const categoryFiltersMobile = document.getElementById('category-filters-mobile');
const productList = document.getElementById('product-list');
const loader = document.getElementById('prodcutListshimmerLoader');
const productCount = document.getElementById('productCount');


let products = [];
let uniqueCategories = [];

getProducts();

function toggleLoader(state) {
    if(state) {
        loader.style.display = "block";
    } else {
        loader.style.display = "none";
    }
}

function getProducts() {
    toggleLoader(true);
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(response => {
        toggleLoader(false);
        productCount.innerText = response.length;
        products = response;
        uniqueCategories = [...new Set(products.map(product => product.category))];
        console.log(uniqueCategories);
        renderProducts(products);
        console.log("[products length]  ==>", products.length);
        productList.addEventListener('click', (e) => {
            console.log('e.target ===> ', e.target);
            const productCard = e.target.closest('.product-card');
            if (productCard) {
                const productId = productCard.dataset.id;
                window.location.href = `/pages/product-details/product-details.html?id=${productId}`;
            }
        });
        
        uniqueCategories.forEach(category => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = category;
            checkbox.id = category;
            // checkbox.checked = true;
            checkbox.addEventListener('change', updateProductList);
            // checkbox.addEventListener('change', updateProductListInMobile);
            
            const label = document.createElement('label');
            label.htmlFor = category;
            label.textContent = category;
            
            const container = document.createElement('li');
            container.appendChild(checkbox);
            container.appendChild(label);
            
            categoryFilters.appendChild(container);
            // categoryFiltersMobile.appendChild(container);
        });
    });
}

function renderProducts(filteredProducts) {
    productList.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('col-md-4');
        productCard.classList.add('col-sm-6');
        productCard.innerHTML = `
                    <div class="product-card" data-id="${product.id}">
                        <div class="itemImage">
                            <img src="${product.image}" alt="${product.title}" />
                        </div>
                        <div class="itemsDetails">
                            <h5 title="${product.title}">${product.title}</h5>
                            <p>$${product.price}</p>
                        </div>
                    </div>
                `;
        productList.appendChild(productCard);
    });
}

function updateProductList() {
    const selectedCategories = Array.from(categoryFilters.querySelectorAll('input[type="checkbox"]:checked'))
    .map(checkbox => checkbox.value);
    
    const filteredProducts = selectedCategories.length
    ? products.filter(product => selectedCategories.includes(product.category))
    : products;
    
    productCount.innerText = filteredProducts.length;
    renderProducts(filteredProducts);
}

function updateProductListInMobile() {
    const selectedCategories = Array.from(categoryFiltersMobile.querySelectorAll('input[type="checkbox"]:checked'))
    .map(checkbox => checkbox.value);
    
    const filteredProducts = selectedCategories.length
    ? products.filter(product => selectedCategories.includes(product.category))
    : products;
    productCount.innerText = filteredProducts.length;
    renderProducts(filteredProducts);
}


// const prodcutListshimmerLoader = document.getElementById('prodcutListshimmerLoader');
// for(let i = 1; i < 4; i++){
//     const shimmerProdcustList = document.createElement('div');   
//     shimmerProdcustList.classList.add('col-md-4');
//     shimmerProdcustList.innerHTML = `
//         <div class="product-card">
//             <div class="itemImage shimmerBG"></div>
//             <div class="itemsDetails">
//                 <h5 class="shimmerBG"></h5>
//                 <p class="shimmerBG"></p>
//             </div>
//         </div>       
//     `
//     prodcutListshimmerLoader.appendChild(shimmerProdcustList);
// }

function handleSortChange(event) {
    const sortType = event.target.value;
    
    let sortedProducts = [...products];
    
    if (sortType === "price") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === "category") {
        sortedProducts.sort((a, b) => a.category.localeCompare(b.category));
    }
    
    renderProducts(sortedProducts);
}

document.getElementById("sort-dropdown").addEventListener("change", handleSortChange);

const addButton = document.getElementById('isMobileMenu');
addButton.addEventListener('click', () => {
    document.body.classList.toggle('isMobileMenuOpend');
});
const removeButton = document.getElementById('removeButtons');
removeButton.addEventListener('click', () => {
    document.body.classList.toggle('isMobileMenuOpend');
});

const filterResults = document.getElementById('filterResults');
filterResults.addEventListener('click', () => {
    document.body.classList.toggle('openfilterBox');
});
const sortProducts = document.getElementById('sortProducts');
sortProducts.addEventListener('click', () => {
    document.body.classList.toggle('openfilterBox');
});
const closedfilters = document.getElementById('closedfilters');
closedfilters.addEventListener('click', () => {
    document.body.classList.toggle('openfilterBox');
});


