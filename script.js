/* Message to the Reader/Reviewer

This project has very little js functionality added to it

Most of the hamburger menu was implemented through CSS/SaaS, only had to add a loop & eventListener to listen for a click on any of the links on the menu.

Added some enabling/disabling features to the contact form which I learned from my side project which is linked below if you'd like to take a look at it (not optimized for mobile users... yet)

Side Project - https://github.com/NinPasker/mapleM-Guild - I'd greatly appreciate it if you send some feedback about it if you have free time.

I'll be launching it live soon to help with my recruitment process for a guild that I lead for a mobile-game😀 */



/* Project One Related Javascript  */

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

