const section4 = document.querySelector('.section4');

const observer4 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target); // Ensures one-time animation
    }
  });
}, {
  threshold: 0.2 // Adjust as needed
});

observer4.observe(section4);
