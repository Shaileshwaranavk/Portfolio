// Add this JavaScript to the bottom of your HTML file, just before the closing </body> tag
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', function() {
          navLinks.classList.toggle('active');
      });
  }
  
  // Close the menu when a nav link is clicked
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
      link.addEventListener('click', function() {
          if (navLinks.classList.contains('active')) {
              navLinks.classList.remove('active');
          }
      });
  });
});