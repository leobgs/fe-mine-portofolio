export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
  variant: "default" | "outline";
}

export interface Profile {
  name: string;
  avatarUrl: string;
  avatarFallback: string;
  heading: string;
  bio: string;
  ctaLinks: CtaLink[];
}

export interface Skill {
  name: string;
  iconKey: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyInitial: string;
  startDate: string; 
  endDate: string | null; 
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  projectUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconKey: string;
}

export interface ContactInfo {
  bio: string;
  email: string;
  socials: SocialLink[];
}
