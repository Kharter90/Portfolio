// Function to show the selected section and hide others
function showSection(sectionId) {
    // Get all sections
    const sections = document.querySelectorAll('.content-section');

    // Loop through the sections and hide them
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
}

// Form handling: Submit the contact form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a thank you message (simple form response simulation)
    document.getElementById('formResponse').textContent = `Thank you, ${name}! We have received your message and will respond to ${email} shortly.`;

    // Clear the form after submission
    document.getElementById('contactForm').reset();
});
