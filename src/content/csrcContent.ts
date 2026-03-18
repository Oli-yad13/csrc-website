export type LinkItem = {
  label: string;
  href: string;
};

export type Programme = {
  slug: string;
  title: string;
  strapline: string;
  summary: string;
  status: string;
  image: string;
  focus: string[];
  partners: string[];
  paragraphs: string[];
  highlights: string[];
  links: LinkItem[];
};

export type ResourceItem = {
  title: string;
  type: string;
  theme: string;
  description: string;
  image: string;
  linkLabel: string;
  href: string;
  source: string;
};

export type EventItem = {
  title: string;
  date: string;
  location: string;
  description: string;
  type: string;
  image: string;
};

export type SupporterSection = {
  id: string;
  title: string;
  description: string;
  supporters: Array<{
    abbr: string;
    name: string;
    region: string;
    href: string | null;
    logo?: string | null;
  }>;
};

export type LogoPartner = {
  name: string;
  fullName?: string;
  logo: string | null;
  href?: string;
};

export const heroContent = {
  kicker: "Civil society resource centre for Ethiopia",
  title: "Civil society learning, resources, and sector support rooted in Ethiopia.",
  summary:
    "Founded in 2019, the Civil Society Resource Center works from Addis Ababa as a knowledge hub for civil society organisations, emerging actors, and sector partners. CSRC brings together information access, technical support, learning programmes, public dialogue, and partnership delivery so Ethiopian civil society can grow stronger, more connected, and better prepared for the future.",
  primaryCta: {
    label: "About CSRC",
    href: "/about",
  },
  secondaryCta: {
    label: "Explore featured work",
    href: "#featured-work",
  },
  metrics: [
    {
      label: "Founded",
      value: "2019",
    },
    {
      label: "Based in",
      value: "Addis Ababa",
    },
    {
      label: "Working through",
      value: "Programmes and partnerships",
    },
  ],
  spotlight: {
    label: "Current emphasis",
    text:
      "Capacity building, knowledge access, public-interest learning, and consortium delivery for civil society organisations across Ethiopia.",
  },
  image: "/hero-collage.webp",
};

export const homeFeatured = {
  title: "CSF Plus launches with CSRC as a grant partner",
  excerpt:
    "On its public page, CSRC announced the launch of the project 'Strengthening the Capacities, Independence, and Credibility of Local and Grassroots CSOs as Actors of Good Governance and Development in Ethiopia'. The EU-funded programme is led by Christian Aid with CSRC, ECSF, and CAAA, and CSRC says it leads implementation in Addis Ababa and the Central Ethiopia region.",
  date: "Public notice, 2025",
  tags: ["CSF Plus", "Grassroots CSOs", "Capacity building"],
  image: "/CSSP2 SOM/CSSP2 SOM/photo_2025-11-28_16-04-02.jpg",
  href: "/programs/networks-and-ecosystem-strengthening",
};

export const homeHighlights = [
  {
    id: "leadership-pathway",
    eyebrow: "Leadership support",
    title: "Leadership and fellowship pathways",
    summary:
      "Structured fellowships, short-format training, and practical mentoring for emerging civic leaders and recent graduates entering the sector.",
    date: "Programme area",
    image:
      "/Bogalech Gebre (ACLP) Fellowship/Bogalech Gebre (ACLP) Fellowship/photo_2025-11-28_15-44-29.jpg",
    href: "/programs/leadership-and-fellowship-pathways",
  },
  {
    id: "rights-education",
    eyebrow: "Rights practice",
    title: "Human rights education and advocacy",
    summary:
      "Training and advocacy work that connects rights literacy with field-facing organising, women human rights defenders, and civic participation.",
    date: "Programme area",
    image: "/UN women/UN women/photo_2025-11-28_16-11-19.jpg",
    href: "/programs/human-rights-education-and-advocacy",
  },
  {
    id: "moot-court",
    eyebrow: "Legal learning",
    title: "Refugee law and public-interest learning",
    summary:
      "Public-interest legal education built around moot court formats, university collaboration, and refugee protection challenges in the region.",
    date: "Programme area",
    image:
      "/Refugee Law mootcourt/Refugee Law mootcourt/photo_2025-11-28_15-39-54.jpg",
    href: "/programs/refugee-law-and-public-interest-learning",
  },
  {
    id: "regulatory-support",
    eyebrow: "Knowledge hub",
    title: "Knowledge and regulatory support",
    summary:
      "Guides, webinars, and practical operating resources for emerging civil society organisations navigating systems, reporting, and legal change.",
    date: "Knowledge hub",
    image: "/CSSP2 SOM/CSSP2 SOM/photo_2025-11-28_15-57-23.jpg",
    href: "/programs/knowledge-and-regulatory-support",
  },
  {
    id: "ecosystem-strengthening",
    eyebrow: "Consortium work",
    title: "Networks and ecosystem strengthening",
    summary:
      "Shared learning, partner delivery, and support structures that help local and grassroots organisations move from isolation to collective strength.",
    date: "Partnership area",
    image: "/images/consortium-people.png",
    href: "/programs/networks-and-ecosystem-strengthening",
  },
];

