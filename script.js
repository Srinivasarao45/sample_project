const toggleButton = document.getElementById('toggle-button');
const navbar = document.getElementById('navbar');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('show');
});
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    fetch(this.action, {
        method: 'POST',
        body: new FormData(this),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Form submitted successfully!');
            this.reset(); // Clear the form fields
        } else {
            alert('There was a problem with the submission. Please try again.');
        }
    }).catch(error => {
        alert('There was a problem with the submission. Please try again.');
    });
});
