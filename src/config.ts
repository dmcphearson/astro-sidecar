import type {
  Site,
  Profile,
  Hero,
  SkillsConfig,
  EducationConfig,
  CertificationsConfig,
  ProjectsConfig,
  NavItem,
  CommentsConfig,
  SocialObjects,
} from "./types";

export const SITE: Site = {
  website: "https://example.com/",
  author: "Jane Doe",
  profile: "https://linkedin.com/in/janedoe",
  desc: "Developer, designer, and lifelong learner.",
  title: "Jane Doe",
  ogImage: "og-default.jpg",
  themeMode: "auto",
  colorPreset: "emerald",
  postPerIndex: 5,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: true,
  timezone: "America/New_York",
};

export const PROFILE: Profile = {
  photo: "/assets/profile.webp",
  name: "Jane Doe",
  tagline: "Full-Stack Developer | Open Source Contributor | Coffee Enthusiast",
  company: {
    name: "Acme Corp",
    title: "Senior Engineer",
    logo: "/assets/company-logo.webp",
    url: "https://example.com",
  },
};

export const HERO: Hero = {
  greeting: "Hey there!",
  paragraphs: [
    "I'm a developer who loves building things that make people's lives easier. This site is where I share what I'm learning and working on.",
    "When I'm not writing code, you'll find me hiking, reading, or experimenting with whatever caught my interest this week.",
  ],
};

export const SKILLS: SkillsConfig = {
  enabled: true,
  heading: "Skills & Expertise",
  items: [
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "PostgreSQL",
    "GraphQL",
    "Tailwind CSS",
    "Git",
    "CI/CD",
    "REST APIs",
  ],
};

export const EDUCATION: EducationConfig = {
  enabled: true,
  heading: "Education",
  items: [
    {
      degree: "M.S. Computer Science",
      year: "2020",
      school: "State University",
    },
    {
      degree: "B.S. Software Engineering",
      year: "2018",
      school: "State University",
    },
  ],
};

export const CERTIFICATIONS: CertificationsConfig = {
  enabled: true,
  heading: "Certifications",
  items: [
    "AWS Solutions Architect",
    "Google Cloud Professional",
    "Certified Kubernetes Administrator",
  ],
};

export const PROJECTS: ProjectsConfig = {
  enabled: true,
  heading: "Projects",
  items: [
    {
      name: "My Cool Project",
      url: "https://github.com/janedoe/cool-project",
      description: "A CLI tool that does something useful.",
      status: "Built by me",
    },
    {
      name: "Open Source Contrib",
      url: "https://github.com/someone/oss-project",
      description: "Contributing to an awesome open source project.",
      status: "Contributor",
    },
    {
      name: "Secret Project",
      description: "Something exciting in the works.",
      status: "Work in Progress",
    },
  ],
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Blog", path: "/posts" },
  { label: "Topics", path: "/tags" },
];

export const COMMENTS: CommentsConfig = {
  enabled: false,
  provider: "giscus",
  giscus: {
    repo: "",
    repoId: "",
    category: "",
    categoryId: "",
  },
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: false,
  width: 400,
  height: 88,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/janedoe",
    linkTitle: `${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/janedoe",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:jane@example.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