export const ownershipNarrative = {
  heading:
    "CSRC operates as a board-led civil society support hub that combines public-interest learning, programme delivery, and partnership building. Its work is shaped through collaboration with Ethiopian CSOs, funding partners, legal and rights-focused institutions, and regional and international learning networks.",
  cta: {
    label: "View supporters and partners",
    href: "/supporters",
  },
  image: "/images/consortium-people.png",
};

export const logoPartners: LogoPartner[] = [
  {
    name: "AFD",
    logo: "/logo/AFD_logo.svg.png",
    href: "https://www.afd.fr/en",
  },
  {
    name: "European Union",
    logo: "/logo/European-Union-Logo.jpg",
    href: "https://european-union.europa.eu/index_en",
  },
  {
    name: "Christian Aid",
    logo: "/logo/CA_logo_600.png",
    href: "https://www.christianaid.org.uk/",
  },
  {
    name: "INTRAC",
    logo: "/logo/5b4914c4-1a38-43bb-84b5-19f747fc7f4b.png",
    href: "https://www.intrac.org/",
  },
  {
    name: "ECSF",
    fullName: "Ethiopian Civil Society Organizations Forum",
    logo: "/logo/Ethiopian Civil Society Organizations Forum.png",
  },
  {
    name: "Irish Aid",
    logo: "/logo/IrishAid_Std_Black_DFAT.original.png",
    href: "https://www.ireland.ie/en/irish-aid/",
  },
  {
    name: "Royal Norwegian Embassy",
    fullName: "Royal Norwegian Embassy in Addis Ababa",
    logo: "/logo/norwegian-embassy-ministry-ud-logo-engelsk-generations-for-peace-ngo-sponsor-donor-jordan-2014-gfp.png",
    href: "https://www.norway.no/en/ethiopia/",
  },
  {
    name: "British Council",
    logo: "/logo/BritishCouncil_Logo.png",
    href: "https://www.britishcouncil.org/",
  },
  {
    name: "UN Women",
    logo: "/logo/unwomen_logo.png",
    href: "https://www.unwomen.org/en",
  },
  {
    name: "ACSO",
    fullName: "Authority for Civil Society Organizations",
    logo: "/logo/Authority for Civil Society Organizations.png",
    href: "https://www.csrc-et.org/",
  },
  {
    name: "Freedom House",
    logo: "/logo/Freedom_House.svg.png",
    href: "https://freedomhouse.org/",
  },
  {
    name: "USAID",
    logo: "/logo/USAID-Identity.svg.png",
    href: "https://www.usaid.gov/",
  },
  {
    name: "NED",
    fullName: "National Endowment for Democracy",
    logo: "/logo/ned-logo.png",
    href: "https://www.ned.org/",
  },
  {
    name: "FCDO",
    fullName: "Foreign, Commonwealth & Development Office",
    logo: "/logo/FCDO-logo-800x600-1.png",
    href: "https://www.gov.uk/government/organisations/foreign-commonwealth-development-office",
  },
  {
    name: "Open Society",
    fullName: "Open Society Foundations",
    logo: "/logo/open socety.png",
    href: "https://www.opensocietyfoundations.org/",
  },
  {
    name: "FES",
    fullName: "Friedrich-Ebert-Stiftung",
    logo: "/logo/csm_1_91_Linkvorschau_Logo_mittel_6a3282eeba.png",
    href: "https://www.fes.de/en/",
  },
  {
    name: "ACLP",
    fullName: "African Civic Leadership Programme",
    logo: "/logo/aclp logo.jpg",
    href: "https://www.africancivicleadership.org/",
  },
  {
    name: "SIDA",
    fullName: "Swedish International Development Cooperation Agency",
    logo: "/logo/sida-logo-png_seeklogo-357524.png",
    href: "https://www.sida.se/en",
  },
  {
    name: "ICNL",
    fullName: "International Center for Not-for-Profit Law",
    logo: "/logo/icnl.png",
    href: "https://www.icnl.org/",
  },
  {
    name: "NIMD",
    fullName: "Netherlands Institute for Multiparty Democracy",
    logo: "/logo/NIMD-Square.png",
    href: "https://nimd.org/",
  },
  {
    name: "MannionDaniels",
    logo: "/logo/MC_Logo.png",
    href: "https://manniondaniels.com/",
  },
];

export const strategicAmbitions = [
  {
    title: "Leadership and organisational strength",
    description:
      "Support civil society leaders, fellows, and emerging organisations with practical learning in project cycle management, proposal development, communication, advocacy, and organisational planning.",
    image:
      "/Executive Leadership ACLP/Executive Leadership ACLP/photo_2025-11-28_15-42-48.jpg",
  },
  {
    title: "Civic space, rights, and public dialogue",
    description:
      "Create room for informed engagement on human rights, legal frameworks, refugee protection, women human rights defenders, and the day-to-day operating environment for CSOs in Ethiopia.",
    image: "/UN women/UN women/photo_2025-11-28_16-11-19.jpg",
  },
  {
    title: "Knowledge access and future readiness",
    description:
      "Turn research, webinars, manuals, digital activism training, and multi-partner learning into accessible tools that help organisations adapt and stay effective.",
    image: "/cso lab.jpg",
  },
];

