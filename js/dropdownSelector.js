document.addEventListener('DOMContentLoaded', function() {
    // Get all dropdown items
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    
    // Add click event listener to each dropdown item
    dropdownItems.forEach(item => {
      item.addEventListener('click', function() {
        // Remove active class from all sections
        document.querySelectorAll('.active-portfolio-section').forEach(section => {
          section.classList.remove('active-portfolio-section');
        });

        // Get the target section id from the href attribute
        const targetId = this.getAttribute('href').substring(1); // Remove '#' from href
        const targetSection = document.getElementById(targetId);

        // Add active class to the target section
        if (targetSection) {
          targetSection.classList.add('active-portfolio-section');
        }
      });
    });
  });