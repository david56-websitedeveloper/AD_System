function filterList() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const items = document.querySelectorAll('.list-item');

    items.forEach(item => {
        const name = item.getAttribute('data-name').toLowerCase();
        if (name.includes(searchValue)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

function selectBank(bankName) {
    document.getElementById('search-container').style.display = 'none';
    document.getElementById('account-page').style.display = 'block';
    document.getElementById('bank-name').textContent = `Account Name: ${bankName}`;
}

function goBack() {
    document.getElementById('account-page').style.display = 'none';
    document.getElementById('search-container').style.display = 'block';
}

document.getElementById('connect-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const bankName = document.getElementById('bankName').value;
    const accountNumber = document.getElementById('accountNumber').value;

    if (bankName && accountNumber) {
        // Store the account details in localStorage
        localStorage.setItem('connectedBank', JSON.stringify({
            bankName: bankName,
            accountNumber: accountNumber
        }));
        // Redirect to Transactions page
        window.location.href = 'Transcations.html';
    } else {
        alert("Please fill in all fields.");
    }
});