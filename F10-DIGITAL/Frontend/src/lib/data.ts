export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  division: 'digital-tech' | 'growth-marketing' | 'media-production';
  deliverables: string[];
  techStack?: string[];
  image: string;
  featured?: boolean;
}

export interface CaseStudy {
  id: string;
  slug: string;
  clientCategory: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string }[];
  image: string;
  featured?: boolean;
}

export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  description: string;
  iconName: string;
  impactMetrics: string;
  solutions: string[];
  image: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const COMPANY_INFO = {
  name: "F10 DIGITAL",
  legalName: "F10 Digital FZ. LLC.",
  licenseNo: "19251/2024",
  founder: "Daniel Vincent",
  founderRole: "Founder & CEO, F10 Digital",
  tagline: "Building Digital Growth. Enabling Performance Transformation.",
  subtitle: "Your Digital Growth & Performance Transformation Partner.",
  aboutBrief: "F10 Digital is a full-service digital growth and performance transformation company helping businesses build stronger brands, generate demand, and leverage technology and AI for sustainable growth.",
  phone: "+971 55 644 6256",
  email: "daniel@f10.digital",
  website: "https://www.f10.digital",
  whatsappNumber: "971556446256",
  stats: [
    { value: "5+", label: "Years of UAE Experience", detail: "Deep GCC market context" },
    { value: "200+", label: "Projects Delivered in 24 Months", detail: "Across enterprise & scale-up sectors" },
    { value: "50+", label: "Active Enterprise Clients", detail: "Long-term retained partners" },
    { value: "7", label: "Countries Served", detail: "Global footprint with 4 key hubs" },
  ],
  locations: [
    {
      country: "UAE",
      flag: "🇦🇪",
      city: "Dubai",
      role: "Client Engagement & Global Headquarters",
      address: "IFZA Business Park, Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      country: "UAE",
      flag: "🇦🇪",
      city: "Fujairah",
      role: "Northern Emirates Strategy Office",
      address: "M 1, Creative City, Twin Towers, Fujairah, UAE (PO Box: 4422)",
      image: "https://images.unsplash.com/photo-1578895101403-1a0c9720ac68?auto=format&fit=crop&w=1200&q=80",
    },
    {
      country: "India",
      flag: "🇮🇳",
      city: "Navi Mumbai",
      role: "Technology & Engineering Excellence Hub",
      address: "Navi Mumbai Tech Zone, Maharashtra, India",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      country: "India",
      flag: "🇮🇳",
      city: "Chennai",
      role: "Digital Production & Media Studio",
      address: "OMR IT Corridor, Chennai, Tamil Nadu, India",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    },
  ],
};

export const CORE_PILLARS = [
  {
    number: "01",
    title: "Strategy & Advisory",
    description: "Aligning digital roadmaps with commercial goals to eliminate guesswork and focus investment.",
    icon: "Compass",
  },
  {
    number: "02",
    title: "Enterprise Technology",
    description: "Architecting scalable web applications, robust system integrations, and modern infrastructure.",
    icon: "Cpu",
  },
  {
    number: "03",
    title: "Digital Growth & Performance",
    description: "Data-driven performance marketing, SEO, paid acquisition, and funnel optimization.",
    icon: "TrendingUp",
  },
  {
    number: "04",
    title: "AI & Business Automation",
    description: "Intelligent agent workflows, automated WhatsApp lead pipelines, and CRM synchronizations.",
    icon: "Bot",
  },
  {
    number: "05",
    title: "Content & Media Production",
    description: "Cinematic commercial films, brand storytelling, motion graphics, and social content ops.",
    icon: "Film",
  },
];

