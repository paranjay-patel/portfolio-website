export const profile = {
  name: "Paranjay Patel",
  title: "Full Stack Developer | Flutter | UI/UX | Cloud & DevOps",
  bio: "CS Student passionate about building elegant solutions with modern technologies. Interested in Cloud technologies, DevOps, and creating beautiful user experiences.",
  email: "pearlpatel1234@gmail.com",
  github: "https://github.com/paranjay-patel",
  linkedin: "https://www.linkedin.com/in/paranjay-patel/",
  avatar: "/paranjay patel.png"
};

export const skills = [
  { category: "Languages", items: ["Python", "Dart", "JavaScript", "TypeScript", "HTML", "CSS"] },
  { category: "Frontend", items: ["Flutter", "React", "Astro", "Tailwind CSS", "UI/UX Design"] },
  { category: "Backend & Cloud", items: ["Node.js", "Express", "AWS", "Firebase", "PostgreSQL", "MongoDB"] },
  { category: "DevOps & Tools", items: ["Docker", "Traefik", "Kubernetes", "Linux", "Git", "CICD"] },
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
    role: "DevOps Engineer",
    company: "Healtech",
    period: "Jul 2024 - Feb 2025",
    description: "- Built CI/CD pipelines for Flutter apps using GitHub Actions and AWS CodeBuild.\n- Automated APK builds and Play Store deployments post-merge.\n- Worked closely with frontend teams to streamline web deployments on AWS Cloud."
  },
  {
    id: 2,
    role: "DevOps Engineer",
    company: "LOGICWIND",
    period: "Jun 2023 - Jun 2024",
    description: "- Implemented on-premises GitLab server, saving ₹6L/year by migrating 100+ Bitbucket users.\n- Configured GitLab CI pipelines with SonarQube checks, Docker builds, Docker Hub push, and EC2 deployments.\n- Managed PostgreSQL and MongoDB databases on AWS EC2, including backup and recovery tasks.\n- Set up monitoring dashboards using Prometheus, Grafana, and ELK stack.\n- Deployed frontend applications using AWS CloudFront and Firebase Hosting."
  },
  {
    id: 3,
    role: "DevOps Engineer Intern",
    company: "LOGICWIND",
    period: "Dec 2022 - May 2023",
    description: "Gained foundational knowledge of DevOps methodologies and tools during a 6-month internship. Applied theoretical concepts in lab projects to implement CI/CD pipelines, infrastructure automation, and version control systems."
  },
  {
    id: 4,
    role: "Flutter Developer",
    company: "Toshal Infotech",
    period: "May 2022 - Jun 2022",
    description: "- Developed two mobile applications:\n  • Whether App: Used OpenWeather API with a fully responsive design.\n  • Group Chat Application: Integrated Firebase Firestore, Authentication, and real-time data stream."
  }
];

export const education = [
  {
    id: 1,
    institution: "Uka Tarsadia University",
    degree: "Bachelor of Technology - BTech, Computer Engineering",
    period: "2019 - 2023",
    grade: "7.7",
    description: "Participated in hackathons, coding competitions, sports, and festival celebrations. Gained maturity and learned new skills during college life."
  },
  {
    id: 2,
    institution: "P.R.Khatiwala Vidya Sankul",
    degree: "12th, Mathematics",
    period: "Feb 2006 - Feb 2019",
    grade: "12th : 59 PR & 10th : 95 PR",
    description: "Engaged in sports, dance, skating, music, art, and painting. Served as captain of the school cricket team and house captain. Achieved academic and extracurricular excellence."
  }
];

export const achievements = [
  "Pull Shark x2 - GitHub Achievement",
  "100 Days of Python Bootcamp",
  "17+ GitHub Repositories",
  "Active in cloud and DevOps community"
];

export const certifications = [
  {
    id: 1,
    title: "AWS Cloud Practitioner Essentials",
    issuer: "edX",
    issueDate: "Jul 2022",
    credentialID: "4374eecd8b6c4edb9e03624ac469168a",
    url: "https://courses.edx.org/certificates/4374eecd8b6c4edb9e03624ac469168a"
  },
  {
    id: 2,
    title: "Developing Cloud Native Applications",
    issuer: "edX",
    issueDate: "Jan 2022",
    credentialID: "c896ce4fa02e472eb7d53ba414b9ff4b",
    url: "https://courses.edx.org/certificates/c896ce4fa02e472eb7d53ba414b9ff4b"
  },
  {
    id: 3,
    title: "Introduction to Cloud Development with HTML, CSS, and JavaScript",
    issuer: "edX",
    issueDate: "Dec 2021",
    credentialID: "4b1f5004ab924735afe0c181260753cd",
    url: "https://courses.edx.org/certificates/4b1f5004ab924735afe0c181260753cd"
  },
  {
    id: 4,
    title: "AI Chatbots Without Programming",
    issuer: "edX",
    issueDate: "Oct 2021",
    credentialID: "3dc4db7b2d0b490eb45024e48e3caedb",
    url: "https://courses.edx.org/certificates/3dc4db7b2d0b490eb45024e48e3caedb"
  },
  {
    id: 5,
    title: "Introduction to Cloud Computing",
    issuer: "edX",
    issueDate: "Sep 2021",
    credentialID: "c85f65d62145411da7ab0988f2dde19b",
    url: "https://courses.edx.org/certificates/c85f65d62145411da7ab0988f2dde19b"
  },
  {
    id: 6,
    title: "NDG Linux Essentials",
    issuer: "Network Development Group",
    issueDate: "Apr 2021",
    url: 'https://courses.edx.org/certificates/4374eecd8b6c4edb9e03624ac469168a'
  },
  {
    id: 7,
    title: "NDG Linux Unhatched",
    issuer: "Cisco Networking Academy",
    issueDate: "Oct 2020",
    url: 'https://courses.edx.org/certificates/4374eecd8b6c4edb9e03624ac469168a'
  },
  {
    id: 8,
    title: "Introduction to Flutter Development",
    issuer: "The App Brewery",
    issueDate: "Apr 2020",
    url: 'https://courses.edx.org/certificates/4374eecd8b6c4edb9e03624ac469168a'
  },
  {
    id: 9,
    title: "DART Intermediate",
    issuer: "Udemy",
    issueDate: "Jan 2021",
    url: "https://www.udemy.com/certificate/UC-df587103-62dd-4baf-b74f-8250c8aeda5b/"
  }
];

export const languageSkills = [
  { id: 1, language: "English", proficiency: "Full professional proficiency" },
  { id: 2, language: "German", proficiency: "Limited working proficiency" },
  { id: 3, language: "Gujarati", proficiency: "Native or bilingual proficiency" },
  { id: 4, language: "Hindi", proficiency: "Native or bilingual proficiency" },
  { id: 5, language: "Norwegian", proficiency: "Elementary proficiency" }
];
