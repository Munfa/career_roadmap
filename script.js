let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .flex .navbar");

var swiper = new Swiper(".subjects-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

document.addEventListener('DOMContentLoaded', function() {
  // Handle form submission
  document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      if (name && email && message) {
          alert('Thank you for your message!');
          // Reset form
          document.getElementById('contactForm').reset();
      } else {
          alert('Please fill out all fields.');
      }
  });

  // Initialize Swiper for subjects slider
  var swiper = new Swiper('.subjects-slider', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
  });

  // Handle mentor connection clicks
  document.querySelectorAll('.connect-mentor').forEach(function(button) {
      button.addEventListener('click', function(event) {
          event.preventDefault();
          alert('Mentor connection feature coming soon!');
      });
  });

  // Handle roadmap clicks
  document.querySelectorAll('.view-roadmap').forEach(function(button) {
      button.addEventListener('click', function(event) {
          event.preventDefault();
          const roadmapId = button.getAttribute('data-roadmap');
          document.querySelectorAll('.branch-roadmap').forEach(function(roadmap) {
              roadmap.style.display = 'none';
          });
          document.getElementById(roadmapId).style.display = 'block';
      });
  });

  // Handle back to roadmap clicks
  document.querySelectorAll('.back-to-roadmap').forEach(function(button) {
      button.addEventListener('click', function(event) {
          event.preventDefault();
          document.querySelectorAll('.branch-roadmap').forEach(function(roadmap) {
              roadmap.style.display = 'none';
          });
          document.getElementById('subjects').style.display = 'block';
      });
  });
});

