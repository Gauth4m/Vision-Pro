// Get the input element
const emailInput = document.querySelector('input[name="EmailAddress"]');

// Get the button element
const openPopupButton = document.getElementById('openPopupButton');

// Get the close button element
const closePopupButton = document.getElementById('closePopup');

// Get the popup element
const popup = document.getElementById('popup');

// Function to show the popup
function showPopup() {
    // Check if the email input is not empty
    if (emailInput.value.trim() !== '') {
        // Show the popup
        popup.style.display = 'block';
    } else {
        // Email is empty, do nothing or provide feedback to the user
        alert('Please enter your email address.');
    }
}

// Function to close the popup
function closePopup() {
    popup.style.display = 'none';
}

// Add a click event listener to the open button
openPopupButton.addEventListener('click', showPopup);

// Add a click event listener to the close button
closePopupButton.addEventListener('click', closePopup);