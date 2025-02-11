// Section navigation
const mainSection = document.getElementById('mainSection');



const createInvoiceSection = document.getElementById('createInvoiceSection');



document.getElementById('createInvoiceBtn').addEventListener('click', function () {
    mainSection.classList.add('hidden');
    createInvoiceSection.classList.remove('hidden');
});





document.getElementById('backToMainFromInvoice').addEventListener('click', function () {
    createInvoiceSection.classList.add('hidden');
    mainSection.classList.remove('hidden');
});

// Load invoices from localStorage
function loadInvoices() {
    const invoiceList = document.getElementById('invoiceList');
    invoiceList.innerHTML = ''; // Clear existing invoices
    const invoices = JSON.parse(localStorage.getItem('invoices')) || [];
    invoices.forEach((invoice, index) => {
        const div = document.createElement('div');
        div.className = 'invoice-info';
        div.innerHTML = `
            <p><strong>Invoice created for ${invoice.name}</strong>: $${invoice.amount}</p>
            <button onclick="sendInvoice(${index})">Send Invoice</button>
        `;
        invoiceList.appendChild(div);
    });
}

// Save new invoice
document.getElementById('saveInvoiceBtn').addEventListener('click', function () {
    const name = document.getElementById('clientName').value;
    const amount = document.getElementById('invoiceAmount').value;
    if (!name || !amount) {
        alert('Please fill in all fields.');
        return;
    }
    const invoices = JSON.parse(localStorage.getItem('invoices')) || [];
    invoices.push({ name, amount });
    localStorage.setItem('invoices', JSON.stringify(invoices));
    alert('Invoice saved successfully!');
    createInvoiceSection.classList.add('hidden');
    mainSection.classList.remove('hidden');
    loadInvoices();
});

// Send invoice (alert for now)
function sendInvoice(index) {
    alert(`Invoice ${index + 1} sent successfully!`);
}

// Load invoices on page load
window.onload = loadInvoices;