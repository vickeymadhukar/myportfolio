// Initialize AOS
AOS.init({
  duration: 1200,
});

// Handle tab links
var tablinks = document.getElementsByClassName("tab-links");
var tabcontainer = document.getElementsByClassName("tab-container");

function opentab(tabname) {
  for (var tablink of tablinks) {
      tablink.classList.remove("active-link");
  }

  for (var tabcont of tabcontainer) {
      tabcont.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get the side menu element
  var sidemenu = document.getElementById("sidemenu");

  if (sidemenu) {
      // Function to open the side menu
      function openmenu() {
          sidemenu.style.right = "0";
      }

      // Function to close the side menu
      function closemenu() {
          sidemenu.style.right = "-200px";
      }

      // Attach the functions to the click events
      document.querySelector('.fa-bars').addEventListener('click', openmenu);
      document.querySelector('.fa-circle-xmark').addEventListener('click', closemenu);
  } else {
      console.error("Side menu element not found");
  }
});

// Handle scroll effect for car element
window.addEventListener('scroll', function() {
  const car = document.getElementById('car');
  if (car) {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = scrollPosition / maxScroll;
      const carMovement = scrollPercentage * (window.innerWidth - car.offsetWidth);
      car.style.transform = `translateX(${carMovement}px)`;
  }
});
