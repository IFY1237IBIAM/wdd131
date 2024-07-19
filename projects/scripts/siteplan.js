document.addEventListener("DOMContentLoaded", function() {
    // Display the current year in the footer
    const yearSpan = document.createElement("span");
    yearSpan.textContent = new Date().getFullYear();
    document.querySelector("footer").append(` - ${yearSpan.textContent}`);
    
    // Example dynamic functionality: 
    // Add form submission handling, local storage usage, etc.
    
    // Form submission for Submit Your Story
    const storyForm = document.getElementById('storyForm');
    storyForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const story = document.getElementById('story').value;

        if(name && email && story) {
            alert('Your story has been submitted!');
            localStorage.setItem('story', JSON.stringify({ name, email, story }));
            storyForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Form submission for Contact Us
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if(name && email && message) {
            alert('Your message has been sent!');
            localStorage.setItem('contact', JSON.stringify({ name, email, message }));
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});
