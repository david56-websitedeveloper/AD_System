const addRowButton = document.getElementById('add-row');
const purchaseItems = document.getElementById('purchase-items');
const saveButton = document.getElementById('save-btn');

addRowButton.addEventListener('click', () => {
    const newRow = purchaseItems.insertRow();
    newRow.innerHTML = `
        <tr>
            <td><input type="text" name="product[]" required></td>
            <td><input type="number" name="quantity[]" value="1" required></td>
            <td><input type="number" name="unit_price[]" value="0" required></td>
            <td class="total">0</td>
            <td><button class="remove-row">Remove</button></td>
        </tr>
    `;
    addRemoveRowEventListeners(); // Attach event listeners to new remove buttons
    calculateTotals(); // Recalculate totals after adding a row
});


function addRemoveRowEventListeners() {
    const removeButtons = document.querySelectorAll('.remove-row');
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('tr').remove();
            calculateTotals(); // Recalculate totals after removing a row
        });
    });
}

function calculateTotals() {
    const rows = purchaseItems.querySelectorAll('tr');
    rows.forEach(row => {
        const quantity = row.querySelector('[name="quantity[]"]').value;
        const unitPrice = row.querySelector('[name="unit_price[]"]').value;
        const total = quantity * unitPrice;
        row.querySelector('.total').textContent = total;
    });
}

purchaseItems.addEventListener('input', calculateTotals);  // Recalculate on input change

addRemoveRowEventListeners(); // Attach listeners initially

saveButton.addEventListener('click', () => {
    // Perform save logic here.  You can collect the data from the form
    // and send it to a server or store it locally.
    alert("Purchase information saved (placeholder)"); // Placeholder alert
});