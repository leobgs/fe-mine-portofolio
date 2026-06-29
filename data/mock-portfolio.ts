import type {
  NavItem,
  Profile,
  Skill,
  Experience,
  Project,
  ContactInfo,
} from "@/types/portfolio";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE: Profile = {
  name: "Leonardo Bagus Utomo",
  avatarUrl: "/avatar.png",
  avatarFallback: "L",
  heading:
    "Hello, I'm Leonardo Bagus Utomo. I help you craft digital experiences through software tailored to your needs.",
  bio: "Fullstack Developer focusing on front‑end development with experience in React.js, Spring Boot, and modern web technologies. Passionate about building user‑friendly, responsive, and visually appealing web interfaces using agile methodologies.",
  ctaLinks: [
    { label: "Get In Touch", href: "#contact", variant: "default" },
    { label: "Download CV", href: "#", variant: "outline" },
  ],
};

export const SKILLS: Skill[] = [
  { name: "React", iconKey: "react" },
  { name: "JavaScript", iconKey: "javascript" },
  { name: "TypeScript", iconKey: "typescript" },
  { name: "PostgreSQL", iconKey: "postgresql" },
  { name: "Git", iconKey: "git" },
  { name: "Spring Boot", iconKey: "springboot" },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "Front End Developer",
    company: "CV Technopartner Indonesia",
    companyInitial: "T",
    startDate: "2024-08",
    endDate: "2026-07",
    description:
      "Specialized in front-end development, UI slicing, and API integration. Committed to delivering user-friendly, responsive, and visually appealing web interfaces adopting agile methodologies in a structured and collaborative development process.",
  },
  {
    id: "exp-2",
    role: "Web Developer",
    company: "PT ALink App Development",
    companyInitial: "A",
    startDate: "2024-06",
    endDate: "2024-08",
    description:
      "Designed and built web application layouts, ensured high fidelity UI slicing, and integrated APIs to deliver responsive web pages matching client requirements.",
  },
  {
    id: "exp-3",
    role: "Full Stack Developer Trainee",
    company: "Enigma Camp",
    companyInitial: "E",
    startDate: "2023-11",
    endDate: "2024-02",
    description:
      "Underwent intensive bootcamp training covering Java, Spring Boot, REST APIs, database modeling with PostgreSQL, and frontend integration using React.js.",
  },
  {
    id: "exp-4",
    role: "Front-End & Back-End Developer",
    company: "Dicoding x Kampus Merdeka",
    companyInitial: "D",
    startDate: "2022-08",
    endDate: "2022-12",
    description:
      "Studied modern web development through the SIB program, building responsive client-side interfaces and REST API backend systems.",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Laundry Management Web",
    subtitle: "Dicoding SIB Capstone",
    imageUrl: "/html-project.png",
    projectUrl: "#",
  },
  {
    id: "proj-2",
    title: "REST API Backend Application",
    subtitle: "Enigma Camp Bootcamp",
    imageUrl: "/css-project.png",
    projectUrl: "#",
  },
];

export const CONTACT: ContactInfo = {
  bio: "Fullstack Developer specializing in front-end development with experience in React.js, Spring Boot, and modern web technologies. Passionate about building user-friendly, responsive, and visually appealing web interfaces.",
  email: "leonardobagus093@gmail.com",
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/leobgs",
      iconKey: "github",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/",
      iconKey: "linkedin",
    },
  ],
};
