const section5 = document.querySelector('.section5');

const observer5 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target); // Only once
    }
  });
}, {
  threshold: 0.7
});

observer5.observe(section5);