export const programmes: Programme[] = [
  {
    slug: "leadership-and-fellowship-pathways",
    title: "Leadership and Fellowship Pathways",
    strapline: "Practical learning for emerging and mid-career civic leaders.",
    summary:
      "CSRC uses fellowships, mentoring, and short-format training to help early-career and emerging civil society actors build the capabilities they need to lead organisations and campaigns well.",
    status: "Active public-facing learning track",
    image:
      "/Bogalech Gebre (ACLP) Fellowship/Bogalech Gebre (ACLP) Fellowship/photo_2025-11-28_15-44-54.jpg",
    focus: [
      "Emerging leader pipeline development",
      "Proposal writing and project cycle management",
      "Human rights based approaches",
      "Communications and social media management",
    ],
    partners: ["Public fellowship calls", "Sector mentors", "Training facilitators"],
    paragraphs: [
      "In 2025 CSRC publicly opened applications for an Emerging Civil Society Leaders Fellowship, presenting it as a six-month hands-on learning experience for recent graduates and young civic actors.",
      "Public descriptions of the fellowship point to a practice-based curriculum covering project cycle management, human rights based approaches, fundraising, social media management, and action planning.",
      "This work fits a broader CSRC pattern also seen through ACLP-linked learning and partner-facing leadership development references.",
    ],
    highlights: [
      "Six-month fellowship format publicised in 2025",
      "Open to recent graduates and emerging civic actors",
      "Combines technical skills with civic leadership exposure",
    ],
    links: [
      {
        label: "CSRC public page",
        href: "https://et.linkedin.com/company/civilsocietyresourcecenter",
      },
      {
        label: "African Civic Leadership Programme",
        href: "https://www.africancivicleadership.org/",
      },
    ],
  },
  {
    slug: "knowledge-and-regulatory-support",
    title: "Knowledge and Regulatory Support",
    strapline: "Guides, webinars, and practical tools for operating as a CSO.",
    summary:
      "CSRC publishes and convenes around the operating realities of Ethiopian civil society, especially for newly formed and emerging organisations that need practical help navigating registration, management, reporting, and legal change.",
    status: "Core hub function",
    image: "/CSSP2 SOM/CSSP2 SOM/photo_2025-11-28_16-06-50.jpg",
    focus: [
      "Emerging CSO guidance",
      "Registration and reporting literacy",
      "Webinars and response notes",
      "Applied resource production",
    ],
    partners: ["ACSO", "ACLP", "CSO participants", "Subject specialists"],
    paragraphs: [
      "Public CSRC-hosted documents include a users manual on registering, managing, and reporting on emerging CSOs in Ethiopia and a webinar proceedings report on civil society responses to COVID-19 and its operational impacts.",
      "The centre has also surfaced need assessment work on newly formed and emerging CSOs, showing that the knowledge-hub function is not just publishing, but also diagnosis and ecosystem listening.",
      "This is one of the clearest places where CSRC differs from a typical NGO site: the organisation is expected to be useful, not just visible.",
    ],
    highlights: [
      "Users manual for emerging CSOs",
      "COVID-19 webinar proceedings archive",
      "Need assessment work on newly formed organisations",
    ],
    links: [
      {
        label: "CSRC website",
        href: "https://www.csrc-et.org/",
      },
      {
        label: "CSRC public page",
        href: "https://et.linkedin.com/company/civilsocietyresourcecenter",
      },
    ],
  },
  {
    slug: "human-rights-education-and-advocacy",
    title: "Human Rights Education and Advocacy",
    strapline: "Training that connects rights literacy with public action.",
    summary:
      "CSRC runs and hosts trainings that connect human rights education to advocacy, movement building, and protection-focused practice for local organisations and communities.",
    status: "Recent public training activity",
    image: "/UN women/UN women/photo_2025-11-28_16-14-42.jpg",
    focus: [
      "Human rights education",
      "Advocacy skills",
      "Women human rights defenders",
      "Protection-oriented civic learning",
    ],
    partners: ["Youth for Human Rights International", "Women-led organisations", "Rights educators"],
    paragraphs: [
      "In 2025 CSRC publicised a two-day training on Human Rights Education and Advocacy in collaboration with Youth for Human Rights International Ethiopia.",
      "Its public updates also reference work with women human rights defenders and convenings focused on violence, resilience, and support structures for women-led civic actors.",
      "This suggests a programme area that is practical, rights-based, and linked to field-facing organisations rather than abstract policy language alone.",
    ],
    highlights: [
      "Public two-day rights education and advocacy training in 2025",
      "Work with women human rights defenders",
      "Blend of rights literacy and practical advocacy",
    ],
    links: [
      {
        label: "CSRC public page",
        href: "https://et.linkedin.com/company/civilsocietyresourcecenter",
      },
    ],
  },
  {
    slug: "refugee-law-and-public-interest-learning",
    title: "Refugee Law and Public-Interest Learning",
    strapline: "A civic education route into refugee protection and legal practice.",
    summary:
      "CSRC convenes public-interest legal learning through a national refugee law moot court and related partnerships with academic and legal institutions.",
    status: "Named public programme",
    image:
      "/Refugee Law mootcourt/Refugee Law mootcourt/photo_2025-11-28_15-39-54.jpg",
    focus: [
      "Refugee law education",
      "University engagement",
      "Case-based public-interest learning",
      "Legal advocacy practice",
    ],
    partners: [
      "Friedrich Naumann Foundation for Freedom",
      "FMCC Ethiopia",
      "Hawassa University School of Law",
    ],
    paragraphs: [
      "CSRC publicly hosted a National Refugee Law Moot Court with partners including FNF FMCC Ethiopia and Hawassa University School of Law.",
      "The public description framed the event around current refugee challenges in Ethiopia and East Africa and brought together teams from twelve universities.",
      "For the site, this should be positioned as more than an event: it is a signature public-interest learning format that ties rights education to practice.",
    ],
    highlights: [
      "National moot court format",
      "Twelve universities referenced in public event description",
      "Connects legal training with real regional refugee issues",
    ],
    links: [
      {
        label: "Archived CSRC programme page",
        href: "https://www.csrc-et.org/national-refugee-law-moot-court-held-at-hawassa-university-school-of-law/",
      },
    ],
  },
  {
    slug: "networks-and-ecosystem-strengthening",
    title: "Networks and Ecosystem Strengthening",
    strapline: "Helping organisations move from isolation to sector-wide learning.",
    summary:
      "CSRC contributes to civil society ecosystem strengthening through consortium work, donor-supported learning structures, online networks, and participation in sector-wide funding windows.",
    status: "Partnership and consortium work",
    image: "/CSSP2 SOM/CSSP2 SOM/photo_2025-11-28_16-06-40.jpg",
    focus: [
      "Online and offline network building",
      "Consortium delivery",
      "Local and grassroots CSO support",
      "Shared learning and convening",
    ],
    partners: [
      "CSIF partners",
      "Christian Aid",
      "ECSF",
      "CAAA",
      "INTRAC",
      "CARD",
      "ELA",
      "IVIDE",
    ],
    paragraphs: [
      "Partner materials around CSIF describe a second phase focused on democratic governance, peace and security, social cohesion, inclusion, and media freedom while strengthening leadership, networking, access to information, and digital activism.",
      "A recent CSIF learning digest also describes the DERSHA Emerging Organizations Online Network as a space that continued to connect more than 500 newly formed and emerging organisations.",
      "In 2025 CSRC also publicised the launch of Civil Society Fund Plus, a four-year EU-supported programme for local and grassroots organisations in Addis Ababa, Central Ethiopia, South Ethiopia, and Tigray.",
    ],
    highlights: [
      "Consortium and donor partnership work under CSIF",
      "DERSHA network for emerging organisations",
      "Engagement with the launch of Civil Society Fund Plus in 2025",
    ],
    links: [
      {
        label: "CSIF about page",
        href: "https://www.csinnovationfund.org/aboutcsif",
      },
      {
        label: "INTRAC on supporting civil society in Ethiopia",
        href: "https://www.intrac.org/projects/supporting-civil-society-in-ethiopia-through-csif/",
      },
      {
        label: "Christian Aid on CSF Plus",
        href: "https://www.christianaid.org.uk/get-involved/jobs/expressions-interest-civil-society-fund-plus-sub-grantee",
      },
    ],
  },
  {
    slug: "communications-and-digital-capacity",
    title: "Communications and Digital Capacity",
    strapline: "Helping civic actors communicate, advocate, and stay visible.",
    summary:
      "Public descriptions of CSRC learning work regularly include social media management, access to information, and digital activism, showing that communications capacity is part of the centre's support offer.",
    status: "Cross-cutting capability area",
    image: "/CSSP2 SOM/CSSP2 SOM/photo_2025-11-28_16-12-47.jpg",
    focus: [
      "Digital activism",
      "Social media management",
      "Information access",
      "Public storytelling",
    ],
    partners: ["CSIF ecosystem", "Fellows", "Communications trainers"],
    paragraphs: [
      "CSIF partner materials describe support for access to information and digital activism as part of the broader sector strengthening agenda connected to CSRC and peer organisations.",
      "The 2025 fellowship call also listed social media management among the practical competencies included in the learning package.",
      "For the website, this work should appear as a real support stream, not just a hidden operational detail.",
    ],
    highlights: [
      "Digital activism appears in CSIF public descriptions",
      "Social media management included in the fellowship skill set",
      "Useful bridge between programmes, events, and the knowledge hub",
    ],
    links: [
      {
        label: "CSRC public page",
        href: "https://et.linkedin.com/company/civilsocietyresourcecenter",
      },
      {
        label: "CSIF",
        href: "https://www.csinnovationfund.org/",
      },
    ],
  },
];

