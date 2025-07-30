  const section = document.querySelector('.Section1');
  const imgSec = document.querySelector('.imgsec');
  const aboutSec = document.querySelector('.aboutsec');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        imgSec.classList.add('animate-left');
        aboutSec.classList.add('animate-right');
        observer.unobserve(entry.target); // Trigger only once
      }
    });
  }, { threshold: 0.2 });

  observer.observe(section);

