// In-memory simulated database
const database = [
    { username: "JohnDoe", email: "john@example.com", password: "12345", companyId: "ABC123", companyName: "AD Furniture", profileImage: "john.jpg" },
    { username: "JaneSmith", email: "jane@example.com", password: "54321", companyId: "XYZ987", companyName: "AC Furniture", profileImage: "jane.jpg" },
];

// Handle login functionality
function handleLogin() {
    const usernameOrEmail = document.getElementById("usernameOrEmail").value;
    const password = document.getElementById("login-password").value;
    const companyId = document.getElementById("company-id").value;
    const companyName = document.getElementById("company-name").value;

    const user = database.find(
        (user) => (user.username === usernameOrEmail || user.email === usernameOrEmail) 
        && user.password === password && user.companyId === companyId && user.companyName === companyName
    );

    if (user) {
        alert(`Welcome back, ${usernameOrEmail}!`);
        const params = new URLSearchParams({ username: user.username, image: user.profileImage, companyName: user.companyName });
        window.location.href = `index.html?${params}`; // Redirect to index.html with user parameters
    } else {
        alert("Invalid username/email, password, company ID, or company Name.");
        document.getElementById('error-message').classList.remove('hidden');
    }
}

// Keyboard Enter key triggers login
document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll("#usernameOrEmail, #login-password, #company-id, #company-name");
    
    inputs.forEach(input => {
        input.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                handleLogin();
            }
        });
    });
});

// Show the create account form
function showCreateAccount() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('create-account-form').classList.remove('hidden');
}

// Show the forgot password form
function showForgotPassword() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('forgot-password-form').classList.remove('hidden');
}

// Go back to the login form
function goBack() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('create-account-form').classList.add('hidden');
    document.getElementById('forgot-password-form').classList.add('hidden');
}

// Handle create account functionality
function handleCreateAccount() {
    const username = document.getElementById('new-username').value;
    const email = document.getElementById('new-email').value;
    const password = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const companyId = document.getElementById('new-company-id').value;
    const companyName = document.getElementById('new-company-name').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (!isPasswordValid(password)) {
        alert("Password must be at least 8 characters long and include at least one number and one letter.");
        return;
    }

    // Save user to database
    database.push({ username, email, password, companyId, companyName });

    // Switch back to login form without showing an alert
    goBack();
}

// Add event listener to trigger account creation when Enter is pressed
document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll("#new-username, #new-email, #new-password, #confirm-password, #new-company-id, #new-company-name");

    inputs.forEach(input => {
        input.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault(); // Prevent form submission
                handleCreateAccount();
            }
        });
    });
});

// Handle forgot password functionality
let generatedCode = "123456"; // This should be generated and sent via backend
        
        function handleForgotPassword() {
            const email = document.getElementById('recovery-email').value.trim();
            if (!email) {
                alert("Please enter your email before submitting.");
                return;
            }
            alert(`Password recovery code sent to: ${email}`);
            document.getElementById('forgot-password-form').classList.add('hidden');
            document.getElementById('codeContainer').classList.remove('hidden');
        }

// Handle verify code

        function handleVerifyCode() {
            const code = document.getElementById('recovery-code').value.trim();
            if (!code) {
                alert("Please enter the recovery code.");
                return;
            }
            if (code !== generatedCode) {
                alert("Invalid code. Please try again.");
                return;
            }
            alert("Code verified! Proceed to create a new password.");
            document.getElementById('codeContainer').classList.add('hidden');
            document.getElementById('newPasswordContainer').classList.remove('hidden');
        }

        // handle new password

        function handleNewPassword() {
            const newPassword = document.getElementById('new-password').value.trim();
            const confirmPassword = document.getElementById('confirm-password').value.trim();
            
            if (!newPassword || !confirmPassword) {
                alert("Please fill in both password fields.");
                return;
            }
            if (newPassword !== confirmPassword) {
                alert("Passwords do not match. Please try again.");
                return;
            }
            
            alert("Password successfully changed! Redirecting to login page.");
            window.location.href = "index.html";
        }

// Listen for Enter key press in login form
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        handleLogin();
    }
});

// Toggle password visibility
function togglePasswordVisibility(id) {
    const passwordField = document.getElementById(id);
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
}

// Validate password strength
function isPasswordValid(password) {
    const minLength = 8;
    const hasNumber = /\d/;
    const hasLetter = /[a-zA-Z]/;

    return password.length >= minLength && hasNumber.test(password) && hasLetter.test(password);
}