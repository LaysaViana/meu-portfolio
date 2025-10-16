export type About = {
  title: string;
  description: string[];
  skillsCategories: {
    title: string;
    skills: string[];
  }[];
};

export type Experience = {
  enterprise: string;
  period: string;
  position: string;
  logo: string;
  description: string[];
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  website: string;
  github: string;
};

export type Contact = {
  title: string;
  message: string;
  phone: string;
  address: string;
  email: string;
  linkedin?: string;
  github?: string;
};

export type PortfolioData = {
  about: About;
  experiences: Experience[];
  projects: Project[];
  contact: Contact;
};

export type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
