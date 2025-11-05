document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('✅ Your application has been received! Thank you for your interest in Elonweb.');
    form.reset();
  });

  // ---- Membership Code Modal Logic ----
  const CODE = 'EL98ON';
  const codeBtn = document.getElementById('codeBtn');
  const codeModal = document.getElementById('codeModal');
  const closeModalBtn = document.getElementById('closeCodeModal');
  const cancelBtn = document.getElementById('cancelCode');
  const submitBtn = document.getElementById('submitCode');
  const codeInput = document.getElementById('codeInput');
  const codeMessage = document.getElementById('codeMessage');

  if (codeBtn && codeModal) {
    function openModal() {
      codeInput.value = '';
      codeMessage.textContent = '';
      codeMessage.className = 'code-message';
      codeModal.setAttribute('aria-hidden', 'false');
      codeInput.focus();
    }

    function closeModal() {
      codeModal.setAttribute('aria-hidden', 'true');
    }

    codeBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);

    submitBtn.addEventListener('click', function () {
      const entered = (codeInput.value || '').trim();
      if (!entered) {
        codeMessage.textContent = 'Please enter your membership code.';
        codeMessage.className = 'code-message error';
        return;
      }
      if (entered === CODE) {
        codeMessage.textContent = '✅ Congratulations! Your code is correct. Your details have been received (demo only).';
        codeMessage.className = 'code-message success';
      } else {
        codeMessage.textContent = '⚠️ Invalid membership code. Please contact our management to obtain a valid code.';
        codeMessage.className = 'code-message error';
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && codeModal.getAttribute('aria-hidden') === 'false') closeModal();
    });
  }
});
