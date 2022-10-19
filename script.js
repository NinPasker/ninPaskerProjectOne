// targeting the links with the classes of mobile-menu
const menu = document.querySelectorAll('.mobile-menu');
// targeting the checkbox that opens the mobile menu
const checkbox = document.getElementById('toggle');
// targeting the contact us form 
const contactForm = document.querySelectorAll('.formInput');
// targeting the contact button
const contactButton = document.querySelector('.contactButton')

// close mobile menu when link is clicked
menu.forEach(e => {
    e.addEventListener('click', function() {
        checkbox.checked = false;
    })
})

// enabling and disabling button based on user input
contactForm.forEach(e => {
    e.addEventListener('input', function(e) {
        if (e.target.value === '') {
            contactButton.disabled = true;
        } else if (e.target.value.length >= 2) {
            contactButton.disabled = false;
        } else {
            contactButton.disabled = true;
        }
    })
})

