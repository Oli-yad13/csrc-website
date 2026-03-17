export type LinkedInPost = {
  id: string;
  title: string;
  excerpt: string;
  dateLabel: string;
  likes: number;
  comments: number;
  shares: number;
  image: string;
  href: string;
  kind: string;
};

export const featuredLinkedInPost: LinkedInPost = {
  id: "csf-plus-open-call",
  title: "Research and analysis opportunity",
  excerpt:
    "CSRC invited qualified applicants to submit a research proposal, CV, two written samples or publications, and a one-page motivation statement by December 15, 2025.",
  dateLabel: "December 8, 2025",
  likes: 31,
  comments: 2,
  shares: 5,
  image: "/linkedin/post-1.jpg",
  href: "https://www.linkedin.com/posts/civilsocietyresourcecenter_interested-and-qualified-applicants-can-send-activity-7403777532560297985-Agp1",
  kind: "Open call",
};

export const latestLinkedInPosts: LinkedInPost[] = [
  {
    id: "research-proposal-call",
    title: "Research proposal call",
    excerpt:
      "Applicants were asked to submit a research proposal, CV, two written samples or publications, and a one-page motivation statement to `csrchr@outlook.com` by December 15, 2025.",
    dateLabel: "December 8, 2025",
    likes: 31,
    comments: 2,
    shares: 5,
    image: "/linkedin/post-1.jpg",
    href: "https://www.linkedin.com/posts/civilsocietyresourcecenter_interested-and-qualified-applicants-can-send-activity-7403777532560297985-Agp1",
    kind: "Opportunity",
  },
  {
    id: "consultant-tor-call",
    title: "Consultant ToR submission notice",
    excerpt:
      "CSRC asked qualified consultants to submit a cover letter, CV, and technical and financial proposal by November 11, 2025 to `contact@csrc-et.org` and `kiya.fule@csrc-et.org`.",
    dateLabel: "November 4, 2025",
    likes: 28,
    comments: 3,
    shares: 0,
    image: "/linkedin/post-2.jpg",
    href: "https://www.linkedin.com/posts/civilsocietyresourcecenter_interested-and-qualified-consultants-should-activity-7391428317163388928-m060",
    kind: "Opportunity",
  },
  {
    id: "disability-fellowship-call",
    title: "Fellowship for recent graduates with disabilities",
    excerpt:
      "CSRC invited recent graduates in law or related fields to apply for a six-month Emerging Civil Society Leaders Fellowship with placement in an organisation working on disability rights.",
    dateLabel: "October 30, 2025",
    likes: 23,
    comments: 3,
    shares: 2,
    image: "/linkedin/post-3.jpg",
    href: "https://www.linkedin.com/posts/civilsocietyresourcecenter_the-civil-society-resource-center-csrc-activity-7389570304378945536-cIFT",
    kind: "Fellowship",
  },
];
