// ============================================================
// PORTFOLIO DATA — Single source of truth for all content
// Edit this file to update any information across the site
// ============================================================

import type { Project, Skill, Achievement, Experience, Certification, Testimonial, NavLink, Social } from '@/types';

// ── Site Config ──────────────────────────────────────────────
export const siteConfig = {
  name: 'Utsav Raj',
  role: 'Freelance Full Stack Developer',
  roleShort: 'B.Tech IT · Alliance University',
  tagline: 'Freelance full-stack developer building real-world client projects with React.js, Node.js, and modern web technologies.',
  bio: "I'm a B.Tech Information Technology student at Alliance University specializing in Cloud Computing with a CGPA of 8.9. I'm a freelance full-stack developer experienced in building real-world client projects across healthcare, education, sports, and industrial domains using the MERN Stack, Flask, and modern web technologies. I focus on responsive design, SEO, accessibility, and delivering conversion-focused user experiences.",
  location: 'India',
  email: 'utsavrajdocx@gmail.com',
  resumeUrl: '/Resume.pdf',
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
  'Freelance Developer',
  'React Developer',
  'Cloud Engineer',
  'MERN Stack Developer',
  'Problem Solver',
];

// ── Skills ────────────────────────────────────────────────────
export const skills: Skill[] = [
  // Languages
  { name: 'Python',      category: 'Languages', level: 70, icon: '▸' },
  { name: 'JavaScript',   category: 'Languages', level: 88, icon: '▸' },
  { name: 'C++',          category: 'Languages', level: 55, icon: '▸' },
  { name: 'SQL',          category: 'Languages', level: 72, icon: '▸' },
  // Frontend
  { name: 'React.js',     category: 'Frontend',  level: 85, icon: '◈' },
  { name: 'HTML',         category: 'Frontend',  level: 95, icon: '◈' },
  { name: 'CSS',          category: 'Frontend',  level: 90, icon: '◈' },
  { name: 'Tailwind CSS', category: 'Frontend',  level: 88, icon: '◈' },
  // Backend
  { name: 'Node.js',     category: 'Backend',   level: 82, icon: '●' },
  { name: 'Express.js',  category: 'Backend',   level: 80, icon: '●' },
  { name: 'Flask',       category: 'Backend',   level: 65, icon: '●' },
  // Database
  { name: 'MongoDB',     category: 'Database',  level: 78, icon: '■' },
  { name: 'MySQL',       category: 'Database',  level: 70, icon: '■' },
  // Cloud
  { name: 'Microsoft Azure', category: 'Cloud', level: 80, icon: '▲' },
  { name: 'AWS',         category: 'Cloud',     level: 40, icon: '▲' },
  // Tools
  { name: 'Git',             category: 'Tools', level: 85, icon: '✦' },
  { name: 'GitHub',          category: 'Tools', level: 85, icon: '✦' },
  { name: 'Razorpay',        category: 'Tools', level: 70, icon: '✦' },
  { name: 'Google Maps API', category: 'Tools', level: 68, icon: '✦' },
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
    icon: '◈',
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
    icon: '◈',
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
    icon: '◈',
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
    icon: '◈',
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
    icon: '◈',
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
    icon: '◈',
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
    icon: '◈',
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
    icon: '◈',
    image: '/projects-img/lawfirm.png',
    badges: ['Freelance Project', 'Client Project'],
  },
];

// ── Achievements ───────────────────────────────────────────────
export const achievements: Achievement[] = [
  {
    id: 'leetcode',
    title: '120+ Problems Solved on LeetCode',
    description: 'Consistently solved data structures and algorithms problems on LeetCode, strengthening problem-solving skills and coding proficiency across multiple difficulty levels.',
    icon: '◆',
    date: '2025',
    type: 'recognition',
    highlight: true,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 'microsoft-ai',
    title: '3rd Prize — Microsoft AI for Good Hackathon',
    description: 'Competed among hundreds of teams and secured 3rd place by building an AI-powered solution addressing real-world civic challenges using Microsoft Azure AI services.',
    icon: '★',
    date: '2024',
    type: 'award',
    highlight: true,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 'sih-selection',
    title: 'SIH Internal Selection',
    description: 'Selected internally for Smart India Hackathon, demonstrating strong technical skills and the ability to build innovative solutions under competitive pressure.',
    icon: '◈',
    date: '2024',
    type: 'award',
    highlight: true,
    color: 'from-emerald-500 to-cyan-500',
  },
  {
    id: 'ibm-internship',
    title: 'IBM AI Sustainability Internship',
    description: 'Completed an internship with IBM through Edunet Foundation, working on AI-driven sustainability solutions and gaining hands-on experience with enterprise AI tools.',
    icon: '◆',
    date: '2025',
    type: 'recognition',
    highlight: true,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'freelance-delivered',
    title: 'Freelance Projects Delivered',
    description: 'Successfully delivered multiple client projects across healthcare, education, sports, and industrial domains, building production-ready websites and web applications.',
    icon: '◆',
    date: '2025',
    type: 'recognition',
    highlight: false,
    color: 'from-cyan-500 to-emerald-500',
  },
  {
    id: 'prakalp',
    title: 'PRAKALP Participation',
    description: 'Participated in PRAKALP, showcasing project-building skills and collaborative development in a competitive academic environment.',
    icon: '◆',
    date: '2024',
    type: 'award',
    highlight: false,
    color: 'from-violet-500 to-fuchsia-500',
  },
];

