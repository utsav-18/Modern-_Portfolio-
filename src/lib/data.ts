// ============================================================
// PORTFOLIO DATA — Single source of truth for all content
// Edit this file to update any information across the site
// ============================================================

import type { Project, Skill, Achievement, Experience, Certification, Testimonial, NavLink, Social } from '@/types';

// ── Site Config ──────────────────────────────────────────────
export const siteConfig = {
  name: 'Utsav Raj',
  role: 'Full Stack Developer & Cloud Engineer',
  roleShort: 'B.Tech IT Student · 3rd Year',
  tagline: 'Building scalable web applications, cloud solutions, and AI-powered products that solve real-world problems.',
  bio: "I'm a 3rd-year B.Tech IT student specializing in Cloud Computing with a strong interest in Full Stack Development, Cloud Technologies, Generative AI, and DevOps. I enjoy building practical solutions, participating in hackathons, and continuously learning modern technologies to create impactful products.",
  location: 'India',
  email: 'utsavrajdocx@gmail.com',
  resumeUrl: 'https://1drv.ms/b/c/0ad5894fe0a9c7e2/IQCaYPaHYl6sQ544wNsP3DqsAWXivzIEiykeJW8Jn0j9n6Y?e=g7S3rj',
  available: true,
};

// ── Social Links ─────────────────────────────────────────────
export const socials: Social[] = [
  { label: 'GitHub',   icon: 'github',   url: 'https://github.com/utsav-18' },
  { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/utsav-raj-324b2b2a2/' },
  { label: 'Email',    icon: 'mail',     url: 'mailto:utsavrajdocx@gmail.com' },
];

// ── Navigation ───────────────────────────────────────────────
export const navLinks: NavLink[] = [
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Contact',      href: '#contact' },
];

// ── Rotating Hero Titles ──────────────────────────────────────
export const heroTitles = [
  'Full Stack Developer',
  'Cloud Engineer',
  'AI Enthusiast',
  'React Developer',
  'Problem Solver',
  'Hackathon Builder',
];

// ── Skills ────────────────────────────────────────────────────
export const skills: Skill[] = [
  // Frontend
  { name: 'React',        category: 'Frontend', level: 85, icon: '⚛️' },
  { name: 'JavaScript',   category: 'Frontend', level: 88, icon: '🟨' },
  { name: 'TypeScript',   category: 'Frontend', level: 70, icon: '🔷' },
  { name: 'HTML',         category: 'Frontend', level: 95, icon: '🌐' },
  { name: 'CSS',          category: 'Frontend', level: 90, icon: '🎨' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 88, icon: '💨' },
  // Backend
  { name: 'Node.js',      category: 'Backend',  level: 82, icon: '🟢' },
  { name: 'Express.js',   category: 'Backend',  level: 80, icon: '🚂' },
  { name: 'MongoDB',      category: 'Backend',  level: 78, icon: '🍃' },
  { name: 'REST APIs',    category: 'Backend',  level: 83, icon: '🔌' },
  // Cloud & DevOps
  { name: 'Azure',        category: 'Cloud',    level: 80, icon: '☁️' },
  { name: 'OCI',          category: 'Cloud',    level: 75, icon: '🔶' },
  { name: 'Docker',       category: 'DevOps',   level: 55, icon: '🐳' },
  { name: 'Git',          category: 'DevOps',   level: 85, icon: '🌿' },
  { name: 'GitHub Actions', category: 'DevOps', level: 65, icon: '⚙️' },
  // AI/ML
  { name: 'Generative AI', category: 'AI/ML',  level: 72, icon: '🤖' },
  { name: 'RAG',           category: 'AI/ML',  level: 68, icon: '🧠' },
  { name: 'LLMs',          category: 'AI/ML',  level: 65, icon: '💬' },
  { name: 'Computer Vision', category: 'AI/ML', level: 60, icon: '👁️' },
  { name: 'Python',        category: 'AI/ML',  level: 70, icon: '🐍' },
];

// ── Projects ──────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 'parthrahi',
    title: 'Parthrahi',
    subtitle: 'Smart Cab Booking Platform',
    description: 'A full-stack cab booking platform featuring real-time route visualization, dynamic fare calculation, live location tracking, and an intuitive user experience powered by Google Maps integration.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Google Maps API', 'Socket.io'],
    category: 'Full Stack',
    featured: true,
    githubUrl: 'https://github.com/utsav-18',
    liveUrl: '',
    gradient: 'from-cyan-500 via-emerald-500 to-teal-500',
    icon: '🚕',
  },
  {
    id: 'urban-guardian',
    title: 'Urban Guardian AI',
    subtitle: 'Smart City Civic Assistant',
    description: 'An AI-powered civic assistant that helps citizens access government services, safety information, emergency resources, and urban support through Retrieval-Augmented Generation (RAG) and intelligent search capabilities.',
    techStack: ['Generative AI', 'RAG', 'Vector Database', 'LLMs', 'Python', 'React'],
    category: 'AI/ML',
    featured: true,
    githubUrl: 'https://github.com/utsav-18',
    liveUrl: '',
    gradient: 'from-cyan-500 via-blue-500 to-cyan-600',
    icon: '🏙️',
  },
  {
    id: 'collision-detection',
    title: 'Hybrid Edge-Cloud Collision Detection',
    subtitle: 'Vehicle Safety Framework',
    description: 'A hybrid edge-cloud vehicle safety framework for predictive collision detection. Designed cloud infrastructure and integrated machine learning models for real-time traffic analysis and accident prevention.',
    techStack: ['Python', 'Machine Learning', 'SUMO', 'Cloud Computing', 'Azure'],
    category: 'Cloud',
    featured: true,
    githubUrl: 'https://github.com/utsav-18',
    liveUrl: '',
    gradient: 'from-orange-500 via-red-500 to-rose-600',
    icon: '🚗',
  },
  {
    id: 'farmgrade',
    title: 'FarmGrade AI',
    subtitle: 'Agricultural Quality Grading',
    description: 'An AI-powered agricultural grading platform that uses computer vision models to classify produce quality grades while providing a full-stack web interface for farmers and stakeholders.',
    techStack: ['React', 'Node.js', 'Machine Learning', 'Computer Vision', 'Python'],
    category: 'AI/ML',
    featured: false,
    githubUrl: 'https://github.com/utsav-18',
    liveUrl: '',
    gradient: 'from-green-500 via-emerald-500 to-teal-600',
    icon: '🌾',
  },
  {
    id: 'air-quality',
    title: 'Air Quality Monitor',
    subtitle: 'IoT Cloud Dashboard',
    description: 'An end-to-end IoT solution that streams environmental sensor data from ESP8266 devices to a cloud-based dashboard for real-time air quality monitoring and analytics.',
    techStack: ['IoT', 'ESP8266', 'Cloud Dashboard', 'Python', 'MQTT'],
    category: 'Cloud',
    featured: false,
    githubUrl: 'https://github.com/utsav-18',
    liveUrl: '',
    gradient: 'from-sky-400 via-blue-500 to-cyan-500',
    icon: '🌤️',
  },
  {
    id: 'contact-management',
    title: 'Contact Management System',
    subtitle: 'Full Stack CRUD App',
    description: 'A full-stack contact management application with secure backend APIs, database integration, validation mechanisms, and responsive user interfaces.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'React', 'REST API'],
    category: 'Full Stack',
    featured: false,
    githubUrl: 'https://github.com/utsav-18',
    liveUrl: '',
    gradient: 'from-sky-500 via-emerald-500 to-teal-600',
    icon: '📋',
  },
];

