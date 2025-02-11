document.getElementById('new-customer-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const customerData = {};
    formData.forEach((value, key) => {
      customerData[key] = value;
    });

    const customers = JSON.parse(localStorage.getItem('customers')) || [];
    customers.push(customerData);
    localStorage.setItem('customers', JSON.stringify(customers));

    window.location.href = 'Cus.html';
  });

  document.getElementById('copy-billing').addEventListener('change', function () {
    const isChecked = this.checked;

    const billingFields = {
      address1: document.getElementById('billing-address1').value,
      address2: document.getElementById('billing-address2').value,
      address3: document.getElementById('billing-address3').value,
      city: document.getElementById('billing-city').value,
      province: document.getElementById('billing-province').value,
      postalCode: document.getElementById('billing-postal-code').value,
      country: document.getElementById('billing-country').value,
    };

    const shippingFields = {
      address1: document.getElementById('shipping-address1'),
      address2: document.getElementById('shipping-address2'),
      address3: document.getElementById('shipping-address3'),
      city: document.getElementById('shipping-city'),
      province: document.getElementById('shipping-province'),
      postalCode: document.getElementById('shipping-postal-code'),
      country: document.getElementById('shipping-country'),
    };

    if (isChecked) {
      Object.keys(shippingFields).forEach((key) => {
        shippingFields[key].value = billingFields[key];
        shippingFields[key].disabled = true;
      });
    } else {
      Object.keys(shippingFields).forEach((key) => {
        shippingFields[key].value = '';
        shippingFields[key].disabled = false;
      });
    }

    document.getElementById('shipping-address-fields').style.display = isChecked ? 'none' : 'block';
  });