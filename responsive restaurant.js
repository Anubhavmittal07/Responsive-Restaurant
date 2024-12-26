// JavaScript for simple interactivity

document.addEventListener("DOMContentLoaded", () => {
    // Add event listener for form submission
    const contactForm = document.querySelector("form");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent actual form submission

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        alert(`Thank you, ${name}! We have received your feedback.`);
        
        // Clear the form
        contactForm.reset();
    });
});
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Sign-up successful!');
    signupForm.reset();
});
