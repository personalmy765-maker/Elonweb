document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    alert('✅ Your application has been received! Thank you for your interest in Elonweb.');
    form.reset();
  });
});
