const addFromContacts = document.getElementById('add-from-contacts');
const contactsDialog = document.querySelector('.contacts-dialog');
const overlay = document.querySelector('.overlay');
const cancelDialog = document.getElementById('cancel-dialog');
const contactOptions = document.getElementById('contact-options');
const teraboxButton = document.getElementById('terabox');
const chooseContactButton = document.getElementById('choose-contact');
const saveButton = document.getElementById('save-btn');

// Open contacts dialog
addFromContacts.addEventListener('click', () => {
    contactsDialog.style.display = 'block';
    overlay.style.display = 'block';
});

// Close contacts dialog
cancelDialog.addEventListener('click', () => {
    contactsDialog.style.display = 'none';
    overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
    contactsDialog.style.display = 'none';
    overlay.style.display = 'none';
});

// Select a contact
contactOptions.addEventListener('click', function(e) {
    if (e.target.classList.contains('contact-option')) {
        const name = e.target.getAttribute('data-name');
        const phone = e.target.getAttribute('data-phone');
        const email = e.target.getAttribute('data-email');

        document.getElementById('name').value = name;
        document.getElementById('phone').value = phone;
        document.getElementById('email').value = email;

        contactsDialog.style.display = 'none';
        overlay.style.display = 'none';
    }
});

// TeraBox functionality placeholder
teraboxButton.addEventListener('click', () => {
    alert('TeraBox functionality is not implemented yet.');
});

// Add a new contact
document.getElementById('add-contact-btn').addEventListener('click', function () {
    const name = document.getElementById('new-contact-name').value.trim();
    const phone = document.getElementById('new-contact-phone').value.trim();
    const email = document.getElementById('new-contact-email').value.trim();

    if (name && phone && email) {
        const newContact = document.createElement('div');
        newContact.classList.add('contact-option');
        newContact.setAttribute('data-name', name);
        newContact.setAttribute('data-phone', phone);
        newContact.setAttribute('data-email', email);
        newContact.textContent = name;

        contactOptions.appendChild(newContact);

        document.getElementById('new-contact-name').value = '';
        document.getElementById('new-contact-phone').value = '';
        document.getElementById('new-contact-email').value = '';

        alert('New contact added successfully!');
    } else {
        alert('Please fill in all fields.');
    }
});

// Validate and save form
saveButton.addEventListener('click', function() {
    const requiredFields = [
        { id: 'name', name: 'Name' },
    ];
    let missingFields = [];

    requiredFields.forEach(field => {
        const value = document.getElementById(field.id).value.trim();
        if (!value) {
            missingFields.push(field.name);
        }
    });

    if (missingFields.length > 0) {
        alert(`Please fill in the following required fields:\n${missingFields.join(', ')}`);
    } else {
        alert('Supplier information saved!');
    }
});