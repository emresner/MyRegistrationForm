 // URL of the Mocky API
 const apiUrl = 'https://run.mocky.io/v3/9db59264-95cc-4e5c-99df-2d58f51affd2'; // Replace with your Mocky URL

 // Function to fetch data from the API and populate the dropdowns
 function populateDropdowns() {
     fetch(apiUrl)
         .then(response => response.json())
         .then(data => {
             // Populate Company dropdown
             const companySelect = document.getElementById('company');
             companySelect.innerHTML = ''; // Clear the "Loading..." option first
             data.companies.forEach(company => {
                 const option = document.createElement('option');
                 option.value = company.id;
                 option.textContent = company.name;
                 companySelect.appendChild(option);
             });

             // Populate Subject dropdown
             const subjectSelect = document.getElementById('subject');
             subjectSelect.innerHTML = ''; // Clear the "Loading..." option first
             data.subjects.forEach(subject => {
                 const option = document.createElement('option');
                 option.value = subject.id;
                 option.textContent = subject.title;
                 subjectSelect.appendChild(option);
             });
         })
         .catch(error => {
             console.error('Error fetching data:', error);
             alert('Failed to load data.');
         });
 }

 // Call the function to populate the dropdowns when the page loads
 window.onload = populateDropdowns;

// Function to validate the email
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|yahoo\.com)$/;
    return emailPattern.test(email);
}

// Function to validate the phone number
function validatePhoneNumber(phoneNumber) {
    // Check if phone number contains exactly 10 digits
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phoneNumber);
}

// Function to handle form submission and validate fields
function validateForm(event) {
    // Prevent form submission if validation fails
    event.preventDefault();

    // Get the email and phone number values
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone-number').value;

    // Validate email
    if (!validateEmail(email)) {
        alert('Please enter a valid email address (gmail.com, hotmail.com, yahoo.com)');
        return false; // Stop form submission
    }

    // Validate phone number
    if (!validatePhoneNumber(phoneNumber)) {
        alert('Please enter a valid phone number with exactly 10 digits');
        return false; // Stop form submission
    }

    // If both validations pass, submit the form
    alert('Form submitted successfully!');

    // To actually submit the form:
    document.querySelector('form').submit();
    return true; // Allow form submission
}

// Add event listener to form after DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', validateForm);
    }
});

const closeButtons = document.querySelectorAll('.close-ad');
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const ad = button.closest('.sticky-ad');
                ad.style.display = 'none';
            });
        });

        // JavaScript to close the ad
    function closeAd(adId) {
        var ad = document.getElementById(adId);
        ad.style.display = 'none'; // Hide the ad when the close button is clicked
    }