
//editvechicle.html
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('edit-form');
    const urlParams = new URLSearchParams(window.location.search);
    const vehicleIndex = urlParams.get('index'); // Get the vehicle index from the URL

    if (vehicleIndex !== null) {
        const vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
        const vehicleData = vehicles[vehicleIndex];

        if (vehicleData) {
            // Populate the form with the retrieved data
            document.getElementById('make-model').value = vehicleData.makeModel;
            document.getElementById('year').value = vehicleData.year;
            document.getElementById('vehicleImage').value = vehicleData.vehicleImage;

            // Set the ownership radio button
            if (vehicleData.ownership === 'lease') {
                document.getElementById('lease').checked = true;
            } else {
                document.getElementById('own').checked = true;
            }

            document.getElementById('primary').checked = vehicleData.primary;
            document.getElementById('cost').value = vehicleData.cost;
            document.getElementById('purchase-date').value = vehicleData.purchaseDate;
            document.getElementById('service-date').value = vehicleData.serviceDate;
            document.getElementById('odometer-date').value = vehicleData.odometerDate;
            document.getElementById('odometer-value').value = vehicleData.odometerValue;
        } else {
            alert("Vehicle data not found.");
            // Optionally redirect back to Managevechicles.html
            window.location.href = "Managevechicles.html";
        }
    } else {
        alert("Vehicle index not provided.");
        window.location.href = "Managevechicles.html"; // Redirect if no index
    }


    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get updated form data
        const updatedVehicleData = {
            makeModel: document.getElementById('make-model').value,
            year: document.getElementById('year').value,
            vehicleImage: document.getElementById('vehicleImage').value,
            ownership: document.querySelector('input[name="ownership"]:checked').value,
            primary: document.getElementById('primary').checked,
            cost: document.getElementById('cost').value,
            purchaseDate: document.getElementById('purchase-date').value,
            serviceDate: document.getElementById('service-date').value,
            odometerDate: document.getElementById('odometer-date').value,
            odometerValue: document.getElementById('odometer-value').value,

        };

        // Update the vehicle data in localStorage
        vehicles[vehicleIndex] = updatedVehicleData;
        localStorage.setItem('vehicles', JSON.stringify(vehicles));

        // Redirect back to Managevechicles.html
        window.location.href = 'Managevechicles.html';
    });
});''
