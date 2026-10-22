export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Game' | 'App' | 'Web' | 'Writing';
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: string;
  featured?: boolean;
  image: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  name: "Westly Ibiese",
  titles: ["Full-Stack Developer", "Game Developer", "Writer"],
  location: "Nigeria 🇳🇬",
  bio: "I'm Westly Ibiese, a Nigerian developer and creative thinker passionate about building mobile applications, developing games, and turning ideas into functional digital products.",
  github: "https://github.com/westlyibiese-design",
  email: "westly@example.com",
  linkedin: "https://linkedin.com/in/westlyibiese",
  twitter: "https://twitter.com/westlyibiese",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: "Layout",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    title: "Backend Development",
    icon: "Server",
    skills: ["Node.js", "REST APIs", "Express"]
  },
  {
    title: "Mobile Development",
    icon: "Smartphone",
    skills: ["Kotlin", "Jetpack Compose", "Flutter", "Dart", "Android SDK"]
  },
  {
    title: "Game Development",
    icon: "Gamepad2",
    skills: ["Kotlin", "libGDX 1.12.1", "Godot", "Game Physics", "3D Environments"]
  },
  {
    title: "Databases & Cloud",
    icon: "Database",
    skills: ["Firebase", "Supabase", "SQL", "Realtime Sync"]
  },
  {
    title: "Creative Projects",
    icon: "BookOpen",
    skills: ["Digital Publishing", "Storytelling", "World Building", "Technical Writing"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "lagos-drift",
    title: "Lagos Drift",
    tagline: "3D Open-World Driving Experience",
    description: "An immersive 3D open-world driving game inspired by Lagos, Nigeria. Features realistic Nigerian roads, authentic vehicles, interactive car doors, vehicle interiors, and vibrant urban environments.",
    category: "Game",
    technologies: ["Kotlin", "libGDX 1.12.1", "Android", "OpenGL"],
    githubUrl: "https://github.com/westlyibiese-design/Lagos-Drift",
    status: "In Active Development",
    featured: true,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "neribo-bms",
    title: "Neribo BMS",
    tagline: "Hotel & Business Management System",
    description: "A multi-business hotel management system designed to help hospitality businesses manage operations digitally, including guest check-in, room management, bookings, payment records, and staff scheduling.",
    category: "App",
    technologies: ["Kotlin", "Jetpack Compose", "Firebase", "Supabase"],
    githubUrl: "https://github.com/westlyibiese-design/Neribo-Business-Management-System",
    status: "Production Ready",
    featured: true,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "neribo-vault",
    title: "Neribo Vault",
    tagline: "Secure Mobile Application Experience",
    description: "An Android application project focused on building a modern mobile experience with secure data handling and smooth navigation.",
    category: "App",
    technologies: ["Kotlin", "Android", "Jetpack Compose"],
    githubUrl: "https://github.com/westlyibiese-design",
    status: "Configurable Placeholder",
    featured: false,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "westly-writes",
    title: "Westly Writes",
    tagline: "Digital Publishing & Storytelling Platform",
    description: "A writing-focused application and personal creative project built around storytelling, digital publishing, and creating platforms where engaging stories can be shared with readers.",
    category: "Writing",
    technologies: ["React", "Node.js", "Markdown", "Supabase"],
    githubUrl: "https://github.com/westlyibiese-design",
    liveUrl: "#",
    status: "Ongoing Creative Project",
    featured: true,
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80"
  }
];