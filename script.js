// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  lucide.createIcons();

  // Smooth scroll behavior
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Coin flip profile image with single <img>
  const profilePic = document.getElementById('profile-pic');
  const images = ['demonichalo.jpg', 'pp.jpg'];
  let current = 0;

  setInterval(() => {
    profilePic.style.transform = 'rotateY(90deg)';
    setTimeout(() => {
      current = (current + 1) % images.length;
      profilePic.src = images[current];
      profilePic.style.transform = 'rotateY(0deg)';
    }, 250);
  }, 4000);

  // Add animation to elements when they come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeIn');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.skill-category, .project-card, .certification-card, .achievement-card, .social-link').forEach(el => {
    observer.observe(el);
  });
});