(() => {
  'use strict';

  const NAV = [
    ['home', 'Home'],
    ['services', 'Services'],
    ['calculators', 'Calculators'],
    ['why-us', 'Why Avighna'],
    ['contact', 'Contact & Advisory']
  ];
  const goals = [
    ['Home Loan', 'Home Loan & Transfer', 'Lowest interest rates from 8.35%', 'house'],
    ['Wealth Creation', 'Wealth Creation & SIP', 'Disciplined long-term compounding', 'trending-up'],
    ['Business Loan', 'Business & MSME Capital', 'Working capital & machinery loans', 'building-2'],
    ['Retirement Planning', 'Retirement & FIRE', 'Inflation-adjusted corpus roadmaps', 'piggy-bank'],
    ['Term Insurance', 'Term Life & Health Cover', 'High-value claim settlement protection', 'shield-check'],
    ['Property Advisory', 'Property & Commercial', 'Vetted Pune acquisitions & yields', 'calculator']
  ];
  const serviceData = [
    {
      id: 'loans', name: 'Loans & Mortgages', badge: 'Competitive Rates from 8.35%',
      tagline: 'Lowest Interest Rates & Swift Sanctions Across 30+ Banks',
      description: 'Customized credit architecture for home buyers, expanding enterprises, and high-net-worth property owners.',
      icon: 'building-2', cards: [
        ['Home Loans & Balance Transfer', '8.35% - 9.15% p.a.', 'First-time homebuyers, luxury apartment buyers, or existing borrowers seeking 50-100 bps rate reduction.', 'SBI, HDFC, ICICI and Axis Bank tie-ups|End-to-end documentation pickup in Pune|Free collateral legal valuation and technical vetting|Balance transfer with high top-up liquidity', 'Salaried: Min monthly net income ₹35,000|Self-employed: 2+ yrs profitable ITR|CIBIL score: 720+ preferred', 'PAN & Aadhaar Card|Last 6 Months Bank Statement|Last 3 Months Salary Slips or 2 Yrs ITR|Property Title Deeds', 'Up to 30 Years', '3 - 5 Business Days'],
        ['Business Growth Capital & MSME', '10.50% - 15.00% p.a.', 'Enterprises needing working capital, machinery financing, inventory expansion, or export orders.', 'Collateral-free sanctions up to ₹1.50 Crore|CGTMSE scheme facilitation|Flexible OD and CC limit arrangements|Tax-deductible interest structuring advice', 'Minimum 3 years in current business|Annual GST turnover > ₹40 Lakhs|Clean audited statements', 'GST Returns (Last 12 Months)|Audited Balance Sheets (2 Years)|Current Account Statements|Business Registration / GSTIN', 'Up to 7 Years unsecured / 15 Years secured', '48 - 72 Hours'],
        ['Loan Against Property (LAP)', '8.85% - 10.25% p.a.', 'Property owners needing large, low-cost liquidity without selling assets.', 'LTV up to 75% residential / 65% commercial|Lower rates than conventional personal loans|Flexible use of funds|Self-occupied and rented property accepted', 'Clear marketable freehold title|Verified repayment capacity', 'Registered Sale Deed & Sanctioned Blueprint|Latest Property Tax Receipts|Income Proofs', 'Up to 20 Years', '5 - 7 Business Days'],
        ['Premium Executive Personal Loans', '10.25% - 13.50% p.a.', 'Immediate family celebrations, medical emergencies, or short-term liquidity.', 'No collateral or guarantor|Sanctions up to ₹40 Lakhs|Part-prepayment options|Instant digital sanction letter', 'Salaried at MNC / listed corporation / government|Min take-home ₹45,000/month', 'PAN and Aadhaar|3 Months Salary Credit Statements|Employee ID', 'Up to 5 Years', 'Same Day Sanction']
      ]
    },
    {
      id: 'wealth', name: 'Wealth & Investments', badge: 'AMFI Registered & Goal-Engineered',
      tagline: 'Disciplined Capital Compounding Designed for Real-Life Milestones',
      description: 'Evidence-based portfolio construction blending Direct Mutual Funds, Equity SIPs, Index Strategies, and Tax-Saving ELSS.',
      icon: 'trending-up', cards: [
        ['Systematic Investment Plans (SIP)', 'Targeting 12% - 15% CAGR (Equity)', 'Salaried professionals, young couples, and wealth creators targeting long-term goals.', 'Rupee-cost averaging through market cycles|Dynamic step-up SIP options|Portfolio allocation across market caps|Goal-aligned portfolio reviews', 'Indian resident or NRI with valid PAN|Minimum SIP from ₹1,000/month', 'PAN Card|Aadhaar (DigiLocker verified)|Bank details for auto-debit', '3 to 25+ Years', '100% Paperless e-KYC'],
        ['Lumpsum Portfolio & Tactical Allocation', 'Targeted Alpha over Nifty 50', 'Clients receiving bonuses, property proceeds, inheritance, or ESOP proceeds.', 'Systematic transfer plan to deploy capital|Multi-asset diversification|Downside drawdown protection rules|Quarterly portfolio health audit', 'Ideal for deployment sizes ₹5 Lakhs to ₹5 Crores+', 'KYC documentation|Bank Cheque / Proof of Source of Funds', 'Recommended 5+ Years', 'Instant Deployment'],
        ['Tax-Saving ELSS & Section 80C', '3 Year Lock-in', 'High tax bracket professionals seeking tax-efficient investing under the old regime.', 'Shortest lock-in among Section 80C instruments|Potential long-term capital gains efficiency|Automated investment certificate|Diversified equity exposure', 'Individual taxpayers in India', 'PAN Card|Bank Net Banking / UPI', '3 Years Lock-in', 'Immediate Tax Receipt'],
        ['Child Education & Retirement Blueprints', 'Inflation-Adjusted Modeling', 'Parents securing education funds and professionals targeting financial freedom.', 'Inflation-adjusted corpus forecasting|De-risking glide paths|Goal-focused allocation|Tax-efficient withdrawal sequencing', 'Families committed to goal-oriented investing', 'Existing investment statement|Family goal timeline questionnaire', '10 - 25 Years', 'Custom Blueprint in 48 Hrs']
      ]
    },
    {
      id: 'insurance', name: 'Risk & Insurance Advisory', badge: '100% Claim Settlement Assistance',
      tagline: 'Fortifying Your Family and Enterprise Against Financial Shocks',
      description: 'Pure protection term life, high-restoration family health covers, and critical illness guards with a client-first approach.',
      icon: 'shield-check', cards: [
        ['Pure Term Life Insurance (High Cover)', 'From ~₹600/month for ₹1 Cr', 'Sole earning members, individuals with home loans, and parents with young children.', 'High sum assured from ₹1 Cr to ₹10 Cr+|Critical illness and disability riders|MWP Act endorsement guidance|Pune-based claims concierge', 'Age 18 - 60 Years|Salaried or self-employed with income proof', 'PAN Card|Last 3 Months Salary Slips / 2 Years ITR|Medical History Questionnaire', 'Cover up to Age 75 / 85', 'Home / tele-medical checkup'],
        ['Family Health Cover & Super Top-Up', 'Tax rebate under Sec 80D', 'Families looking for broader coverage beyond employer health insurance.', 'Family floater options|Cashless hospital network|Restoration benefits|Pre and post-hospitalization coverage', 'Proposer age 18+|Dependants from 90 days', 'Proposer and family identity proofs|Existing policies if porting', 'Lifetime Renewability', 'Instant Cashless Network'],
        ['Director & Officer / Keyman Insurance', 'Corporate expense deductible', 'Startup founders, partnership firms, and companies protecting key executives.', 'Key person protection|D&O liability shield|Partnership buyout funding|Business-focused cover design', 'Registered enterprises, Pvt Ltd, LLP, Partnership', 'Company PAN & Incorporation Certificate|Audited Financial Statements|Board Resolution', 'Annual Renewable Policy', 'Underwritten in 5 Days']
      ]
    },
    {
      id: 'property', name: 'Real Estate & Property Advisory', badge: 'Pune Prime Corridors',
      tagline: 'Strategic Property Acquisition, Title Verification & Structured Financing',
      description: 'Real estate due diligence and seamless financing across Baner, Hinjewadi, Kharadi, Kothrud, and Wakad.',
      icon: 'compass', cards: [
        ['Residential & Villa Buyer Advisory', 'Combined with 8.35% Loan Desk', 'Home seekers looking for vetted builder properties without hidden clauses.', 'RERA compliance and legal title search|Developer pricing and corporate discounts|Integrated loan sanction|Transparent facilitation', 'Prospective home buyers with active intent', 'Preference budget form|Pre-approved loan eligibility certificate', 'Turnkey Search to Registration', 'Direct Developer Allotment'],
        ['Pre-Leased Commercial & Retail Assets', '7.5% - 9.2% Net Rental Yields', 'Investors seeking rental cash flows from Pune IT parks.', 'Established commercial tenants|Lease Rental Discounting options|Structured escalation clauses|Property management oversight', 'Investment ticket size ₹50 Lakhs to ₹15 Crores', 'KYC|Entity details for trust or company', 'Long-term 9-15 Year Leases', 'Due Diligence: 7 Days'],
        ['Property Equity Monetization', 'Custom Structuring', 'Landowners and property holders seeking to monetize existing assets.', 'Joint Development Agreement advisory|Capital gains planning support|Bridge finance options|Family asset allocation structures', 'Owners with undisputed possession', '7/12 extract / Property Card|Sanctioned Layout|Search Report', 'Flexible Terms', '7 - 10 Days']
      ]
    }
  ];
  const comparisons = [
    ['Advisory Orientation', 'Product-seller pushing high-commission policies & ULIPs', 'Goal-centric fiduciary planning tailored to your life milestones'],
    ['Bank & AMC Choice', 'Captive DSA tied to 1-2 institutions with quota pressure', 'Open architecture across 30+ leading banks, NBFCs, and AMCs'],
    ['Hidden Fees & Kickbacks', 'Opaque trail commissions and processing charge inflations', 'Transparent, zero undisclosed fees, detailed disclosure sheet'],
    ['Post-Disbursal Support', 'Vanishes once sanction or policy issuance is done', 'Dedicated relationship manager, annual rebalancing, and claims desk'],
    ['Doorstep Execution in Pune', 'Borrower forced to visit physical bank branches repeatedly', 'Doorstep documentation pickup and legal vetting across Pune'],
    ['Claim Settlement Assistance', 'Leaves customer alone on a toll-free loop', 'Personal advocate during hospital cashless or term claims']
  ];
  const trustStats = [
    ['₹500 Cr+', 'Total Capital Facilitated', 'Across Loans & Wealth Portfolios'],
    ['10,000+', 'Delighted Pune Families', 'Guided Towards Financial Peace'],
    ['99.2%', 'Loan Approval Success Rate', 'Zero-Rejection Vetting Model'],
    ['30+', 'Institutional Partners', 'Unbiased Product Architecture'],
    ['15+ Years', 'Pune Market Experience', 'Seasoned CFPs & Ex-Bankers'],
    ['0 Hidden Fees', 'Transparent Client Policy', 'Zero Undisclosed Commissions']
  ];
  const testimonials = [
    ['Vikram & Radhika Deshmukh', 'Principal Architect & Senior Director at Infosys', 'Baner, Pune', 'Home Loan Balance Transfer + SIP Portfolio', 'Avighna saved us more than ₹18.4 Lakhs in cumulative interest by transferring our existing home loan. Their advisor also restructured our mutual fund investments into goal-aligned SIPs. The transparency was breathtaking.', 'Saved ₹18.4L in Interest', 'photo-1534528741775-53994a69daeb'],
    ['Sanjay Kulkarni', 'Founder & Managing Director, Precision Tools Pvt Ltd', 'Bhosari MIDC, Pune', 'Business Loan & Working Capital Syndication', 'When we needed machinery expansion capital, Avighna restructured our debt presentation and helped our CGTMSE-backed facility move in 72 hours. An indispensable partner for Pune MSMEs.', 'Disbursed in 72 Hours', 'photo-1507003211169-0a1dd7228f2d'],
    ['Dr. Anjali & Dr. Sameer Joshi', 'Consultant Radiologist & Chief Orthopedic Surgeon', 'Kothrud, Pune', 'Retirement Blueprint & Family Health Shield', 'Avighna audited our insurance policies and designed an inflation-adjusted retirement roadmap. Their advice helped us make informed decisions despite our busy schedules.', 'Retirement Horizon: 52 Yrs', 'photo-1573496359142-b8d87734a5a2'],
    ['Nitin Rao', 'VP of Engineering, Global SaaS Unicorn', 'Kalyani Nagar, Pune', 'Commercial Property Advisory & Term Shield', 'Avighna guided me into a pre-leased retail property in Kharadi while securing a term cover. Their client-first commitment is rare in the Indian financial sector.', '8.4% Net Rental Yield', 'photo-1500648767791-00dcc994a43e']
  ];
  const partners = [
    ['Banking & Lending Partners', [['State Bank of India', 'India’s Largest Public Bank', 'From 8.35%'], ['HDFC Bank', 'Preferred Private Bank Partner', 'From 8.40%'], ['ICICI Bank', 'Instant Digital Sanctions', 'From 8.45%'], ['Axis Bank', 'High LTV & Flexible Top-ups', 'From 8.50%'], ['Kotak Mahindra Bank', 'Attractive LAP & Business Credit', 'From 8.65%'], ['Bank of Baroda', 'Competitive CIBIL concessions', 'From 8.35%'], ['Tata Capital', 'Custom MSME & Property Finance', 'From 9.25%'], ['Bajaj Housing Finance', 'Swift Disbursals', 'From 8.45%']]],
    ['Mutual Fund & Wealth Partners', [['Nippon India Mutual Fund', 'Small & Large Cap', ''], ['HDFC Mutual Fund', 'Balanced Advantage & Equity', ''], ['ICICI Prudential AMC', 'Dynamic Asset Allocation', ''], ['SBI Mutual Fund', 'Core Growth', ''], ['Tata Mutual Fund', 'Digital & Consumption', ''], ['Aditya Birla Sun Life', 'Multi-Cap & Mid-Cap', ''], ['Mirae Asset Global', 'Global & Focused Equity', ''], ['Parag Parikh Financial', 'Flexi Cap Long Term', '']]],
    ['Life & Health Insurance Partners', [['HDFC Life Insurance', 'Pure Term & Return of Premium', ''], ['ICICI Prudential Life', 'Critical Illness Shielding', ''], ['Tata AIA Life', 'Life Protection', ''], ['Max Life Insurance', 'Comprehensive Term Plans', ''], ['Star Health & Allied', 'Cashless Hospital Network', ''], ['Care Health Insurance', 'Restoration Plans', ''], ['Niva Bupa Health', 'Family Health Plans', ''], ['HDFC ERGO General', 'Digital Claims', '']]]
  ];
  const faqGroups = [
    ['Loans & Mortgages', [
      ['How does Avighna secure lower home loan rates than applying directly to a bank?', 'Our sanction volume with leading institutions can provide access to preferential pricing, processing-fee promotions, and expedited underwriting. Actual rates depend on lender policy and borrower eligibility.'],
      ['What is the standard turnaround time for loan disbursals?', 'Personal loans and pre-approved lines may be sanctioned within 4 to 24 hours. Home loans and LAP typically take 3 to 5 business days after document collection, subject to lender and legal review.'],
      ['Can you help if my CIBIL score is between 650 and 700?', 'We can review your credit report, identify inaccurate reporting, and discuss suitable lender options and credit improvement steps.']
    ]],
    ['Wealth & Mutual Funds', [
      ['How do you select Mutual Funds for client portfolios?', 'We evaluate long-term return consistency, risk metrics, manager tenure, concentration, and liquidity, rather than relying on short-term performance alone.'],
      ['Are my mutual fund investments held safely with Avighna?', 'Mutual fund units are held with the respective SEBI-registered asset management companies and registered in your name. Avighna does not hold client funds.'],
      ['How frequently do we review and rebalance the portfolio?', 'Comprehensive portfolio audits are conducted every 6 to 12 months. Rebalancing is discussed if your allocation moves outside your agreed risk mandate.']
    ]],
    ['Insurance & Claims', [
      ['Why choose a Pure Term Plan over an Endowment or ULIP policy?', 'Term insurance separates protection from investment, allowing a higher life cover at a lower premium. Suitability depends on your needs and policy terms.'],
      ['What role does Avighna play during a critical medical claim in Pune?', 'Our claims concierge can help coordinate cashless pre-authorization and answer process questions while the insurer and TPA assess the claim.']
    ]],
    ['Advisory Process & Pune Desk', [
      ['Does Avighna charge upfront fees for the Free Financial Checkup?', 'The initial 45-minute Financial Health Checkup and customized Portfolio Blueprint are complimentary. Any applicable charges are disclosed before engagement.'],
      ['Where is your Pune office, and can advisors visit my home or office?', 'Our Baner headquarters is near Balewadi High Street. Doorstep consultations are available across Baner, Aundh, Kothrud, Viman Nagar, Kalyani Nagar, Hinjewadi, and Wakad.']
    ]]
  ];

  const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));
  const icon = (name, className = 'w-5 h-5') => `<i data-lucide="${name}" class="${className}" aria-hidden="true"></i>`;
  const inr = (value) => `₹${Math.round(Number(value) || 0).toLocaleString('en-IN')}`;
  const compact = (value) => {
    const number = Number(value) || 0;
    if (number >= 10000000) return `₹${(number / 10000000).toFixed(2)} Cr`;
    if (number >= 100000) return `₹${(number / 100000).toFixed(2)} L`;
    if (number >= 1000) return `₹${(number / 1000).toFixed(1)}k`;
    return inr(number);
  };
  const pipedList = (value) => value.split('|').map((item) => item.trim()).filter(Boolean);
  const checkList = (items) => `<ul class="mt-4 space-y-2 text-xs text-slate-600">${items.map((item) => `<li class="flex items-start gap-2">${icon('circle-check', 'mt-0.5 h-4 w-4 shrink-0 text-emerald-600')}<span>${escapeHtml(item)}</span></li>`).join('')}</ul>`;
  const header = () => `
    <header id="site-header" class="fixed inset-x-0 top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur-md transition-all duration-300">
      <div class="mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <div class="flex items-center justify-between gap-4">
          <button data-nav="home" class="group flex items-center gap-3 text-left" aria-label="Avighna Financial Services home">
            <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-teal-600 to-blue-600 text-white shadow-md shadow-emerald-500/20 sm:h-11 sm:w-11">${icon('trending-up', 'h-6 w-6')}</span>
            <span><span class="flex items-center gap-1.5 text-xl font-black tracking-tight text-slate-900 group-hover:text-emerald-600 sm:text-2xl">AVIGHNA <i class="h-2 w-2 animate-pulse rounded-full bg-amber-500"></i></span><span class="block text-[10px] font-semibold uppercase tracking-widest text-slate-500 sm:text-xs">Financial Services • Pune</span></span>
          </button>
          <nav class="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-100/90 p-1.5 shadow-inner lg:flex" aria-label="Main navigation">
            ${NAV.map(([id, label]) => `<button data-nav="${id}" class="nav-link relative rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition-all hover:bg-slate-200/60 hover:text-slate-900">${label}</button>`).join('')}
          </nav>
          <div class="hidden items-center gap-3 md:flex">
            <button data-action="portal" class="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-slate-50 lg:text-sm">${icon('user-round-check', 'h-4 w-4 text-blue-600')} Client Portal</button>
            <button data-action="checkup" class="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-emerald-600/25 transition hover:scale-[1.02] hover:shadow-lg lg:px-5 lg:text-sm">${icon('sparkles', 'h-4 w-4 animate-spin-slow text-amber-300')} Free Financial Checkup</button>
          </div>
          <div class="flex items-center gap-2 md:hidden">
            <button data-action="checkup" class="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-sm">Checkup</button>
            <button id="mobile-menu-button" class="rounded-xl border border-slate-200 p-2 text-slate-700 hover:bg-slate-100" aria-label="Toggle navigation" aria-expanded="false">${icon('menu', 'h-6 w-6')}</button>
          </div>
        </div>
        <div id="mobile-drawer" class="mobile-drawer md:hidden">
          <nav class="space-y-1 pt-4" aria-label="Mobile navigation">
            ${NAV.map(([id, label]) => `<button data-nav="${id}" class="mobile-nav-link flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-semibold text-slate-700 transition hover:bg-slate-100">${label}${icon('chevron-right', 'h-4 w-4 text-slate-400')}</button>`).join('')}
          </nav>
          <div class="mt-3 flex flex-col gap-2.5 border-t border-slate-200 py-4">
            <button data-action="portal" class="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700">${icon('user-round-check', 'h-4 w-4 text-blue-600')} Access Client Portal</button>
            <button data-action="checkup" class="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-3 text-sm font-bold text-white shadow-md">${icon('sparkles', 'h-4 w-4 text-amber-300')} Get Free Financial Checkup</button>
            <p class="flex items-center justify-center gap-2 pt-1 text-center text-xs text-slate-500">${icon('shield-check', 'h-3.5 w-3.5 text-emerald-600')} AMFI Registered & Verified Pune Advisory</p>
          </div>
        </div>
      </div>
    </header>`;

  const footer = () => `
    <footer class="relative overflow-hidden border-t border-slate-200 bg-slate-100 pt-16 pb-12 text-slate-700">
      <div class="pointer-events-none absolute left-1/2 top-0 h-32 w-3/4 -translate-x-1/2 bg-emerald-500/5 blur-3xl"></div>
      <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-10 border-b border-slate-200 pb-12 md:grid-cols-2 lg:grid-cols-5">
          <div class="space-y-4 lg:col-span-2">
            <div class="flex items-center gap-3"><span class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-teal-600 to-blue-600 text-white">${icon('trending-up', 'h-6 w-6')}</span><span><b class="text-2xl font-black tracking-tight text-slate-900">AVIGHNA<span class="ml-1 text-xl text-amber-500">.</span></b><small class="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Financial Services • Pune</small></span></div>
            <p class="pr-4 text-sm leading-relaxed text-slate-600">Pune’s premier fiduciary financial advisory firm. We architect bespoke solutions across Home &amp; Business Loans, Mutual Funds, Disciplined SIPs, Risk Protection, and Prime Real Estate. Transparent, unbiased, and engineered for your real life.</p>
            <div class="flex flex-wrap gap-2"><span class="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">${icon('shield-check', 'h-3.5 w-3.5 text-emerald-600')} AMFI Registered ARN-284910</span><span class="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800">${icon('lock-keyhole', 'h-3.5 w-3.5 text-blue-600')} Fiduciary Zero-Conflict Model</span></div>
          </div>
          <div><h4 class="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900">Navigation</h4><ul class="space-y-2 text-sm">${NAV.map(([id, label]) => `<li><button data-nav="${id}" class="font-medium transition hover:text-emerald-600">${id === 'why-us' ? 'Why Us & Partner Ecosystem' : id === 'services' ? 'All 4 Advisory Verticals' : id === 'calculators' ? 'Interactive Financial Calculators' : id === 'contact' ? 'Contact & Pune Office Desk' : 'Home Overview'}</button></li>`).join('')}</ul></div>
          <div><h4 class="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900">Core Offerings</h4><ul class="space-y-2 text-sm">${['Home Loans (from 8.35%)', 'Business & MSME Capital', 'Direct Mutual Funds & SIPs', 'Term Life & Health Cover', 'Pune Property Advisory'].map((item) => `<li><button data-nav="services" class="font-medium transition hover:text-emerald-600">${item}</button></li>`).join('')}</ul></div>
          <div><h4 class="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900">Pune Headquarters</h4><div class="space-y-2.5 text-xs text-slate-600">
            <p class="flex items-start gap-2">${icon('map-pin', 'mt-0.5 h-4 w-4 shrink-0 text-emerald-600')}<span>Level 4, Amar Paradigm, Baner Road, near Balewadi High Street, Pune, MH 411045</span></p>
            <p class="flex items-center gap-2">${icon('phone', 'h-4 w-4 text-emerald-600')}<a class="font-semibold hover:text-slate-900" href="tel:+919823045890">+91 98230 45890 / 020-67894500</a></p>
            <p class="flex items-center gap-2">${icon('mail', 'h-4 w-4 text-emerald-600')}<a class="font-semibold hover:text-slate-900" href="mailto:consult@avighnafinancial.com">consult@avighnafinancial.com</a></p>
            <p class="flex items-center gap-2">${icon('clock-3', 'h-4 w-4 text-amber-600')} Mon – Sat: 9:30 AM – 7:00 PM IST</p>
            <button data-action="checkup" class="mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl border border-emerald-300 bg-white px-3 py-2 text-xs font-bold text-emerald-700 shadow-sm transition hover:bg-emerald-50">Schedule Pune Consultation ${icon('arrow-up-right', 'h-3.5 w-3.5')}</button>
          </div></div>
        </div>
        <div class="space-y-2 border-b border-slate-200 py-8 text-[11px] leading-relaxed text-slate-500">
          <p class="font-bold text-slate-700">Regulatory Disclosure &amp; Disclaimer:</p>
          <p>Avighna Financial Services acts as an authorized distributor and referral advisor for Mutual Funds (AMFI Registered ARN-284910), Corporate Fixed Deposits, and Channel Partner for leading Scheduled Commercial Banks, Housing Finance Companies, and NBFCs. <strong class="text-slate-700">Mutual Fund investments are subject to market risks; read all scheme-related documents carefully before investing.</strong></p>
          <p>Loan sanctions, disbursals, and applicable interest rates are at the sole discretion of the respective financing institutions and depend on borrower eligibility, CIBIL credit parameters, and institutional lending policies. Insurance is the subject matter of solicitation; policies are underwritten by IRDAI-registered insurers.</p>
        </div>
        <div class="flex flex-col items-center justify-between gap-3 pt-6 text-xs text-slate-500 sm:flex-row"><p>© 2026 Avighna Financial Services LLP. All Rights Reserved. Pune, Maharashtra.</p><div class="flex items-center gap-4"><span>Privacy Policy</span><span>•</span><span>Terms of Advisory</span><span>•</span><span>Fair Practice Code</span></div></div>
      </div>
    </footer>`;

  const range = (id, label, min, max, step, value, labels, color = 'emerald') => `
    <div class="range-field">
      <div class="mb-2 flex items-center justify-between gap-3"><label for="${id}" class="text-xs font-bold text-slate-700 sm:text-sm">${label}</label><output id="${id}-value" class="shrink-0 font-mono text-base font-black text-${color}-600 sm:text-lg"></output></div>
      <input id="${id}" type="range" min="${min}" max="${max}" step="${step}" value="${value}" aria-label="${label}">
      <div class="mt-1 flex justify-between gap-2 text-[10px] text-slate-400 sm:text-[11px]">${labels.map((text) => `<span>${text}</span>`).join('')}</div>
    </div>`;
  const pageIntro = (eyebrow, title, copy, iconName = 'sparkles', accent = 'emerald') => `
    <div class="mx-auto max-w-3xl space-y-4 text-center">
      <span class="inline-flex items-center gap-2 rounded-full border border-${accent}-200 bg-${accent}-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-${accent}-800">${icon(iconName, `h-3.5 w-3.5 text-${accent}-600`)} ${eyebrow}</span>
      <h1 class="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">${title}</h1>
      <p class="text-base text-slate-600 sm:text-lg">${copy}</p>
    </div>`;

  const homePage = () => `
    <section id="home" class="page-section space-y-24 pb-20 sm:space-y-32">
      <div class="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-blue-50/70 via-white to-emerald-50/30 pt-32 pb-16 sm:pt-40 lg:pb-24">
        <div class="pointer-events-none absolute left-1/2 top-1/4 h-[450px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/50 blur-[120px]"></div><div class="pointer-events-none absolute right-10 top-1/3 h-[300px] w-[380px] rounded-full bg-emerald-100/50 blur-[100px]"></div>
        <div class="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div class="space-y-6 lg:col-span-7">
            <span class="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-1.5 text-xs font-bold text-blue-800 shadow-sm"><i class="h-2 w-2 animate-ping rounded-full bg-emerald-500"></i> AMFI Registered &amp; Pune’s Top-Rated Advisory Desk</span>
            <h1 class="text-4xl font-black leading-[1.14] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">Build Your Wealth,<br><span class="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">Secure Your Future</span> — Simply.</h1>
            <p class="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">Comprehensive solutions across Home/Business Loans, Mutual Funds, SIPs, Insurance, and Property Advisory. Designed around your real life, not a product pitch.</p>
            <div class="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
              <button data-action="checkup" class="flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 px-7 py-4 text-base font-bold text-white shadow-md shadow-emerald-600/25 transition hover:scale-[1.02]">${icon('sparkles', 'h-5 w-5 text-amber-300')} Start Free Financial Checkup ${icon('arrow-right', 'h-5 w-5')}</button>
              <button data-nav="services" class="flex items-center justify-center gap-2 rounded-xl border-2 border-blue-600 bg-white px-6 py-4 text-base font-bold text-blue-700 transition hover:bg-blue-50/70">Explore Services ${icon('arrow-up-right', 'h-4 w-4 text-blue-600')}</button>
            </div>
            <div class="grid grid-cols-3 gap-4 border-t border-slate-200 pt-6"><div><b class="text-xl font-black text-slate-900 sm:text-2xl">₹500 Cr+</b><p class="text-xs font-medium text-slate-500">Assets Facilitated</p></div><div><b class="text-xl font-black text-emerald-600 sm:text-2xl">99.2%</b><p class="text-xs font-medium text-slate-500">Loan Approval Rate</p></div><div><b class="text-xl font-black text-blue-700 sm:text-2xl">10,000+</b><p class="text-xs font-medium text-slate-500">Happy Families</p></div></div>
          </div>
          <div class="relative lg:col-span-5"><div class="glass-panel-light relative z-10 mx-auto max-w-md space-y-5 rounded-3xl bg-white/95 p-6 shadow-xl sm:p-7 lg:max-w-none">
            <div class="flex items-center justify-between border-b border-slate-200 pb-4"><div class="flex items-center gap-3"><span class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">${icon('trending-up', 'h-5 w-5')}</span><div><h3 class="text-sm font-bold text-slate-900">Avighna Fiduciary Index</h3><p class="text-[11px] text-slate-500">Live Client Performance Snapshot</p></div></div><span class="rounded-full border border-emerald-200 bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-800">● Active</span></div>
            <div class="grid grid-cols-2 gap-3"><div class="rounded-2xl border border-slate-200 bg-slate-50 p-3.5"><span class="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Home Loan Desk</span><p class="mt-1 text-lg font-black text-emerald-600">From 8.35%</p><small class="text-[10px] text-slate-500">SBI • HDFC • ICICI</small></div><div class="rounded-2xl border border-slate-200 bg-slate-50 p-3.5"><span class="text-[11px] font-semibold uppercase tracking-wider text-slate-500">SIP Growth XIRR</span><p class="mt-1 text-lg font-black text-blue-600">14.6% Avg</p><small class="text-[10px] text-slate-500">10-Yr Equity Blend</small></div></div>
            <div class="space-y-2 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4"><div class="flex justify-between text-xs"><b class="text-slate-700">Fiduciary Transparency</b><b class="text-emerald-700">100% Roadmap</b></div><div class="h-2.5 w-full overflow-hidden rounded-full bg-emerald-200/60"><div class="h-full w-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div></div><div class="flex justify-between text-[10px] text-slate-500"><span>Zero Hidden Trailing Broker Fees</span><b class="text-emerald-700">AMFI Certified</b></div></div>
            <div class="flex items-center justify-between pt-1 text-xs text-slate-600"><span class="flex items-center gap-1.5 font-medium">${icon('shield-check', 'h-4 w-4 text-emerald-600')} 30+ Bank &amp; AMC Partners</span><span class="flex items-center gap-1 font-bold text-amber-500">${icon('star', 'h-3.5 w-3.5 fill-amber-400 text-amber-400')} <b class="text-slate-800">4.9 / 5 Rating</b></span></div>
          </div><div class="absolute -right-3 -top-5 z-20 flex animate-bounce-short items-center gap-2.5 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-lg sm:-right-6">${icon('award', 'h-8 w-8 rounded-lg bg-emerald-100 p-1.5 text-emerald-700')}<span><b class="block text-xs text-slate-900">0 Hidden Fees</b><small class="text-[10px] text-slate-500">Pure Fiduciary Model</small></span></div><div class="absolute -bottom-5 -left-3 z-20 flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-lg sm:-left-6">${icon('circle-check', 'h-8 w-8 rounded-lg bg-blue-100 p-1.5 text-blue-700')}<span><b class="block text-xs text-slate-900">₹500 Cr+ Facilitated</b><small class="text-[10px] text-slate-500">Pune &amp; Maharashtra</small></span></div></div>
        </div>
      </div>
      ${homeEstimator()}
      <section class="page-container">
        <div class="mx-auto mb-12 max-w-3xl space-y-3 text-center"><span class="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">Full-Spectrum Fiduciary Architecture</span><h2 class="text-3xl font-black text-slate-900 sm:text-4xl">Four Core Pillars. One Trusted Pune Partner.</h2><p class="text-sm text-slate-600 sm:text-base">Whether securing credit, compounding savings, guarding family longevity, or investing in Pune real estate, we handle every detail.</p></div>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 sm:gap-8">${serviceData.map((cat) => `<article class="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-xl"><div><div class="mb-4 flex items-center justify-between"><span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-600 text-white shadow-md">${icon(cat.icon, 'h-6 w-6')}</span><span class="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-800">${cat.badge}</span></div><h3 class="text-xl font-black text-slate-900 transition-colors group-hover:text-emerald-700 sm:text-2xl">${cat.name}</h3><p class="mt-1 text-xs font-bold text-emerald-700">${cat.tagline}</p><p class="mt-3 text-sm leading-relaxed text-slate-600">${cat.description}</p><ul class="mt-5 space-y-2.5 text-xs text-slate-600">${cat.cards.slice(0, 3).map((card) => `<li class="flex items-center gap-2">${icon('circle-check', 'h-4 w-4 shrink-0 text-emerald-600')}<span><b class="text-slate-800">${card[0]}</b> — ${card[1]}</span></li>`).join('')}</ul></div><div class="mt-6 flex items-center justify-between border-t border-slate-100 pt-6"><button data-service-category="${cat.id}" data-nav="services" class="flex items-center gap-1.5 text-xs font-bold text-blue-700 transition hover:text-emerald-700 sm:text-sm">View Detailed Vertical ${icon('chevron-right', 'h-4 w-4')}</button><button data-action="checkup" data-goal="${escapeHtml(cat.name)}" class="rounded-xl border border-slate-200 bg-slate-100 px-3.5 py-1.5 text-xs font-bold text-slate-700 transition hover:border-emerald-600 hover:bg-emerald-600 hover:text-white">Book Consultation</button></div></article>`).join('')}</div>
      </section>
      <section class="page-container"><div class="mx-auto mb-12 max-w-3xl space-y-3 text-center"><span class="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-800">Transparent Benchmark</span><h2 class="text-3xl font-black text-slate-900 sm:text-4xl">Traditional Sales Agents vs. The Avighna Fiduciary Standard</h2><p class="text-sm text-slate-600 sm:text-base">See the structural difference between commission-driven sales and goal-aligned financial planning.</p></div><div class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"><div class="overflow-x-auto"><table class="w-full border-collapse text-left"><thead><tr class="border-b border-slate-200 bg-slate-50"><th class="p-4 text-xs font-bold uppercase tracking-wider text-slate-500 sm:p-5">Key Differentiator</th><th class="p-4 text-xs font-bold uppercase tracking-wider text-slate-500 sm:p-5">Traditional Bank DSA / Agent</th><th class="bg-emerald-50/60 p-4 text-xs font-bold uppercase tracking-wider text-emerald-800 sm:p-5">The Avighna Financial Way</th></tr></thead><tbody class="divide-y divide-slate-100 text-xs sm:text-sm">${comparisons.map((row, i) => `<tr class="${i % 2 ? 'bg-white' : 'bg-slate-50/40'}"><td class="p-4 font-bold text-slate-900 sm:p-5">${row[0]}</td><td class="p-4 text-slate-500 sm:p-5"><span class="flex items-start gap-2">${icon('x', 'mt-0.5 h-4 w-4 shrink-0 text-rose-500')} ${row[1]}</span></td><td class="bg-emerald-50/20 p-4 font-bold text-slate-900 sm:p-5"><span class="flex items-start gap-2">${icon('check', 'mt-0.5 h-4 w-4 shrink-0 text-emerald-600')} ${row[2]}</span></td></tr>`).join('')}</tbody></table></div></div></section>
      <section class="page-container"><div class="mb-16 grid grid-cols-2 gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 md:grid-cols-3 lg:grid-cols-6">${trustStats.map((item) => `<div class="p-3 text-center"><p class="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-2xl font-black text-transparent sm:text-3xl">${item[0]}</p><p class="mt-1 text-xs font-bold text-slate-800">${item[1]}</p><p class="mt-0.5 text-[10px] text-slate-500">${item[2]}</p></div>`).join('')}</div><div class="space-y-8"><div class="mx-auto max-w-2xl space-y-2 text-center"><span class="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">Verified Client Stories</span><h2 class="text-3xl font-black text-slate-900">Trusted by 10,000+ Pune Professionals &amp; Entrepreneurs</h2><p class="text-sm text-slate-500">Real families who transformed their liabilities into compounding wealth.</p></div><div class="grid grid-cols-1 gap-6 md:grid-cols-2">${testimonials.map((t) => `<article class="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-emerald-300 hover:shadow-lg sm:p-7"><div class="space-y-4"><div class="flex items-center justify-between"><div class="flex gap-1 text-amber-400">${Array.from({ length: 5 }, () => icon('star', 'h-4 w-4 fill-amber-400 text-amber-400')).join('')}</div><span class="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-800">${t[5]}</span></div><p class="text-sm italic leading-relaxed text-slate-600">“${t[4]}”</p></div><div class="mt-6 flex items-center gap-3 border-t border-slate-100 pt-6"><img src="https://images.unsplash.com/${t[6]}?auto=format&amp;fit=crop&amp;w=200&amp;q=80" alt="" class="h-11 w-11 rounded-full border border-slate-200 object-cover"><div><h3 class="flex items-center gap-1.5 text-sm font-bold text-slate-900">${t[0]} ${icon('badge-check', 'h-4 w-4 text-emerald-600')}</h3><p class="text-[11px] text-slate-500">${t[1]}</p><p class="text-[10px] font-bold text-blue-700">${t[2]} • ${t[3]}</p></div></div></article>`).join('')}</div></div></section>
      <section class="page-container"><div class="space-y-6 rounded-3xl border border-slate-200 bg-slate-100/70 p-8 text-center"><p class="text-xs font-bold uppercase tracking-widest text-slate-500">Direct Syndication &amp; Distribution Across 30+ Leading Indian Institutions</p><div class="flex flex-wrap items-center justify-center gap-3 sm:gap-6">${['State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Kotak Mahindra', 'Nippon India AMC', 'Tata Mutual Fund', 'Max Life'].map((bank) => `<span class="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700 sm:text-sm">${bank}</span>`).join('')}</div></div></section>
      <section class="page-container"><div class="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 p-8 text-white shadow-xl sm:p-12"><div class="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div><div class="relative z-10 flex flex-col items-center justify-between gap-8 lg:flex-row"><div class="space-y-3 text-center lg:text-left"><span class="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-200">Zero Upfront Cost • In-Person or Virtual</span><h2 class="text-3xl font-black text-white sm:text-4xl">Take Control of Your Financial Future Today.</h2><p class="max-w-xl text-sm text-emerald-50 sm:text-base">Get a comprehensive review of your home loan rate, mutual fund portfolio health, and family insurance protection.</p></div><div class="flex shrink-0 flex-col items-center gap-4 sm:flex-row"><button data-action="checkup" class="flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-lg transition hover:scale-105">${icon('sparkles', 'h-5 w-5 text-amber-500')} Book Free Financial Checkup</button><button data-nav="contact" class="rounded-xl border border-white/30 bg-white/10 px-6 py-4 text-base font-bold text-white transition hover:bg-white/20">Contact Pune Desk</button></div></div></div></section>
    </section>`;

  const homeEstimator = () => `
    <section class="page-container"><div class="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10">
      <div class="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 lg:flex-row lg:items-center"><div><span class="mb-2 inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800">${icon('calculator', 'h-3.5 w-3.5 text-amber-600')} Instant Estimator</span><h2 class="text-2xl font-black text-slate-900 sm:text-3xl">Simulate Your Wealth &amp; Loan Numbers</h2><p class="mt-1 text-sm text-slate-500">Toggle between SIP growth and Home Loan EMI calculators for real-time projections.</p></div><div class="flex items-center rounded-2xl border border-slate-200 bg-slate-100 p-1.5"><button data-home-tab="sip" class="home-calc-tab rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm sm:px-5 sm:text-sm">${icon('trending-up', 'h-4 w-4 inline-block')} SIP Wealth Estimator</button><button data-home-tab="emi" class="home-calc-tab rounded-xl px-4 py-2.5 text-xs font-bold text-slate-600 transition hover:text-slate-900 sm:px-5 sm:text-sm">${icon('building-2', 'h-4 w-4 inline-block')} Loan EMI Calculator</button></div></div>
      <div id="home-sip" class="grid grid-cols-1 items-center gap-8 pt-8 lg:grid-cols-12"><div class="space-y-6 lg:col-span-7">${range('quick-sip-amount', 'Monthly Investment Amount', 1000, 200000, 1000, 15000, ['₹1,000 / mo', '₹50,000', '₹1,00,000', '₹2,00,000 / mo'])}${range('quick-sip-years', 'Investment Horizon', 1, 30, 1, 15, ['1 Year', '10 Years', '20 Years', '30 Years'], 'slate')}<p class="text-xs text-slate-500">*Based on benchmark diversified equity CAGR expectation of 13.5% p.a.</p></div><div class="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:col-span-5"><div class="border-b border-slate-200 pb-4 text-center"><p class="text-xs font-semibold uppercase tracking-wider text-slate-500">Total Expected Corpus</p><p id="quick-sip-corpus" class="mt-1 font-mono text-3xl font-black text-emerald-600 sm:text-4xl"></p><p id="quick-sip-exact" class="mt-0.5 text-xs text-slate-500"></p></div><div class="space-y-2.5 text-xs sm:text-sm"><p class="flex justify-between"><span class="text-slate-500">Total Invested Amount:</span><b id="quick-sip-invested" class="font-mono text-slate-800"></b></p><p class="flex justify-between"><span class="text-slate-500">Estimated Wealth Gain:</span><b id="quick-sip-gain" class="font-mono text-emerald-600"></b></p></div><div><div class="flex h-3 overflow-hidden rounded-full bg-slate-200"><div id="quick-sip-principal-bar" class="bg-blue-500 transition-all duration-300"></div><div id="quick-sip-return-bar" class="bg-emerald-500 transition-all duration-300"></div></div><div class="mt-1 flex justify-between text-[11px] text-slate-500"><span>🔵 Principal</span><span>🟢 Compounded Growth</span></div></div><button data-nav="calculators" class="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700 sm:text-sm">Open Full Calculator Suite (All 4 Tools) ${icon('arrow-right', 'h-4 w-4')}</button></div></div>
      <div id="home-emi" hidden class="grid grid-cols-1 items-center gap-8 pt-8 lg:grid-cols-12"><div class="space-y-6 lg:col-span-7">${range('quick-loan-amount', 'Loan Amount Required', 500000, 30000000, 250000, 5000000, ['₹5 Lakhs', '₹1 Crore', '₹2 Crores', '₹3 Crores'], 'blue')}${range('quick-loan-rate', 'Interest Rate (p.a.)', 8, 14, .1, 8.4, ['8.0% Home', '9.5% LAP', '12.0% Business', '14.0%'], 'emerald')}${range('quick-loan-years', 'Loan Tenure', 1, 30, 1, 20, ['1 Year', '10 Years', '20 Years', '30 Years'], 'slate')}</div><div class="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:col-span-5"><div class="border-b border-slate-200 pb-4 text-center"><p class="text-xs font-semibold uppercase tracking-wider text-slate-500">Monthly Equated Installment (EMI)</p><p id="quick-emi-value" class="mt-1 font-mono text-3xl font-black text-blue-700 sm:text-4xl"></p></div><div class="space-y-2.5 text-xs sm:text-sm"><p class="flex justify-between"><span class="text-slate-500">Principal Loan:</span><b id="quick-emi-principal" class="font-mono"></b></p><p class="flex justify-between"><span class="text-slate-500">Total Interest Payable:</span><b id="quick-emi-interest" class="font-mono text-amber-600"></b></p><p class="flex justify-between border-t border-slate-200 pt-2"><span class="font-bold text-slate-700">Total Amount Payable:</span><b id="quick-emi-total" class="font-mono font-black text-slate-900"></b></p></div><button data-action="checkup" data-goal="Home Loan" class="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-blue-700 sm:text-sm">Check Sanction Eligibility (Free) ${icon('arrow-right', 'h-4 w-4')}</button></div></div>
    </div></section>`;

  const servicesPage = () => `
    <section id="services" hidden class="page-section page-container page-content space-y-16">
      ${pageIntro('Institutional Open-Architecture', 'Comprehensive Financial Verticals', 'Unbiased, transparent, and structured around your family’s balance sheet. Explore interest rates, eligibility criteria, and required documentation below.')}
      <div id="service-tabs" class="flex flex-wrap items-center justify-center gap-3">${serviceData.map((cat) => `<button data-category="${cat.id}" aria-selected="${cat.id === 'loans'}" class="service-tab flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-xs font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 sm:text-sm">${icon(cat.icon, 'h-4 w-4')} ${cat.name}</button>`).join('')}</div>
      <div id="service-description" class="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"></div>
      <div id="service-cards" class="grid grid-cols-1 gap-8 md:grid-cols-2"></div>
      <div class="flex flex-col items-center justify-between gap-6 rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50 via-white to-emerald-50 p-6 shadow-sm md:flex-row sm:p-8"><div class="space-y-1 text-center md:text-left"><h2 class="text-xl font-black text-slate-900">Uncertain which debt or investment structure suits your FY 2025-26?</h2><p class="text-xs text-slate-600 sm:text-sm">Our Senior Financial Planners review your tax bracket, liabilities, and liquid reserves to build a tailored blueprint.</p></div><button data-action="checkup" data-goal="Comprehensive Financial Audit" class="whitespace-nowrap rounded-xl bg-blue-600 px-6 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-blue-700 sm:text-sm">Request Full Balance Sheet Audit</button></div>
    </section>`;

  const calcPanel = (key, title, copy, controls, result, color = 'emerald') => `
    <div id="calc-panel-${key}" class="calc-panel rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10" ${key === 'sip' ? '' : 'hidden'}>
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-12"><div class="space-y-7 lg:col-span-7"><div><h2 class="text-xl font-black text-slate-900 sm:text-2xl">${title}</h2><p class="mt-1 text-xs text-slate-500 sm:text-sm">${copy}</p></div>${controls}</div><div class="flex flex-col justify-between space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:col-span-5">${result}</div></div>
    </div>`;
  const resultsShell = (label, id, amountClass, sub = '') => `<div class="border-b border-slate-200 pb-6 text-center"><span class="text-xs font-bold uppercase tracking-widest text-slate-500">${label}</span><p id="${id}" class="mt-2 font-mono text-3xl font-black text-${amountClass}-600 sm:text-4xl lg:text-5xl"></p>${sub ? `<p id="${id}-sub" class="mt-1 text-xs text-slate-500"></p>` : ''}</div>`;
  const calcAction = (text, goal, color = 'emerald') => `<button data-action="checkup" data-goal="${escapeHtml(goal)}" class="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-${color}-600 to-teal-600 px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:scale-[1.01]">${text} ${icon('arrow-right', 'h-4 w-4')}</button>`;
  const calculatorsPage = () => {
    const sipControls = `${range('sip-monthly', 'Monthly Investment', 500, 2000000, 500, 25000, ['₹500', '₹50,000', '₹5 Lakhs', '₹20 Lakhs / mo'])}${range('sip-rate', 'Expected Annual Return (CAGR)', 5, 25, .5, 13, ['5% (Debt)', '12% - 14% Equity', '18% (Alpha)', '25%'], 'blue')}${range('sip-years', 'Investment Horizon', 1, 30, 1, 15, ['1 Year', '10 Years', '20 Years', '30 Years'], 'slate')}<div class="space-y-2 rounded-2xl border border-slate-200 bg-slate-50 p-4"><p class="text-xs font-bold uppercase tracking-wider text-slate-500">Milestone Wealth Projections</p><div id="sip-milestones" class="grid grid-cols-2 gap-2 text-xs sm:grid-cols-3"></div></div>`;
    const sipResult = `${resultsShell('Estimated Total Wealth Corpus', 'sip-corpus', 'emerald', 'exact')}<div class="space-y-3 text-xs sm:text-sm"><p class="flex justify-between"><span class="text-slate-600">Total Capital Invested:</span><b id="sip-invested" class="font-mono text-slate-900"></b></p><p class="flex justify-between"><span class="text-slate-600">Estimated Wealth Gain:</span><b id="sip-gain" class="font-mono text-emerald-600"></b></p></div><div><div class="flex justify-between text-xs font-bold"><span id="sip-invested-percent" class="text-blue-700"></span><span id="sip-return-percent" class="text-emerald-700"></span></div><div class="mt-2 flex h-3.5 overflow-hidden rounded-full bg-slate-200"><div id="sip-principal-bar" class="bg-blue-600 transition-all duration-300"></div><div id="sip-return-bar" class="bg-emerald-500 transition-all duration-300"></div></div></div>${calcAction('Setup This SIP Portfolio with Avighna', 'Wealth Creation')}`;
    const emiControls = `${range('loan-principal', 'Principal Loan Amount', 100000, 50000000, 100000, 6500000, ['₹1 Lakh', '₹1 Crore', '₹3 Crores', '₹5 Crores'], 'blue')}${range('loan-rate', 'Interest Rate (p.a.)', 6, 18, .05, 8.5, ['6.0%', '8.35% Tier-1 Home', '12.0% MSME', '18.0%'], 'emerald')}${range('loan-tenure', 'Loan Tenure', 1, 30, 1, 20, ['1 Year', '10 Years', '20 Years', '30 Years'], 'slate')}<div class="flex items-start gap-2.5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-xs text-emerald-800">${icon('circle-check', 'mt-0.5 h-4 w-4 shrink-0 text-emerald-600')}<span><b>Balance Transfer Tip:</b> If your current home loan rate exceeds 9.0%, transferring to an 8.35% slab can save interest over 20 years. Actual savings depend on loan terms and eligibility.</span></div>`;
    const emiResult = `${resultsShell('Monthly Installment (EMI)', 'emi-result', 'blue', 'tenure')}<div class="space-y-3 text-xs sm:text-sm"><p class="flex justify-between"><span class="text-slate-600">Principal Amount:</span><b id="emi-principal" class="font-mono"></b></p><p class="flex justify-between"><span class="text-slate-600">Total Interest Payable:</span><b id="emi-interest" class="font-mono text-amber-600"></b></p><p class="flex justify-between border-t border-slate-200 pt-2 font-bold"><span class="text-slate-700">Total Sum Payable:</span><b id="emi-total" class="font-mono text-slate-900"></b></p></div><div><div class="flex justify-between text-xs font-bold"><span id="emi-principal-percent" class="text-blue-700"></span><span id="emi-interest-percent" class="text-amber-700"></span></div><div class="mt-2 flex h-3.5 overflow-hidden rounded-full bg-slate-200"><div id="emi-principal-bar" class="bg-blue-600 transition-all duration-300"></div><div id="emi-interest-bar" class="bg-amber-500 transition-all duration-300"></div></div></div>${calcAction('Apply for Sanction with 30+ Banks', 'Home Loan', 'blue')}`;
    const retirementControls = `<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">${range('current-age', 'Current Age', 20, 65, 1, 32, ['20 Yrs', '', '', '65 Yrs'], 'slate')}${range('retirement-age', 'Target Retirement Age', 33, 75, 1, 58, ['33 Yrs', '', '', '75 Yrs'])}</div>${range('monthly-expenses', 'Current Monthly Household Expenses', 15000, 500000, 5000, 60000, ['₹15,000', '₹1 Lakh', '₹2.5 Lakhs', '₹5 Lakhs / mo'], 'blue')}${range('inflation-rate', 'Expected Annual Inflation Rate', 4, 10, .5, 6, ['4% Optimistic', '6% Standard CPI', '', '10%'], 'slate')}<div class="space-y-1 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600"><p>• Time left to build corpus: <b id="retire-years" class="text-slate-900"></b></p><p>• Future Monthly Expense: <b id="retire-expense" class="font-mono text-amber-700"></b></p></div>`;
    const retirementResult = `${resultsShell('Required Retirement Corpus', 'retire-corpus', 'emerald', 'exact')}<div class="space-y-2 rounded-2xl border border-emerald-200 bg-white p-4 text-center shadow-sm"><span class="text-xs font-bold uppercase tracking-wider text-emerald-800">Recommended Monthly SIP Today</span><p class="font-mono text-2xl font-black text-emerald-600"><span id="retire-sip"></span><small class="text-xs font-normal text-slate-500"> / month</small></p><p class="text-[11px] font-medium text-slate-600">Targeting 12% equity CAGR until age <span id="retire-target-age"></span>.</p></div>${calcAction('Design My Custom Retirement Blueprint', 'Retirement Planning')}`;
    const insuranceControls = `${range('annual-income', 'Current Annual Take-Home Income', 300000, 10000000, 100000, 1800000, ['₹3 Lakhs', '₹25 Lakhs', '₹50 Lakhs', '₹1 Crore'], 'emerald')}${range('liabilities', 'Total Outstanding Loans (Home/Business/Car)', 0, 30000000, 250000, 4500000, ['₹0 Debt Free', '₹50 Lakhs', '₹1.5 Crores', '₹3 Crores'], 'rose')}${range('child-goal', 'Future Milestone Provision (Children Education & Marriage)', 0, 20000000, 500000, 3000000, ['₹0', '₹30 Lakhs', '₹1 Crore', '₹2 Crores'], 'blue')}`;
    const insuranceResult = `${resultsShell('Recommended Term Sum Assured (Cover)', 'insurance-cover', 'blue', 'exact')}<div class="space-y-3 text-xs sm:text-sm"><p class="flex justify-between gap-3"><span class="text-slate-600">Family Income Replacement (15 Yrs):</span><b id="insurance-replacement" class="font-mono"></b></p><p class="flex justify-between"><span class="text-slate-600">Total Liabilities to Settle:</span><b id="insurance-liabilities" class="font-mono text-rose-600"></b></p><p class="flex justify-between"><span class="text-slate-600">Children Milestone Reserve:</span><b id="insurance-child-goal" class="font-mono text-blue-700"></b></p><p class="flex justify-between border-t border-slate-200 pt-2 font-bold text-emerald-700"><span>Estimated Premium:</span><b id="insurance-premium" class="font-mono"></b></p></div>${calcAction('Compare Term Quotes Across Top Insurers', 'Term Insurance', 'blue')}`;
    const tabs = [['sip', 'trending-up', '1. SIP Wealth Estimator', 'emerald'], ['emi', 'building-2', '2. Loan EMI Calculator', 'blue'], ['retirement', 'piggy-bank', '3. Retirement & FIRE Planner', 'emerald'], ['insurance', 'shield-check', '4. Term Cover (HLV) Estimator', 'blue']];
    return `<section id="calculators" hidden class="page-section page-container page-content space-y-12">${pageIntro('Institutional Math Engines', 'Financial Advisory Calculators', 'Run high-precision projections for wealth compounding, loan EMIs, retirement horizons, and insurance safety shields.', 'coins', 'blue')}<div id="calc-tabs" class="flex flex-wrap items-center justify-center gap-3">${tabs.map(([id, glyph, label, accent], index) => `<button data-calc-tab="${id}" aria-selected="${index === 0}" class="calc-tab flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 sm:px-5 sm:text-sm">${icon(glyph, 'h-4 w-4')} ${label}</button>`).join('')}</div><div class="space-y-6">${calcPanel('sip', 'Systematic Investment Plan (SIP)', 'Compound small monthly savings into multi-crore wealth with rupee-cost averaging.', sipControls, sipResult)}${calcPanel('emi', 'Loan Equated Monthly Installment (EMI)', 'Calculate monthly outflow across Home Loans, Business Capital, and LAP.', emiControls, emiResult, 'blue')}${calcPanel('retirement', 'Retirement & Financial Independence (FIRE)', 'Factors in Indian lifestyle inflation and longevity to pinpoint your freedom number.', retirementControls, retirementResult)}${calcPanel('insurance', 'Term Life Insurance (Human Life Value)', 'Ensure your family and debts are fortified against an unforeseen life event.', insuranceControls, insuranceResult, 'blue')}</div><p class="mx-auto max-w-3xl text-center text-xs text-slate-500">All projections are estimates for illustration only and are not guarantees of future returns, loan approvals, insurance eligibility, or premium quotes.</p></section>`;
  };

  const whyUsPage = () => {
    const steps = [
      ['01', 'Discovery & Goal Mapping', 'A confidential session to map your family’s balance sheet, existing debts, lifestyle ambitions, and risk capacity.', 'No pushy sales pitches. We listen to understand where your family stands today and where you want to be.'],
      ['02', '360° Forensic Financial Audit', 'Our planners review your home loan rates, credit reports, AMC expense ratios, and insurance cover.', 'We identify potential fees, suboptimal policies, and over-leveraged borrowing that can affect family wealth.'],
      ['03', 'Custom Institutional Blueprint', 'We match your requirements with partner banks, housing finance companies, and mutual fund AMCs.', 'You receive comparative quotes, transparent EMI calculations, and SIP projections.'],
      ['04', 'Doorstep Execution & Monitoring', 'Our Pune team coordinates documents, legal searches, lender processes, and portfolio setups.', 'We conduct periodic portfolio reviews, refinancing checks, and support during claims.']
    ];
    const values = [
      ['scale', 'Strict Fiduciary Duty', 'We represent you, the client — never the product manufacturer. We prioritize your goals.'],
      ['eye', '100% Fee Transparency', 'Zero undisclosed trailing commissions or backdoor markups. Charges are disclosed upfront.'],
      ['target', 'Goal-Centric Architecture', 'Every loan, SIP allocation, or term cover serves a defined real-world family milestone.'],
      ['heart-handshake', 'End-to-End Pune Handholding', 'From Baner to Kharadi, our senior advisors provide doorstep document handling.']
    ];
    return `<section id="why-us" hidden class="page-section page-container page-content space-y-24">${pageIntro('The Avighna Standard', 'Why Discerning Pune Families Choose Avighna', 'In an industry plagued by opaque commissions and aggressive push-sales, we built an independent fiduciary firm dedicated to pure client alignment.')}<div class="grid grid-cols-1 gap-8 md:grid-cols-2"><article class="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"><span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">${icon('target', 'h-6 w-6')}</span><h2 class="text-2xl font-black text-slate-900">Our Mission</h2><p class="text-sm leading-relaxed text-slate-600">To empower Indian families and entrepreneurs with institutional-grade financial guidance, thoughtful debt structuring, disciplined wealth compounding, and insurance protection — reducing anxiety from financial decision making.</p></article><article class="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"><span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">${icon('eye', 'h-6 w-6')}</span><h2 class="text-2xl font-black text-slate-900">Our Vision</h2><p class="text-sm leading-relaxed text-slate-600">To be Western India’s most ethical, technologically advanced, and transparent private wealth and debt advisory firm — setting the benchmark for fiduciary excellence.</p></article></div><div class="space-y-12"><div class="mx-auto max-w-2xl space-y-2 text-center"><span class="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">Uncompromising Ethics</span><h2 class="text-3xl font-black text-slate-900">Our Four Operating Tenets</h2><p class="text-sm text-slate-500">The principles guiding every client recommendation we deliver.</p></div><div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">${values.map(([glyph, title, desc]) => `<article class="space-y-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-300 hover:shadow-lg"><span class="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-emerald-700">${icon(glyph, 'h-5 w-5')}</span><h3 class="text-base font-black text-slate-900">${title}</h3><p class="text-xs leading-relaxed text-slate-600">${desc}</p></article>`).join('')}</div></div><div class="space-y-12 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-12"><div class="mx-auto max-w-2xl space-y-2 text-center"><span class="rounded-full border border-blue-200 bg-blue-100/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-800">Structured Execution</span><h2 class="text-3xl font-black text-slate-900">The 4-Step Avighna Advisory Process</h2><p class="text-sm text-slate-500">How we take you from financial complexity to clarity.</p></div><div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">${steps.map(([num, title, desc, detail]) => `<article class="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-400"><div class="flex items-center justify-between"><span class="font-mono text-3xl font-black text-emerald-600">${num}</span><i class="h-2.5 w-2.5 rounded-full bg-emerald-500"></i></div><h3 class="text-lg font-black text-slate-900">${title}</h3><p class="text-xs leading-relaxed text-slate-600">${desc}</p><p class="border-t border-slate-100 pt-2 text-[11px] italic text-slate-500">${detail}</p></article>`).join('')}</div></div><div class="space-y-10"><div class="mx-auto max-w-2xl space-y-2 text-center"><span class="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">Institutional Network</span><h2 class="text-3xl font-black text-slate-900">Our 30+ Partner Ecosystem</h2><p class="text-sm text-slate-500">We work across tier-1 banks, AMCs, and insurers without proprietary bias.</p></div><div class="space-y-8">${partners.map(([group, list]) => `<article class="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><h3 class="flex items-center gap-2 text-lg font-black text-slate-900">${icon('building-2', 'h-5 w-5 text-blue-600')} ${group}</h3><div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">${list.map(([name, tag, rate]) => `<div class="rounded-2xl border border-slate-200 bg-slate-50 p-3.5 transition hover:border-emerald-300 hover:bg-white hover:shadow-sm"><p class="text-xs font-bold text-slate-900">${name}</p><p class="mt-0.5 text-[10px] text-slate-500">${tag}</p>${rate ? `<p class="mt-1 text-[10px] font-bold text-emerald-700">${rate}</p>` : ''}</div>`).join('')}</div></article>`).join('')}</div></div><div class="space-y-5 rounded-3xl border border-emerald-400/30 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 p-10 text-center text-white shadow-xl"><h2 class="text-2xl font-black text-white sm:text-3xl">Experience True Fiduciary Advisory</h2><p class="mx-auto max-w-xl text-sm text-emerald-50">Schedule your complimentary consultation with our senior Pune wealth planners today.</p><button data-action="checkup" class="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-slate-900 shadow-md transition hover:scale-105">${icon('sparkles', 'h-4 w-4 text-amber-500')} Book Free Financial Checkup</button></div></section>`;
  };

  const contactPage = () => `
    <section id="contact" hidden class="page-section page-container page-content space-y-24">
      ${pageIntro('Pune Central Headquarters', 'Connect with Our Advisory Desk', 'Visit our registered Baner headquarters, book a private doorstep visit across Pune, or reach out through our direct WhatsApp line.', 'map-pin')}
      <div class="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
        <div id="contact-card" class="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10 lg:col-span-7">
          <form id="contact-form" class="space-y-5">
            <div><h2 class="text-2xl font-black text-slate-900">Send Us a Direct Message</h2><p class="mt-1 text-xs text-slate-500 sm:text-sm">Our relationship director will respond within 2 business hours.</p></div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"><div><label for="contact-name" class="mb-1 block text-xs font-bold text-slate-700">Your Full Name *</label><input id="contact-name" name="name" required placeholder="e.g. Anand Phadke" class="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"></div><div><label for="contact-phone" class="mb-1 block text-xs font-bold text-slate-700">Mobile Number (WhatsApp) *</label><input id="contact-phone" name="phone" type="tel" required placeholder="e.g. 98230 XXXXX" class="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"></div></div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"><div><label for="contact-email" class="mb-1 block text-xs font-bold text-slate-700">Email Address</label><input id="contact-email" name="email" type="email" placeholder="anand@company.com" class="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"></div><div><label for="contact-service" class="mb-1 block text-xs font-bold text-slate-700">Service Interest</label><select id="contact-service" name="service" class="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"><option>Home Loan (New / Balance Transfer)</option><option>Business / MSME Growth Capital</option><option>Mutual Funds & SIP Portfolio</option><option>Term & Health Insurance Shield</option><option>Pune Real Estate Advisory</option><option>General Financial Audit</option></select></div></div>
            <div><label for="contact-message" class="mb-1 block text-xs font-bold text-slate-700">Your Requirements or Questions</label><textarea id="contact-message" name="message" rows="4" placeholder="Tell us about your requirement, current bank interest rate, or portfolio goal..." class="w-full rounded-xl border border-slate-300 bg-white p-3 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"></textarea></div>
            <button type="submit" class="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-600/25 transition hover:scale-[1.01]">${icon('send', 'h-4 w-4')} Submit Inquiry to Baner Advisory Desk</button>
          </form>
          <div id="contact-success" hidden class="space-y-4 py-12 text-center"><span class="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-200 bg-emerald-100 text-emerald-600">${icon('circle-check', 'h-10 w-10')}</span><h2 class="text-2xl font-black text-slate-900">Inquiry Received Successfully!</h2><p class="mx-auto max-w-md text-sm text-slate-600">Thank you, <b id="success-name"></b>. Our senior consultant has been notified and will reach out to <b id="success-phone"></b> shortly.</p><button id="contact-reset" class="rounded-xl bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700">Send Another Inquiry</button></div>
        </div>
        <aside class="space-y-6 lg:col-span-5">
          <div class="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8"><div class="flex items-center gap-3"><span class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">${icon('building', 'h-5 w-5')}</span><div><h2 class="text-lg font-black text-slate-900">Registered Pune Office</h2><p class="text-xs text-slate-500">Level 4, Amar Paradigm Corporate Park</p></div></div>
            <div class="space-y-4 text-xs text-slate-600 sm:text-sm"><div class="flex items-start gap-3">${icon('map-pin', 'mt-0.5 h-5 w-5 shrink-0 text-emerald-600')}<div><b class="text-slate-900">Physical Address</b><p class="mt-0.5 leading-relaxed">Avighna Financial Services, Level 4, Amar Paradigm, Baner Road, near Balewadi High Street, Pune, Maharashtra 411045, India.</p></div></div><div class="flex items-start gap-3">${icon('phone', 'mt-0.5 h-5 w-5 shrink-0 text-emerald-600')}<div><b class="text-slate-900">Direct Advisory Helplines</b><a href="tel:+919823045890" class="mt-0.5 block font-bold text-emerald-700 hover:underline">+91 98230 45890 (Mobile / WhatsApp)</a><a href="tel:+912067894500" class="block font-medium hover:underline">+91 (020) 6789 4500 (Board Desk)</a></div></div><div class="flex items-start gap-3">${icon('mail', 'mt-0.5 h-5 w-5 shrink-0 text-emerald-600')}<div><b class="text-slate-900">Email Communications</b><a href="mailto:consult@avighnafinancial.com" class="mt-0.5 block hover:underline">consult@avighnafinancial.com</a></div></div><div class="flex items-start gap-3">${icon('clock-3', 'mt-0.5 h-5 w-5 shrink-0 text-amber-600')}<div><b class="text-slate-900">Consultation Hours</b><p class="mt-0.5">Monday to Saturday: 9:30 AM – 7:00 PM IST</p><p class="text-[11px] text-slate-400">Sunday: By Pre-Booked Appointment Only</p></div></div></div>
            <div class="flex flex-col gap-3 pt-2 sm:flex-row"><a href="https://wa.me/919823045890?text=Hi%20Avighna%20Financial,%20I%20would%20like%20to%20inquire%20about%20your%20services." target="_blank" rel="noreferrer" class="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-center text-xs font-bold text-emerald-800 shadow-sm transition hover:bg-emerald-100">${icon('message-circle', 'h-4 w-4 text-emerald-600')} Chat on WhatsApp</a><button data-action="checkup" class="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-center text-xs font-bold text-slate-700 shadow-sm transition hover:bg-slate-50">${icon('sparkles', 'h-4 w-4 text-amber-500')} Book Checkup</button></div>
          </div>
          <div class="space-y-2 rounded-3xl border border-blue-200 bg-blue-50/70 p-5 text-xs text-slate-700 shadow-sm"><p class="flex items-center gap-1.5 font-bold text-blue-900">${icon('shield-check', 'h-4 w-4 text-blue-600')} Doorstep Pickup &amp; In-Person Coverage Zones</p><p class="text-[11px] leading-relaxed text-slate-600">We provide free doorstep documentation pickup and property search across <b>Baner, Balewadi, Aundh, Kothrud, Hinjewadi, Wakad, Pimple Saudagar, Kharadi, Kalyani Nagar, Viman Nagar, Magarpatta, and Senapati Bapat Road.</b></p></div>
        </aside>
      </div>
      <div class="space-y-8 pt-8"><div class="mx-auto max-w-2xl space-y-2 text-center"><span class="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">Clear Answers</span><h2 class="text-3xl font-black text-slate-900">Frequently Asked Questions</h2><p class="text-sm text-slate-500">Everything you need to know about our advisory model and turnaround times.</p></div>
        <div id="faq-tabs" class="flex flex-wrap items-center justify-center gap-2">${faqGroups.map(([category], index) => `<button data-faq-category="${index}" aria-selected="${index === 0}" class="faq-tab rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm transition hover:bg-slate-50">${category}</button>`).join('')}</div><div id="faq-list" class="mx-auto max-w-3xl space-y-3"></div>
      </div>
    </section>`;

  const checkupModal = () => `
    <div id="checkup-modal" class="modal-backdrop fixed inset-0 z-50 hidden items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="checkup-title">
      <div class="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
        <div class="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-4 sm:px-6"><div class="flex items-center gap-2.5"><span class="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-100 text-emerald-600">${icon('sparkles', 'h-5 w-5')}</span><div><h2 id="checkup-title" class="flex flex-wrap items-center gap-2 text-base font-bold text-slate-900 sm:text-lg">Free Financial Checkup <span class="rounded-full border border-emerald-200 bg-emerald-100 px-2 py-0.5 text-[11px] font-bold text-emerald-800">100% Complimentary</span></h2><p class="text-xs text-slate-500">Personalized Audit by Pune Senior Advisors</p></div></div><button data-close-modal="checkup-modal" class="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-200/60 hover:text-slate-700" aria-label="Close modal">${icon('x', 'h-5 w-5')}</button></div>
        <div id="checkup-progress" class="bg-white px-6 pb-2 pt-4"><div class="mb-2 flex justify-between text-[10px] font-semibold text-slate-500 sm:text-xs"><span data-step-label="1">1. Financial Goal</span><span data-step-label="2">2. Scope &amp; Budget</span><span data-step-label="3">3. Pune Scheduling</span></div><div class="h-2 w-full overflow-hidden rounded-full bg-slate-100"><div id="checkup-progress-bar" class="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300" style="width:33.33%"></div></div></div>
        <div class="flex-1 overflow-y-auto bg-white p-5 sm:p-6">
          <div id="checkup-step-1" class="space-y-4"><div><h3 class="mb-1 text-lg font-bold text-slate-900">What is your primary financial objective?</h3><p class="text-sm text-slate-500">Select the area where you want our certified team to conduct a deep-dive audit.</p></div><div id="goal-options" class="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">${goals.map(([id, label, desc, glyph]) => `<button type="button" data-goal-option="${id}" class="goal-option flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 text-left shadow-sm transition hover:border-slate-300 hover:bg-slate-50"><span class="goal-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">${icon(glyph, 'h-5 w-5')}</span><span><b class="goal-label flex items-center gap-1.5 text-sm text-slate-900">${label}</b><small class="mt-0.5 block text-xs text-slate-500">${desc}</small></span></button>`).join('')}</div><div class="flex justify-end pt-4"><button data-checkup-next="2" class="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-600/25 transition hover:scale-[1.01] hover:bg-emerald-700">Continue to Scope ${icon('arrow-right', 'h-4 w-4')}</button></div></div>
          <div id="checkup-step-2" hidden class="space-y-5"><div><h3 class="mb-1 text-lg font-bold text-slate-900">Scope &amp; Investment Parameters</h3><p class="text-sm text-slate-500">Help us match you with the right bank tier or fund distribution bracket.</p></div><div><p class="mb-2 text-xs font-bold uppercase tracking-wider text-slate-600">Monthly Household Income / Net Revenue</p><div id="income-options" class="grid grid-cols-1 gap-2.5 sm:grid-cols-2">${['₹50,000 - ₹1,00,000 / month', '₹1,00,000 - ₹2,50,000 / month', '₹2,50,000 - ₹5,00,000 / month', '₹5,00,000+ / month'].map((value, i) => `<button data-select-group="income" data-select-value="${value}" class="selection-option rounded-xl border px-3 py-2.5 text-left text-xs font-semibold transition ${i === 1 ? 'border-emerald-500 bg-emerald-50 text-emerald-900' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'}">${value}</button>`).join('')}</div></div><div><p class="mb-2 text-xs font-bold uppercase tracking-wider text-slate-600">Target Size (Estimated Loan Amount or Investment Corpus)</p><div id="ticket-options" class="grid grid-cols-2 gap-2 sm:grid-cols-4">${['₹10 Lakh - ₹25 Lakh', '₹25 Lakh - ₹50 Lakh', '₹50 Lakh - ₹1 Crore', '₹1 Crore - ₹5 Crore+'].map((value, i) => `<button data-select-group="ticket" data-select-value="${value}" class="selection-option rounded-xl border p-2.5 text-center text-xs font-medium transition ${i === 1 ? 'border-blue-500 bg-blue-50 font-bold text-blue-900' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'}">${value}</button>`).join('')}</div></div><div><p class="mb-2 text-xs font-bold uppercase tracking-wider text-slate-600">Execution Horizon</p><div class="flex flex-wrap gap-2">${['Immediate (Within 1-2 weeks)', 'Within 1 to 3 months', 'Planning for next FY'].map((value, i) => `<button data-select-group="timeline" data-select-value="${value}" class="selection-option rounded-full px-3 py-1.5 text-xs font-medium transition ${i === 0 ? 'bg-blue-600 font-bold text-white shadow-sm' : 'border border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'}">${value}</button>`).join('')}</div></div><div class="flex items-center justify-between border-t border-slate-200 pt-4"><button data-checkup-next="1" class="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900">${icon('arrow-left', 'h-4 w-4')} Back</button><button data-checkup-next="3" class="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-emerald-700">Next: Contact Details ${icon('arrow-right', 'h-4 w-4')}</button></div></div>
          <form id="checkup-step-3" hidden class="space-y-4" novalidate><div><h3 class="mb-1 text-lg font-bold text-slate-900">Where should we deliver your Audit Blueprint?</h3><p class="text-sm text-slate-500">Our senior advisor will prepare a comparative roadmap before calling.</p></div><div class="grid grid-cols-1 gap-3 sm:grid-cols-2"><div><label for="checkup-name" class="mb-1 block text-xs font-bold text-slate-700">Full Name *</label><input id="checkup-name" name="name" required placeholder="e.g. Rahul Sharma" class="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"><p data-error-for="name" class="mt-1 text-xs text-rose-600"></p></div><div><label for="checkup-phone" class="mb-1 block text-xs font-bold text-slate-700">Mobile Number (WhatsApp) *</label><input id="checkup-phone" name="phone" type="tel" required placeholder="e.g. 98230 XXXXX" class="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"><p data-error-for="phone" class="mt-1 text-xs text-rose-600"></p></div></div><div class="grid grid-cols-1 gap-3 sm:grid-cols-2"><div><label for="checkup-email" class="mb-1 block text-xs font-bold text-slate-700">Email Address</label><input id="checkup-email" name="email" type="email" placeholder="rahul@company.com" class="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"><p data-error-for="email" class="mt-1 text-xs text-rose-600"></p></div><div><label for="checkup-location" class="mb-1 block text-xs font-bold text-slate-700">Preferred Location / Area</label><select id="checkup-location" name="location" class="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"><option>Baner / Balewadi, Pune</option><option>Hinjewadi / Wakad, Pune</option><option>Kothrud / Karve Road, Pune</option><option>Kalyani Nagar / Viman Nagar, Pune</option><option>Aundh / S.B. Road, Pune</option><option>Pimpri-Chinchwad / MIDC</option><option>Virtual Consultation (Google Meet / Zoom)</option></select></div></div><div><label for="checkup-notes" class="mb-1 block text-xs font-bold text-slate-700">Specific Query or Existing Loan Bank (Optional)</label><textarea id="checkup-notes" name="notes" rows="2" placeholder="Tell us a little more about what you need..." class="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"></textarea></div><div class="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-xs text-slate-600">${icon('shield-check', 'h-5 w-5 shrink-0 text-emerald-600')} We maintain strict NDAs. Your information is never shared with third-party telemarketers.</div><div class="flex items-center justify-between border-t border-slate-200 pt-3"><button type="button" data-checkup-next="2" class="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900">${icon('arrow-left', 'h-4 w-4')} Back</button><button type="submit" class="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-7 py-3 text-sm font-bold text-white shadow-md shadow-emerald-600/30 transition hover:scale-[1.01]">Book Free Consultation ${icon('sparkles', 'h-4 w-4 text-amber-300')}</button></div></form>
          <div id="checkup-step-4" hidden class="space-y-4 py-6 text-center"><span class="mx-auto flex h-16 w-16 animate-bounce-short items-center justify-center rounded-full border border-emerald-200 bg-emerald-100 text-emerald-600">${icon('circle-check', 'h-10 w-10')}</span><div><span class="rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">Request Confirmed • Desk Assigned</span><h3 class="mt-3 text-2xl font-black text-slate-900">Thank You, <span id="checkup-thanks-name">Valued Client</span>!</h3><p class="mx-auto mt-2 max-w-md text-sm text-slate-600">Your Free Financial Audit dossier has been queued for our Senior Pune Advisory team.</p></div><div class="mx-auto max-w-md space-y-2 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left text-xs"><p class="flex justify-between border-b border-slate-200 pb-2"><span class="text-slate-500">Consultation Reference:</span><b id="checkup-reference" class="font-mono text-sm text-emerald-700"></b></p><p class="flex justify-between"><span class="text-slate-500">Selected Focus:</span><b id="checkup-confirm-goal" class="text-slate-900"></b></p><p class="flex justify-between"><span class="text-slate-500">Assigned Branch:</span><b class="text-emerald-700">Baner HQ, Pune</b></p><p class="flex justify-between"><span class="text-slate-500">Expected Advisor Call:</span><b class="text-slate-900">Within 2 Business Hours</b></p></div><button data-close-modal="checkup-modal" class="mt-4 rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-emerald-700">Return to Website</button></div>
        </div>
      </div>
    </div>`;

  const portalModal = () => `
    <div id="portal-modal" class="modal-backdrop fixed inset-0 z-50 hidden items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="portal-title">
      <div class="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
        <div class="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-4"><div class="flex items-center gap-3"><span class="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-200 bg-blue-100 text-blue-600">${icon('lock-keyhole', 'h-5 w-5')}</span><div><h2 id="portal-title" class="flex flex-wrap items-center gap-2 text-base font-bold text-slate-900 sm:text-lg">Avighna Client Wealth Portal <span class="rounded-full border border-blue-200 bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-800">256-Bit Encrypted</span></h2><p class="text-xs text-slate-500">Consolidated Mutual Funds, Loans &amp; Insurance Tracking</p></div></div><button data-close-modal="portal-modal" class="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-200/60 hover:text-slate-700" aria-label="Close portal">${icon('x', 'h-5 w-5')}</button></div>
        <div class="flex border-b border-slate-200 bg-slate-100/60 px-6 pt-2"><button data-portal-tab="demo" aria-selected="true" class="portal-tab rounded-t-lg border-x border-t border-b-transparent border-emerald-600 bg-white px-4 pb-2.5 text-xs font-bold text-emerald-800 shadow-sm sm:text-sm">Interactive Portal Preview</button><button data-portal-tab="login" aria-selected="false" class="portal-tab border-b-2 border-transparent px-4 pb-2.5 text-xs font-bold text-slate-500 transition hover:text-slate-800 sm:text-sm">Client Login (OTP)</button></div>
        <div class="flex-1 overflow-y-auto bg-white p-5 sm:p-6">
          <div id="portal-demo" class="space-y-6"><div class="flex flex-col justify-between gap-3 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-emerald-50 p-4 shadow-sm sm:flex-row sm:items-center"><div><div class="flex flex-wrap items-center gap-2"><span class="text-xs font-bold uppercase tracking-wider text-blue-700">Verified High Networth Client</span><i class="h-1.5 w-1.5 rounded-full bg-blue-600"></i><span class="text-xs text-slate-500">ID: AV-8921-PN</span></div><h3 class="mt-1 text-lg font-bold text-slate-900">Vikram Deshmukh (Family Folio)</h3><p class="text-xs text-slate-600">Advisor Assigned: Shrikant Kulkarni, CFP (Baner Desk)</p></div><button data-action="tax-cert" class="flex items-center gap-1.5 self-start rounded-xl border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 shadow-sm transition hover:bg-slate-50">${icon('download', 'h-3.5 w-3.5')} Tax Certificates</button></div>
            <div class="grid grid-cols-1 gap-3.5 sm:grid-cols-3"><article class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><p class="flex items-center justify-between text-xs font-semibold text-slate-500">Mutual Funds &amp; SIP Corpus ${icon('trending-up', 'h-4 w-4 text-emerald-600')}</p><b class="mt-2 block text-xl text-slate-900">₹78,42,910</b><p class="mt-1 text-xs font-bold text-emerald-700">+14.8% XIRR <span class="font-normal text-slate-500">| SIP: ₹85,000</span></p></article><article class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><p class="flex items-center justify-between text-xs font-semibold text-slate-500">Active Home Loan (SBI) ${icon('house', 'h-4 w-4 text-blue-600')}</p><b class="mt-2 block text-xl text-slate-900">₹1,18,50,000</b><p class="mt-1 text-xs font-bold text-blue-700">8.35% ROI <span class="font-normal text-slate-500">| EMI: ₹99,480</span></p></article><article class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><p class="flex items-center justify-between text-xs font-semibold text-slate-500">Total Insurance Shield ${icon('heart-pulse', 'h-4 w-4 text-rose-500')}</p><b class="mt-2 block text-xl text-slate-900">₹3.50 Crore</b><p class="mt-1 text-xs font-bold text-emerald-700">100% Active <span class="font-normal text-slate-500">| Renewal: Dec 2026</span></p></article></div>
            <div class="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"><div class="flex flex-wrap items-center justify-between gap-2"><h3 class="flex items-center gap-2 text-sm font-bold text-slate-900">${icon('chart-pie', 'h-4 w-4 text-emerald-600')} Goal-Based Portfolio Distribution</h3><span class="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800">Target: Balanced Growth</span></div>${[['Large & Flexi-Cap Equity (Parag Parikh, Nippon, HDFC)', '62% (₹48.6L)', 62, 'bg-emerald-600'], ['Mid & Small Cap Growth Engines (Quant, Tata)', '23% (₹18.0L)', 23, 'bg-blue-600'], ['Arbitrage, Liquid & Sovereign Gold Bonds', '15% (₹11.8L)', 15, 'bg-amber-500']].map(([label, amount, width, color]) => `<div><div class="mb-1 flex justify-between gap-2 text-xs text-slate-600"><span>${label}</span><b class="text-slate-900">${amount}</b></div><div class="h-2 w-full overflow-hidden rounded-full bg-slate-200"><div class="h-full rounded-full ${color}" style="width:${width}%"></div></div></div>`).join('')}</div>
            <div class="flex flex-col items-center justify-between gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-xs sm:flex-row"><span class="flex items-center gap-2 font-medium text-emerald-800">${icon('shield-check', 'h-4 w-4 shrink-0 text-emerald-600')} Next Bi-Annual Portfolio Rebalancing Scheduled: Dec 15, 2026</span><a href="tel:+919823045890" class="rounded-lg bg-emerald-600 px-3.5 py-1.5 font-bold text-white shadow-sm transition hover:bg-emerald-700">Call Advisor</a></div>
          </div>
          <div id="portal-login" hidden class="mx-auto max-w-md space-y-5 py-8"><div class="text-center"><h3 class="text-xl font-bold text-slate-900">Sign In to Your Portfolio</h3><p class="mt-1 text-xs text-slate-500">Enter your registered 10-digit mobile number</p></div><form id="portal-phone-form" class="space-y-4"><div><label for="portal-phone" class="mb-1 block text-xs font-bold text-slate-700">Registered Mobile Number</label><input id="portal-phone" type="tel" inputmode="numeric" minlength="10" required placeholder="e.g. 9823045890" class="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"><p id="portal-phone-error" class="mt-1 text-xs text-rose-600"></p></div><button type="submit" class="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-emerald-700">Generate OTP ${icon('arrow-right', 'h-4 w-4')}</button></form><form id="portal-otp-form" hidden class="space-y-4"><p class="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-xs text-emerald-800">OTP sent to +91 <span id="portal-sent-phone"></span>. For demo access, enter <b>1234</b>.</p><div><label for="portal-otp" class="mb-1 block text-xs font-bold text-slate-700">Enter 4-Digit OTP</label><input id="portal-otp" type="text" inputmode="numeric" maxlength="4" required placeholder="1234" class="w-full rounded-xl border border-slate-300 py-2 text-center font-mono text-lg font-bold tracking-widest focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"><p id="portal-otp-error" class="mt-1 text-xs text-rose-600"></p></div><button type="submit" class="w-full rounded-xl bg-emerald-600 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-emerald-700">Verify &amp; Unlock Dashboard</button></form></div>
        </div>
      </div>
    </div>`;

  const mount = () => {
    const root = document.getElementById('app');
    root.innerHTML = `${header()}<main id="page-host" class="flex-grow">${homePage()}${servicesPage()}${calculatorsPage()}${whyUsPage()}${contactPage()}</main>${footer()}${checkupModal()}${portalModal()}<div id="toast" class="fixed bottom-6 right-6 z-[60] hidden max-w-[calc(100vw-3rem)] items-center gap-3 rounded-2xl border border-emerald-300 bg-white px-4 py-3 text-slate-800 shadow-xl" role="status" aria-live="polite">${icon('circle-check', 'h-5 w-5 shrink-0 text-emerald-600')}<span id="toast-message" class="text-xs font-semibold sm:text-sm"></span><button data-action="dismiss-toast" class="ml-2 rounded-lg p-1 text-slate-400 transition hover:text-slate-600" aria-label="Dismiss notification">${icon('x', 'h-4 w-4')}</button></div>`;
    renderServiceCategory('loans');
    renderFaqCategory(0);
    bindEvents();
    updateCalculations();
    updateRoute();
    refreshIcons();
  };

  let activeService = 'loans';
  let activeFaq = 0;
  let selectedGoal = 'Home Loan';
  let currentCheckupStep = 1;
  let toastTimer;
  let portalPhone = '';
  let activePortalTab = 'demo';

  function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();
  }
  function renderServiceCategory(id) {
    const category = serviceData.find((item) => item.id === id) || serviceData[0];
    activeService = category.id;
    document.querySelectorAll('.service-tab').forEach((tab) => {
      const active = tab.dataset.category === category.id;
      tab.setAttribute('aria-selected', String(active));
      tab.className = `service-tab flex items-center gap-2.5 rounded-2xl border px-5 py-3 text-xs font-bold transition-all duration-200 sm:text-sm ${active ? 'scale-105 border-emerald-600 bg-emerald-600 text-white shadow-md' : 'border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900'}`;
    });
    document.getElementById('service-description').innerHTML = `<div class="max-w-2xl space-y-2"><span class="inline-block rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-bold uppercase tracking-widest text-amber-700">${category.badge}</span><h2 class="text-2xl font-black text-slate-900 sm:text-3xl">${category.tagline}</h2><p class="text-sm leading-relaxed text-slate-600">${category.description}</p></div>`;
    document.getElementById('service-cards').innerHTML = category.cards.map((card, index) => {
      const [title, rate, idealFor, highlights, eligibility, docs, tenure, time] = card;
      return `<article class="flex flex-col justify-between space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl sm:p-8"><div class="space-y-5"><div class="flex flex-col justify-between gap-3 border-b border-slate-100 pb-4 sm:flex-row sm:items-start"><div><h3 class="text-xl font-black text-slate-900">${title}</h3><p class="mt-1 text-xs text-slate-500">${idealFor}</p></div><div class="shrink-0 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-right"><span class="block text-[10px] font-bold uppercase text-emerald-800">Pricing / Return</span><b class="text-sm text-emerald-700">${rate}</b></div></div><div><h4 class="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">Key Strategic Highlights</h4>${checkList(pipedList(highlights))}</div><div class="space-y-2 rounded-2xl border border-slate-200 bg-slate-50 p-4"><p class="flex items-center gap-1.5 text-xs font-bold text-amber-700">${icon('badge-check', 'h-4 w-4')} Eligibility Checklist</p><ul class="space-y-1 text-xs text-slate-600">${pipedList(eligibility).map((line) => `<li class="flex items-center gap-2"><i class="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"></i>${line}</li>`).join('')}</ul></div><details class="group overflow-hidden rounded-2xl border border-slate-200"><summary class="flex cursor-pointer list-none items-center justify-between bg-slate-50 p-3.5 text-xs font-bold text-slate-700 transition hover:bg-slate-100"><span class="flex items-center gap-2">${icon('file-check-2', 'h-4 w-4 text-emerald-600')} Documentation Checklist (${pipedList(docs).length} Items)</span>${icon('chevron-down', 'h-4 w-4 text-slate-400 transition group-open:rotate-180 group-open:text-emerald-600')}</summary><div class="space-y-1.5 border-t border-slate-200 bg-white p-3.5 text-xs text-slate-600">${pipedList(docs).map((doc) => `<p class="flex items-center gap-2">${icon('circle-check', 'h-3.5 w-3.5 text-slate-400')} ${doc}</p>`).join('')}<p class="pt-1 text-[11px] font-semibold text-emerald-700">✓ Free doorstep pickup available in Pune &amp; PCMC.</p></div></details><p class="text-xs text-slate-500"><b>Maximum tenure:</b> ${tenure}</p></div><div class="flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-4 sm:flex-row"><p class="flex items-center gap-1.5 self-start text-[11px] font-medium text-slate-500 sm:self-center">${icon('clock-3', 'h-3.5 w-3.5 text-emerald-600')} Turnaround: ${time}</p><button data-action="checkup" data-goal="${escapeHtml(title)}" class="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:scale-[1.01] sm:w-auto sm:text-sm">Book Consultation for this Service ${icon('arrow-right', 'h-4 w-4')}</button></div></article>`;
    }).join('');
    refreshIcons();
  }
  function renderFaqCategory(index) {
    activeFaq = index;
    const [category, items] = faqGroups[index] || faqGroups[0];
    document.querySelectorAll('.faq-tab').forEach((tab) => {
      const active = Number(tab.dataset.faqCategory) === index;
      tab.setAttribute('aria-selected', String(active));
      tab.className = `faq-tab rounded-xl border px-4 py-2 text-xs font-bold transition ${active ? 'border-emerald-600 bg-emerald-600 text-white shadow-sm' : 'border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50'}`;
    });
    document.getElementById('faq-list').innerHTML = items.map(([question, answer], itemIndex) => `<article class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition"><button type="button" aria-expanded="false" data-faq-item="${itemIndex}" class="flex w-full items-center justify-between gap-4 p-4 text-left transition hover:bg-slate-50 sm:p-5"><span class="flex items-center gap-2.5 text-sm font-bold text-slate-900 sm:text-base">${icon('circle-help', 'h-4 w-4 shrink-0 text-emerald-600')} ${question}</span>${icon('chevron-down', 'faq-chevron h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200')}</button><div class="accordion-content"><div><div class="border-t border-slate-100 bg-slate-50/50 px-5 pb-5 pt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">${answer}</div></div></div></article>`).join('');
    refreshIcons();
  }

  function getValue(id) {
    return Number(document.getElementById(id)?.value || 0);
  }
  function setText(id, value) {
    const node = document.getElementById(id);
    if (node) node.textContent = value;
  }
  function setBar(id, percent) {
    const node = document.getElementById(id);
    if (node) node.style.width = `${Math.max(0, Math.min(100, percent))}%`;
  }
  function annuityFutureValue(monthly, annualPercent, years) {
    const monthlyRate = annualPercent / 12 / 100;
    const months = years * 12;
    if (monthlyRate === 0) return monthly * months;
    return monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  }
  function calculateEmi(principal, annualPercent, years) {
    const monthlyRate = annualPercent / 12 / 100;
    const months = years * 12;
    if (monthlyRate === 0) return principal / months;
    const factor = Math.pow(1 + monthlyRate, months);
    return (principal * monthlyRate * factor) / (factor - 1);
  }
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
    const quickSipMonthly = getValue('quick-sip-amount');
    const quickSipYears = getValue('quick-sip-years');
    if (quickSipMonthly) {
      const invested = quickSipMonthly * quickSipYears * 12;
      const corpus = annuityFutureValue(quickSipMonthly, 13.5, quickSipYears);
      const gain = Math.max(0, corpus - invested);
      setText('quick-sip-corpus', compact(corpus));
      setText('quick-sip-exact', `(${inr(corpus)})`);
      setText('quick-sip-invested', inr(invested));
      setText('quick-sip-gain', `+${inr(gain)}`);
      setBar('quick-sip-principal-bar', corpus ? invested / corpus * 100 : 0);
      setBar('quick-sip-return-bar', corpus ? gain / corpus * 100 : 0);
    }

    const quickPrincipal = getValue('quick-loan-amount');
    if (quickPrincipal) {
      const emi = calculateEmi(quickPrincipal, getValue('quick-loan-rate'), getValue('quick-loan-years'));
      const total = emi * getValue('quick-loan-years') * 12;
      setText('quick-emi-value', `${inr(emi)} / mo`);
      setText('quick-emi-principal', inr(quickPrincipal));
      setText('quick-emi-interest', inr(total - quickPrincipal));
      setText('quick-emi-total', inr(total));
    }

    const sipMonthly = getValue('sip-monthly');
    if (sipMonthly) {
      const sipRate = getValue('sip-rate');
      const years = getValue('sip-years');
      const invested = sipMonthly * years * 12;
      const corpus = annuityFutureValue(sipMonthly, sipRate, years);
      const gain = Math.max(0, corpus - invested);
      const investedPct = Math.round(invested / corpus * 100) || 0;
      const returnsPct = Math.round(gain / corpus * 100) || 0;
      setText('sip-corpus', compact(corpus));
      setText('sip-corpus-sub', `Exact: ${inr(corpus)}`);
      setText('sip-invested', inr(invested));
      setText('sip-gain', `+${inr(gain)}`);
      setText('sip-invested-percent', `Invested: ${investedPct}%`);
      setText('sip-return-percent', `Returns: ${returnsPct}%`);
      setBar('sip-principal-bar', investedPct);
      setBar('sip-return-bar', returnsPct);
      const milestones = [5, 10, 15, 20, 25, 30].filter((year) => year <= years);
      document.getElementById('sip-milestones').innerHTML = milestones.map((year) => `<div class="rounded-xl border border-slate-200 bg-white p-2.5"><span class="block text-[10px] text-slate-500">At Year ${year}:</span><b class="font-mono text-slate-900">${compact(annuityFutureValue(sipMonthly, sipRate, year))}</b></div>`).join('');
    }

    const principal = getValue('loan-principal');
    if (principal) {
      const years = getValue('loan-tenure');
      const emi = calculateEmi(principal, getValue('loan-rate'), years);
      const total = emi * years * 12;
      const interest = total - principal;
      const principalPct = Math.round(principal / total * 100) || 0;
      const interestPct = Math.round(interest / total * 100) || 0;
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

    const currentAge = getValue('current-age');
    const retirementAgeInput = document.getElementById('retirement-age');
    if (currentAge && retirementAgeInput) {
      retirementAgeInput.min = String(Math.min(75, currentAge + 1));
      if (Number(retirementAgeInput.value) <= currentAge) retirementAgeInput.value = String(Math.min(75, currentAge + 1));
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

    const income = getValue('annual-income');
    if (income) {
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
  function annuityFactor(monthlyRate, months) {
    if (monthlyRate === 0) return months;
    return ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  }

  function updateRoute() {
    const route = window.location.hash.replace('#', '') || 'home';
    const selected = NAV.some(([id]) => id === route) ? route : 'home';
    document.querySelectorAll('.page-section').forEach((section) => { section.hidden = section.id !== selected; });
    document.querySelectorAll('[data-nav]').forEach((button) => {
      const active = button.dataset.nav === selected;
      if (button.classList.contains('nav-link')) {
        button.className = `nav-link relative rounded-full px-4 py-2 text-sm font-semibold transition-all ${active ? 'border border-emerald-200/60 bg-white text-emerald-800 shadow-sm' : 'text-slate-600 hover:bg-slate-200/60 hover:text-slate-900'}`;
        if (active && !button.querySelector('.nav-indicator')) button.insertAdjacentHTML('beforeend', '<span class="nav-indicator absolute -bottom-1 left-1/2 h-0.5 w-2 -translate-x-1/2 rounded-full bg-emerald-600"></span>');
        if (!active) button.querySelector('.nav-indicator')?.remove();
      } else if (button.classList.contains('mobile-nav-link')) {
        button.className = `mobile-nav-link flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-semibold transition ${active ? 'border border-emerald-200 bg-emerald-50 font-bold text-emerald-800' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'}`;
      }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function navigate(id) {
    const route = NAV.some(([page]) => page === id) ? id : 'home';
    if (window.location.hash === `#${route}`) updateRoute();
    else window.location.hash = route;
    closeMobileMenu();
  }
  function closeMobileMenu() {
    const drawer = document.getElementById('mobile-drawer');
    const button = document.getElementById('mobile-menu-button');
    drawer.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
    button.innerHTML = icon('menu', 'h-6 w-6');
    refreshIcons();
  }
  function showToast(message) {
    const toast = document.getElementById('toast');
    setText('toast-message', message);
    toast.classList.remove('hidden');
    toast.classList.add('flex');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(hideToast, 4500);
  }
  function hideToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('hidden');
    toast.classList.remove('flex');
  }
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
    if (!document.querySelector('.modal-backdrop:not(.hidden)')) document.body.classList.remove('modal-open');
    if (id === 'checkup-modal') resetCheckup();
  }
  function setCheckupStep(step) {
    currentCheckupStep = Math.max(1, Math.min(4, step));
    [1, 2, 3, 4].forEach((number) => {
      const element = document.getElementById(`checkup-step-${number}`);
      if (element) element.hidden = number !== currentCheckupStep;
    });
    const progress = document.getElementById('checkup-progress');
    progress.hidden = currentCheckupStep === 4;
    if (currentCheckupStep <= 3) {
      document.getElementById('checkup-progress-bar').style.width = `${currentCheckupStep / 3 * 100}%`;
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
      tile.className = `goal-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${active ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'}`;
      const label = button.querySelector('.goal-label');
      label.innerHTML = `${label.textContent.trim()}${active ? ` ${icon('circle-check', 'h-4 w-4 shrink-0 text-emerald-600')}` : ''}`;
    });
    refreshIcons();
  }
  function openCheckup(goal = '') {
    selectedGoal = goal || 'Home Loan';
    setCheckupStep(1);
    document.getElementById('checkup-step-3').reset();
    document.querySelectorAll('[data-error-for]').forEach((node) => { node.textContent = ''; });
    selectGoal(selectedGoal);
    openModal('checkup-modal');
    closeMobileMenu();
  }
  function resetCheckup() {
    setCheckupStep(1);
    document.getElementById('checkup-step-3').reset();
    document.querySelectorAll('[data-error-for]').forEach((node) => { node.textContent = ''; });
    document.querySelectorAll('.selection-option').forEach((option) => {
      const active = (option.dataset.selectGroup === 'income' && option.dataset.selectValue === '₹1,00,000 - ₹2,50,000 / month')
        || (option.dataset.selectGroup === 'ticket' && option.dataset.selectValue === '₹25 Lakh - ₹50 Lakh')
        || (option.dataset.selectGroup === 'timeline' && option.dataset.selectValue === 'Immediate (Within 1-2 weeks)');
      option.className = `selection-option rounded-xl border px-3 py-2.5 text-xs font-semibold transition ${active ? (option.dataset.selectGroup === 'timeline' ? 'bg-blue-600 font-bold text-white shadow-sm' : `border-${option.dataset.selectGroup === 'income' ? 'emerald' : 'blue'}-500 bg-${option.dataset.selectGroup === 'income' ? 'emerald' : 'blue'}-50 font-bold text-${option.dataset.selectGroup === 'income' ? 'emerald' : 'blue'}-900`) : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'}`;
    });
  }
  function openPortal() {
    activePortalTab = 'demo';
    setPortalTab('demo');
    document.getElementById('portal-phone-form').reset();
    document.getElementById('portal-otp-form').reset();
    document.getElementById('portal-otp-form').hidden = true;
    document.getElementById('portal-phone-form').hidden = false;
    openModal('portal-modal');
    closeMobileMenu();
  }
  function setPortalTab(tab) {
    activePortalTab = tab;
    document.getElementById('portal-demo').hidden = tab !== 'demo';
    document.getElementById('portal-login').hidden = tab !== 'login';
    document.querySelectorAll('.portal-tab').forEach((button) => {
      const active = button.dataset.portalTab === tab;
      button.setAttribute('aria-selected', String(active));
      button.className = `portal-tab px-4 pb-2.5 text-xs font-bold transition-all sm:text-sm ${active ? 'rounded-t-lg border-x border-t border-b-transparent border-emerald-600 bg-white text-emerald-800 shadow-sm' : 'border-b-2 border-transparent text-slate-500 hover:text-slate-800'}`;
    });
  }
  function submitCheckup(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.namedItem('name').value.trim();
    const phone = form.elements.namedItem('phone').value.trim();
    const email = form.elements.namedItem('email').value.trim();
    const errors = {
      name: name ? '' : 'Please enter your full name',
      phone: phone.replace(/\D/g, '').length >= 10 ? '' : 'Please provide a valid 10-digit mobile number',
      email: !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : 'Please provide a valid email address'
    };
    Object.entries(errors).forEach(([field, message]) => { document.querySelector(`[data-error-for="${field}"]`).textContent = message; });
    if (Object.values(errors).some(Boolean)) return;
    const reference = `AVS-${Math.floor(1000 + Math.random() * 9000)}`;
    setText('checkup-thanks-name', name || 'Valued Client');
    setText('checkup-reference', reference);
    setText('checkup-confirm-goal', selectedGoal);
    setCheckupStep(4);
    showToast(`Financial Checkup Booked! Reference #${reference}. Assigned to Baner Desk.`);
  }
  function bindEvents() {
    const root = document.getElementById('app');
    root.addEventListener('click', (event) => {
      const target = event.target.closest('button, [data-action]');
      if (!target) return;
      if (target.dataset.nav) {
        if (target.dataset.serviceCategory) renderServiceCategory(target.dataset.serviceCategory);
        navigate(target.dataset.nav);
        return;
      }
      if (target.dataset.action === 'checkup') { openCheckup(target.dataset.goal || ''); return; }
      if (target.dataset.action === 'portal') { openPortal(); return; }
      if (target.dataset.action === 'dismiss-toast') { hideToast(); return; }
      if (target.dataset.action === 'tax-cert') { showToast('Tax certificate download is a simulated portal preview.'); return; }
      if (target.id === 'mobile-menu-button') {
        const drawer = document.getElementById('mobile-drawer');
        const isOpen = drawer.classList.toggle('is-open');
        target.setAttribute('aria-expanded', String(isOpen));
        target.innerHTML = icon(isOpen ? 'x' : 'menu', 'h-6 w-6');
        refreshIcons();
        return;
      }
      if (target.dataset.homeTab) {
        document.querySelectorAll('.home-calc-tab').forEach((button) => {
          const active = button.dataset.homeTab === target.dataset.homeTab;
          button.className = `home-calc-tab rounded-xl px-4 py-2.5 text-xs font-bold transition sm:px-5 sm:text-sm ${active ? `${target.dataset.homeTab === 'sip' ? 'bg-emerald-600' : 'bg-blue-600'} text-white shadow-sm` : 'text-slate-600 hover:text-slate-900'}`;
        });
        document.getElementById('home-sip').hidden = target.dataset.homeTab !== 'sip';
        document.getElementById('home-emi').hidden = target.dataset.homeTab !== 'emi';
        return;
      }
      if (target.dataset.category) { renderServiceCategory(target.dataset.category); return; }
      if (target.dataset.calcTab) {
        document.querySelectorAll('.calc-tab').forEach((button) => {
          const active = button.dataset.calcTab === target.dataset.calcTab;
          const color = target.dataset.calcTab === 'emi' || target.dataset.calcTab === 'insurance' ? 'blue' : 'emerald';
          button.setAttribute('aria-selected', String(active));
          button.className = `calc-tab flex items-center gap-2 rounded-2xl border px-4 py-3 text-xs font-bold shadow-sm transition sm:px-5 sm:text-sm ${active ? `border-${color}-600 bg-${color}-600 text-white shadow-md` : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900'}`;
        });
        document.querySelectorAll('.calc-panel').forEach((panel) => { panel.hidden = panel.id !== `calc-panel-${target.dataset.calcTab}`; });
        return;
      }
      if (target.dataset.faqCategory !== undefined) { renderFaqCategory(Number(target.dataset.faqCategory)); return; }
      if (target.dataset.faqItem !== undefined) {
        const open = target.getAttribute('aria-expanded') === 'true';
        document.querySelectorAll('#faq-list [data-faq-item]').forEach((button) => {
          const selected = button === target && !open;
          button.setAttribute('aria-expanded', String(selected));
          const content = button.nextElementSibling;
          content.classList.toggle('is-open', selected);
          button.querySelector('.faq-chevron')?.classList.toggle('rotate-180', selected);
          button.querySelector('.faq-chevron')?.classList.toggle('text-emerald-600', selected);
        });
        return;
      }
      if (target.dataset.goalOption) { selectGoal(target.dataset.goalOption); return; }
      if (target.dataset.selectGroup) {
        const group = target.dataset.selectGroup;
        document.querySelectorAll(`[data-select-group="${group}"]`).forEach((option) => {
          option.classList.remove('bg-blue-600', 'font-bold', 'text-white', 'shadow-sm', 'border-emerald-500', 'bg-emerald-50', 'text-emerald-900', 'border-blue-500', 'bg-blue-50', 'text-blue-900');
          option.classList.add('border-slate-200', 'bg-white', 'text-slate-700');
        });
        target.classList.remove('border-slate-200', 'bg-white', 'text-slate-700');
        if (group === 'timeline') target.classList.add('bg-blue-600', 'font-bold', 'text-white', 'shadow-sm');
        else target.classList.add(`border-${group === 'income' ? 'emerald' : 'blue'}-500`, `bg-${group === 'income' ? 'emerald' : 'blue'}-50`, `text-${group === 'income' ? 'emerald' : 'blue'}-900`, 'font-bold');
        return;
      }
      if (target.dataset.checkupNext) { setCheckupStep(Number(target.dataset.checkupNext)); return; }
      if (target.dataset.portalTab) { setPortalTab(target.dataset.portalTab); return; }
      if (target.dataset.closeModal) { closeModal(target.dataset.closeModal); return; }
      if (target.id === 'contact-reset') {
        document.getElementById('contact-form').reset();
        document.getElementById('contact-form').hidden = false;
        document.getElementById('contact-success').hidden = true;
      }
    });

    root.addEventListener('input', (event) => {
      if (event.target.matches('input[type="range"]')) updateCalculations();
    });
    root.addEventListener('click', (event) => {
      if (event.target.classList.contains('modal-backdrop')) closeModal(event.target.id);
    });
    root.addEventListener('submit', (event) => {
      if (event.target.id === 'checkup-step-3') { submitCheckup(event); return; }
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
        document.getElementById('contact-success').hidden = false;
        showToast('Your inquiry has been recorded in this demo.');
        return;
      }
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
        document.getElementById('portal-otp-form').hidden = false;
        document.getElementById('portal-otp').focus();
        return;
      }
      if (event.target.id === 'portal-otp-form') {
        event.preventDefault();
        const value = document.getElementById('portal-otp').value.trim();
        if (value.length < 4) {
          setText('portal-otp-error', 'Enter the 4-digit demo OTP to continue.');
          return;
        }
        document.getElementById('portal-otp-error').textContent = '';
        setPortalTab('demo');
        showToast(`Demo portal unlocked for +91 ${portalPhone}.`);
      }
    });
    root.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        ['checkup-modal', 'portal-modal'].forEach((id) => {
          if (!document.getElementById(id).classList.contains('hidden')) closeModal(id);
        });
      }
    });
    window.addEventListener('hashchange', updateRoute);
    window.addEventListener('scroll', () => {
      const headerElement = document.getElementById('site-header');
      const headerContent = headerElement.firstElementChild;
      const scrolled = window.scrollY > 15;
      headerContent.classList.toggle('py-3', !scrolled);
      headerContent.classList.toggle('py-2', scrolled);
      headerContent.classList.toggle('sm:py-4', !scrolled);
      headerContent.classList.toggle('sm:py-3', scrolled);
      headerElement.classList.toggle('shadow-md', scrolled);
      headerElement.classList.toggle('bg-white/95', scrolled);
    }, { passive: true });
  }

  mount();
})();
