import type socialIcons from "@/assets/socialIcons";

export type ThemeMode = "light" | "dark" | "auto";
export type ColorPreset = "default" | "custom";

export type Site = {
  website: string;
  author: string;
  profile: string;
  desc: string;
  title: string;
  ogImage?: string;
  themeMode: ThemeMode;
  colorPreset: ColorPreset;
  customColors?: {
    light: ColorSet;
    dark: ColorSet;
  };
  postPerIndex: number;
  postPerPage: number;
  scheduledPostMargin: number;
  showArchives?: boolean;
  timezone?: string;
};

export type ColorSet = {
  background: string;
  foreground: string;
  accent: string;
  muted: string;
  border: string;
};

export type Profile = {
  photo: string;
  name: string;
  tagline: string;
  company?: {
    name: string;
    title: string;
    logo: string;
    url: string;
  };
};

export type Hero = {
  greeting: string;
  paragraphs: string[];
};

export type SkillsConfig = {
  enabled: boolean;
  heading?: string;
  items: string[];
};

export type EducationEntry = {
  degree: string;
  year: string;
  school: string;
};

export type EducationConfig = {
  enabled: boolean;
  heading?: string;
  items: EducationEntry[];
};

export type CertificationsConfig = {
  enabled: boolean;
  heading?: string;
  items: string[];
};

export type ProjectEntry = {
  name: string;
  url?: string;
  description: string;
  status: string;
};

export type ProjectsConfig = {
  enabled: boolean;
  heading: string;
  items: ProjectEntry[];
};

export type NavItem = {
  label: string;
  path: string;
};

export type CommentsConfig = {
  enabled: boolean;
  provider: "giscus";
  giscus?: {
    repo: string;
    repoId: string;
    category: string;
    categoryId: string;
  };
};

export type SocialObjects = {
  name: keyof typeof socialIcons;
  href: string;
  active: boolean;
  linkTitle: string;
}[];
