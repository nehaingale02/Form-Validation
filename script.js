document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
    // Prevent the default form submission action
        event.preventDefault();
    // Call the validateForm function to validate the form inputs
        validateForm();
    });

    function validateForm() {
        let isValid = true;

        // Clear previous errors
        document.querySelectorAll('.error').forEach(error => error.textContent = '');

        // Validate Full Name
        const fullName = document.getElementById('fullName').value;
        if (fullName.length < 5) {
            document.getElementById('fullNameError').textContent = "*Full Name must be at least 5 characters long.";
            isValid = false;
        }

        // Validate Email
        const email = document.getElementById('email').value;
        if (!email.includes('@')) {
            document.getElementById('emailError').textContent = "*Enter a valid email address.";
            isValid = false;
        }

        // Validate Phone Number
        const phone = document.getElementById('phone').value;
        if (phone === "123456789" || phone.length !== 10 || isNaN(phone)) {
            document.getElementById('phoneError').textContent = "*Enter a valid 10-digit phone number.";
            isValid = false;
        }

        // Validate Password
        const password = document.getElementById('password').value;
        if (password === "password" || password === fullName || password.length < 8) {
            document.getElementById('passwordError').textContent = "*Password must be at least 8 characters and should not be 'password' or your full name.";
            isValid = false;
        }

        // Validate Confirm Password
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (password !== confirmPassword) {
            document.getElementById('confirmPasswordError').textContent = "*8Passwords do not match.";
            isValid = false;
        }

        // If all validations pass, show a success alert
        if (isValid) {
            alert('Form submitted successfully!');
        }
    }
});