// ── Achievements ───────────────────────────────────────────────
export const achievements: Achievement[] = [
  {
    id: 'microsoft-ai',
    title: '3rd Prize — Microsoft AI for Good Hackathon',
    description: 'Competed among hundreds of teams and secured 3rd place by building an AI-powered solution addressing real-world civic challenges using Microsoft Azure AI services.',
    icon: '🏆',
    date: '2024',
    type: 'award',
    highlight: true,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 'hackarena',
    title: 'Shortlisted — HackArena 2.0 by Ignite Room',
    description: 'Selected among top participants for HackArena 2.0, a competitive national-level hackathon organized by Ignite Room, showcasing innovative problem-solving skills.',
    icon: '🎯',
    date: '2024',
    type: 'award',
    highlight: true,
    color: 'from-emerald-500 to-cyan-500',
  },
  {
    id: 'azure-cert',
    title: 'Microsoft Azure Certified',
    description: 'Earned official Microsoft Azure certification, demonstrating proficiency in cloud architecture, services, deployment strategies, and Azure ecosystem.',
    icon: '☁️',
    date: '2024',
    type: 'certification',
    highlight: true,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'oci-cert',
    title: 'OCI Foundations Associate Certified',
    description: 'Certified as Oracle Cloud Infrastructure Foundations Associate, validating expertise in OCI services, cloud concepts, security, and infrastructure architecture.',
    icon: '🔶',
    date: '2024',
    type: 'certification',
    highlight: true,
    color: 'from-orange-500 to-red-500',
  },
];

