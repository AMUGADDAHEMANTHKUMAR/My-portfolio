  const buttons = document.querySelectorAll('.tab-button');
  const projects = document.querySelectorAll('.sec3-2 .box3');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const category = button.getAttribute('data-category').toLowerCase();

      projects.forEach(project => {
        const projectCategory = project.getAttribute('data-category')?.toLowerCase() || '';
        project.style.display = (category === 'all' || projectCategory.includes(category)) ? 'block' : 'none';
      });
    });
  });

  