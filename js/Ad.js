// Quick Action Functions
function addInvoice() { alert("Navigating to Invoice page..."); }
function addExpense() { alert("Navigating to Expense page..."); }
function addSupplier() { alert("Navigating to Supplier page..."); }
function addSalesReceipt() { alert("Navigating to Sales Receipt page..."); }
function addTakePay() { alert("Navigating to Take Pay page..."); }
function addCustomer() { alert("Navigating to Customer page..."); }
function addEstimate() { alert("Navigating to Estimate page..."); }
function addWorker() { alert("Navigating to Worker page..."); }

// To-Do Functions
function linkAccount() { alert("Linking your account..."); }
function createInvoice() { alert("Creating your first invoice..."); }
function tryOnComputer() { alert("Trying AD Furniture on your computer..."); }

// Footer Functions
function viewAllActivity() { alert("Viewing all activities..."); }
function goToToday() { alert("Navigating to today's tasks..."); }
function openMenu() { alert("Opening the menu..."); }

// Help Function
function showHelp() { alert("Help is on the way!"); }

// Page Loaded
document.addEventListener("DOMContentLoaded", () => { console.log("Dashboard is loaded and interactive!"); });

  // Parse query parameters to get user data
  document.addEventListener("DOMContentLoaded", function() {
        const params = new URLSearchParams(window.location.search);
        const username = params.get('username');
        const profileImageSrc = params.get('image');

        if (!username || !profileImageSrc) {
            alert('No user logged in.');
            window.location.href = 'login.html'; // Redirect if no user is logged in
        } else {
            document.getElementById('username').innerText = username;
            document.getElementById('profileImage').src = profileImageSrc; // Fixed profileImage assignment
        }

        // Dropdown Toggle
        document.getElementById('dropdownButton').addEventListener('click', function(event) {
            var dropdown = document.getElementById('dropdown');
            dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
            event.stopPropagation();
        });

        // Close Dropdown on Click Outside
        document.addEventListener('click', function(event) {
            var dropdown = document.getElementById('dropdown');
            if (dropdown.style.display === 'block' && !dropdown.contains(event.target) && event.target.id !== 'dropdownButton') {
                dropdown.style.display = 'none';
            }
        });

        // Profile Image Upload
        document.getElementById('profile-image').addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('profileImage').src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    });

    // complete to do tasks

    document.addEventListener("DOMContentLoaded", function () {
fetch('/api/task-status') // Update with your actual backend API
  .then(response => response.json())
  .then(data => {
    if (data.linkAccountCompleted) {
      document.getElementById("link-account").style.display = "none";
    }
    if (data.createInvoiceCompleted) {
      document.getElementById("create-invoice").style.display = "none";
    }
  })
  .catch(error => console.error("Error fetching task status:", error));
});


// Extract query parameters
const urlParams = new URLSearchParams(window.location.search);
    const companyName = urlParams.get('companyName');

    // Display company name on the page
    if (companyName) {
        document.getElementById('company-name-header').textContent = companyName;
        const contentDiv = document.getElementById('content');
        const companyNameElement = document.createElement('p');
        companyNameElement.textContent = `Company: ${companyName}`;
        contentDiv.appendChild(companyNameElement);
    }
