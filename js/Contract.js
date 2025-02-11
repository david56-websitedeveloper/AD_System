   // Open the modal
   function openContactsModal() {
    document.getElementById('contacts-modal').classList.add('active');
}

// Close the modal
function closeContactsModal() {
    document.getElementById('contacts-modal').classList.remove('active');
}

// Select a contact and fill the fields
function selectContact(name, phone, email) {
    document.getElementById('name').value = name;
    document.getElementById('phone').value = phone;
    document.getElementById('email').value = email;
    closeContactsModal();
}

// Save button functionality
document.getElementById('save-btn').addEventListener('click', function() {
    alert('Supplier information saved!');
});