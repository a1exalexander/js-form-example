window.addEventListener('DOMContentLoaded', () => {
  const $forms = document.querySelectorAll('form');
  $forms.forEach(($form) => {
    $form.addEventListener('submit', async (e) => {
      e.target.datetime.value = new Date().toLocaleDateString('uk-UA', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    });
  });
});