export const featuredProgrammes = programmes.slice(0, 3);

export const resources: ResourceItem[] = [
  {
    title: "Civil Society Fund II learning digest",
    type: "Learning digest",
    theme: "Ecosystem strengthening",
    description:
      "A recent CSIF public digest that names CSRC alongside sector outcomes around democratic governance, social cohesion, inclusion, media freedom, networking, information access, and digital activism.",
    image: "/CSSP2 SOM/CSSP2 SOM/photo_2025-11-28_16-06-44.jpg",
    linkLabel: "View source",
    href: "https://www.csinnovationfund.org/aboutcsif",
    source: "CSIF",
  },
  {
    title: "Supporting civil society in Ethiopia through CSIF",
    type: "Project brief",
    theme: "Programme design",
    description:
      "INTRAC's project page gives a concise picture of how CSIF and ECSEP support implementation across multiple Ethiopian regions through learning, advocacy, and partner delivery.",
    image: "/CSSP2 SOM/CSSP2 SOM/photo_2025-11-28_16-04-17.jpg",
    linkLabel: "Read brief",
    href: "https://www.intrac.org/projects/supporting-civil-society-in-ethiopia-through-csif/",
    source: "INTRAC",
  },
  {
    title: "AFD announcement on strengthening Ethiopian civil society",
    type: "Funding note",
    theme: "Funding and partnerships",
    description:
      "AFD's public announcement explains the multi-donor financing context behind sector support that includes CSRC and highlights the link to human rights and civil society strengthening.",
    image: "/logo/AFD_logo.svg.png",
    linkLabel: "Read announcement",
    href: "https://www.afd.fr/en/actualites/communique-de-presse/afd-strengthen-ethiopian-civil-society-relation-human-rights",
    source: "AFD",
  },
  {
    title: "National Refugee Law Moot Court overview",
    type: "Programme page",
    theme: "Public-interest legal learning",
    description:
      "An archived CSRC page describing the Hawassa University refugee law moot court, the regional challenge it addressed, and the partner institutions involved.",
    image:
      "/Refugee Law mootcourt/Refugee Law mootcourt/photo_2025-11-28_15-37-16.jpg",
    linkLabel: "View archive",
    href: "https://www.csrc-et.org/national-refugee-law-moot-court-held-at-hawassa-university-school-of-law/",
    source: "CSRC archive",
  },
  {
    title: "CSRC public updates and calls",
    type: "Live feed",
    theme: "Announcements",
    description:
      "The most reliable public source for recent calls, training notices, launches, and partnership updates while the main CSRC website is unstable.",
    image: "/images/consortium-people.png",
    linkLabel: "Visit public page",
    href: "https://et.linkedin.com/company/civilsocietyresourcecenter",
    source: "Public page",
  },
  {
    title: "African Civic Leadership Programme",
    type: "Partner overview",
    theme: "Leadership support",
    description:
      "A partner page that describes CSRC as a national hub for civic innovation, policy learning, and resource sharing and connects the centre to broader leadership support work.",
    image:
      "/Executive Leadership ACLP/Executive Leadership ACLP/photo_2025-11-28_15-43-02.jpg",
    linkLabel: "Visit programme",
    href: "https://www.africancivicleadership.org/",
    source: "ACLP",
  },
];

