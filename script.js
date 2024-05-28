document.querySelectorAll('.packageCard .package-container1, .packageCard .package-container2').forEach(packageElement => {
    const minusButton = packageElement.querySelector('.minus');
    const plusButton = packageElement.querySelector('.plus');
    const priceElement = packageElement.querySelector('.price');
    const roomsElement = packageElement.querySelector('.rooms');
    const signupButton = packageElement.querySelector('.sign-up, .sign-up2');
    const thankYouMessage = packageElement.querySelector('.thank-you-message');
    const selectedRoomsElement = packageElement.querySelector('.selected-rooms');
    
    let rooms = 1;
    const basePrice = parseInt(priceElement.dataset.price);
    
    minusButton.addEventListener('click', () => {
        if (rooms > 1) {
            rooms--;
            updateUI();
        }
    });

    plusButton.addEventListener('click', () => {
        rooms++;
        updateUI();
    });

    signupButton.addEventListener('click', () => {
        selectedRoomsElement.textContent = rooms;
        thankYouMessage.style.display = 'block';
    });

    function updateUI() {
        roomsElement.textContent = `${rooms} room${rooms > 1 ? 's' : ''}`;
        priceElement.textContent = rooms * basePrice;
    }
});



//----------------------------------------------

document.getElementById('contactForm').addEventListener('submit', function(event) {
    let isValid = true;
    let errorMessage = "";

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "") {
        isValid = false;
        alert('Field cannot be empty')
    }

    if (email === "") {
        isValid = false;
        alert('Field cannot be empty')
    }

    if (message === "") {
        isValid = false;
        alert('Field cannot be empty')
    }

    if (!isValid) {
        event.preventDefault();
        document.getElementById('error-message').textContent = errorMessage;
        document.getElementById('error-message').style.display = 'block';
    } else {
        alert("Form submitted successfully!");
    }
});
