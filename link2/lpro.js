
const emailInput = document.querySelector('input[name="EmailAddress"]');


const openPopupButton = document.getElementById('openPopupButton');


const closePopupButton = document.getElementById('closePopup');


const popup = document.getElementById('popup');


function showPopup() {
    
    if (emailInput.value.trim() !== '') {
        
        popup.style.display = 'block';
    } else {
        
        alert('Please enter your email address.');
    }
}


function closePopup() {
    popup.style.display = 'none';
}


openPopupButton.addEventListener('click', showPopup);


closePopupButton.addEventListener('click', closePopup);