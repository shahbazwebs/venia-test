localStorage.setItem('shoppingCart', '{}');

function imageLoaded(imgElement) {
    const loader = imgElement.previousElementSibling;
    loader.style.display = "none";
    imgElement.style.display = "block";
}

const addButton = document.getElementById('isMobileMenu');
addButton.addEventListener('click', () => {
    document.body.classList.toggle('isMobileMenuOpend');
});
const removeButton = document.getElementById('removeButtons');
removeButton.addEventListener('click', () => {
    document.body.classList.toggle('isMobileMenuOpend');
});