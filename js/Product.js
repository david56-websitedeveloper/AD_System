// JavaScript to handle modal open/close

function openModal() {
    document.getElementById("productModal").style.display = "block";
}

function closeModal() {
    document.getElementById("productModal").style.display = "none";
}

function saveProduct() {
    const name = document.getElementById("name").value;
    const unitPrice = document.getElementById("unitPrice").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    const productDetails = {
        name: name,
        unitPrice: unitPrice,
        category: category,
        description: description
    };

    // Get existing products from local storage
    let products = JSON.parse(localStorage.getItem('products')) || [];

    // Add the new product to the list
    products.push(productDetails);

    // Save the updated list to local storage
    localStorage.setItem('products', JSON.stringify(products));

    // Update the content section
    updateContent();
    
    // Close modal after saving
    closeModal();
}

function updateContent() {
    const textContentDiv = document.getElementById("textContent");

    // Get product details from local storage
    const products = JSON.parse(localStorage.getItem('products')) || [];

    // Clear old content
    textContentDiv.innerHTML = '';

    if (products.length > 0) {
        products.forEach(product => {
            // Create new content
            const h2 = document.createElement("h2");
            h2.textContent = product.name;

            const p1 = document.createElement("p");
            p1.textContent = `Unit Price Rate: ${product.unitPrice}`;

            const p2 = document.createElement("p");
            p2.textContent = `Categorize Income As: ${product.category}`;

            const p3 = document.createElement("p");
            p3.textContent = product.description;

            // Append new content
            textContentDiv.appendChild(h2);
            textContentDiv.appendChild(p1);
            textContentDiv.appendChild(p2);
            textContentDiv.appendChild(p3);
        });
    } else {
        // Default content if no product details are saved
        const h2 = document.createElement("h2");
        h2.textContent = "Manage your products and services";

        const p = document.createElement("p");
        p.textContent = "Add and manage your product and service offerings to keep everything organized.";

        textContentDiv.appendChild(h2);
        textContentDiv.appendChild(p);
    }
}

// Update content on page load
window.onload = updateContent;

function goBack() {
    window.history.back();
}