export const recentEvents: EventItem[] = [
  {
    title: "CSF Plus programme launch",
    date: "2025",
    location: "Addis Ababa, Ethiopia",
    description:
      "CSRC announced the launch of the EU-funded Civil Society Fund Plus partnership, led by Christian Aid with ECSF and CAAA, and stated that it leads implementation in Addis Ababa and Central Ethiopia.",
    type: "Launch",
    image: "/CSSP2 SOM/CSSP2 SOM/photo_2025-11-28_16-05-44.jpg",
  },
  {
    title: "Emerging Civil Society Leaders Fellowship for graduates with disabilities",
    date: "2025",
    location: "Public call",
    description:
      "CSRC invited recent graduates with disabilities to apply for a six-month fellowship that places the fellow in an organisation working on disability rights.",
    type: "Fellowship",
    image:
      "/Bogalech Gebre (ACLP) Fellowship/Bogalech Gebre (ACLP) Fellowship/photo_2025-11-28_15-45-43.jpg",
  },
  {
    title: "Basic Human Rights Training at CSRC",
    date: "October 11, 2025",
    location: "Addis Ababa, Ethiopia",
    description:
      "CSRC said it hosted a Basic Human Rights Training led by Youth for Human Rights Ethiopia, creating a space for young participants to learn and exchange ideas on dignity, equality, and civic participation.",
    type: "Training",
    image: "/UN women/UN women/photo_2025-11-28_16-11-16.jpg",
  },
  {
    title: "Women human rights defenders participatory advocacy training",
    date: "2025",
    location: "Addis Ababa, Ethiopia",
    description:
      "CSRC highlighted a three-day training on participatory human rights education and peaceful advocacy for members of the Ethiopian Women Human Rights Defenders Network, supported by AFD through ECSEP.",
    type: "Training",
    image: "/UN women/UN women/photo_2025-11-28_16-14-39.jpg",
  },
  {
    title: "National Refugee Law Moot Court",
    date: "2022",
    location: "Hawassa University School of Law",
    description:
      "A case-based legal learning event that brought together teams from twelve universities to engage current refugee challenges in Ethiopia and East Africa.",
    type: "Competition",
    image:
      "/Refugee Law mootcourt/Refugee Law mootcourt/photo_2025-11-28_15-39-25.jpg",
  },
];

export const recurringEventFormats = [
  {
    title: "Public webinars and legal briefings",
    date: "Recurring format",
    description:
      "Short-format public learning sessions built around current operating issues affecting civil society organisations and emerging actors.",
  },
  {
    title: "Training cohorts and workshops",
    date: "Recurring format",
    description:
      "In-person learning sessions on advocacy, rights education, communication, organisational systems, and sector practice.",
  },
  {
    title: "Flagship competitions and convenings",
    date: "Recurring format",
    description:
      "High-visibility public programmes such as the refugee law moot court and fellowship briefings that anchor the centre's public profile.",
  },
];