// ── Experience ─────────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    id: 'freelance',
    role: 'Freelance Full Stack Developer',
    company: 'Self-Employed · Multiple Clients',
    duration: '2025 — Present',
    type: 'freelance',
    description: [
      'Delivered client websites and web applications across healthcare, education, sports, and industrial domains.',
      'Built responsive, accessible user interfaces using React.js, Tailwind CSS, and modern front-end practices.',
      'Created secure backend APIs using Node.js, Express.js, and Flask with MongoDB and MySQL database integration.',
      'Integrated Razorpay payments, WhatsApp workflows, Google Maps API, and admin dashboards into client projects.',
      'Focused on responsive design, SEO, accessibility, and performance optimization for conversion-focused user experiences.',
    ],
    skills: ['React.js', 'Node.js', 'Express.js', 'Flask', 'MongoDB', 'Tailwind CSS', 'Razorpay', 'Google Maps API'],
    icon: '◆',
    color: 'from-cyan-500 to-emerald-600',
  },
  {
    id: 'ibm-edunet',
    role: 'AI Sustainability Intern',
    company: 'IBM – Edunet Foundation',
    duration: '2025',
    type: 'internship',
    description: [
      'Worked on AI-driven sustainability solutions as part of the IBM Edunet Foundation program.',
      'Gained hands-on experience with enterprise AI tools and sustainability-focused applications.',
      'Collaborated with cross-functional teams to develop and present AI-powered prototypes.',
    ],
    skills: ['AI', 'Python', 'Sustainability', 'Enterprise Tools'],
    icon: '◆',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'edunet-frontend',
    role: 'Frontend Web Development Intern',
    company: 'Edunet Foundation',
    duration: '2025',
    type: 'internship',
    description: [
      'Developed responsive web interfaces and interactive components during the Edunet Foundation internship.',
      'Applied modern HTML, CSS, and JavaScript best practices to build accessible and user-friendly web pages.',
      'Collaborated with mentors to improve code quality, performance, and design consistency.',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    icon: '◆',
    color: 'from-violet-500 to-fuchsia-600',
  },
];

// ── Learning Timeline ──────────────────────────────────────────
export const timeline = [
  { year: '2023', event: 'Started B.Tech IT at Alliance University · Began learning web fundamentals', icon: '◇' },
  { year: '2025', event: 'Mastered MERN Stack · Built first full-stack applications', icon: '◈' },
  { year: '2025', event: 'Earned Azure & OCI Certifications · Dived into Cloud Computing', icon: '▲' },
  { year: '2026', event: 'Won 3rd Prize at Microsoft AI for Good Hackathon · SIH Internal Selection', icon: '★' },
  { year: '2025', event: 'IBM Internships · NPTEL Certifications · PRAKALP Participation', icon: '◆' },
  { year: '2026', event: 'Freelance Full Stack Developer · Delivering client projects', icon: '◆' },
];

// ── Certifications ─────────────────────────────────────────────
export const certifications: Certification[] = [
  {
    id: 'azure',
    name: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    date: '2024',
    icon: '▲',
    color: 'from-blue-500 to-cyan-500',
    verified: true,
  },
  {
    id: 'oci',
    name: 'OCI Foundations Associate',
    issuer: 'Oracle Cloud',
    date: '2024',
    icon: '◆',
    color: 'from-orange-500 to-red-500',
    verified: true,
  },
  {
    id: 'nptel-ml',
    name: 'Introduction to Machine Learning',
    issuer: 'NPTEL (Top 5%)',
    date: '2024',
    icon: '◆',
    color: 'from-violet-500 to-purple-500',
    verified: true,
  },
  {
    id: 'nptel-dbms',
    name: 'Database Management Systems',
    issuer: 'NPTEL',
    date: '2024',
    icon: '■',
    color: 'from-amber-500 to-orange-500',
    verified: true,
  },
  {
    id: 'ibm-ai',
    name: 'IBM AI & Sustainability',
    issuer: 'IBM',
    date: '2025',
    icon: '◆',
    color: 'from-blue-500 to-indigo-500',
    verified: true,
  },
  {
    id: 'ibm-web',
    name: 'IBM Web Development Fundamentals',
    issuer: 'IBM',
    date: '2025',
    icon: '◈',
    color: 'from-cyan-500 to-emerald-500',
    verified: true,
  },
  {
    id: 'infosys-cloud',
    name: 'Cloud Computing',
    issuer: 'Infosys',
    date: '2024',
    icon: '▲',
    color: 'from-sky-500 to-blue-500',
    verified: true,
  },
  {
    id: 'gfg-python',
    name: 'Python Programming',
    issuer: 'GeeksforGeeks',
    date: '2024',
    icon: '▸',
    color: 'from-green-500 to-emerald-500',
    verified: true,
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
  { name: 'React', icon: '◈', category: 'Frontend', x: 50, y: 15 },
  { name: 'Node.js', icon: '●', category: 'Backend', x: 80, y: 40 },
  { name: 'MongoDB', icon: '■', category: 'Database', x: 70, y: 72 },
  { name: 'Azure', icon: '▲', category: 'Cloud', x: 20, y: 65 },
  { name: 'Python', icon: '▸', category: 'Languages', x: 10, y: 35 },
  { name: 'Git', icon: '✦', category: 'Tools', x: 35, y: 85 },
  { name: 'JavaScript', icon: '▸', category: 'Languages', x: 65, y: 25 },
  { name: 'Express.js', icon: '●', category: 'Backend', x: 25, y: 45 },
];
