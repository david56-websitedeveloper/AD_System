let subtotal = 0;

function openModal() {
    document.getElementById('product-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
    document.getElementById('product-name').value = '';
    document.getElementById('unit-price').value = '';
    document.getElementById('category').value = '';
    document.getElementById('description').value = '';
}

function saveProduct() {
    const productName = document.getElementById('product-name').value;
    const unitPrice = parseFloat(document.getElementById('unit-price').value);

    if (productName && !isNaN(unitPrice)) {
        const product = document.createElement('div');
        product.style.marginBottom = '10px';
        product.textContent = `${productName} - NRs ${unitPrice.toFixed(2)}`;
        document.getElementById('products').appendChild(product);

        subtotal += unitPrice;
        document.getElementById('subtotal').textContent = `NRs ${subtotal.toFixed(2)}`;
        document.getElementById('total').textContent = `NRs ${subtotal.toFixed(2)}`;

        closeModal();
    } else {
        alert("Please fill in all required fields correctly.");
    }
}