export const supporterSections: SupporterSection[] = [
  {
    id: "funders",
    title: "Funding partners",
    description:
      "These institutions appear in public announcements, programme launches, and partner materials connected to CSRC's sector support work in Ethiopia.",
    supporters: [
      {
        abbr: "AFD",
        name: "Agence Francaise de Developpement",
        region: "France",
        href: "https://www.afd.fr/en/actualites/communique-de-presse/afd-strengthen-ethiopian-civil-society-relation-human-rights",
        logo: "/logo/AFD_logo.svg.png",
      },
      {
        abbr: "EU",
        name: "European Union",
        region: "European Union",
        href: "https://www.christianaid.org.uk/get-involved/jobs/expressions-interest-civil-society-fund-plus-sub-grantee",
        logo: "/logo/European-Union-Logo.jpg",
      },
      {
        abbr: "Irish Aid",
        name: "Irish Aid",
        region: "Ireland",
        href: "https://www.ireland.ie/en/irish-aid/",
        logo: "/logo/IrishAid_Std_Black_DFAT.original.png",
      },
      {
        abbr: "NO",
        name: "Royal Norwegian Embassy",
        region: "Norway",
        href: "https://www.afd.fr/en/actualites/communique-de-presse/afd-strengthen-ethiopian-civil-society-relation-human-rights",
        logo: "/logo/norwegian-embassy-ministry-ud-logo-engelsk-generations-for-peace-ngo-sponsor-donor-jordan-2014-gfp.png",
      },
      {
        abbr: "USAID",
        name: "USAID",
        region: "United States",
        href: "https://www.usaid.gov/",
        logo: "/logo/USAID-Identity.svg.png",
      },
      {
        abbr: "SIDA",
        name: "Swedish International Development Cooperation Agency",
        region: "Sweden",
        href: "https://www.sida.se/en",
        logo: "/logo/sida-logo-png_seeklogo-357524.png",
      },
      {
        abbr: "FCDO",
        name: "Foreign, Commonwealth & Development Office",
        region: "United Kingdom",
        href: "https://www.gov.uk/government/organisations/foreign-commonwealth-development-office",
        logo: "/logo/FCDO-logo-800x600-1.png",
      },
      {
        abbr: "NED",
        name: "National Endowment for Democracy",
        region: "United States",
        href: "https://www.ned.org/",
        logo: "/logo/ned-logo.png",
      },
      {
        abbr: "Open Society",
        name: "Open Society Foundations",
        region: "International",
        href: "https://www.opensocietyfoundations.org/",
        logo: "/logo/open socety.png",
      },
    ],
  },
  {
    id: "technical",
    title: "Technical and programme partners",
    description:
      "Public materials around CSRC repeatedly mention technical, legal, and delivery partners that support programme implementation and learning.",
    supporters: [
      {
        abbr: "INTRAC",
        name: "INTRAC",
        region: "United Kingdom",
        href: "https://www.intrac.org/projects/supporting-civil-society-in-ethiopia-through-csif/",
        logo: "/logo/5b4914c4-1a38-43bb-84b5-19f747fc7f4b.png",
      },
      {
        abbr: "CA",
        name: "Christian Aid",
        region: "United Kingdom",
        href: "https://www.christianaid.org.uk/get-involved/jobs/expressions-interest-civil-society-fund-plus-sub-grantee",
        logo: "/logo/CA_logo_600.png",
      },
      {
        abbr: "ECSF",
        name: "Ethiopian Civil Society Organizations Forum",
        region: "Ethiopia",
        href: "https://www.christianaid.org.uk/get-involved/jobs/expressions-interest-civil-society-fund-plus-sub-grantee",
        logo: "/logo/Ethiopian Civil Society Organizations Forum.png",
      },
      {
        abbr: "CAAA",
        name: "Chora Abugida Artistic Association",
        region: "Ethiopia",
        href: "https://www.christianaid.org.uk/get-involved/jobs/expressions-interest-civil-society-fund-plus-sub-grantee",
      },
      {
        abbr: "YHRI",
        name: "Youth for Human Rights International Ethiopia",
        region: "Ethiopia",
        href: "https://et.linkedin.com/company/civilsocietyresourcecenter",
      },
      {
        abbr: "ACLP",
        name: "African Civic Leadership Programme",
        region: "Regional",
        href: "https://www.africancivicleadership.org/",
        logo: "/logo/aclp logo.jpg",
      },
      {
        abbr: "British Council",
        name: "British Council",
        region: "United Kingdom",
        href: "https://www.britishcouncil.org/",
        logo: "/logo/BritishCouncil_Logo.png",
      },
      {
        abbr: "FES",
        name: "Friedrich-Ebert-Stiftung",
        region: "Germany",
        href: "https://www.fes.de/en/",
        logo: "/logo/csm_1_91_Linkvorschau_Logo_mittel_6a3282eeba.png",
      },
      {
        abbr: "Freedom House",
        name: "Freedom House",
        region: "United States",
        href: "https://freedomhouse.org/",
        logo: "/logo/Freedom_House.svg.png",
      },
      {
        abbr: "UN Women",
        name: "UN Women",
        region: "International",
        href: "https://www.unwomen.org/en",
        logo: "/logo/unwomen_logo.png",
      },
      {
        abbr: "MC",
        name: "MannionDaniels",
        region: "United Kingdom",
        href: "https://manniondaniels.com/",
        logo: "/logo/MC_Logo.png",
      },
      {
        abbr: "ICNL",
        name: "International Center for Not-for-Profit Law",
        region: "United States",
        href: "https://www.icnl.org/",
        logo: "/logo/icnl.png",
      },
      {
        abbr: "NIMD",
        name: "Netherlands Institute for Multiparty Democracy",
        region: "Netherlands",
        href: "https://nimd.org/",
        logo: "/logo/NIMD-Square.png",
      },
    ],
  },
  {
    id: "consortium",
    title: "Legal, academic, and consortium relationships",
    description:
      "CSRC's public work spans coalition delivery, legal learning, and collaboration with universities and rights-focused organisations.",
    supporters: [
      {
        abbr: "CARD",
        name: "Center for Advancement of Rights and Democracy",
        region: "Ethiopia",
        href: "https://www.csinnovationfund.org/aboutcsif",
      },
      {
        abbr: "ELA",
        name: "Ethiopian Lawyers Association",
        region: "Ethiopia",
        href: "https://www.csinnovationfund.org/aboutcsif",
        logo: "/logo/Ethiopia+Lawyers'+Association.webp",
      },
      {
        abbr: "IVIDE",
        name: "Initiative for Voluntary Development in Ethiopia",
        region: "Ethiopia",
        href: "https://www.csinnovationfund.org/aboutcsif",
      },
      {
        abbr: "FNF",
        name: "FNF FMCC Ethiopia",
        region: "Ethiopia",
        href: "https://www.csrc-et.org/national-refugee-law-moot-court-held-at-hawassa-university-school-of-law/",
      },
      {
        abbr: "HU",
        name: "Hawassa University School of Law",
        region: "Ethiopia",
        href: "https://www.csrc-et.org/national-refugee-law-moot-court-held-at-hawassa-university-school-of-law/",
        logo: "/logo/Awasa_University.png",
      },
      {
        abbr: "ACSO",
        name: "Authority for Civil Society Organizations",
        region: "Ethiopia",
        href: "https://www.csrc-et.org/",
        logo: "/logo/Authority for Civil Society Organizations.png",
      },
      {
        abbr: "AAU",
        name: "Addis Ababa University",
        region: "Ethiopia",
        href: null,
        logo: "/logo/aauLogo.png",
      },
      {
        abbr: "EHRC",
        name: "Ethiopian Human Rights Commission",
        region: "Ethiopia",
        href: null,
        logo: "/logo/EHRC-Logo_blue-svg-1.svg",
      },
      {
        abbr: "EWLA",
        name: "Ethiopian Women Lawyers Association",
        region: "Ethiopia",
        href: null,
        logo: "/logo/EWLA-LOGO.jpg",
      },
      {
        abbr: "LHR",
        name: "Lawyers for Human Rights",
        region: "Ethiopia",
        href: null,
        logo: "/logo/lhr.png",
      },
    ],
  },
];

