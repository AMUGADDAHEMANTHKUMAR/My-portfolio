
  const section3 = document.querySelector('.section3');

  const observer3 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Trigger only once
      }
    });
  }, {
    threshold: 0.1
  });

  observer3.observe(section3);

