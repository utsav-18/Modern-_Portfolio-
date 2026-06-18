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
    id: 'savitri-dental',
    title: 'Savitri Dental Hospital & Glow Savitri',
    subtitle: 'Healthcare & Aesthetics Clinic',
    description: 'Designed and developed a premium healthcare website for a dental and facial aesthetics clinic with appointment booking, WhatsApp integration, Google Reviews integration, SEO optimization, accessibility improvements, and mobile-first responsive design.',
    techStack: ['React.js', 'Vite', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    category: 'Freelance',
    featured: true,
    githubUrl: 'https://github.com/Muskan-3/Healthcare-website',
    liveUrl: 'https://www.drreemashukla.com',
    gradient: 'from-cyan-500 via-teal-500 to-emerald-500',
    icon: '🏥',
    image: '/projects-img/health-care.png',
    badges: ['Freelance Project', 'Healthcare Website', 'Client Project'],
  },
  {
    id: 'parth-rahi',
    title: 'Parth Rahi',
    subtitle: 'Location-Based Platform',
    description: 'Built a full-stack platform using React, Node.js, Express, and Google Maps API. Developed location-based features, scalable backend services, responsive user interfaces, and real-time interactions.',
    techStack: ['React', 'Node.js', 'Express', 'Google Maps API'],
    category: 'Freelance',
    featured: true,
    githubUrl: 'https://github.com/utsav-18/ParthRahi',
    liveUrl: 'https://parthrahi.com/',
    gradient: 'from-cyan-500 via-emerald-500 to-teal-500',
    icon: '🚕',
    image: '/projects-img/parthrahi.png',
    badges: ['Freelance Project', 'Client Project'],
  },
  {
    id: 'aayrah-tech',
    title: 'Aayrah Tech Workshop',
    subtitle: 'Workshop Registration Platform',
    description: 'Developed a workshop registration platform with Razorpay payment integration, secure enrollment workflows, responsive UI, and optimized user experience.',
    techStack: ['Node.js', 'HTML', 'CSS', 'JavaScript', 'Razorpay'],
    category: 'Freelance',
    featured: true,
    githubUrl: 'https://github.com/utsav-18/NodeAndRazorpay',
    liveUrl: 'https://workshop.aayrahtech.com/',
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    icon: '🎓',
    image: '/projects-img/aayrah.png',
    badges: ['Freelance Project', 'Client Project'],
  },
  {
    id: 'kvs-kabaddi',
    title: 'KVS Kabaddi Academy',
    subtitle: 'Sports Academy Management',
    description: 'Built a sports academy management platform using Python, Flask, HTML, CSS, and JavaScript. Implemented student registration, admin dashboard, Razorpay payment integration, dark mode, and academy management features.',
    techStack: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'Razorpay'],
    category: 'Freelance',
    featured: true,
    githubUrl: 'https://github.com/utsav-18/Kabaddi-Academy',
    liveUrl: '',
    gradient: 'from-orange-500 via-red-500 to-rose-500',
    icon: '🤼',
    image: '/projects-img/kvs.png',
    badges: ['Freelance Project', 'Client Project'],
  },
  {
    id: 'optimize-arpit',
    title: 'Optimize with Arpit',
    subtitle: 'Agency Portfolio Website',
    description: 'Designed and developed a professional portfolio website for a software development agency with modern UI/UX, responsive layouts, and optimized performance.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    category: 'Freelance',
    featured: false,
    githubUrl: 'https://github.com/utsav-18/The_Portfolio',
    liveUrl: 'https://optimizewitharpit.com/',
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    icon: '💻',
    image: '/projects-img/arpit.png',
    badges: ['Freelance Project', 'Client Project'],
  },
  {
    id: 'industrial-lubrication',
    title: 'Industrial Lubrication System',
    subtitle: 'Industrial Solutions Website',
    description: 'Created a responsive industrial solutions website focused on lubrication products and services with a clean interface and business-focused presentation.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    category: 'Freelance',
    featured: false,
    githubUrl: 'https://github.com/Muskan-3/Industrial_lubrication_system',
    liveUrl: 'https://nikslubrication.in/',
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    icon: '⚙️',
    image: '/projects-img/lub.png',
    badges: ['Client Project'],
  },
  {
    id: 'mini-airbnb',
    title: 'Mini Airbnb',
    subtitle: 'Accommodation Listing Platform',
    description: 'Built a full-stack accommodation listing platform inspired by Airbnb using Node.js, Express, MongoDB, and EJS. Implemented CRUD operations, RESTful APIs, authentication, dynamic routing, and database integration.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'EJS'],
    category: 'Full Stack',
    featured: false,
    githubUrl: 'https://github.com/utsav-18/Mini-Airbnb',
    liveUrl: 'https://mini-airbnb-izxb.onrender.com',
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
    icon: '🏠',
    image: '/projects-img/airbnb.png',
    badges: ['Full Stack Project'],
  },
  {
    id: 'law-firm',
    title: 'Law Firm',
    subtitle: 'Professional Legal Website',
    description: 'Developed a professional law firm website featuring responsive design, service showcase, modern UI, and integrated contact functionality.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    category: 'Freelance',
    featured: false,
    githubUrl: 'https://github.com/utsav-18/law-firm',
    liveUrl: 'https://689d714ec7f21fab5bc44ccf--lawlfirm.netlify.app/',
    gradient: 'from-slate-500 via-gray-500 to-zinc-500',
    icon: '⚖️',
    image: '/projects-img/lawfirm.png',
    badges: ['Freelance Project', 'Client Project'],
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
