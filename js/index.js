document.getElementById('clk-btn-1').addEventListener('click', function() {
    updateBalance('btn-first-1');
});

document.getElementById('clk-btn-2').addEventListener('click', function() {
    updateBalance('btn-second-1');
});

document.getElementById('clk-btn-3').addEventListener('click', function() {
    updateBalance('btn-third-1');
});

function updateBalance(buttonId) {
    // Get the current balance text and parse it
    let balanceText = document.querySelector(`#${buttonId}`).textContent.trim();
    let currentBalance = parseFloat(balanceText) || 0; // Default to 0 if parsing fails

    // Get the donation amount from the corresponding input field
    let donationInput = document.querySelector(`#${buttonId}`).closest('.flex-grow').querySelector('.input');
    let donationAmount = parseFloat(donationInput.value); // Try to parse as a float

    // Validate the donation amount
    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert('Invalid donation');
        return; // Exit if the input is invalid
    }

    // Get the total money available and parse it
    let totalMoneyText = document.getElementById('Total-money').textContent.trim();
    let totalMoney = parseFloat(totalMoneyText) || 0;

    // Check if the donation can be made
    if (donationAmount > totalMoney) {
        alert('Insufficient funds. You cannot donate more than the available amount.');
        return;
    }

    // Update the balance
    let newBalance = currentBalance + donationAmount;

    // Update the button text with the new balance
    document.querySelector(`#${buttonId}`).innerHTML = `<img src="coin.png" alt=""> ${newBalance} BDT`;

    // Update the total money by subtracting the donation amount
    let newTotalMoney = totalMoney - donationAmount;
    document.getElementById('Total-money').textContent = `${newTotalMoney} BDT`;

    // Show the modal with a success message
    document.getElementById('modal-title').textContent = 'Donation Successful!';
    document.getElementById('modal-message').textContent = `Thank you for your contribution of ${donationAmount} BDT.`;
    document.getElementById('my_modal_6').checked = true; // Open the modal

    // Clear the input field
    donationInput.value = '';
}







