(() => {
  'use strict';

  const storageKey = 'avighna-cookie-preference-v1';
  const banner = document.createElement('section');
  banner.className = 'cookie-banner';
  banner.id = 'cookie-consent-banner';
  banner.hidden = true;
  banner.setAttribute('role', 'region');
  banner.setAttribute('aria-label', 'Cookie preferences');
  banner.innerHTML = `
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div class="max-w-2xl">
        <h2 class="text-sm font-extrabold text-slate-900">Your cookie preferences</h2>
        <p class="mt-1 text-xs leading-relaxed text-slate-600">Essential storage keeps your choice. Optional analytics and performance cookies are off unless you accept them. <a class="font-bold text-emerald-700 underline underline-offset-2" href="./cookie-policy.html">Cookie Policy</a></p>
        <p id="cookie-consent-status" class="mt-1 text-xs text-rose-700" role="status" aria-live="polite"></p>
      </div>
      <div class="cookie-banner__actions">
        <button type="button" class="cookie-banner__button" data-cookie-choice="all">Accept All</button>
        <button type="button" class="cookie-banner__button cookie-banner__button--secondary" data-cookie-choice="essential-only">Essential Only</button>
      </div>
    </div>`;
  document.body.append(banner);

  const status = banner.querySelector('#cookie-consent-status');
  let storageAvailable = true;
  let currentPreference = null;
  try {
    currentPreference = window.localStorage.getItem(storageKey);
  } catch (error) {
    storageAvailable = false;
    console.error('Unable to read cookie preferences from localStorage.', error);
    status.textContent = 'Browser storage is unavailable. Your selection can only apply during this visit.';
  }

  const showBanner = () => {
    banner.hidden = false;
  };
  const hideBanner = () => {
    banner.hidden = true;
  };
  const savePreference = (choice) => {
    currentPreference = choice;
    if (storageAvailable) {
      try {
        window.localStorage.setItem(storageKey, choice);
      } catch (error) {
        storageAvailable = false;
        console.error('Unable to save cookie preferences to localStorage.', error);
        status.textContent = 'Your selection applies only during this visit because browser storage is unavailable.';
        return;
      }
    } else {
      status.textContent = 'Your selection applies only during this visit because browser storage is unavailable.';
      return;
    }
    hideBanner();
  };

  if (currentPreference !== 'all' && currentPreference !== 'essential-only') showBanner();

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const choiceButton = target.closest('[data-cookie-choice]');
    if (choiceButton && banner.contains(choiceButton)) {
      savePreference(choiceButton.dataset.cookieChoice);
      return;
    }
    if (target.closest('[data-cookie-preferences]')) {
      status.textContent = currentPreference === 'all'
        ? 'You can withdraw optional cookie consent by choosing “Essential Only”.'
        : 'Choose whether to allow optional analytics and performance cookies.';
      showBanner();
      banner.querySelector('[data-cookie-choice="essential-only"]').focus();
    }
  });
})();
