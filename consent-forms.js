(() => {
  'use strict';

  const consentMarkup = (id) => {
    const wrapper = document.createElement('label');
    wrapper.className = 'privacy-consent';
    wrapper.htmlFor = id;
    wrapper.innerHTML = `<input id="${id}" name="privacy-consent" type="checkbox" required><span>I agree to the <a href="./privacy-policy.html" target="_blank" rel="noopener">Privacy Policy</a> and <a href="./terms-and-conditions.html" target="_blank" rel="noopener">Terms &amp; Conditions</a>, and consent to Avighna Techgrow processing my details to respond to this inquiry.</span>`;
    return wrapper;
  };

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const submitButton = contactForm.querySelector('button[type="submit"]');
    if (submitButton) contactForm.insertBefore(consentMarkup('contact-privacy-consent'), submitButton);
  }

  const checkupForm = document.getElementById('checkup-step-3');
  if (checkupForm) {
    const submitButton = checkupForm.querySelector('button[type="submit"]');
    const actionRow = submitButton && submitButton.parentElement;
    if (actionRow) checkupForm.insertBefore(consentMarkup('checkup-privacy-consent'), actionRow);
  }
})();
