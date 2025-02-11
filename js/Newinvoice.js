let subtotal = 0;

   


// Update subtotal and totals
function updateTotals(price) {
    subtotal += price;
    document.querySelector(".totals div:nth-child(2) strong").textContent = `NRs ${subtotal.toFixed(2)}`;
    document.querySelector(".totals div:nth-child(3) strong").textContent = `NRs ${subtotal.toFixed(2)}`;
}

// Validate due date
document.getElementById("due-date").addEventListener("change", function () {
    const date = new Date(document.getElementById("date").value);
    const dueDate = new Date(this.value);
    if (dueDate < date) {
        alert("Due date cannot be earlier than the invoice date.");
        this.value = date.toISOString().split("T")[0];
    }
});

// Save invoice details to localStorage
function saveInvoice() {
    const customer = document.getElementById("customer").value;
    const invoiceNumber = document.getElementById("invoice-number").value;
    const date = document.getElementById("date").value;
    const dueDate = document.getElementById("due-date").value;
    const messageToCustomer = document.getElementById("message-to-customer").value;
    const messageOnStatement = document.getElementById("message-on-statement").value;

    const invoice = {
        customer,
        invoiceNumber,
        date,
        dueDate,
        messageToCustomer,
        messageOnStatement,
        products: getProductDetails() // Function to get all product details from the table
    };

    // Get existing invoices from localStorage
    let invoices = JSON.parse(localStorage.getItem('invoices')) || [];

    // Push the new invoice
    invoices.push(invoice);

    // Save the updated invoices array to localStorage
    localStorage.setItem('invoices', JSON.stringify(invoices));

    // Save the individual invoice details to localStorage
    localStorage.setItem('invoiceDetails', JSON.stringify({
        customer,
        invoiceNumber,
        date,
        dueDate,
        messageToCustomer,
        messageOnStatement,
        products: getProductDetails() // Function to get all product details from the table
    }));

    alert("Invoice saved successfully!");
}




// Attach saveInvoice to header button
document.querySelector(".header button").addEventListener("click", saveInvoice);

// Redirect to customer page
function redirectToCustomer() {
    // First, fetch customer data from Cus.html
    fetch('Cus.html')
        .then(response => response.text())
        .then(data => {
            // Assuming the customer name is the content of the HTML file
            document.getElementById('customer').value = data;

            // Then, redirect to Cus.html
            window.location.href = "Cus.html";
        })
        .catch(error => {
            console.error('Error fetching customer data:', error);
            // Redirect to Cus.html even if fetching fails
            window.location.href = "Cus.html";
        });
}
// Redirect to customer page
function redirectToProduct() {
    window.location.href = "Product.html";
}


function saveData() {
    const customer = document.getElementById('customer').value;
    const invoiceNumber = document.getElementById('invoice-number').value;
    const date = document.getElementById('date').value;
    const dueDate = document.getElementById('due-date').value;
    const messageToCustomer = document.getElementById('message-to-customer').value;
    const messageOnStatement = document.getElementById('message-on-statement').value;
  
    // Store the data in localStorage
    const invoiceData = {
      customer: customer,
      invoiceNumber: invoiceNumber,
      date: date,
      dueDate: dueDate,
      messageToCustomer: messageToCustomer,
      messageOnStatement: messageOnStatement,
      // Add other data as needed (products, totals, etc.)
    };
  
    localStorage.setItem('invoiceData', JSON.stringify(invoiceData));
  
    // Redirect to Invdetails.html
    window.location.href = '/html/Invdetails.html'; // Adjust path if needed
  }
  
  function redirectToCustomer() {
    // Redirect to the customer page (replace with your actual path)
    window.location.href = '/html/Cus.html'; // Example path
  }
  
  function redirectToProduct() {
    // Redirect to the product page (replace with your actual path)
    window.location.href = '/html/Product.html'; // Example path

    // Alert the user that data has been saved
    alert("Invoice data saved successfully!");
}