(() => {
  'use strict';

  const form = document.getElementById('grievance-form');
  const draftLink = document.getElementById('grievance-email-draft');
  const status = document.getElementById('grievance-status');
  if (!form || !draftLink || !status) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const values = new FormData(form);
    const subject = `Data Principal request: ${values.get('requestType')}`;
    const body = [
      `Name: ${values.get('name')}`,
      `Reply email: ${values.get('email')}`,
      `Request type: ${values.get('requestType')}`,
      `Related reference: ${values.get('reference') || 'Not provided'}`,
      '',
      'Request details:',
      values.get('details')
    ].join('\n');

    draftLink.href = `mailto:privacy@avighnatechgrow.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    draftLink.classList.remove('hidden');
    status.textContent = 'Email draft prepared. Select “Open Email Draft” and send it from your email application to submit your request.';
  });
})();
