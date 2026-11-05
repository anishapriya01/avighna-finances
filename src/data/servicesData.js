export const serviceCategories = [
  {
    id: 'loans',
    name: 'Loans & Mortgages',
    badge: 'Competitive Rates from 8.35%',
    tagline: 'Lowest Interest Rates & Swift Sanctions Across 30+ Banks',
    description: 'Customized credit architecture for home buyers, expanding enterprises, and high-net-worth property owners.',
    icon: 'Building2',
    accent: 'emerald',
    services: [
      {
        id: 'home-loan',
        title: 'Home Loans & Balance Transfer',
        interestRate: '8.35% - 9.15% p.a.',
        maxTenure: 'Up to 30 Years',
        processingTime: '3 - 5 Business Days',
        idealFor: 'First-time homebuyers, luxury apartment buyers, or existing borrowers seeking 50-100 bps rate reduction.',
        highlights: [
          'Direct tie-ups with SBI, HDFC, ICICI, and Axis Bank',
          'Zero doorstep friction; end-to-end documentation pickup in Pune',
          'Free collateral legal valuation & technical vetting',
          'Balance transfer option with high top-up liquidity'
        ],
        eligibility: ['Salaried: Min monthly net income ₹35,000', 'Self-Employed: 2+ yrs profitable ITR', 'CIBIL Score: 720+ preferred'],
        documents: ['PAN & Aadhaar Card', 'Last 6 Months Bank Statement', 'Last 3 Months Salary Slips or 2 Yrs ITR + Computation', 'Property Title Deeds']
      },
      {
        id: 'business-loan',
        title: 'Business Growth Capital & MSME',
        interestRate: '10.50% - 15.00% p.a.',
        maxTenure: 'Up to 7 Years (Unsecured) / 15 Years (Secured)',
        processingTime: '48 - 72 Hours',
        idealFor: 'Enterprises needing working capital, machinery financing, inventory expansion, or export orders.',
        highlights: [
          'Collateral-free loan sanctions up to ₹1.50 Crore',
          'CGTMSE scheme facilitation for eligible manufacturing/service units',
          'Flexible overdraft (OD) & Cash Credit (CC) limit arrangements',
          'Tax-deductible interest structuring advice'
        ],
        eligibility: ['Minimum 3 years vintage in current business', 'Annual GST turnover > ₹40 Lakhs', 'Clean audited financial statements'],
        documents: ['GST Returns (Last 12 Months)', 'Audited Balance Sheets (2 Years)', 'Current Account Statements (1 Year)', 'Business Registration / MOA / GSTIN']
      },
      {
        id: 'lap',
        title: 'Loan Against Property (LAP)',
        interestRate: '8.85% - 10.25% p.a.',
        maxTenure: 'Up to 20 Years',
        processingTime: '5 - 7 Business Days',
        idealFor: 'Commercial real estate owners, residential property owners needing large low-cost liquidity without selling assets.',
        highlights: [
          'Loan-to-Value (LTV) up to 75% of residential & 65% of commercial property',
          'Half the interest rate of conventional personal loans',
          'Use funds freely for business expansion, child’s overseas education, or debt consolidation',
          'Both self-occupied and rented property accepted'
        ],
        eligibility: ['Clear marketable freehold property title in PMC/PCMC or metro areas', 'Verified repayment capacity'],
        documents: ['Registered Sale Deed & Sanctioned Blueprint', 'Latest Property Tax Receipts', 'Income Proofs (Salaried or Business)']
      },
      {
        id: 'personal-loan',
        title: 'Premium Executive Personal Loans',
        interestRate: '10.25% - 13.50% p.a.',
        maxTenure: 'Up to 5 Years',
        processingTime: 'Same Day Sanction',
        idealFor: 'Immediate family celebrations, medical emergencies, or bridging short-term liquidity.',
        highlights: [
          'Zero collateral or guarantor required',
          'Sanction limits up to ₹40 Lakhs for corporate employees in Pune IT hubs',
          'Part-prepayment options without punitive penalties',
          'Instant digital sanction letter'
        ],
        eligibility: ['Salaried employee in MNC / Listed Corp / Govt institution', 'Min take-home ₹45,000/month'],
        documents: ['PAN, Aadhaar', '3 Months Salary Credit Account Statement', 'Employee ID badge']
      }
    ]
  },
  {
    id: 'wealth',
    name: 'Wealth & Investments',
    badge: 'AMFI Registered & Goal-Engineered',
    tagline: 'Disciplined Capital Compounding Designed for Real-Life Milestones',
    description: 'Evidence-based portfolio construction blending Direct Mutual Funds, Equity SIPs, Index Strategies, and Tax-Saving ELSS.',
    icon: 'TrendingUp',
    accent: 'gold',
    services: [
      {
        id: 'sip-engine',
        title: 'Systematic Investment Plans (SIP)',
        interestRate: 'Targeting 12% - 15% CAGR (Equity)',
        maxTenure: '3 to 25+ Years Horizon',
        processingTime: '100% Paperless e-KYC',
        idealFor: 'Salaried professionals, young couples, and disciplined wealth creators aiming for ₹1 Cr - ₹10 Cr retirement corpus.',
        highlights: [
          'Automated rupee-cost averaging protecting against market dips',
          'Dynamic step-up SIP mechanisms (annual 10% auto-escalation)',
          'Algorithmic rebalancing between Large, Mid, Small Cap & International funds',
          'Zero distribution bias—we recommend top-quartile performers only'
        ],
        eligibility: ['Any Indian Resident or NRI with valid PAN and active bank account', 'Minimum SIP starting from ₹1,000/month'],
        documents: ['PAN Card', 'Aadhaar (DigiLocker verified)', 'Bank details for auto-debit (NACH/e-Mandate)']
      },
      {
        id: 'lumpsum-pms',
        title: 'Lumpsum Portfolio & Tactical Allocation',
        interestRate: 'Targeted Alpha over Nifty 50',
        maxTenure: 'Recommended 5+ Years',
        processingTime: 'Instant Deployment',
        idealFor: 'Clients receiving annual bonuses, property sale proceeds, inheritance, or corporate ESOP liquidations.',
        highlights: [
          'Systematic Transfer Plan (STP) architecture to deploy capital smoothly over 6-12 months',
          'Multi-asset diversification across Equity, Arbitrage, Sovereign Gold Bonds, and Debt',
          'Downside drawdown protection rules during market peaks',
          'Quarterly portfolio health audit with dedicated certified advisor'
        ],
        eligibility: ['Ideal for deployment sizes ₹5 Lakhs to ₹5 Crores+'],
        documents: ['KYC documentation', 'Bank Cheque / Proof of Source of Funds']
      },
      {
        id: 'elss-tax',
        title: 'Tax-Saving ELSS & Section 80C Solutions',
        interestRate: 'Lowest Lock-in (3 Yrs) vs PPF/FD',
        maxTenure: '3 Years Lock-in (Compounding continuation advised)',
        processingTime: 'Immediate Tax Receipt',
        idealFor: 'High tax bracket professionals seeking up to ₹46,800 annual tax rebate under old regime while beating inflation.',
        highlights: [
          'Shortest lock-in period among all Section 80C instruments (3 years vs 5 yrs in Tax FD or 15 yrs in PPF)',
          'Long-term capital gains exemption up to ₹1.25 Lakh per financial year',
          'Historically superior wealth generation over debt-based tax savers',
          'Instant automated 80C investment certificate for corporate HR submission'
        ],
        eligibility: ['Individual taxpayers in India'],
        documents: ['PAN Card', 'Bank Net Banking / UPI for instant transaction']
      },
      {
        id: 'child-retirement',
        title: 'Child Education & Retirement Blueprints',
        interestRate: 'Inflation-Adjusted Modeling (7%)',
        maxTenure: '10 - 25 Years Roadmap',
        processingTime: 'Custom Blueprint in 48 Hrs',
        idealFor: 'Parents securing Ivy League / Indian tier-1 college funds and working professionals targeting early financial freedom (FIRE).',
        highlights: [
          'Precise inflation-adjusted corpus forecasting factoring college education inflation (9-10%)',
          'De-risking glide paths shifting from equity to liquid debt as the milestone approaches',
          'Independent child trust structures and sovereign gold allocation',
          'Tax-efficient withdrawal sequencing when funds are needed'
        ],
        eligibility: ['Open for all families committed to goal-oriented investing'],
        documents: ['Existing investment statement snapshot', 'Family goal timeline questionnaire']
      }
    ]
  },
  {
    id: 'insurance',
    name: 'Risk & Insurance Advisory',
    badge: '100% Claim Settlement Assistance',
    tagline: 'Fortifying Your Family and Enterprise Against Unforeseen Financial Shocks',
    description: 'Zero-commission bias. Pure protection term life, high-restoration family health covers, and critical illness guards.',
    icon: 'ShieldCheck',
    accent: 'emerald',
    services: [
      {
        id: 'term-life',
        title: 'Pure Term Life Insurance (High Cover)',
        interestRate: 'Premiums starting ~ ₹600/month for ₹1 Cr',
        maxTenure: 'Cover up to Age 75 / 85',
        processingTime: 'Medical checkup at home / tele-medical',
        idealFor: 'Sole earning members, individuals with home loans, or parents with young children.',
        highlights: [
          'High Sum Assured (₹1 Cr to ₹10 Cr+) at affordable locked-in premiums',
          'Critical Illness and Accidental Disability riders for 360-degree shielding',
          'MWP (Married Women’s Property) Act endorsement ensuring claims go strictly to family and cannot be attached by creditors',
          'Pune-based dedicated claim concierge team standing beside your family'
        ],
        eligibility: ['Age: 18 - 60 Years', 'Salaried or Self-Employed with consistent income proof'],
        documents: ['PAN Card', 'Last 3 Months Salary Slips / 2 Years ITR', 'Medical History Questionnaire']
      },
      {
        id: 'family-health',
        title: 'Super Top-Up & 1 Cr Family Floater Health Cover',
        interestRate: 'Tax rebate under Sec 80D up to ₹75,000',
        maxTenure: 'Lifetime Renewability',
        processingTime: 'Instant Cashless at 10,000+ Hospitals',
        idealFor: 'Families tired of limited ₹5 Lakh corporate covers, looking for ₹50 Lakh - ₹1 Cr coverage with 0% co-pay.',
        highlights: [
          '100% Cashless hospitalization across all top Pune hospitals (Ruby Hall, Sahyadri, Jupiter, Manipal, Deenanath)',
          'Zero room rent capping & zero disease-wise sub-limits',
          'Unlimited restore benefits for unrelated illnesses within the same policy year',
          'Coverage for pre and post-hospitalization medical bills (60 & 180 days)'
        ],
        eligibility: ['Proposer age 18+, dependants 90 days to 65+ years'],
        documents: ['Proposer & family member identity proofs', 'Existing policy copies if porting']
      },
      {
        id: 'business-liability',
        title: 'Director & Officer (D&O) / Keyman Insurance',
        interestRate: 'Corporate Business Expense Deductible',
        maxTenure: 'Annual Renewable Policy',
        processingTime: 'Underwritten in 5 Days',
        idealFor: 'Startup founders, partnership firms, and private limited companies protecting key executives.',
        highlights: [
          'Guards against sudden loss of key revenue-generating founders or technical leaders',
          'Corporate tax deduction on premiums paid by company',
          'D&O liability shield protecting personal assets against client lawsuits or regulatory audits',
          'Smooth partnership equity buyout funding in the event of an untimely demise'
        ],
        eligibility: ['Registered enterprises, Pvt Ltd, LLP, Partnership'],
        documents: ['Company PAN & Incorporation Certificate', 'Audited Financial Statements', 'Board Resolution']
      }
    ]
  },
  {
    id: 'property',
    name: 'Real Estate & Property Advisory',
    badge: 'Pune Prime Corridors',
    tagline: 'Strategic Property Acquisition, Title Verification & Structured Financing',
    description: 'Combining real estate due diligence with seamless loan syndication across Baner, Hinjewadi, Kharadi, Kothrud, and Wakad.',
    icon: 'Compass',
    accent: 'gold',
    services: [
      {
        id: 'property-acquisition',
        title: 'Residential & Villa Buyer Advisory',
        interestRate: 'Combined with 8.35% Loan Desk',
        maxTenure: 'Turnkey Search to Registration',
        processingTime: 'Direct Developer Allotment',
        idealFor: 'Home seekers looking for vetted A-grade builder properties without broker markups or hidden clauses.',
        highlights: [
          '100% RERA compliance verification & legal title search by high court advocates',
          'Direct developer pricing with exclusive corporate discounts in West & East Pune',
          'Integrated loan sanction approval matching the builder disbursement schedule',
          'No surprise charges—transparent developer-assisted facilitation'
        ],
        eligibility: ['Prospective home buyers with active investment intent'],
        documents: ['Preference budget form', 'Pre-approved loan eligibility certificate']
      },
      {
        id: 'commercial-equity',
        title: 'Pre-Leased Commercial & Retail Assets',
        interestRate: '7.5% - 9.2% Net Rental Yields',
        maxTenure: 'Long-term 9-15 Year Leases',
        processingTime: 'Due Diligence: 7 Days',
        idealFor: 'High-net-worth investors seeking passive inflation-beating monthly rental cash flows in Pune IT parks.',
        highlights: [
          'Blue-chip multinational and Grade-A retail bank tenants already in place',
          'Pre-structured Lease Rental Discounting (LRD) loans up to 70% value',
          'Clear 15% escalation clauses every 3 years built into legal lease agreements',
          'Complete property management & tenant renewal oversight'
        ],
        eligibility: ['Investment ticket size ₹50 Lakhs to ₹15 Crores'],
        documents: ['KYC', 'Entity details if purchasing through family trust or company']
      },
      {
        id: 'property-equity-cashout',
        title: 'Property Equity Monetization & Restructuring',
        interestRate: 'Custom Structuring',
        maxTenure: 'Flexible Terms',
        processingTime: '7 - 10 Days',
        idealFor: 'Landowners and legacy property holders seeking to monetize unencumbered land or commercial assets.',
        highlights: [
          'Joint Development Agreement (JDA) advisory connecting vetted developers',
          'Capital gains tax exemption strategies under Section 54 / 54F / 54EC',
          'Bridge finance against under-construction properties',
          'Family partition and dispute-free asset allocation structures'
        ],
        eligibility: ['Land or property owners with undisputed possession'],
        documents: ['7/12 extract / Property Card / Sanctioned Layout', 'Search Report']
      }
    ]
  }
];

