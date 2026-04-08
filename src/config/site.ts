/**
 * Site Configuration
 * =================
 * Central configuration file for the fellowship programme website.
 * Change values here to customize the site without touching individual components.
 */

export const siteConfig = {
  // Brand Identity
  name: "Gradient Fellows",
  tagline: "Preparing the next generation for the AI age",
  description:
    "A talent investment programme for non-CS STEM graduates transitioning into AI & Machine Learning. We identify high-potential scientists and engineers and invest in their transition through mentorship, micro-stipends, and structured learning.",

  // Typography
  fonts: {
    sans: "Space_Grotesk",
  },

  // Logo & Assets
  logo: {
    path: "/logo.png",
    alt: "Gradient Fellows Logo",
  },

  // SEO & Metadata
  seo: {
    title: "Gradient Fellows \u2014 STEM to AI Fellowship",
    description:
      "A talent investment programme for non-CS STEM graduates transitioning into AI & Machine Learning. Micro-stipend, mentorship, and a structured path to your first AI role.",
    keywords: [
      "AI fellowship",
      "STEM to AI",
      "machine learning fellowship",
      "AI career transition",
      "STEM graduates",
      "AI mentorship",
      "ML training programme",
      "non-CS AI",
      "physics to AI",
      "science to machine learning",
    ],
  },

  // Hero Section
  hero: {
    badge: "Applications Open",
    headline: ["Your Science Degree", "Is Your AI Superpower"],
    description:
      "We invest in non-CS STEM graduates making the leap into AI & Machine Learning. Stipend. Mentorship. Structure. No tuition. This isn\u2019t a bootcamp\u2014it\u2019s angel investing for human capital.",
    cta: {
      text: "Apply Now",
      link: "/apply",
    },
    secondaryCta: {
      text: "Learn How It Works",
      link: "#how-it-works",
    },
  },

  // Problem / Market Gap
  problem: {
    title: "The Gap Nobody\u2019s Filling",
    statement:
      "The AI industry has a talent bottleneck, but it\u2019s not where most people think. There is no shortage of computer science graduates who can train a model on MNIST. The shortage is in people who understand real-world domains\u2014materials science, biology, physics, chemistry, engineering\u2014and can apply machine learning to problems that actually matter.",
    bridgeStatement:
      "These people already exist. They graduated with strong mathematics, scientific rigour, and systems thinking. They just landed in a job market that doesn\u2019t know what to do with them yet. The bridge from STEM to AI is short\u2014but nobody is building it at the right scale or the right price point.",
    points: [
      {
        stat: "73%",
        label: "of frontier AI labs report needing more domain experts",
      },
      {
        stat: "$0",
        label: "stipend programmes exist for non-CS STEM \u2192 AI transitions",
      },
      {
        stat: "3\u201312mo",
        label:
          "is all it takes for a strong STEM grad to become job-ready in ML",
      },
    ],
    existingLandscape: [
      {
        name: "Corporate PhD fellowships",
        examples: "Google, Meta, Amazon",
        limitation:
          "$42k+ stipends, but exclusively for PhD students at partner universities. Inaccessible to a recent materials engineering graduate.",
      },
      {
        name: "Venture-backed residencies",
        examples: "Encode, OpenAI",
        limitation:
          "Full salaries and compute budgets, but targeting experienced researchers. Not designed for career transitions.",
      },
      {
        name: "Bootcamps",
        examples: "Springboard, TripleTen, Flatiron",
        limitation:
          "The fellow pays $8\u201316k. Volume-based, low selectivity, generic curriculum. Opposite model to ours.",
      },
      {
        name: "Free fellowships",
        examples: "Fellowship.AI, DSSG",
        limitation:
          "No cost but also no stipend. No financial skin in the game from either side.",
      },
      {
        name: "Regional programmes",
        examples: "Wadhwani in India, DSN in Nigeria, Google ML Africa",
        limitation:
          "Strong but geographically locked. A physicist in Colombia or a chemist in Egypt has no equivalent option.",
      },
    ],
  },

  // Tiered Model (expanded with curriculum & gates)
  tiers: [
    {
      name: "Ignition",
      duration: "3 months",
      stipend: "$200/mo",
      total: "$600",
      description:
        "Entry tier. All fellows start here. Prove your commitment, build foundations, and demonstrate traction.",
      highlights: [
        "ML fundamentals curriculum",
        "Bi-weekly mentor sessions",
        "First portfolio project",
      ],
      curriculum: [
        "Python for data science",
        "SQL & data manipulation",
        "Mathematics refresh (linear algebra, calculus, probability)",
        "Git & version control",
        "Introduction to scikit-learn & pandas",
      ],
      gate: "First ML project published to GitHub with a clear README.",
    },
    {
      name: "Orbit",
      duration: "6 months",
      stipend: "$200/mo",
      total: "$1,200",
      description:
        "Extended on merit after Ignition review. Deepen your skills, tackle real-world problems, build your professional identity.",
      highlights: [
        "Domain-specific ML track",
        "Open-source contributions",
        "Technical writing",
      ],
      curriculum: [
        "Core machine learning algorithms",
        "Deep learning with PyTorch",
        "Domain-specific applications (e.g., materials informatics, bioinformatics)",
        "Model evaluation & experiment design",
        "Technical blog writing",
      ],
      gate: "Deep learning project + domain bridge project completed and published.",
    },
    {
      name: "Escape Velocity",
      duration: "12 months",
      stipend: "$200/mo",
      total: "$2,400",
      description:
        "Full programme. You\u2019re building serious projects, publishing work, and preparing for the job market.",
      highlights: [
        "Capstone research project",
        "Interview preparation",
        "Industry introductions",
      ],
      curriculum: [
        "Production ML & MLOps",
        "Cloud deployment (AWS/GCP)",
        "Advanced architectures (transformers, GNNs)",
        "Portfolio polish (5\u20136 projects)",
        "Interview preparation & mock interviews",
      ],
      gate: "Capstone shipped, 5\u20136 portfolio projects, first job applications sent.",
    },
  ],

  // What Fellows Receive
  benefits: [
    {
      icon: "stipend",
      title: "Monthly Stipend",
      description:
        "$200/month, paid on deliverable completion. Real money, real accountability. We invest in you so you can focus on learning.",
    },
    {
      icon: "mentorship",
      title: "Expert Mentorship",
      description:
        "Bi-weekly 1:1 calls with a working AI/CS professional. Not lectures\u2014strategic guidance, code review, and career advice.",
    },
    {
      icon: "curriculum",
      title: "Structured Curriculum",
      description:
        "A curated learning path from foundations to job-readiness, designed to skip the noise and focus on what the market demands.",
    },
    {
      icon: "portfolio",
      title: "Portfolio Development",
      description:
        "Guided project work that produces real, presentable portfolio pieces\u2014not toy projects. Everything goes on GitHub.",
    },
    {
      icon: "career",
      title: "Career Support",
      description:
        "CV review, LinkedIn optimization, interview prep, and introductions where possible. The end goal is a job, not a certificate.",
    },
    {
      icon: "community",
      title: "Fellow Community",
      description:
        "Join a cohort of ambitious STEM graduates on the same journey. Peer accountability, shared resources, and a network that lasts beyond the programme.",
    },
  ],

  // What Fellows Commit To
  commitments: [
    {
      title: "50 hours/week",
      description:
        "Of focused study and project work. This is their job for the duration of the fellowship.",
    },
    {
      title: "Bi-weekly check-ins",
      description:
        "With their mentor. Camera on. Prepared. Non-negotiable.",
    },
    {
      title: "Weekly async updates",
      description:
        "\u201CThis week I learned X, built Y, got stuck on Z.\u201D The habit of communicating progress is itself a professional skill.",
    },
    {
      title: "Monthly deliverables",
      description:
        "Each month has a defined output: code, a project, a write-up. Stipend is tied to delivery.",
    },
    {
      title: "Public work",
      description:
        "Everything goes on GitHub. The portfolio is the product. If it\u2019s not on GitHub, it didn\u2019t happen.",
    },
    {
      title: "Honesty",
      description:
        "If you\u2019re lost, say so. If life gets in the way, say so. The worst outcome isn\u2019t struggling\u2014it\u2019s struggling silently.",
    },
  ],

  // Eligibility Criteria
  criteria: {
    title: "Who We\u2019re Looking For",
    subtitle:
      "You don\u2019t need to be exceptional. You need to be serious.",
    items: [
      {
        label: "STEM Background",
        description:
          "Non-CS STEM degree: physics, chemistry, biology, materials engineering, mathematics, or equivalent. Recent graduates preferred (0\u20133 years post-graduation).",
      },
      {
        label: "Mathematical Comfort",
        description:
          "Comfortable with linear algebra, calculus, and statistics at the undergraduate level. Doesn\u2019t need to be exceptional\u2014needs to not be afraid of it.",
      },
      {
        label: "Genuine Motivation",
        description:
          "Able to articulate why you want to transition into AI/ML, even informally. We\u2019re looking for signal, not polish.",
      },
      {
        label: "Full-Time Commitment",
        description:
          "Able to commit 50 hours per week. This is a full-time undertaking, equivalent to a university course load. Not compatible with a full-time job.",
      },
    ],
    notFor:
      "People looking for passive income, people collecting certificates, or people who aren\u2019t willing to put in full-time effort. This programme is generous with support but demanding with expectations.",
  },

  // Application Process
  applicationProcess: {
    title: "How to Apply",
    subtitle:
      "Lightweight but intentional. We filter for signal\u2014curiosity, commitment, thinking ability\u2014not credentials.",
    steps: [
      {
        number: "01",
        title: "Written Application",
        description:
          "Short written application: your background, why AI/ML, and what you\u2019d build if you could build anything. No CV required\u2014just honest answers.",
      },
      {
        number: "02",
        title: "Conversation",
        description:
          "30-minute informal call. Not an interview\u2014a conversation. We\u2019re assessing curiosity, commitment, and programme fit.",
      },
      {
        number: "03",
        title: "Diagnostic",
        description:
          "A short, low-pressure math and logic exercise (take-home, ~2 hours). Not testing knowledge\u2014testing how you think and learn.",
      },
      {
        number: "04",
        title: "Offer",
        description:
          "Accepted fellows receive a written offer outlining the tier, stipend, expectations, and start date.",
      },
    ],
  },

  // Application Form Fields
  applicationForm: {
    title: "Fellowship Application",
    subtitle:
      "This takes about 20\u201330 minutes. Be honest, not polished. We read every application.",
    sections: [
      {
        title: "Personal Information",
        fields: [
          { name: "fullName", label: "Full Name", type: "text", required: true },
          { name: "email", label: "Email Address", type: "email", required: true },
          { name: "country", label: "Country of Residence", type: "text", required: true },
          { name: "nationality", label: "Nationality", type: "text", required: true },
        ],
      },
      {
        title: "Academic Background",
        fields: [
          { name: "degree", label: "Degree Title (e.g., BSc Physics)", type: "text", required: true },
          { name: "university", label: "University / Institution", type: "text", required: true },
          { name: "graduationYear", label: "Year of Graduation", type: "text", required: true },
          { name: "fieldOfStudy", label: "Field of Study", type: "text", required: true },
        ],
      },
      {
        title: "Statement of Purpose",
        fields: [
          {
            name: "whyAI",
            label: "Why do you want to transition into AI/ML? (200\u2013400 words)",
            type: "textarea",
            required: true,
          },
          {
            name: "whatBuild",
            label: "If you could build anything with ML, what would it be and why? (200\u2013400 words)",
            type: "textarea",
            required: true,
          },
          {
            name: "background",
            label: "Briefly describe your STEM background and any relevant experience. (100\u2013300 words)",
            type: "textarea",
            required: true,
          },
        ],
      },
      {
        title: "Supporting Documents",
        fields: [
          {
            name: "cv",
            label: "CV / Resume (PDF, max 2 pages)",
            type: "file",
            required: false,
          },
          {
            name: "transcript",
            label: "Academic Transcript or Degree Certificate (PDF)",
            type: "file",
            required: true,
          },
          {
            name: "additionalDocs",
            label: "Any additional supporting documents (optional)",
            type: "file",
            required: false,
          },
        ],
      },
      {
        title: "Availability & Commitment",
        fields: [
          {
            name: "startDate",
            label: "Earliest available start date",
            type: "text",
            required: true,
          },
          {
            name: "hoursConfirm",
            label: "Can you commit 50 hours per week to the programme?",
            type: "select",
            required: true,
            options: ["Yes", "Yes, with part-time work alongside", "I need to discuss this"],
          },
          {
            name: "englishLevel",
            label: "English proficiency level",
            type: "select",
            required: true,
            options: ["Native", "Fluent (C1/C2)", "Working proficiency (B2)", "Intermediate (B1)"],
          },
        ],
      },
    ],
  },

  // Competitive Landscape
  competitiveLandscape: {
    title: "Why This, Not That",
    subtitle:
      "No existing programme combines all five of our properties.",
    differentiators: [
      "Non-CS STEM focus \u2014 targeting physicists, chemists, biologists, engineers, mathematicians",
      "Micro-stipend model \u2014 $200/month signals seriousness without requiring philanthropic-scale capital",
      "Tiered commitment \u2014 3 \u2192 6 \u2192 12 months based on performance. No other programme does this.",
      "Global from day one \u2014 not locked to a country, university, or corporate partner",
      "Venture framing \u2014 fellows are selected, not enrolled. The psychology is investment, not charity.",
    ],
    comparison: [
      {
        programme: "Google AI Residency",
        target: "PhD students",
        stipend: "Full salary",
        duration: "12 months",
        difference: "PhD-only. Corporate. Not accessible to recent STEM grads.",
      },
      {
        programme: "Meta/Amazon PhD Fellowship",
        target: "PhD students",
        stipend: "$42k/yr + tuition",
        duration: "2 years",
        difference:
          "PhD-only. University-partnered. Extremely competitive.",
      },
      {
        programme: "Encode: AI for Science",
        target: "AI researchers",
        stipend: "\u00a3115k + compute",
        duration: "12 months",
        difference:
          "Targets experienced AI talent, not career transitions.",
      },
      {
        programme: "Wadhwani AI Fellowship",
        target: "Engineers (India)",
        stipend: "Paid",
        duration: "1\u20132 years",
        difference: "India-only. Social good focus.",
      },
      {
        programme: "Fellowship.AI",
        target: "ML learners",
        stipend: "Free (no pay)",
        duration: "3 months",
        difference: "No stipend. No financial commitment either direction.",
      },
      {
        programme: "Bootcamps (Springboard, etc.)",
        target: "Career switchers",
        stipend: "Student pays $8\u201316k",
        duration: "6 months",
        difference:
          "Opposite model: fellows pay. No selectivity. Volume-based.",
      },
      {
        programme: "Gradient Fellows",
        target: "Non-CS STEM grads",
        stipend: "$200/month",
        duration: "3\u201312 months",
        difference:
          "Only programme combining: micro-stipend + non-CS STEM focus + tiered commitment + global reach + venture framing.",
        isUs: true,
      },
    ],
  },

  // Governance
  governance: {
    stipendMechanics: {
      title: "Stipend Mechanics",
      items: [
        "Payment trigger: mentor reviews deliverables at month-end. If complete, stipend is released within 7 days.",
        "Incomplete work: stipend is deferred (not forfeited) until deliverables are submitted.",
        "No clawbacks. Once a stipend is paid, it\u2019s paid. Past performance is not punished retroactively.",
      ],
    },
    progressionDecisions: {
      title: "Tier Progression",
      description:
        "At the end of each tier, one of four decisions is made:",
      options: [
        {
          decision: "Advance",
          description: "The fellow moves to the next tier. Stipend continues.",
        },
        {
          decision: "Hold",
          description:
            "The fellow needs more time at the current tier. An extension of 1\u20132 months can be offered.",
        },
        {
          decision: "Graduate",
          description:
            "The fellow has achieved job-readiness ahead of schedule. Celebrate and support their search.",
        },
        {
          decision: "Part Ways",
          description:
            "The programme isn\u2019t working for either party. Exit gracefully, no stigma.",
        },
      ],
    },
    ip: "Everything the fellow creates belongs to the fellow. Code, projects, blog posts, portfolio pieces\u2014all theirs. This is not a work-for-hire arrangement. The programme\u2019s return on investment is impact, not intellectual property.",
  },

  // FAQ
  faq: [
    {
      question: "Do I need a computer science degree?",
      answer:
        "No. In fact, this programme is specifically designed for people who don\u2019t have one. We\u2019re looking for physicists, chemists, biologists, engineers, and mathematicians.",
    },
    {
      question: "Is this free? What\u2019s the catch?",
      answer:
        "We pay you $200/month. There is no tuition, no income share agreement, no catch. We invest in you because we believe the AI industry needs more domain experts. Your success is our return.",
    },
    {
      question: "Can I do this alongside a full-time job?",
      answer:
        "The programme requires a 50-hour weekly commitment. It\u2019s not compatible with full-time employment. Part-time work is possible, but this should be your primary focus.",
    },
    {
      question: "What happens if I can\u2019t keep up?",
      answer:
        "If life gets in the way, say so. Honesty is valued above all. Stipends can be deferred (not forfeited) while you catch up. If the programme isn\u2019t working, we part ways gracefully\u2014no stigma.",
    },
    {
      question: "Where is this programme based?",
      answer:
        "Everywhere. The programme is fully remote and global from day one. A fellow in Bogot\u00e1 and a fellow in Dhaka get the same experience.",
    },
    {
      question: "What\u2019s the difference between this and a bootcamp?",
      answer:
        "Bootcamps charge you $8\u201316k, have low selectivity, and offer generic curricula. We pay you, select carefully, and build a customized path. We\u2019re closer to a venture-backed fellowship than a school.",
    },
    {
      question: "How is progression decided?",
      answer:
        "At the end of each tier, we make one of four decisions: advance, hold (extend current tier), graduate early, or part ways. Every decision is based on demonstrated traction, not attendance.",
    },
    {
      question: "Who owns the work I produce?",
      answer:
        "You do. 100%. Code, projects, blog posts, portfolio pieces\u2014all yours. This is not a work-for-hire arrangement.",
    },
    {
      question: "How are stipends paid?",
      answer:
        "Your mentor reviews deliverables at month-end. If complete, the stipend is released within 7 days. If work is incomplete, the stipend is deferred (not forfeited) until deliverables are submitted.",
    },
    {
      question: "What documents do I need to apply?",
      answer:
        "A short written application (no CV required), your academic transcript or degree certificate, and honest answers to a few questions. We also include a low-pressure math diagnostic later in the process.",
    },
    {
      question: "What if I don\u2019t have programming experience?",
      answer:
        "Some programming exposure helps (MATLAB, Python, R from your degree), but we don\u2019t expect software engineering skills. The first tier (Ignition) covers Python, SQL, and Git from the ground up.",
    },
  ],

  // Testimonials (placeholders)
  testimonials: [
    {
      name: "First Fellow",
      role: "Materials Science \u2192 ML Engineer",
      quote:
        "This space is reserved for our first cohort of fellows. Their stories will go here.",
      avatar: "",
    },
  ],

  // Programme Statistics (placeholders)
  stats: {
    fellowsSupported: "Coming Soon",
    countriesReached: "Global",
    investmentPerFellow: "$2,400",
    completionTarget: "85%",
  },

  // Fellowship Projects
  projects: [
    {
      title: "Real Estate Agent",
      description:
        "Developing an Agentic AI Real Estate Agent app using Large-Action Models (LAMs), designed to transform the property search process by autonomously finding listings that match user-specified criteria. This advanced app will use technologies like CrewAI to facilitate conversational interactions and detailed searches through MLS listing APIs, enhancing the efficiency and user experience in real estate transactions.",
      image: "/images/projects/real-estate.jpg",
    },
    {
      title: "Hair Color Modifications",
      description:
        "AI-powered hair color transformation tool using MediaPipe segmentation and advanced generative models. The system accurately isolates hair regions in images and applies realistic color modifications for virtual try-on styling applications.",
      image: "/images/projects/hair-color.png",
    },
    {
      title: "Fitness Activity Recognition",
      description:
        "Uses MediaPipe BlazePose to analyse fitness videos with a 33-keypoint skeleton system for cost-effective performance tracking. The model identifies exercise types, counts repetitions, and provides form feedback in real time.",
      image: "/images/projects/fitness.png",
    },
    {
      title: "Competitor Analysis",
      description:
        "ML-based web scraping tool that categorises competitor products, analyses pricing strategies using embeddings and SKU matching. Delivers automated competitive intelligence reports with trend detection and market positioning insights.",
      image: "/images/projects/competitor-analysis.png",
    },
    {
      title: "Music Moderation",
      description:
        "Automatic Music Transcription (AMT) translates audio sequences to symbolic music representation. The system enables content moderation at scale by detecting copyrighted material and generating structured metadata for audio catalogues.",
      image: "/images/projects/music-moderation.jpg",
    },
    {
      title: "Food Recognition with CLIP",
      description:
        "Evaluates OpenAI CLIP model for food type identification and nutritional analysis with custom-curated datasets. Tests zero-shot and fine-tuned performance across diverse cuisines and presentation styles.",
      image: "/images/projects/food-recognition.png",
    },
    {
      title: "Fetal Gender Masking",
      description:
        "Deep learning approach for automatically masking fetal gender indicators in ultrasound imagery to support blind studies. Uses segmentation networks trained on medical imaging data to ensure privacy compliance in prenatal research.",
      image: "/images/projects/fetal-masking.png",
    },
    {
      title: "Creative Optimizer",
      description:
        "Predictive tool measuring Click-Through and Open Rates for email creatives. Uses ML models to score creative variants and provide automated A/B optimisation recommendations, improving campaign performance at scale.",
      image: "/images/projects/creative-optimizer.png",
    },
  ],

  // Navigation
  navigation: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Apply", href: "/apply" },
    { label: "FAQ", href: "/#faq" },
    { label: "Blog", href: "/blog" },
  ],

  // Footer
  footer: {
    title: "Ready to Make the Leap?",
    cta: {
      text: "Apply Now",
      link: "/apply",
    },
    version: "v0.2 \u2014 April 2026",
  },

  // Backgrounds
  backgrounds: {
    hero: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
    neutral: "#E8DCC4",
  },

  // Company Information
  company: {
    foundedYear: 2026,
    legalName: "Gradient Fellows",
  },

  // Social Links
  social: {
    twitter: "",
    linkedin: "",
    github: "",
  },

  // Contact Info
  contact: {
    email: "hello@gradientfellows.org",
  },

  // Privacy Policy
  privacy: {
    lastUpdated: "April 8, 2026",
  },

  // Candidate Programme Names (for reference)
  candidateNames: [
    "Gradient Fellows",
    "Traverse Fellowship",
    "Tensor Fellowship",
    "Vector Fellowship",
    "Influx Fund",
    "Threshold Fellowship",
    "Prism Fellowship",
    "Axiom Fellowship",
    "Flux Fund",
    "Apex Fund",
  ],
};

// Type definitions
export type SiteConfig = typeof siteConfig;
export type Tier = (typeof siteConfig.tiers)[number];
export type Benefit = (typeof siteConfig.benefits)[number];
export type Commitment = (typeof siteConfig.commitments)[number];
export type CriterionItem = (typeof siteConfig.criteria.items)[number];
export type ApplicationStep =
  (typeof siteConfig.applicationProcess.steps)[number];
export type FAQItem = (typeof siteConfig.faq)[number];
export type NavigationItem = (typeof siteConfig.navigation)[number];
export type CompetitorEntry =
  (typeof siteConfig.competitiveLandscape.comparison)[number];
export type Project = (typeof siteConfig.projects)[number];
