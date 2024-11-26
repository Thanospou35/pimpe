// Récupérer tous les boutons + et - pour chaque article
document.querySelectorAll('.btn-plus').forEach(button => {
    button.addEventListener('click', function() {
        let quantiteSpan = this.previousElementSibling; 
        let quantite = parseInt(quantiteSpan.textContent);
        quantiteSpan.textContent = quantite + 1;
        updatePrice(this); 
    });
});

document.querySelectorAll('.btn-moins').forEach(button => {
    button.addEventListener('click', function() {
        let quantiteSpan = this.nextElementSibling; 
        let quantite = parseInt(quantiteSpan.textContent);
        if (quantite > 1) {
            quantiteSpan.textContent = quantite - 1; 
            updatePrice(this); 
        }
    });
});

// pour mettre le prix total
function updatePrice(button) {
    let itemDiv = button.closest('.homer') || button.closest('.homer-2'); 
    let quantiteSpan = itemDiv.querySelector('.quantity-one'); 
    let quantite = parseInt(quantiteSpan.textContent); 
    let priceText = itemDiv.querySelector('.item-price');
    let price = parseFloat(priceText.textContent.replace('Price: $', '')); 
    priceText.textContent = 'Price: $' + (price + quantite).toFixed(1); 
}

document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.parentElement.remove(); // Supprimer l'élément du DOM
    });
});
