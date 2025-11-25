export const profile = {
  name: "Paranjay Patel",
  title: "Full Stack Developer | Flutter | UI/UX | Cloud & DevOps",
  bio: "CS Student passionate about building elegant solutions with modern technologies. Interested in Cloud technologies, DevOps, and creating beautiful user experiences.",
  email: "paranjay@example.com",
  github: "https://github.com/paranjay-patel",
  linkedin: "https://www.linkedin.com/in/paranjay-patel/",
  avatar: "https://avatars.githubusercontent.com/u/96053895?s=400&v=4"
};

export const skills = [
  // Programming Languages
  { category: "Languages", items: ["Python", "Dart", "JavaScript", "TypeScript", "HTML", "CSS"] },
  // Frontend
  { category: "Frontend", items: ["Flutter", "React", "Astro", "Tailwind CSS", "UI/UX Design"] },
  // Backend & Cloud
  { category: "Backend & Cloud", items: ["Node.js", "Express", "AWS", "Firebase", "DevOps"] },
  // DevOps & Tools
  { category: "DevOps & Tools", items: ["Docker", "Traefik", "Caddy", "Linux", "Git"] },
];

export const projects = [
  {
    id: 1,
    title: "Flash Group Chat App",
    description: "A real-time group chat application with user authentication and Firebase Firestore integration for seamless data management.",
    tech: ["Dart", "Flutter", "Firebase", "Firestore"],
    github: "https://github.com/paranjay-patel/flash-group-chat-app",
    featured: true
  },
  {
    id: 2,
    title: "Clima Weather App",
    description: "Weather application that fetches real-time data using APIs and provides location-based weather reports to users.",
    tech: ["Dart", "Flutter", "REST APIs", "Geolocation"],
    github: "https://github.com/paranjay-patel/Clima-Weather-App",
    featured: true
  },
  {
    id: 3,
    title: "TinDog Website",
    description: "Fully responsive website built with modern HTML and CSS, demonstrating responsive design principles and best practices.",
    tech: ["HTML", "CSS", "Responsive Design"],
    github: "https://github.com/paranjay-patel/tindog-website",
    featured: true
  },
  {
    id: 4,
    title: "Caddy Reverse Proxy",
    description: "DevOps project demonstrating Caddy as a reverse proxy to forward incoming requests to specific servers.",
    tech: ["Caddy", "DevOps", "Networking"],
    github: "https://github.com/paranjay-patel/caddy_reverse_proxy",
    featured: false
  },
  {
    id: 5,
    title: "Traefik HTTPS Configuration",
    description: "Advanced reverse proxy setup using Traefik with HTTPS configuration for secure request routing.",
    tech: ["Traefik", "HTTPS", "DevOps"],
    github: "https://github.com/paranjay-patel/traefik-https",
    featured: false
  },
  {
    id: 6,
    title: "100 Days of Python",
    description: "Comprehensive Python bootcamp by Angela Yu covering games, automation tools, web development, and more.",
    tech: ["Python", "Automation", "Web Development"],
    github: "https://github.com/paranjay-patel/Python",
    featured: false
  }
];

export const experience = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Personal Projects",
    period: "2023 - Present",
    description: "Building full-stack applications with modern tech stack focusing on Flutter, React, and cloud technologies."
  },
  {
    id: 2,
    role: "DevOps Enthusiast",
    company: "Self-Learning",
    period: "2023 - Present",
    description: "Exploring cloud technologies including AWS, Docker, and reverse proxies like Traefik and Caddy."
  }
];

export const achievements = [
  "Pull Shark x2 - GitHub Achievement",
  "100 Days of Python Bootcamp",
  "17+ GitHub Repositories",
  "Active in cloud and DevOps community"
];
