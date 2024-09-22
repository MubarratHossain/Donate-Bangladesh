// Event listeners for the "Donate Now" buttons
document.getElementById('clk-btn-1').addEventListener('click', function() {
    updateBalance('btn-first-1');
});

document.getElementById('clk-btn-2').addEventListener('click', function() {
    updateBalance('btn-second-1');
});

document.getElementById('clk-btn-3').addEventListener('click', function() {
    updateBalance('btn-third-1');
});

// Function to update the balance and handle donations
function updateBalance(buttonId) {
    // Get the current balance text and parse it as a float
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

    // Update the individual balance for the specific donation button
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

    // Clear the input field after donation
    donationInput.value = '';
}
// Get the buttons, sections, and footer by their IDs
const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');
const donationSection = document.getElementById('donation-section');
const historySection = document.getElementById('history-section');
const footer = document.getElementById('site-footer');

// Add event listeners for button clicks to toggle sections
donationBtn.addEventListener('click', function() {
    // Show donation section and hide history section
    donationSection.classList.remove('hidden');
    historySection.classList.add('hidden');
    
    // Show the footer when the donation section is active
    footer.classList.remove('hidden');

    // Change button colors to indicate active/inactive states
    donationBtn.style.backgroundColor = '#B4F461';
    historyBtn.style.backgroundColor = '#1111110D';
});

historyBtn.addEventListener('click', function() {
    // Show history section and hide donation section
    historySection.classList.remove('hidden');
    donationSection.classList.add('hidden');

    // Hide the footer when the history section is active
    footer.classList.add('hidden');

    // Change button colors to indicate active/inactive states
    historyBtn.style.backgroundColor = '#B4F461';
    donationBtn.style.backgroundColor = '#1111110D';
});