export const governanceModel = [
  {
    title: "Board-led public-interest hub",
    description:
      "CSRC describes itself publicly as a board-led strategic hub rather than a single-issue campaign organisation.",
  },
  {
    title: "Knowledge, convening, and delivery",
    description:
      "The centre combines information access, training, fellowship pathways, and multi-partner programme delivery.",
  },
  {
    title: "Regulatory and ecosystem literacy",
    description:
      "Its public resources engage directly with the practical operating environment for Ethiopian CSOs, including registration and reporting realities.",
  },
  {
    title: "Partnership accountability",
    description:
      "A large share of public-facing work appears through donor, consortium, and technical partner relationships, which makes clarity and reporting especially important.",
  },
];

export const governancePrinciples = [
  {
    title: "Practical usefulness",
    description:
      "CSRC should make civil society work easier through tools, guides, training, and introductions rather than only publishing institutional statements.",
  },
  {
    title: "Sector inclusion",
    description:
      "Public calls and programme notes show attention to emerging actors, local and grassroots organisations, women human rights defenders, and new graduates entering the sector.",
  },
  {
    title: "Learning by partnership",
    description:
      "Much of the centre's reach comes through co-delivery and shared learning with Ethiopian and international partners.",
  },
  {
    title: "Transparency by evidence",
    description:
      "Where annual reports are not yet easy to access, the site should at minimum expose programme disclosures, funders, partner roles, and public source material clearly.",
  },
];

export const financeHighlights = [
  {
    label: "CSIF public financing announcement",
    value: "Approx. EUR 10M",
  },
  {
    label: "AFD commitment named in 2022 announcement",
    value: "EUR 4.5M",
  },
  {
    label: "Civil Society Fund Plus window",
    value: "4 years",
  },
  {
    label: "Publicly visible team size",
    value: "13+ employees",
  },
];

export const financeNarrative = [
  "Publicly available finance information for CSRC is clearest at the programme and partner level rather than as a consolidated annual organisational budget.",
  "AFD's 2022 announcement around support to Ethiopian civil society named EUR 4.5 million from AFD and an overall multi-donor package of roughly EUR 10 million with support from Ireland and Norway.",
  "In 2025 Civil Society Fund Plus was launched as a four-year EU-funded programme for local and grassroots organisations, again showing that CSRC operates in a multi-donor, multi-partner environment.",
];