// ── Experience ─────────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    id: 'freelance',
    role: 'Freelance Full Stack Developer',
    company: 'Self-Employed · Multiple Clients',
    duration: '2023 — Present',
    type: 'freelance',
    description: [
      'Design and develop full-stack web applications tailored to client requirements, from concept to deployment.',
      'Build responsive, accessible user interfaces using React, Tailwind CSS, and modern front-end practices.',
      'Create secure backend APIs using Node.js and Express.js with MongoDB database integration.',
      'Deploy and manage applications on cloud platforms including Azure and OCI.',
      'Collaborate with clients to gather requirements, iterate on designs, and deliver customized digital solutions.',
    ],
    skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Azure', 'Tailwind CSS'],
    icon: '💼',
    color: 'from-cyan-500 to-emerald-600',
  },
  {
    id: 'learning-journey',
    role: 'Self-Directed Learning & Open Source',
    company: 'Personal Development',
    duration: '2022 — Present',
    type: 'education',
    description: [
      'Continuously upskilling in Full Stack Development, Cloud Computing, Generative AI, and DevOps technologies.',
      'Built multiple production-grade projects across domains including AI, IoT, and Smart City solutions.',
      'Earned Microsoft Azure and Oracle Cloud Infrastructure (OCI) certifications.',
      'Participated in national hackathons including Microsoft AI for Good and HackArena 2.0.',
      'Contributing to personal open-source projects and building real-world solutions independently.',
    ],
    skills: ['MERN Stack', 'Generative AI', 'Docker', 'GitHub Actions', 'RAG'],
    icon: '🚀',
    color: 'from-cyan-500 to-blue-600',
  },
];

// ── Learning Timeline ──────────────────────────────────────────
export const timeline = [
  { year: '2022', event: 'Started B.Tech IT · Began learning web fundamentals', icon: '🎓' },
  { year: '2023', event: 'Mastered MERN Stack · Built first full-stack applications', icon: '⚛️' },
  { year: '2023', event: 'Earned Azure & OCI Certifications · Dived into Cloud Computing', icon: '☁️' },
  { year: '2024', event: 'Won 3rd Prize at Microsoft AI for Good Hackathon', icon: '🏆' },
  { year: '2024', event: 'Explored Generative AI, RAG, and LLM integrations', icon: '🤖' },
  { year: '2025', event: 'Freelance projects · Deepening DevOps & Docker skills', icon: '🚀' },
];

// ── Certifications ─────────────────────────────────────────────
export const certifications: Certification[] = [
  {
    id: 'azure',
    name: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    date: '2024',
    icon: '☁️',
    color: 'from-blue-500 to-cyan-500',
    verified: true,
  },
  {
    id: 'oci',
    name: 'OCI Foundations Associate',
    issuer: 'Oracle Cloud',
    date: '2024',
    icon: '🔶',
    color: 'from-orange-500 to-red-500',
    verified: true,
  },
  {
    id: 'react-cert',
    name: 'React Development',
    issuer: 'Coursera / Meta',
    date: '2023',
    icon: '⚛️',
    color: 'from-cyan-500 to-emerald-500',
    verified: true,
  },
  {
    id: 'nodejs-cert',
    name: 'Node.js & Express.js',
    issuer: 'Udemy',
    date: '2023',
    icon: '🟢',
    color: 'from-green-500 to-emerald-500',
    verified: false,
  },
];

// ── Testimonials ───────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Arjun Mehta',
    role: 'Product Manager',
    company: 'TechStartup India',
    avatar: '',
    quote: "Utsav delivered a full-stack platform that exceeded our expectations. His attention to detail in both UI and backend architecture was impressive. He's clearly ahead of his peers.",
    rating: 5,
  },
  {
    id: 't2',
    name: 'Priya Sharma',
    role: 'Founder & CEO',
    company: 'DigitalCraft Studio',
    avatar: '',
    quote: "Working with Utsav was a fantastic experience. He understood requirements quickly, proposed scalable solutions, and delivered a polished product on schedule. Highly recommended.",
    rating: 5,
  },
  {
    id: 't3',
    name: 'Rohan Desai',
    role: 'Senior Developer',
    company: 'CloudNine Solutions',
    avatar: '',
    quote: "Utsav's cloud knowledge is remarkable for someone his age. He set up our Azure infrastructure with best practices and automated our deployment pipeline. Very professional.",
    rating: 5,
  },
  {
    id: 't4',
    name: 'Dr. Kavitha Nair',
    role: 'Faculty Mentor',
    company: 'B.Tech IT Dept.',
    avatar: '',
    quote: "Utsav consistently demonstrates initiative and technical depth. His projects — especially the AI civic assistant — show genuine innovation and real-world problem-solving ability.",
    rating: 5,
  },
];

// ── Tech Ecosystem Nodes ───────────────────────────────────────
export const techNodes = [
  { name: 'React', icon: '⚛️', category: 'Frontend', x: 50, y: 15 },
  { name: 'Node.js', icon: '🟢', category: 'Backend', x: 80, y: 40 },
  { name: 'MongoDB', icon: '🍃', category: 'Database', x: 70, y: 72 },
  { name: 'Azure', icon: '☁️', category: 'Cloud', x: 20, y: 65 },
  { name: 'Python', icon: '🐍', category: 'AI/ML', x: 10, y: 35 },
  { name: 'Docker', icon: '🐳', category: 'DevOps', x: 35, y: 85 },
  { name: 'TypeScript', icon: '🔷', category: 'Frontend', x: 65, y: 25 },
  { name: 'LLMs', icon: '🤖', category: 'AI/ML', x: 25, y: 45 },
];
