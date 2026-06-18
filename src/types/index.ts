// TypeScript interfaces for all portfolio data structures

export interface Social {
  label: string;
  icon: string;
  url: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Cloud' | 'DevOps' | 'AI/ML';
  level: number; // 0–100
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  category: 'Full Stack' | 'AI/ML' | 'Cloud' | 'IoT' | 'DevOps' | 'Freelance';
  featured: boolean;
  githubUrl: string;
  liveUrl: string;
  gradient: string;
  icon: string;
  image?: string;
  badges: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  date: string;
  type: 'award' | 'certification' | 'recognition';
  highlight: boolean;
  color: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  type: 'internship' | 'freelance' | 'education' | 'leadership';
  description: string[];
  skills: string[];
  icon: string;
  color: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  icon: string;
  color: string;
  verified: boolean;
  credentialUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface TimelineEvent {
  year: string;
  event: string;
  icon: string;
}

export interface CommandItem {
  id: string;
  label: string;
  category: string;
  action: () => void;
  icon?: string;
}
