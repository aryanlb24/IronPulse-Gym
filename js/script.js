// Placeholder for future scripts (menu toggle, animations, etc.)
console.log("IronPulse Gym loaded.");
// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.querySelector('ul').classList.toggle('show');
});
// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    contactForm.reset();
  });
}
