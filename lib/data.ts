export const siteConfig = {
  name: "Ionuț-Iacob Cotoi",
  title: "Senior .NET Full-Stack Developer | Performance Architect & Cloud Solutions",
  description: "I build high-performance systems that save companies money.",
  email: "ionutcotoi@diversework.org",
  phone: "+40 784 324 940",
  location: "Târgu Mureș, Romania (remote available)",
  available: true,
  social: {
    linkedin: "https://linkedin.com/in/ionutiacobcotoi",
    github: "https://github.com/Ionutcotoi00",
    website: "https://ionutcotoi.me",
  },
};

export const stats = [
  {
    value: 90,
    suffix: "%",
    label: "Faster Billing",
    description: "Reduced invoice generation from 4s to 300ms",
  },
  {
    value: 25,
    prefix: "$",
    suffix: "k",
    label: "Saved/Year",
    description: "Eliminated wasted Twilio API spending",
  },
  {
    value: 10,
    suffix: "k+",
    label: "Users Served",
    description: "Healthcare SaaS platform scale",
  },
  {
    value: 4,
    suffix: "+",
    label: "Years Experience",
    description: "Building scalable enterprise systems",
  },
];

export const experience = [
  {
    title: "Senior .NET Developer",
    company: "Bissoft S.R.L",
    companyLogo: "/logos/bissoft.svg",
    client: "US Healthcare SaaS Client",
    companyUrl: "https://bissoft.ro",
    period: "Oct 2022 – Present",
    location: "Remote",
    achievements: [
      "Optimized critical stored procedures, reducing execution time by 90% (4s to 300ms) using Task Parallel Library workflows",
      "Designed webhook handler for Twilio SMS integration, capturing async delivery failures and saving $25k/year in wasted API spending",
      "Built real-time operational dashboards for 10,000+ users with ASP.NET Core Web APIs",
      "Implemented CMS 1500 billing form generation and complex invoicing workflows for US healthcare compliance",
    ],
    tech: [".NET Core", "ASP.NET", "SQL Server", "TPL", "Twilio", "React"],
  },
  {
    title: "Founder & Lead Cloud Architect",
    company: "DiverseWork Hub S.R.L",
    companyLogo: "/logos/diversework.svg",
    companyUrl: "https://www.diversework.org",
    badge: "Backed by Microsoft for Startups",
    period: "June 2025 – Present",
    location: "Remote",
    achievements: [
      "Architected cloud-native inclusive recruitment platform with .NET 8, React 18, and Azure services",
      "Integrated Azure OpenAI (GPT-4) with RAG pattern for anonymous candidate-job matching, eliminating unconscious bias",
      "Secured €40,000 EU funding (LEADER) and 4 pilot companies confirmed for January 2026 launch",
      "Built WCAG 2.2 AA compliant accessibility validation engine for government and enterprise contracts",
    ],
    tech: [
      ".NET 8",
      "React 18",
      "Azure OpenAI",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    title: "Design Engineer",
    company: "IRUM SA",
    companyLogo: "/logos/irum.png",
    companyUrl: "https://www.irum.ro",
    department: "R&D Department",
    period: "Aug 2021 – Oct 2022",
    location: "Reghin",
    description:
      "Led R&D mechanical design projects, managing full lifecycle from CAD prototyping to manufacturing testing. Built foundation in engineering discipline and project management.",
  },
];

export const projects = [
 {
  title: "DiverseWork",
  description:
    "Inclusive recruitment platform with AI-powered anonymous matching. Built from MVP to production with Microsoft for Startups backing.",
  tags: [".NET 8", "React 18", "Azure OpenAI", "RAG", "PostgreSQL"],
  highlights: ["€40k EU Funding", "4 Pilot Companies", "100+ Candidates"],
  links: { live: "https://www.diversework.org", github: "#" },  
  featured: true,
  status: "live" as const,
},
  {
    title: "WhatsApp AI Receptionist",
    description:
      "Microservices platform for SME automated scheduling via WhatsApp and Voice. Event-driven architecture on Azure.",
    tags: ["Azure AKS", "Semantic Kernel", "WhatsApp API", "Twilio"],
    highlights: ["7 Microservices", "GDPR Compliant", "Multi-tenant"],
    links: { github: "#" },
    featured: false,
    status: "coming-soon" as const,
  },
  {
    title: "Healthcare Billing Engine",
    description:
      "Optimized legacy invoicing system achieving 90% performance improvement for enterprise healthcare SaaS.",
    tags: [".NET Core", "TPL", "SQL Server", "Twilio Webhooks"],
    highlights: ["90% Faster", "$25k/yr Saved", "10k+ Users"],
    links: {},
    featured: false,
    status: "enterprise" as const,
  },
];

export const techStack = {
  "Languages & Runtime": ["C#", ".NET 8/9", "TypeScript", "SQL"],
  Backend: [
    "ASP.NET Core",
    "Entity Framework",
    "Task Parallel Library",
    "Webhooks",
  ],
  Frontend: ["React 18", "Tailwind CSS", "Next.js", "WCAG 2.2 AA"],
  Cloud: [
    "Azure App Service",
    "Azure Blob Storage",
    "Azure OpenAI",
    "Managed Identity",
  ],
  DevOps: ["GitHub Actions", "Docker", "CI/CD Pipelines", "Azure DevOps"],
  Architecture: [
    "Microservices",
    "Event-Driven",
    "Multi-Tenant SaaS",
    "Clean Architecture",
  ],
};

export const certifications = [
  {
    name: "Microsoft Certified: Azure Fundamentals",
    code: "AZ-900",
    status: "Scheduled",
    date: "Jan 2026",
    progress: 80,
  },
  {
    name: "GitHub Copilot Foundations",
    code: "GitHub",
    status: "Scheduled",
    date: "Jan 2026",
    progress: 70,
  },
  {
    name: "Microsoft Certified: Azure Administrator Associate",
    code: "AZ-104",
    status: "In Preparation",
    date: "Feb/Mar 2026",
    progress: 40,
  },
  {
    name: "Microsoft Certified: Azure Solutions Architect Expert",
    code: "AZ-305",
    status: "Planned",
    date: "Q2 2026",
    progress: 20,
  },
];

export const navigation = [
  { name: "About", href: "#about" },
  { name: "Impact", href: "#impact" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];
