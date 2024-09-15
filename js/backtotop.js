// Show the button when the user scrolls down 100px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let backToTopBtn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

// Scroll to the top of the page when the button is clicked
function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}