export const financePractices = [
  {
    title: "Programme-level disclosure",
    description:
      "Where exact organisational totals are not public, the site should show the budgets, timelines, and partner roles that are public at the programme level.",
  },
  {
    title: "Funder visibility",
    description:
      "Funding institutions should be named consistently and linked to official announcements or partner pages.",
  },
  {
    title: "Partner role clarity",
    description:
      "Visitors should be able to tell when CSRC is a lead implementer, a partner, a host, or a learning convenor.",
  },
  {
    title: "Downloadable reports",
    description:
      "As more verified reports become available, finance and governance pages should link directly to them instead of relying on summary text alone.",
  },
];

export const teamOverview = {
  title: "A small public-interest team working through programmes and partnerships.",
  intro:
    "The public web footprint for CSRC is currently fragmented, so the site should avoid made-up bios and instead present a careful, accurate overview of the functions the team carries: programmes, training, communications, partnership work, and finance and operations.",
  secondary:
    "Publicly visible profiles and recent calls point to a compact team structure with leadership, programme coordination, communications, and operational support based in Addis Ababa.",
};

export const teamProfiles = [
  {
    name: "Henok Teshome Shibru",
    title: "Director",
    description:
      "Public partner materials identify Henok Teshome Shibru as Director of CSRC. The role appears in relation to CSIF learning and sector strengthening work.",
    linkedin: "https://et.linkedin.com/company/civilsocietyresourcecenter",
  },
  {
    name: "Kiya Fule",
    title: "Programme coordination",
    description:
      "Recent public calls issued by CSRC route applicant communication through Kiya Fule, indicating an active programme coordination role on public-facing opportunities.",
    linkedin: "https://et.linkedin.com/company/civilsocietyresourcecenter",
  },
  {
    name: "Lidiya Musse",
    title: "Programme team",
    description:
      "Lidiya Musse appears among publicly listed CSRC employees on the public company profile, contributing to the programme-facing profile of the organisation.",
    linkedin: "https://et.linkedin.com/company/civilsocietyresourcecenter",
  },
  {
    name: "Adey Balcha",
    title: "Communications",
    description:
      "Adey Balcha appears among publicly listed team members and supports the communications and public-facing side of CSRC's work.",
    linkedin: "https://et.linkedin.com/company/civilsocietyresourcecenter",
  },
];

export const publicStaffNames = [
  "Henok Teshome Shibru",
  "Kiya Fule",
  "Lidiya Musse",
  "Adey Balcha",
];

export const opportunities = [
  {
    title: "Research proposal call",
    type: "Recent public notice",
    date: "Deadline December 15, 2025",
    description:
      "CSRC posted a call asking applicants to submit a research proposal, CV, two written samples or publications, and a one-page motivation statement to csrchr@outlook.com.",
    href: "https://et.linkedin.com/company/civilsocietyresourcecenter",
  },
  {
    title: "Consultant ToR submission",
    type: "Recent public notice",
    date: "Deadline November 11, 2025",
    description:
      "CSRC asked consultants to submit a cover letter, CV, and technical and financial proposal to contact@csrc-et.org and kiya.fule@csrc-et.org.",
    href: "https://et.linkedin.com/company/civilsocietyresourcecenter",
  },
  {
    title: "Emerging Civil Society Leaders Fellowship for recent graduates with disabilities",
    type: "Recent public notice",
    date: "Deadline November 3, 2025",
    description:
      "The public company page shows a six-month fellowship call for recent graduates in law or related fields, with placement in an organisation working on disability rights.",
    href: "https://et.linkedin.com/company/civilsocietyresourcecenter",
  },
  {
    title: "CSF Plus Expressions of Interest for smaller and emerging CSOs",
    type: "Recent public notice",
    date: "Public notice, 2025",
    description:
      "CSRC promoted an open EOI under the four-year EU-funded CSF Plus programme targeting smaller and emerging local and grassroots CSOs working on governance, democracy, peacebuilding, and human rights.",
    href: "https://et.linkedin.com/company/civilsocietyresourcecenter",
  },
];

export const contactDetails = {
  address: [
    "4th Floor, Afomi Building",
    "Behind Friendship Business Center",
    "Addis Ababa, Ethiopia",
  ],
  email: "contact@csrc-et.org",
  phone: "+251 11 5 574 754",
  website: "https://www.csrc-et.org/",
  linkedin: "https://et.linkedin.com/company/civilsocietyresourcecenter",
  facebook: "https://www.facebook.com/CSRCEthiopia",
};

export const publicSources = [
  {
    label: "CSRC public page",
    href: "https://et.linkedin.com/company/civilsocietyresourcecenter",
  },
  {
    label: "CSIF",
    href: "https://www.csinnovationfund.org/aboutcsif",
  },
  {
    label: "INTRAC",
    href: "https://www.intrac.org/projects/supporting-civil-society-in-ethiopia-through-csif/",
  },
  {
    label: "AFD",
    href: "https://www.afd.fr/en/actualites/communique-de-presse/afd-strengthen-ethiopian-civil-society-relation-human-rights",
  },
  {
    label: "Christian Aid",
    href: "https://www.christianaid.org.uk/get-involved/jobs/expressions-interest-civil-society-fund-plus-sub-grantee",
  },
  {
    label: "Archived CSRC page",
    href: "https://www.csrc-et.org/national-refugee-law-moot-court-held-at-hawassa-university-school-of-law/",
  },
  {
    label: "African Civic Leadership Programme",
    href: "https://www.africancivicleadership.org/",
  },
];