export const CHALLENGES = [
  {
    number: "01",
    title: "Fragmented Digital Presence",
    symptom: "Disjointed channels and inconsistent brand experience across web, social, and sales touchpoints.",
    solution: "Unified brand architecture and integrated multi-channel digital design.",
  },
  {
    number: "02",
    title: "Limited Lead Conversion",
    symptom: "High digital ad spend and traffic, but poor conversion quality and unpredictable customer ROI.",
    solution: "Conversion rate optimization, dedicated landing funnels, and precision attribution.",
  },
  {
    number: "03",
    title: "Manual Processes",
    symptom: "Time-consuming manual workflows, lost inquiries, and internal communication operational gaps.",
    solution: "Automated routing pipelines and autonomous CRM integrations.",
  },
  {
    number: "04",
    title: "Disconnected Systems",
    symptom: "Data silos and complete lack of synchronization across marketing, ERP, and CRM platforms.",
    solution: "Custom API middleware and unified reporting data pipelines.",
  },
  {
    number: "05",
    title: "Limited Performance Visibility",
    symptom: "Difficulty tracking and measuring actual business impact and true customer acquisition cost.",
    solution: "Executive KPI dashboards with real-time attribution and reporting.",
  },
];

export const STATUS_QUO_COMPARISON = [
  {
    current: "Low online visibility",
    impact: "Missed market opportunities",
    desired: "Stronger brand authority & category presence",
  },
  {
    current: "Inefficient manual workflows",
    impact: "Higher operational costs",
    desired: "Streamlined automated operations",
  },
  {
    current: "Disconnected marketing & sales",
    impact: "Lower lead conversion & lost revenue",
    desired: "Consistent pipeline of qualified leads",
  },
  {
    current: "Inconsistent customer experience",
    impact: "Reduced customer retention & trust",
    desired: "Seamless omni-channel customer journey",
  },
  {
    current: "Limited performance data",
    impact: "Unclear ROI & blind investment",
    desired: "Predictable, measurable business growth",
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  // Division 1: Digital & Technology
  {
    id: "web-dev",
    slug: "website-development",
    title: "Website Development",
    shortDesc: "Architecting high-performance corporate platforms, CMS solutions, and bespoke digital flagship experiences.",
    fullDesc: "We build digital-first corporate websites designed to elevate brand authority, captivate high-value audiences, and convert visitors into long-term partners. Utilizing modern frameworks such as Next.js and headless architectures, we deliver blazingly fast load speeds, uncompromising security, and bespoke aesthetics.",
    division: "digital-tech",
    deliverables: ["Custom Headless & SSR Websites", "Enterprise CMS Architecture", "Bespoke Editorial UI/UX", "Core Web Vitals Optimization", "Global CDN & Edge Delivery"],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "Node.js"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "app-dev",
    slug: "web-mobile-applications",
    title: "Web & Mobile Applications",
    shortDesc: "End-to-end product development for progressive web apps, cross-platform mobile, and SaaS platforms.",
    fullDesc: "From enterprise portals to consumer-facing iOS and Android applications, our engineering teams design intuitive, robust, and scalable application software built to sustain heavy concurrent usage and high-stakes business operations.",
    division: "digital-tech",
    deliverables: ["Cross-Platform Mobile Apps (iOS/Android)", "Custom SaaS Platforms", "Progressive Web Apps (PWA)", "API-First Microservices", "Real-Time Collaborative Features"],
    techStack: ["React Native", "Flutter", "Node.js", "PostgreSQL", "Redis", "Docker"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "system-integrations",
    slug: "system-integrations",
    title: "System Integrations",
    shortDesc: "Harmonizing CRM, ERP, and bespoke third-party applications to break down operational silos.",
    fullDesc: "Modern enterprises rely on dozens of disparate tools. We engineer clean, dependable API bridges and middleware that synchronize sales, marketing, inventory, and accounting into one fluid operational pipeline.",
    division: "digital-tech",
    deliverables: ["ERP & CRM Bi-directional Sync", "Custom Middleware & Webhooks", "Payment Gateway Architecture", "Legacy System Migration", "Secure Data Pipelines"],
    techStack: ["GraphQL", "REST APIs", "Node.js", "AWS", "Zapier / Make", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ai-solutions",
    slug: "ai-solutions",
    title: "AI Solutions & Automation",
    shortDesc: "Deploying enterprise AI models, intelligent chatbots, and automated operational routing.",
    fullDesc: "Transform raw data and routine inquiries into automated growth drivers. We build specialized AI workflows that qualify leads 24/7 via WhatsApp and web, automate content adaptation, and extract real-time operational insights.",
    division: "digital-tech",
    deliverables: ["WhatsApp AI Lead Assistant", "Document & Knowledge Intelligence", "Predictive Analytics Models", "Automated CRM Dispatch", "Customer Sentiment Analysis"],
    techStack: ["OpenAI / Gemini APIs", "LangChain", "Vector Databases", "Python", "WhatsApp Cloud API"],
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "maintenance-support",
    slug: "maintenance-support",
    title: "Maintenance & Support",
    shortDesc: "24/7 proactive monitoring, security updates, and performance tuning for critical web assets.",
    fullDesc: "Ensure continuous uptime, rock-solid security compliance, and ongoing iteration with our dedicated support engineering squads based across the UAE and India.",
    division: "digital-tech",
    deliverables: ["24/7 System Health Monitoring", "Zero-Downtime Patching", "Automated Cloud Backups", "Penetration Testing & Audits", "Continuous Feature Iteration"],
    techStack: ["Datadog", "Cloudflare", "GitHub Actions", "Docker", "AWS"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  },

  // Division 2: Growth & Marketing
  {
    id: "seo-content",
    slug: "seo-content-marketing",
    title: "SEO & Content Marketing",
    shortDesc: "Data-driven organic search authority, editorial thought leadership, and technical SEO.",
    fullDesc: "Dominate high-intent search queries across the GCC and international markets. We blend technical search optimization with editorial content strategies that build lasting organic traffic and category leadership.",
    division: "growth-marketing",
    deliverables: ["Technical Search Audits", "High-Intent Keyword Architecture", "Editorial Thought Leadership", "Local GCC & Regional SEO", "Backlink Acquisition & PR"],
    techStack: ["Ahrefs", "Semrush", "Google Search Console", "Screaming Frog", "GA4"],
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "paid-media",
    slug: "paid-media-campaigns",
    title: "Paid Media Campaigns",
    shortDesc: "Precision advertising across Google Ads, Meta, LinkedIn, and programmatic channels.",
    fullDesc: "Eliminate wasted budget with targeted campaigns designed around customer acquisition cost (CAC) and customer lifetime value (LTV). We create high-converting ad sets, strict audience segments, and continuous split testing.",
    division: "growth-marketing",
    deliverables: ["Google Search & Performance Max", "LinkedIn B2B Account Campaigns", "Meta Dynamic Creative Ads", "Retargeting Funnels", "Multi-Touch Attribution"],
    techStack: ["Google Ads", "Meta Ads Manager", "LinkedIn Campaign Manager", "Triple Whale", "GA4"],
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "social-media",
    slug: "social-media-management",
    title: "Social Media Management",
    shortDesc: "Strategic brand building, community growth, and creative distribution across key social channels.",
    fullDesc: "Position your brand as an industry visionary with curated social narratives, compelling visual assets, and active community engagement tailored to the Middle East and international markets.",
    division: "growth-marketing",
    deliverables: ["Omnichannel Social Strategy", "Executive LinkedIn Ghostwriting", "Visual Storytelling Grids", "Community Moderation", "Influencer Collaborations"],
    techStack: ["Figma", "Sprout Social", "Later", "Canva", "CapCut"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "lead-generation",
    slug: "lead-generation",
    title: "Lead Generation",
    shortDesc: "Turn cold prospects into qualified inbound pipeline through optimized landing pages and nurture flows.",
    fullDesc: "We build complete end-to-end acquisition systems that capture high-intent leads, instantly verify and score their requirements, and route them to your sales closers within seconds.",
    division: "growth-marketing",
    deliverables: ["High-Converting Landing Pages", "Automated Lead Scoring", "Email Nurture Sequences", "WhatsApp Direct Booking", "CRM Pipeline Setup"],
    techStack: ["HubSpot", "ActiveCampaign", "Unbounce", "Twilio", "Typeform"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "analytics-reporting",
    slug: "analytics-reporting",
    title: "Analytics & Reporting",
    shortDesc: "Crystal-clear executive dashboards connecting marketing investment to real closed revenue.",
    fullDesc: "Stop guessing your return on ad spend. We engineer consolidated business intelligence dashboards that unite Google Analytics, ad channels, CRM records, and offline conversions into actionable insights.",
    division: "growth-marketing",
    deliverables: ["Custom Looker Studio Dashboards", "Server-Side Tracking (GTM)", "Cohort Retention Analysis", "Cost-Per-Acquisition Audits", "Executive KPI Briefings"],
    techStack: ["Looker Studio", "BigQuery", "GA4", "Server-Side GTM", "PowerBI"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },

  // Division 3: Media & Production
  {
    id: "corporate-films",
    slug: "corporate-films",
    title: "Corporate Films",
    shortDesc: "Cinematic brand films, investor showcases, and founder documentaries with international grade polish.",
    fullDesc: "From conceptualization and scripting to 4K/6K cinema camera shooting on location in Dubai and Mumbai, our media division produces cinematic films that build monumental trust with institutional investors and high-value buyers.",
    division: "media-production",
    deliverables: ["Cinema-Grade Corporate Brand Films", "Investor & Stakeholder Stories", "Executive Interviews", "Architectural Site Documentaries", "Cinematic Color Grading"],
    techStack: ["RED / ARRI Cinema Cameras", "DaVinci Resolve", "Premiere Pro", "Drone Aerials", "Sound Design"],
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "commercials-ads",
    slug: "commercials-ads",
    title: "Commercials & Advertisements",
    shortDesc: "High-octane commercial spots engineered for television, cinema, and digital video campaigns.",
    fullDesc: "Captivate audiences in the first 3 seconds. We produce narrative-driven commercial advertisements with bespoke sound engineering, licensed music, and striking visual choreography.",
    division: "media-production",
    deliverables: ["TV & Cinema Commercials", "High-Impact YouTube Pre-rolls", "Social-First Vertical Commercials", "Scriptwriting & Storyboarding", "Talent Casting & Location Scouts"],
    techStack: ["DaVinci Resolve", "After Effects", "Pro Tools", "Cinema Lighting", "Grip Gear"],
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "post-production",
    slug: "video-editing-post-production",
    title: "Video Editing & Post-Production",
    shortDesc: "Hollywood-grade video editing, color grading, sound design, and visual enhancements.",
    fullDesc: "Our dedicated editing studio operates around the clock, turning hours of raw footage into razor-sharp, compelling narratives with calibrated color, dynamic pacing, and spatial audio mastering.",
    division: "media-production",
    deliverables: ["Offline & Online Video Editing", "HDR Color Timing & Grading", "Surround Sound Mixing", "Subtitling & Multi-Language Localization", "Format Deliverables for all Platforms"],
    techStack: ["Adobe Premiere Pro", "DaVinci Resolve Studio", "Logic Pro", "iZotope RX"],
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "animation-motion",
    slug: "animation-motion-graphics",
    title: "Animation & Motion Graphics",
    shortDesc: "2D and 3D visual animation, product CGI renders, and interactive motion graphic systems.",
    fullDesc: "Explain complex technical architectures and demonstrate futuristic products through photorealistic 3D renders, kinetic typography, and fluid 2D motion graphics.",
    division: "media-production",
    deliverables: ["Photorealistic 3D Product Renders", "Kinetic Typography & Title Sequences", "Technical Explainer Animations", "UI/UX Micro-Interactions", "Broadcast Graphic Packages"],
    techStack: ["Blender", "Cinema 4D", "After Effects", "Octane Render", "Lottie"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "social-content",
    slug: "social-media-content",
    title: "Social Media Content",
    shortDesc: "High-volume, rapid-turnaround Reels, TikToks, YouTube Shorts, and carousel assets.",
    fullDesc: "Stay culturally relevant and algorithmically favored with an ongoing pipeline of short-form vertical video, carousel breakdowns, and interactive stories produced by our dedicated content creators.",
    division: "media-production",
    deliverables: ["Short-Form Vertical Videos (Reels/Shorts)", "High-Engagement Visual Carousels", "Event Live-Coverage & Snippets", "Podcast Video Production", "Trending Audio Adaptation"],
    techStack: ["CapCut Pro", "Figma", "After Effects", "Photoshop", "Descript"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
];

export const METHODOLOGY_STEPS = [
  {
    number: "01",
    name: "Discover",
    tagline: "Understand business goals, challenges and opportunities.",
    description: "We conduct deep-dive stakeholder interviews, audit existing digital assets, analyze competitor positioning, and dissect target buyer behaviors in the UAE, GCC, and global markets.",
    deliverable: "Comprehensive Digital Audit & Strategic Opportunity Brief",
  },
  {
    number: "02",
    name: "Strategize",
    tagline: "Define roadmap, solution design and success metrics.",
    description: "Every initiative requires a clear commercial destination. We formulate measurable KPIs, customer journey blueprints, architecture diagrams, and targeted marketing models.",
    deliverable: "Omnichannel Growth Roadmap & Technology Architecture",
  },
  {
    number: "03",
    name: "Build",
    tagline: "Develop, integrate and test solutions.",
    description: "Our cross-functional squads develop custom web applications, configure AI automations, script corporate films, and build high-converting performance campaign funnels.",
    deliverable: "Production-Grade Code, Media Assets & Automation Workflows",
  },
  {
    number: "04",
    name: "Launch",
    tagline: "Deploy, train and go live.",
    description: "Execution with zero downtime. We conduct thorough cross-browser QA, configure serverless edge CDNs, train internal teams, and deploy live acquisition campaigns.",
    deliverable: "Seamless Go-Live & Team Enablement Handover",
  },
  {
    number: "05",
    name: "Optimise",
    tagline: "Monitor performance and refine.",
    description: "Post-launch is where compounding begins. We analyze real user sessions, A/B test conversion funnels, adjust ad bidding, and fine-tune AI prompt routing for peak efficiency.",
    deliverable: "Weekly Performance Sprints & Heatmap Conversion Analysis",
  },
  {
    number: "06",
    name: "Scale",
    tagline: "Expand capabilities and drive long-term growth.",
    description: "Leverage early wins to dominate new market territories, roll out secondary feature releases, and scale media production volume to sustain industry leadership.",
    deliverable: "Multi-Region Expansion Playbooks & Continuous Growth",
  },
];

export const WHY_F10_PILLARS = [
  {
    title: "Business-First Strategy",
    description: "We never write a line of code or record footage without first understanding the commercial revenue mechanics.",
    icon: "Target",
  },
  {
    title: "Integrated Capabilities",
    description: "Strategy, enterprise technology, growth marketing, AI automation, and cinema production under one unified model.",
    icon: "Layers",
  },
  {
    title: "Technical Expertise",
    description: "Senior engineering talent building robust, scalable web architectures, custom APIs, and intelligent workflow automation.",
    icon: "Code2",
  },
  {
    title: "Transparent Governance",
    description: "Clearly defined deliverables, strict milestone schedules, sprint reviews, and live executive performance dashboards.",
    icon: "ShieldCheck",
  },
  {
    title: "Regional Delivery",
    description: "Seamless UAE client engagement and local cultural context backed by high-capacity engineering studios in India.",
    icon: "Globe2",
  },
  {
    title: "Long-Term Partnership",
    description: "We partner with businesses for the long horizon, continually optimizing and unlocking new digital revenue vectors.",
    icon: "Handshake",
  },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "finance-banking",
    slug: "finance-banking",
    name: "Finance & Banking",
    description: "Secure, compliant fintech portals, institutional banking websites, and data-driven investor relations platforms.",
    iconName: "Landmark",
    impactMetrics: "+65% Client Portal Adoption",
    solutions: ["Fintech & Wealth Web Portals", "KYC & AML Lead Verification", "Investor Relations Media Films", "Security-Hardened Infrastructure"],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "real-estate",
    slug: "real-estate-property",
    name: "Real Estate & Property",
    description: "High-converting developer launch campaigns, 3D architectural showcases, and automated VIP buyer qualification.",
    iconName: "Building2",
    impactMetrics: "+85% Qualified Buyer Inquiries",
    solutions: ["Off-Plan Launch Microsites", "WhatsApp AI Lead Concierge", "Architectural 3D & Drone Films", "Meta & Google Lead Ad Funnels"],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "healthcare",
    slug: "healthcare",
    name: "Healthcare",
    description: "Patient engagement platforms, medical clinic booking funnels, and verified health reputation management.",
    iconName: "HeartPulse",
    impactMetrics: "+120% Patient Inquiries",
    solutions: ["Clinic Booking & Telehealth", "Doctor Credibility Profiles", "Healthcare SEO & Local Maps", "Patient Review Automation"],
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "retail-ecommerce",
    slug: "retail-ecommerce",
    name: "Retail & E-commerce",
    description: "Omnichannel digital storefronts, headless checkout experiences, and multi-channel performance advertising.",
    iconName: "ShoppingBag",
    impactMetrics: "+40% Conversion Uplift",
    solutions: ["Headless Shopify & Next.js Stores", "Cart Abandonment Automation", "Creative Product Ads & Reels", "Customer Lifetime Value Optimization"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "education",
    slug: "education",
    name: "Education",
    description: "University enrollment platforms, corporate training portals, and student acquisition campaigns across GCC.",
    iconName: "GraduationCap",
    impactMetrics: "3.2x Enrollment Growth",
    solutions: ["Student Portal & LMS", "Lead Generation for Admissions", "Campus Virtual Tour Films", "Multi-Language Ad Campaigns"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "travel-hospitality",
    slug: "travel-hospitality",
    name: "Travel & Hospitality",
    description: "Luxury resort digital showcases, direct reservation engines, and cinematic experiential travel films.",
    iconName: "PlaneTakeoff",
    impactMetrics: "-35% Booking Intermediary Fees",
    solutions: ["Direct Booking Engine UX", "Cinematic Destination Films", "Multi-Currency Checkout", "Local Luxury SEO"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "manufacturing",
    slug: "manufacturing",
    name: "Manufacturing & Industrial",
    description: "B2B catalog portals, industrial product explainer videos, and international distributor procurement systems.",
    iconName: "Factory",
    impactMetrics: "+50% Operational Efficiency",
    solutions: ["B2B Spec Sheet Catalogs", "Factory Video Documentaries", "Distributor Portal Integrations", "Industrial SEO for RFP Inquiries"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "technology",
    slug: "technology-startups",
    name: "Technology & Startups",
    description: "Category-defining brand identities, developer landing pages, and rapid investor product prototypes.",
    iconName: "Rocket",
    impactMetrics: "4x Seed-to-Series A Traction",
    solutions: ["Interactive Product Demos", "SaaS Marketing Funnels", "Documentation & Developer Portals", "Product Hunt & Launch Strategy"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "real-estate-dev",
    slug: "real-estate-developer",
    clientCategory: "Real Estate Developer",
    title: "High-Yield Lead Generation for Ultra-Luxury Dubai Project Launch",
    industry: "Real Estate & Property",
    challenge: "Generate qualified international and local high-net-worth leads for a flagship residential tower launch in Dubai within a compressed 60-day launch window.",
    solution: "Engineered an integrated digital launch campaign pairing custom high-speed landing pages with targeted Google Ads, Meta high-intent lead funnels, and automated WhatsApp routing.",
    result: "Achieved record qualified lead volume, reduced cost-per-lead by 38%, and secured 100% reservation capacity in under 4 weeks.",
    metrics: [
      { label: "Lead Volume Uplift", value: "+85%" },
      { label: "Cost Per Acquisition", value: "-38%" },
      { label: "Launch Window", value: "30 Days" },
      { label: "Units Reserved", value: "100%" },
    ],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "healthcare-provider",
    slug: "healthcare-provider",
    clientCategory: "Healthcare Provider",
    title: "Patient Journey Modernization & Omni-Channel Digital Visibility",
    industry: "Healthcare",
    challenge: "Overcome fragmented online visibility, poor mobile appointment conversion, and low engagement across regional clinic branches.",
    solution: "Rolled out comprehensive technical SEO, medical content marketing, physician credibility videos, and a streamlined multi-clinic WhatsApp booking flow.",
    result: "Generated substantial organic search visibility, increased direct monthly website traffic by +120%, and saw a sustained surge in validated patient consultations.",
    metrics: [
      { label: "Organic Search Traffic", value: "+120%" },
      { label: "Direct Consultations", value: "+60%" },
      { label: "Booking Time", value: "< 45 sec" },
      { label: "Patient Satisfaction", value: "4.9 / 5" },
    ],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "retail-brand",
    slug: "retail-brand",
    clientCategory: "Retail Brand",
    title: "Direct-to-Consumer Digital Transformation & Sales Velocity",
    industry: "Retail & E-commerce",
    challenge: "Drive rapid e-commerce sales growth while elevating premium brand perception in a saturated regional consumer market.",
    solution: "Executed multi-channel paid acquisition campaigns across Meta and Google, paired with dynamic cinema-quality video production, editorial social content, and cart conversion tuning.",
    result: "Significantly amplified brand recall, achieved a 40% improvement in online store conversion rates, and scaled monthly revenue by 2.8x.",
    metrics: [
      { label: "Store Conversion Rate", value: "+40%" },
      { label: "Monthly Revenue Scale", value: "2.8x" },
      { label: "Social Engagement", value: "+60%" },
      { label: "ROAS (Return on Ad Spend)", value: "4.4x" },
    ],
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
];

export const MEASUREMENT_OUTCOMES = [
  {
    metric: "+120%",
    title: "Website Traffic",
    subtitle: "Increase in qualified organic search traffic",
    indicator: "positive",
  },
  {
    metric: "+85%",
    title: "Qualified Leads",
    subtitle: "Higher verified lead generation pipeline",
    indicator: "positive",
  },
  {
    metric: "+40%",
    title: "Conversion Rate",
    subtitle: "Improved visitor-to-customer conversion",
    indicator: "positive",
  },
  {
    metric: "-35%",
    title: "Cost per Acquisition",
    subtitle: "Lower cost per acquired paying customer",
    indicator: "efficiency",
  },
  {
    metric: "+60%",
    title: "Engagement Rate",
    subtitle: "Higher meaningful brand interaction & reach",
    indicator: "positive",
  },
  {
    metric: "+50%",
    title: "Operational Efficiency",
    subtitle: "Reduction in manual administrative workload",
    indicator: "efficiency",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "ai-whatsapp-lead-automation",
    slug: "ai-whatsapp-lead-automation",
    title: "Automating High-Value Lead Qualification via WhatsApp & Intelligent Agents",
    excerpt: "How forward-thinking UAE and international enterprises are replacing manual lead intake with instant, 24/7 AI qualification flows that boost sales conversion by 40%.",
    content: `In high-stakes industries such as UAE real estate, wealth advisory, and corporate services, response time determines whether a deal closes or slips away to a competitor. Traditional contact forms often see prospects wait hours or days for a callback.

### The Problem with Status Quo Lead Intake
When a prospective buyer lands on an ad, filling out a lengthy multi-page form feels high friction. Furthermore, when sales teams manually follow up 6 hours later, the buyer has already contacted two other firms.

### The F10 AI WhatsApp Flow
By connecting meta ad leads or website click-to-WhatsApp buttons directly to an autonomous AI qualification agent, businesses achieve:
1. **Zero-Second Response**: The prospect is greeted immediately in natural English or Arabic.
2. **Intelligent Qualification**: The agent asks 2 to 3 contextual questions regarding budget, timeline, and preferred specifications.
3. **Instant CRM Routing**: High-intent qualified leads are instantly dispatched to the top sales closer with a prepared dossier.
4. **Transparent Attribution**: Every step is tracked directly into your executive BI dashboard.

Businesses implementing this workflow report an immediate 50% reduction in manual intake overhead and a 40% jump in booked sales presentations.`,
    author: "Daniel & The F10 Strategy Squad",
    date: "November 2026",
    readTime: "5 min read",
    category: "AI & Automation",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "modern-corporate-web-architecture",
    slug: "modern-corporate-web-architecture",
    title: "Why Modern Corporate Websites Must Shift from Templates to Engineering-Grade Platforms",
    excerpt: "SaaS templates and generic CMS themes erode trust for enterprise clients. Discover the competitive advantage of bespoke Next.js architectures and cinematic art direction.",
    content: `Your corporate website is the premier digital showroom of your enterprise. Global clients and institutional investors evaluate your technological competence and attention to detail within 3 seconds of visiting.

### The Generic Template Trap
Many digital agencies deploy pre-made templates loaded with redundant plugins, slow render times, and cookie-cutter layouts. For an enterprise handling multi-million-dollar transactions, a slow or generic website creates subconscious doubt in the mind of the buyer.

### The Editorial & Engineering Standard
F10 Digital builds on modern headless foundations using Next.js App Router, SSR, and custom Tailwind styling. This approach yields:
- Sub-second first contentful paint (FCP) across global regions.
- Bespoke visual rhythms combining cinematic dark sections with pristine light editorial layouts.
- Absolute security with decoupled API microservices.

When your brand looks and operates like a category leader, you win higher-margin business.`,
    author: "F10 Engineering Lead",
    date: "October 2026",
    readTime: "6 min read",
    category: "Enterprise Technology",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "uae-digital-transformation-2027",
    slug: "uae-digital-transformation-2027",
    title: "Navigating the UAE Digital Landscape: Growth, Media & Operational Automation",
    excerpt: "Key strategic priorities for UAE companies seeking sustainable expansion across Dubai, Abu Dhabi, the Northern Emirates, and broader GCC.",
    content: `The UAE economy is advancing at unprecedented velocity. With national initiatives prioritizing AI adoption, digital innovation, and paperless business operations, companies must modernize their client-facing and internal ecosystems.

### Integrating Media and Performance
Marketing in the GCC cannot rely on performance ads alone. High-net-worth clients respond to authentic, cinema-grade brand films that communicate institutional heritage and forward-looking ambition. Pairing cinematic video with hyper-targeted paid media yields 3x higher engagement than static ads.

### Scalable Delivery Across UAE and India
F10 Digital's hybrid delivery model—combining UAE client advisory in Dubai and Fujairah with premier engineering hubs in Navi Mumbai and Chennai—delivers world-class output with high agility and rigorous quality governance.`,
    author: "F10 Leadership",
    date: "September 2026",
    readTime: "4 min read",
    category: "Strategy & Advisory",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
  },
];

