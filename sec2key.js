  const section2 = document.querySelector('.section2');

  const observer2 = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        obs.unobserve(entry.target); // Animate only once
      }
    });
  }, { threshold: 0.9 });

  observer2.observe(section2);
