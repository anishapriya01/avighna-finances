(() => {
  'use strict';

  // --- Helper formatting functions ---
  const inr = (value) => `₹${Math.round(Number(value) || 0).toLocaleString('en-IN')}`;
  
  const compact = (value) => {
    const number = Number(value) || 0;
    if (number >= 10000000) return `₹${(number / 10000000).toFixed(2)} Cr`;
    if (number >= 100000) return `₹${(number / 100000).toFixed(2)} L`;
    if (number >= 1000) return `₹${(number / 1000).toFixed(1)}k`;
    return inr(number);
  };

  const getValue = (id) => Number(document.getElementById(id)?.value || 0);

  const setText = (id, value) => {
    const node = document.getElementById(id);
    if (node) node.textContent = value;
  };

  const setBar = (id, percent) => {
    const node = document.getElementById(id);
    if (node) node.style.width = `${Math.max(0, Math.min(100, percent))}%`;
  };

  // --- Financial calculation formulas ---
  function calculateEmi(principal, annualPercent, years) {
    const monthlyRate = annualPercent / 12 / 100;
    const months = years * 12;
    if (monthlyRate === 0) return principal / months;
    const factor = Math.pow(1 + monthlyRate, months);
    return (principal * monthlyRate * factor) / (factor - 1);
  }

  function annuityFutureValue(monthly, annualPercent, years) {
    const monthlyRate = annualPercent / 12 / 100;
    const months = years * 12;
    if (monthlyRate === 0) return monthly * months;
    return monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  }

  function sipFutureValue(monthly, annualPercent, years) {
    const monthlyRate = Math.pow(1 + annualPercent / 100, 1 / 12) - 1;
    const months = years * 12;
    if (monthlyRate === 0) return monthly * months;
    return monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  }

  function annuityFactor(monthlyRate, months) {
    if (monthlyRate === 0) return months;
    return ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  }

  // --- Range slider outputs & Calculator updates ---
  function updateRangeOutputs() {
    document.querySelectorAll('input[type="range"]').forEach((input) => {
      const output = document.getElementById(`${input.id}-value`);
      if (!output) return;
      const value = Number(input.value);
      if (['quick-sip-amount', 'sip-monthly', 'monthly-expenses', 'annual-income', 'liabilities', 'child-goal', 'quick-loan-amount', 'loan-principal'].includes(input.id)) {
        output.textContent = inr(value);
      } else if (['sip-rate', 'loan-rate', 'quick-loan-rate', 'inflation-rate'].includes(input.id)) {
        output.textContent = `${value.toFixed(input.step === '0.05' || input.step === '0.1' || input.step === '0.5' ? 1 : 0)}%${input.id === 'sip-rate' || input.id === 'loan-rate' ? ' p.a.' : ''}`;
      } else {
        output.textContent = `${value} Years`;
      }
    });
  }

  function updateCalculations() {
    updateRangeOutputs();

    // 1. Home Quick SIP Estimator
    const quickSipMonthly = getValue('quick-sip-amount');
    const quickSipYears = getValue('quick-sip-years');
    if (quickSipMonthly && document.getElementById('quick-sip-corpus')) {
      const invested = quickSipMonthly * quickSipYears * 12;
      const corpus = annuityFutureValue(quickSipMonthly, 13.5, quickSipYears);
      const gain = Math.max(0, corpus - invested);
      setText('quick-sip-corpus', compact(corpus));
      setText('quick-sip-exact', `(${inr(corpus)})`);
      setText('quick-sip-invested', inr(invested));
      setText('quick-sip-gain', `+${inr(gain)}`);
      setBar('quick-sip-principal-bar', corpus ? (invested / corpus * 100) : 0);
      setBar('quick-sip-return-bar', corpus ? (gain / corpus * 100) : 0);
    }

    // 2. Home Quick EMI Calculator
    const quickPrincipal = getValue('quick-loan-amount');
    if (quickPrincipal && document.getElementById('quick-emi-value')) {
      const emi = calculateEmi(quickPrincipal, getValue('quick-loan-rate'), getValue('quick-loan-years'));
      const total = emi * getValue('quick-loan-years') * 12;
      setText('quick-emi-value', `${inr(emi)} / mo`);
      setText('quick-emi-principal', inr(quickPrincipal));
      setText('quick-emi-interest', inr(total - quickPrincipal));
      setText('quick-emi-total', inr(total));
    }

    // 3. Main SIP Calculator
    const sipMonthly = getValue('sip-monthly');
    if (sipMonthly && document.getElementById('sip-corpus')) {
      const sipRate = getValue('sip-rate');
      const years = getValue('sip-years');
      const invested = sipMonthly * years * 12;
      const corpus = sipFutureValue(sipMonthly, sipRate, years);
      const gain = Math.max(0, corpus - invested);
      const investedPct = Math.round((invested / corpus) * 100) || 0;
      const returnsPct = Math.round((gain / corpus) * 100) || 0;
      setText('sip-corpus', compact(corpus));
      setText('sip-corpus-sub', `Exact: ${inr(corpus)}`);
      setText('sip-invested', inr(invested));
      setText('sip-gain', `+${inr(gain)}`);
      setText('sip-invested-percent', `Invested: ${investedPct}%`);
      setText('sip-return-percent', `Returns: ${returnsPct}%`);
      setBar('sip-principal-bar', investedPct);
      setBar('sip-return-bar', returnsPct);

      const milestonesContainer = document.getElementById('sip-milestones');
      if (milestonesContainer) {
        const milestones = [5, 10, 15, 20, 25, 30].filter((year) => year <= years);
        milestonesContainer.innerHTML = milestones.map((year) => `
          <div class="rounded-xl border border-slate-200 bg-white p-2.5">
            <span class="block text-[10px] text-slate-500">At Year ${year}:</span>
            <b class="font-mono text-slate-900">${compact(sipFutureValue(sipMonthly, sipRate, year))}</b>
          </div>
        `).join('');
      }
    }

    // 4. Main Loan EMI Calculator
    const principal = getValue('loan-principal');
    if (principal && document.getElementById('emi-result')) {
      const years = getValue('loan-tenure');
      const emi = calculateEmi(principal, getValue('loan-rate'), years);
      const total = emi * years * 12;
      const interest = total - principal;
      const principalPct = Math.round((principal / total) * 100) || 0;
      const interestPct = Math.round((interest / total) * 100) || 0;
      setText('emi-result', inr(emi));
      setText('emi-result-sub', `Payable for ${years * 12} installments`);
      setText('emi-principal', inr(principal));
      setText('emi-interest', inr(interest));
      setText('emi-total', inr(total));
      setText('emi-principal-percent', `Principal: ${principalPct}%`);
      setText('emi-interest-percent', `Interest: ${interestPct}%`);
      setBar('emi-principal-bar', principalPct);
      setBar('emi-interest-bar', interestPct);
    }

    // 5. Retirement & FIRE Planner
    const currentAge = getValue('current-age');
    const retirementAgeInput = document.getElementById('retirement-age');
    if (currentAge && retirementAgeInput && document.getElementById('retire-corpus')) {
      retirementAgeInput.min = String(Math.min(75, currentAge + 1));
      if (Number(retirementAgeInput.value) <= currentAge) {
        retirementAgeInput.value = String(Math.min(75, currentAge + 1));
      }
      updateRangeOutputs();
      const retirementAge = Number(retirementAgeInput.value);
      const yearsToRetire = Math.max(1, retirementAge - currentAge);
      const postRetirementYears = Math.max(1, 82 - retirementAge);
      const inflation = getValue('inflation-rate') / 100;
      const futureMonthlyExpense = getValue('monthly-expenses') * Math.pow(1 + inflation, yearsToRetire);
      const realRate = (0.07 - inflation) / (1 + inflation);
      const multiplier = Math.abs(realRate) < 1e-9 ? postRetirementYears : (1 - Math.pow(1 + realRate, -postRetirementYears)) / realRate;
      const corpus = futureMonthlyExpense * 12 * multiplier;
      const sip = corpus / annuityFactor(0.12 / 12, yearsToRetire * 12);
      setText('retire-years', `${yearsToRetire} Years`);
      setText('retire-expense', `${inr(futureMonthlyExpense)} / month`);
      setText('retire-corpus', compact(corpus));
      setText('retire-corpus-sub', `(${inr(corpus)})`);
      setText('retire-sip', inr(sip));
      setText('retire-target-age', retirementAge);
    }

    // 6. Term Cover / Insurance (HLV) Calculator
    const income = getValue('annual-income');
    if (income && document.getElementById('insurance-cover')) {
      const replacement = income * 15;
      const liabilities = getValue('liabilities');
      const childGoal = getValue('child-goal');
      const cover = Math.ceil((replacement + liabilities + childGoal) / 2500000) * 2500000;
      const premium = Math.round((cover / 10000000) * 850);
      setText('insurance-cover', compact(cover));
      setText('insurance-cover-sub', `(${inr(cover)})`);
      setText('insurance-replacement', compact(replacement));
      setText('insurance-liabilities', compact(liabilities));
      setText('insurance-child-goal', compact(childGoal));
      setText('insurance-premium', `~${inr(premium)} / month`);
    }
  }

  // --- Modals management ---
  let selectedGoal = 'Home Loan';
  let currentCheckupStep = 1;
  let toastTimer;
  let portalPhone = '';

  function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('modal-open');
    modal.querySelector('button, input')?.focus();
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    if (!document.querySelector('.modal-backdrop:not(.hidden)')) {
      document.body.classList.remove('modal-open');
    }
    if (id === 'checkup-modal') resetCheckup();
  }

  function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    setText('toast-message', message);
    toast.classList.remove('hidden');
    toast.classList.add('flex');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(hideToast, 4500);
  }

  function hideToast() {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.classList.add('hidden');
    toast.classList.remove('flex');
  }

  function setCheckupStep(step) {
    currentCheckupStep = Math.max(1, Math.min(4, step));
    [1, 2, 3, 4].forEach((number) => {
      const element = document.getElementById(`checkup-step-${number}`);
      if (element) element.hidden = number !== currentCheckupStep;
    });
    const progress = document.getElementById('checkup-progress');
    if (progress) progress.hidden = currentCheckupStep === 4;
    if (currentCheckupStep <= 3) {
      const progressBar = document.getElementById('checkup-progress-bar');
      if (progressBar) progressBar.style.width = `${(currentCheckupStep / 3) * 100}%`;
      document.querySelectorAll('[data-step-label]').forEach((label) => {
        label.classList.toggle('font-bold', Number(label.dataset.stepLabel) <= currentCheckupStep);
        label.classList.toggle('text-emerald-700', Number(label.dataset.stepLabel) <= currentCheckupStep);
      });
    }
  }

  function selectGoal(value) {
    selectedGoal = value;
    document.querySelectorAll('.goal-option').forEach((button) => {
      const active = button.dataset.goalOption === value;
      button.className = `goal-option flex items-start gap-3 rounded-2xl border p-3.5 text-left transition-all duration-200 ${active ? 'border-emerald-500 bg-emerald-50/60 shadow-md ring-1 ring-emerald-500/50' : 'border-slate-200 bg-white shadow-sm hover:border-slate-300 hover:bg-slate-50'}`;
      const tile = button.querySelector('.goal-icon');
      if (tile) tile.className = `goal-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${active ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'}`;
      const checkIcon = button.querySelector('.goal-check');
      if (checkIcon) checkIcon.hidden = !active;
    });
    refreshIcons();
  }

  function openCheckup(goal = '') {
    selectedGoal = goal || 'Home Loan';
    setCheckupStep(1);
    const form = document.getElementById('checkup-step-3');
    if (form) form.reset();
    document.querySelectorAll('[data-error-for]').forEach((node) => { node.textContent = ''; });
    selectGoal(selectedGoal);
    openModal('checkup-modal');
    closeMobileMenu();
  }

  function resetCheckup() {
    setCheckupStep(1);
    const form = document.getElementById('checkup-step-3');
    if (form) form.reset();
    document.querySelectorAll('[data-error-for]').forEach((node) => { node.textContent = ''; });
  }

  function openPortal() {
    setPortalTab('demo');
    const phoneForm = document.getElementById('portal-phone-form');
    const otpForm = document.getElementById('portal-otp-form');
    if (phoneForm) {
      phoneForm.reset();
      phoneForm.hidden = false;
    }
    if (otpForm) {
      otpForm.reset();
      otpForm.hidden = true;
    }
    openModal('portal-modal');
    closeMobileMenu();
  }

  function setPortalTab(tab) {
    const demo = document.getElementById('portal-demo');
    const login = document.getElementById('portal-login');
    if (demo) demo.hidden = tab !== 'demo';
    if (login) login.hidden = tab !== 'login';
    document.querySelectorAll('.portal-tab').forEach((button) => {
      const active = button.dataset.portalTab === tab;
      button.setAttribute('aria-selected', String(active));
      button.className = `portal-tab px-4 pb-2.5 text-xs font-bold transition-all sm:text-sm ${active ? 'rounded-t-lg border-x border-t border-b-transparent border-emerald-600 bg-white text-emerald-800 shadow-sm' : 'border-b-2 border-transparent text-slate-500 hover:text-slate-800'}`;
    });
  }

  function closeMobileMenu() {
    const drawer = document.getElementById('mobile-drawer');
    const button = document.getElementById('mobile-menu-button');
    if (drawer) drawer.classList.remove('is-open');
    if (button) {
      button.setAttribute('aria-expanded', 'false');
      button.innerHTML = '<i data-lucide="menu" class="h-6 w-6"></i>';
      refreshIcons();
    }
  }

  function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  // --- Services filter on services.html ---
  function filterServices(category) {
    document.querySelectorAll('.service-tab').forEach((tab) => {
      const active = tab.dataset.serviceCategory === category;
      tab.setAttribute('aria-selected', String(active));
      tab.classList.toggle('is-active', active);
    });
    document.querySelectorAll('.service-card').forEach((card) => {
      if (category === 'all' || card.dataset.category === category) {
        card.hidden = false;
      } else {
        card.hidden = true;
      }
    });
  }

  // --- FAQ category filter on contact.html ---
  function filterFaq(categoryIndex) {
    document.querySelectorAll('.faq-tab').forEach((tab) => {
      const active = Number(tab.dataset.faqCategory) === categoryIndex;
      tab.setAttribute('aria-selected', String(active));
      tab.className = `faq-tab rounded-xl border px-4 py-2 text-xs font-bold transition ${active ? 'border-emerald-600 bg-emerald-600 text-white shadow-sm' : 'border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50'}`;
    });
    document.querySelectorAll('.faq-group').forEach((group) => {
      group.hidden = Number(group.dataset.faqGroup) !== categoryIndex;
    });
  }

  // --- Global Event Listeners ---
  function bindEvents() {
    // Click delegation
    document.addEventListener('click', (event) => {
      const target = event.target.closest('button, [data-action], a[data-action]');
      if (!target) return;

      if (target.dataset.action === 'checkup') {
        openCheckup(target.dataset.goal || '');
        return;
      }
      if (target.dataset.action === 'portal') {
        openPortal();
        return;
      }
      if (target.dataset.action === 'dismiss-toast') {
        hideToast();
        return;
      }
      if (target.dataset.action === 'tax-cert') {
        showToast('Tax certificate download is a simulated portal preview.');
        return;
      }
      if (target.dataset.action === 'send-sip-whatsapp') {
        const phoneInput = document.getElementById('sip-whatsapp-phone');
        const error = document.getElementById('sip-whatsapp-error');
        if (!phoneInput) return;
        const phone = phoneInput.value.trim();
        const phoneDigits = phone.replace(/\D/g, '');
        if (!phone.startsWith('+') || phoneDigits.length < 7 || phoneDigits.length > 15) {
          if (error) {
            error.textContent = 'Enter a valid WhatsApp number with country code, starting with + (7–15 digits).';
            error.hidden = false;
          }
          phoneInput.focus();
          return;
        }
        if (error) error.hidden = true;
        const monthly = getValue('sip-monthly');
        const annualReturn = getValue('sip-rate');
        const years = getValue('sip-years');
        const invested = monthly * years * 12;
        const maturity = sipFutureValue(monthly, annualReturn, years);
        const message = `Hello Avighna Financial Services, here is my SIP calculation summary: Monthly SIP: ${inr(monthly)} | Tenure: ${years} Yrs | Expected Return: ${annualReturn}% | Total Invested: ${inr(invested)} | Projected Value: ${inr(maturity)}. Please connect with me for expert guidance!`;
        window.open(`https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`, '_blank');
        return;
      }

      // Mobile Menu
      if (target.id === 'mobile-menu-button') {
        const drawer = document.getElementById('mobile-drawer');
        if (!drawer) return;
        const isOpen = drawer.classList.toggle('is-open');
        target.setAttribute('aria-expanded', String(isOpen));
        target.innerHTML = `<i data-lucide="${isOpen ? 'x' : 'menu'}" class="h-6 w-6"></i>`;
        refreshIcons();
        return;
      }

      // Home Estimator Tabs (SIP vs EMI)
      if (target.dataset.homeTab) {
        document.querySelectorAll('.home-calc-tab').forEach((button) => {
          const active = button.dataset.homeTab === target.dataset.homeTab;
          button.className = `home-calc-tab rounded-xl px-4 py-2.5 text-xs font-bold transition sm:px-5 sm:text-sm ${active ? (target.dataset.homeTab === 'sip' ? 'bg-emerald-600' : 'bg-blue-600') + ' text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`;
        });
        const sipPanel = document.getElementById('home-sip');
        const emiPanel = document.getElementById('home-emi');
        if (sipPanel) sipPanel.hidden = target.dataset.homeTab !== 'sip';
        if (emiPanel) emiPanel.hidden = target.dataset.homeTab !== 'emi';
        return;
      }

      // Services Page Filter Tabs
      if (target.dataset.serviceCategory) {
        filterServices(target.dataset.serviceCategory);
        return;
      }

      // Calculators Page Tabs (SIP, EMI, Retirement, Insurance)
      if (target.dataset.calcTab) {
        document.querySelectorAll('.calc-tab').forEach((button) => {
          const active = button.dataset.calcTab === target.dataset.calcTab;
          const color = target.dataset.calcTab === 'emi' || target.dataset.calcTab === 'insurance' ? 'blue' : 'emerald';
          button.setAttribute('aria-selected', String(active));
          button.className = `calc-tab flex items-center gap-2 rounded-2xl border px-4 py-3 text-xs font-bold shadow-sm transition sm:px-5 sm:text-sm ${active ? `border-${color}-600 bg-${color}-600 text-white shadow-md` : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900'}`;
        });
        document.querySelectorAll('.calc-panel').forEach((panel) => {
          panel.hidden = panel.id !== `calc-panel-${target.dataset.calcTab}`;
        });
        return;
      }

      // FAQ Category Tabs
      if (target.dataset.faqCategory !== undefined) {
        filterFaq(Number(target.dataset.faqCategory));
        return;
      }

      // FAQ Accordion Toggle
      if (target.dataset.faqItem !== undefined) {
        const open = target.getAttribute('aria-expanded') === 'true';
        const accordionContent = target.nextElementSibling;
        const chevron = target.querySelector('.faq-chevron');

        target.setAttribute('aria-expanded', String(!open));
        if (accordionContent) accordionContent.classList.toggle('is-open', !open);
        if (chevron) {
          chevron.classList.toggle('rotate-180', !open);
          chevron.classList.toggle('text-emerald-600', !open);
        }
        return;
      }

      // Checkup Modal Goal Selection
      if (target.dataset.goalOption) {
        selectGoal(target.dataset.goalOption);
        return;
      }

      // Checkup Modal Option Groups
      if (target.dataset.selectGroup) {
        const group = target.dataset.selectGroup;
        document.querySelectorAll(`[data-select-group="${group}"]`).forEach((option) => {
          option.classList.remove('bg-blue-600', 'font-bold', 'text-white', 'shadow-sm', 'border-emerald-500', 'bg-emerald-50', 'text-emerald-900', 'border-blue-500', 'bg-blue-50', 'text-blue-900');
          option.classList.add('border-slate-200', 'bg-white', 'text-slate-700');
        });
        target.classList.remove('border-slate-200', 'bg-white', 'text-slate-700');
        if (group === 'timeline') {
          target.classList.add('bg-blue-600', 'font-bold', 'text-white', 'shadow-sm');
        } else {
          target.classList.add(`border-${group === 'income' ? 'emerald' : 'blue'}-500`, `bg-${group === 'income' ? 'emerald' : 'blue'}-50`, `text-${group === 'income' ? 'emerald' : 'blue'}-900`, 'font-bold');
        }
        return;
      }

      // Checkup Step Transition
      if (target.dataset.checkupNext) {
        setCheckupStep(Number(target.dataset.checkupNext));
        return;
      }

      // Portal Tabs
      if (target.dataset.portalTab) {
        setPortalTab(target.dataset.portalTab);
        return;
      }

      // Modal Close
      if (target.dataset.closeModal) {
        closeModal(target.dataset.closeModal);
        return;
      }

      // Contact Form Reset
      if (target.id === 'contact-reset') {
        const contactForm = document.getElementById('contact-form');
        const contactSuccess = document.getElementById('contact-success');
        if (contactForm) {
          contactForm.reset();
          contactForm.hidden = false;
        }
        if (contactSuccess) contactSuccess.hidden = true;
      }
    });

    // Range input listener
    document.addEventListener('input', (event) => {
      if (event.target.matches('input[type="range"]')) updateCalculations();
      if (event.target.id === 'sip-whatsapp-phone') {
        const error = document.getElementById('sip-whatsapp-error');
        if (error) error.hidden = true;
      }
    });

    // Backdrop click to close modals
    document.addEventListener('click', (event) => {
      if (event.target.classList.contains('modal-backdrop')) {
        closeModal(event.target.id);
      }
    });

    // Form Submissions
    document.addEventListener('submit', (event) => {
      // Checkup Form Submission (Step 3)
      if (event.target.id === 'checkup-step-3') {
        event.preventDefault();
        const form = event.target;
        const privacyConsent = form.elements.namedItem('privacy-consent');
        if (privacyConsent instanceof HTMLInputElement && !privacyConsent.checked) {
          privacyConsent.reportValidity();
          return;
        }
        const name = form.elements.namedItem('name')?.value.trim() || '';
        const phone = form.elements.namedItem('phone')?.value.trim() || '';
        const email = form.elements.namedItem('email')?.value.trim() || '';
        const errors = {
          name: name ? '' : 'Please enter your full name',
          phone: phone.replace(/\D/g, '').length >= 10 ? '' : 'Please provide a valid 10-digit mobile number',
          email: !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : 'Please provide a valid email address'
        };
        Object.entries(errors).forEach(([field, message]) => {
          const errNode = document.querySelector(`[data-error-for="${field}"]`);
          if (errNode) errNode.textContent = message;
        });
        if (Object.values(errors).some(Boolean)) return;

        const reference = `AVS-${Math.floor(1000 + Math.random() * 9000)}`;
        setText('checkup-thanks-name', name || 'Valued Client');
        setText('checkup-reference', reference);
        setText('checkup-confirm-goal', selectedGoal);
        setCheckupStep(4);
        showToast(`Financial Checkup Booked! Reference #${reference}. Assigned to Baner Desk.`);
        return;
      }

      // Contact Form Submission
      if (event.target.id === 'contact-form') {
        event.preventDefault();
        const phone = event.target.elements.namedItem('phone').value.trim();
        if (phone.replace(/\D/g, '').length < 10) {
          event.target.elements.namedItem('phone').setCustomValidity('Please provide a valid 10-digit mobile number.');
          event.target.reportValidity();
          event.target.elements.namedItem('phone').setCustomValidity('');
          return;
        }
        setText('success-name', event.target.elements.namedItem('name').value.trim());
        setText('success-phone', phone);
        event.target.hidden = true;
        const contactSuccess = document.getElementById('contact-success');
        if (contactSuccess) contactSuccess.hidden = false;
        showToast('Your inquiry has been recorded in this demo.');
        return;
      }

      // Portal Phone Submission
      if (event.target.id === 'portal-phone-form') {
        event.preventDefault();
        const number = document.getElementById('portal-phone').value.trim();
        if (number.replace(/\D/g, '').length < 10) {
          setText('portal-phone-error', 'Please enter a valid 10-digit mobile number.');
          return;
        }
        portalPhone = number;
        setText('portal-sent-phone', number);
        setText('portal-phone-error', '');
        event.target.hidden = true;
        const otpForm = document.getElementById('portal-otp-form');
        if (otpForm) {
          otpForm.hidden = false;
          document.getElementById('portal-otp')?.focus();
        }
        return;
      }

      // Portal OTP Verification
      if (event.target.id === 'portal-otp-form') {
        event.preventDefault();
        const value = document.getElementById('portal-otp').value.trim();
        if (value.length < 4) {
          setText('portal-otp-error', 'Enter the 4-digit demo OTP to continue.');
          return;
        }
        setText('portal-otp-error', '');
        setPortalTab('demo');
        showToast(`Demo portal unlocked for +91 ${portalPhone}.`);
      }
    });

    // Escape key to close modals
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        ['checkup-modal', 'portal-modal'].forEach((id) => {
          const modal = document.getElementById(id);
          if (modal && !modal.classList.contains('hidden')) closeModal(id);
        });
      }
    });

    // Sticky header shadow on scroll
    window.addEventListener('scroll', () => {
      const headerElement = document.getElementById('site-header');
      if (!headerElement) return;
      const headerContent = headerElement.firstElementChild;
      const scrolled = window.scrollY > 15;
      if (headerContent) {
        headerContent.classList.toggle('py-3', !scrolled);
        headerContent.classList.toggle('py-2', scrolled);
        headerContent.classList.toggle('sm:py-4', !scrolled);
        headerContent.classList.toggle('sm:py-3', scrolled);
      }
      headerElement.classList.toggle('shadow-md', scrolled);
      headerElement.classList.toggle('bg-white/95', scrolled);
    }, { passive: true });
  }

  // --- Initializer ---
  document.addEventListener('DOMContentLoaded', () => {
    bindEvents();
    updateCalculations();
    refreshIcons();
  });
})();
