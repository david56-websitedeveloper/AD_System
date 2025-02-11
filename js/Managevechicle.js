//close-btn
document.querySelector('.close-btn').addEventListener('click', function() {
    window.history.back();
});

//Manangae vechicles ''
document.addEventListener('DOMContentLoaded', () => {
            const vehicleList = document.getElementById('vehicleList');

            // Retrieve vehicle data from local storage
            const vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];

            // Display vehicle names in the list
            vehicles.forEach((vehicle, index) => {
                const listItem = document.createElement('li');
                listItem.classList.add('vehicle-item');
                listItem.textContent = vehicle.makeModel; // Display the make and model

                // Add a click event listener to each vehicle name
                listItem.addEventListener('click', () => {
                    // Redirect to Editvechile.html, passing the vehicle index
                    window.location.href = `Editvechile.html?index=${index}`;
                });


                vehicleList.appendChild(listItem);
            });
        });