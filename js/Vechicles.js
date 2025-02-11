const dateInput = document.getElementById('info-date');
       

function toggleDateEdit() {
    dateInput.style.display = (dateInput.style.display === 'none' || dateInput.style.display === '') ? 'inline' : 'none';
    dateInput.focus();
}



dateInput.addEventListener('blur', function() {
    toggleDateEdit();
});


// input field 0 more-info activatevateinput 
document.getElementById("date-label").addEventListener("click", function() {
let dateLabel = document.getElementById("date-label");
let inputField = document.getElementById("info-date");

dateLabel.style.display = "none"; // Hide text
inputField.style.display = "block"; // Show input
inputField.focus(); // Focus on input
});

document.getElementById("info-date").addEventListener("blur", function() {
let dateLabel = document.getElementById("date-label");
let inputField = document.getElementById("info-date");

if (inputField.value.trim() === "") { // If empty, restore original text
dateLabel.style.display = "block";
inputField.style.display = "none";
}
});

//more info
document.querySelector(".more-info-link").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default action
    document.getElementById("infoModal").style.display = "block";
});

document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("infoModal").style.display = "none";
});


// more info
document.querySelector(".more-info-lnk").addEventListener("click", function () {
document.getElementById("infoPrimary").classList.add("show");
});

document.getElementById("closemodal").addEventListener("click", function () {
document.getElementById("infoPrimary").classList.remove("show");
});

window.addEventListener("click", function (event) {
var modal = document.getElementById("infoPrimary");
if (event.target == modal) {
modal.classList.remove("show");
}
});

// switch 
document.addEventListener("DOMContentLoaded", function () {
const primarySwitch = document.getElementById("primary");

primarySwitch.addEventListener("change", function () {
if (this.checked) {
    showModal();
}
});
});

function showModal() {
const modal = document.createElement("div");
modal.innerHTML = `
<div id="modalOverlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center;">
    <div style="background: white; padding: 20px; border-radius: 8px; text-align: center; width: 300px;">
        <h2>Change primary vehicle?</h2>
        <p>New trips you take will be attached to this vehicle. This won't affect your previously reviewed trips.</p>
        <button id="cancelBtn" style="margin-right: 10px; padding: 5px 10px; border: 1px solid black; background: white;">Never mind</button>
        <button id="confirmBtn" style="padding: 5px 10px; background: red; color: white; border: none;">Confirm</button>
    </div>
</div>
`;
document.body.appendChild(modal);

document.getElementById("cancelBtn").addEventListener("click", function () {
document.getElementById("modalOverlay").remove();
document.getElementById("primary").checked = false;
});

document.getElementById("confirmBtn").addEventListener("click", function () {
document.getElementById("modalOverlay").remove();
});
}


// Vechicles.html JavaScript

document.addEventListener('DOMContentLoaded', () => {
const form = document.querySelector('form');
const saveButton = document.querySelector('.save-button');

saveButton.addEventListener('click', (event) => {
event.preventDefault(); // Prevent form from actually submitting

// Get form data
const makeModel = document.getElementById('make-model').value;
const year = document.getElementById('year').value;
const vehicleImage = document.getElementById('vehicleImage').value;
const ownership = document.querySelector('input[name="ownership"]:checked').value;
const primary = document.getElementById('primary').checked;
const cost = document.getElementById('cost').value;
const purchaseDate = document.getElementById('purchase-date').value;
const serviceDate = document.getElementById('service-date').value;
const odometerDate = document.getElementById('date-label').textContent; // Get the displayed date
const odometerValue = document.getElementById('info-date').value;


// Store vehicle data in local storage (or send to server if needed)
const vehicleData = {
    makeModel: makeModel,
    year: year,
    vehicleImage: vehicleImage,
    ownership: ownership,
    primary: primary,
    cost: cost,
    purchaseDate: purchaseDate,
    serviceDate: serviceDate,
    odometerDate: odometerDate,
    odometerValue: odometerValue,
};

//Example using Local Storage.  Adjust as needed for your application.
let vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
vehicles.push(vehicleData);
localStorage.setItem('vehicles', JSON.stringify(vehicles));


// Redirect to Managevechicles.html (or update the page dynamically)
window.location.href = 'Managevechicles.html'; // Or update the page dynamically
});



//Modal for primary vehicle info
const primaryInfoIcon = document.querySelector('.more-info-lnk');
const primaryModal = document.getElementById('infoPrimary');
const closePrimaryModal = document.getElementById('closemodal');

primaryInfoIcon.addEventListener('click', () => {
primaryModal.style.display = 'block';
});

closePrimaryModal.addEventListener('click', () => {
primaryModal.style.display = 'none';
});



// Modal for odometer info
const moreInfoLink = document.querySelector('.more-info-link');
const infoModal = document.getElementById('infoModal');
const closeModal = document.getElementById('closeModal');

moreInfoLink.addEventListener('click', () => {
infoModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
infoModal.style.display = 'none';
});


//Odometer Date Display and Input Activation
const dateLabel = document.getElementById('date-label');
const infoDateInput = document.getElementById('info-date');

dateLabel.addEventListener('click', () => {
    infoDateInput.style.display = 'inline'; // Show the input field
    dateLabel.style.display = 'none';       // Hide the label
    infoDateInput.focus(); // Focus on the input field
});

infoDateInput.addEventListener('blur', () => {  //When the input loses focus
    if (infoDateInput.value.trim() !== "") { // Check if the input is not empty
        dateLabel.textContent = infoDateInput.value; // Update the label with the input value
    }
    infoDateInput.style.display = 'none'; // Hide the input field
    dateLabel.style.display = 'inline';   // Show the label again
});

infoDateInput.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        infoDateInput.blur(); // Trigger the blur event when Enter is pressed
    }
});


});
