const modals = document.querySelectorAll('.modal');
const addWorkerModal = document.getElementById('add-worker-modal');
const sendMessageModal = document.getElementById('send-message-modal');
const attendanceModal = document.getElementById('attendance-modal');
const leaveApplicationModal = document.getElementById('leave-application-modal');
const workerContainer = document.querySelector('.worker-container');

document.querySelector('.add-btn').addEventListener('click', () => {
    addWorkerModal.classList.remove('hidden');
});

document.querySelector('.send-msg-btn').addEventListener('click', () => {
    sendMessageModal.classList.remove('hidden');
});

document.querySelector('.attendance-btn').addEventListener('click', () => {
    attendanceModal.classList.remove('hidden');
});

document.querySelector('.leave-app-btn').addEventListener('click', () => {
    leaveApplicationModal.classList.remove('hidden');
});

modals.forEach(modal => {
    modal.querySelector('.close-btn').addEventListener('click', () => {
        modal.classList.add('hidden');
    });
});

document.getElementById('add-worker-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const workerName = document.getElementById('worker-name').value;
    const workerEmail = document.getElementById('worker-email').value;
    const workerPhone = document.getElementById('worker-phone').value;
    const workerImageInput = document.getElementById('worker-image');

    const newWorkerCard = document.createElement('div');
    newWorkerCard.classList.add('worker-card');

    if (workerImageInput.files && workerImageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            newWorkerCard.innerHTML = `
                <div class="worker-header">
                    <div class="profile-pic" style="background-image: url('${e.target.result}')"></div>
                    <span class="view">View</span>
                </div>
                <div class="worker-info">
                    <p class="name">${workerName}</p>
                    <p class="id">#00000</p>
                    <p class="email">${workerEmail}</p>
                    <p class="phone">${workerPhone}</p>
                </div>
                <button class="btn message-btn">Message</button>
                <button class="btn remove-btn">Remove</button>
            `;

            // Add event listeners AFTER setting innerHTML
            addCardEventListeners(newWorkerCard);

            workerContainer.appendChild(newWorkerCard);
            alert('Worker added successfully!');
        };
        reader.readAsDataURL(workerImageInput.files[0]);
    } else {
        newWorkerCard.innerHTML = `
            <div class="worker-header">
                <div class="profile-pic"></div>
                <span class="view">View</span>
            </div>
            <div class="worker-info">
                <p class="name">${workerName}</p>
                <p class="id">#00000</p>
                <p class="email">${workerEmail}</p>
                <p class="phone">${workerPhone}</p>
            </div>
            <button class="btn message-btn">Message</button>
            <button class="btn remove-btn">Remove</button>
        `;

        addCardEventListeners(newWorkerCard);

        workerContainer.appendChild(newWorkerCard);
        alert('Worker added successfully!');
    }

    document.getElementById('add-worker-form').reset();
    addWorkerModal.classList.add('hidden');
});

// Function to add event listeners to a worker card (same as before)
function addCardEventListeners(card) {
    // ... (remove button functionality - same as before)
    card.querySelector('.remove-btn').addEventListener('click', () => {
        card.remove(); // Remove the card from the DOM
        // Here you would also want to send a request to the server to delete the worker
        const workerName = card.querySelector('.name').textContent; //Get the name of the worker to be deleted
        fetch(`/workers/${workerName}`, { // Replace with your actual API endpoint
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                console.log('Worker deleted successfully from server.');
                // Any additional client-side cleanup if needed
            } else {
                console.error('Error deleting worker:', response.status);
                // Handle errors, perhaps re-add the card to the UI or show a message
                alert("Error deleting worker. Please try again.")
            }
        })
        .catch(error => {
            console.error('Error deleting worker:', error);
            alert("Error deleting worker. Please try again.")
        });
    });
    

    card.querySelector('.view').addEventListener('click', () => {
        const workerViewModal = document.getElementById('worker-view-modal');
        workerViewModal.classList.remove('hidden');

        const modalName = workerViewModal.querySelector('#view-worker-name');
        const modalEmail = workerViewModal.querySelector('#view-worker-email');
        const modalPhone = workerViewModal.querySelector('#view-worker-phone');
        const modalImage = workerViewModal.querySelector('#view-worker-image');
        const modalImageInput = workerViewModal.querySelector('#edit-worker-image'); // New file input for editing image

        const name = card.querySelector('.name').textContent;
        const email = card.querySelector('.email').textContent;
        const phone = card.querySelector('.phone').textContent;
        const imageSrc = card.querySelector('.profile-pic').style.backgroundImage.slice(5, -2);

        modalName.value = name;
        modalEmail.value = email;
        modalPhone.value = phone;
        modalImage.src = imageSrc;
        modalImageInput.value = ''; // Clear the file input

        // Handle image change in the modal
        modalImageInput.addEventListener('change', (event) => {
            if (event.target.files && event.target.files[0]) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    modalImage.src = e.target.result;
                }
                reader.readAsDataURL(event.target.files[0]);
            }
        });

        const saveButton = workerViewModal.querySelector('#save-worker-changes');
        saveButton.addEventListener('click', () => {
            const updatedName = modalName.value;
            const updatedEmail = modalEmail.value;
            const updatedPhone = modalPhone.value;
            const updatedImageFile = modalImageInput.files[0]; // Get the new image file

            card.querySelector('.name').textContent = updatedName;
            card.querySelector('.email').textContent = updatedEmail;
            card.querySelector('.phone').textContent = updatedPhone;

            // Update the card's image (if a new image was selected)
            if (updatedImageFile) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    card.querySelector('.profile-pic').style.backgroundImage = `url('${e.target.result}')`;
                }
                reader.readAsDataURL(updatedImageFile);
            }

            // ... (Send updated data, including the image, to backend)
            // You'll likely need to use FormData to send the image file
            const formData = new FormData();
            formData.append('name', updatedName);
            formData.append('email', updatedEmail);
            formData.append('phone', updatedPhone);
            if (updatedImageFile) {
                formData.append('image', updatedImageFile); // Append the image file
            }
            // ... append other data

            fetch(`/workers/${workerId}`, { // Replace workerId with the actual ID
                method: 'PUT', // Or PATCH
                body: formData // Send FormData
            })
            .then(response => {
                if (response.ok) {
                    alert('Worker updated successfully!');
                } else {
                    // Handle errors
                    console.error("Error updating worker:", response.status);
                }
            });

            workerViewModal.classList.add('hidden');
        });

        const closeViewButton = workerViewModal.querySelector('#close-worker-view');
        closeViewButton.addEventListener('click', () => {
            workerViewModal.classList.add('hidden');
        });

        
    });
    
    
    // Add message button functionality (if needed)
    card.querySelector('.message-btn').addEventListener('click', () => {
        sendMessageModal.classList.remove('hidden');
        // ... (your code to pre-fill the message modal)
    });

    
}


document.getElementById('send-message-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent!');
    sendMessageModal.classList.add('hidden');
});

document.getElementById('leave-application-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Leave application submitted!');
    leaveApplicationModal.classList.add('hidden');
});



 