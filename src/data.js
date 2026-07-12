export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const ROLES = [
  "Software Engineer",
  "Java Developer",
  "Full Stack Developer",
  "AI Enthusiast",
  "Gen AI Developer",
  "Problem Solver",
];

export const STATS = [
  { value: 3, suffix: "+", label: "Years Learning" },
  { value: 4, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Technologies" },
  { value: 4, suffix: "", label: "Programming Languages" },
  { value: 200, suffix: "+", label: "Problems Solved" },
];

export const EDUCATION = [
  {
    degree: "B.Tech Information Technology",
    school: "PSNA College of Engineering and Technology",
    period: "2023 – 2027",
    detail: "CGPA: 8.0 / 10",
  },
  {
    degree: "Higher Secondary (12th Grade)",
    school: "Allwin Higher Secondary School",
    period: "2022 – 2023",
    detail: "Percentage: 77.83%",
  },
];

export const SKILL_GROUPS = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "SQL", level: 82 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "CS Fundamentals",
    skills: [
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Object-Oriented Programming", level: 90 },
      { name: "Database Management Systems", level: 82 },
      { name: "Operating Systems", level: 75 },
      { name: "Computer Networks", level: 72 },
    ],
  },
  {
    title: "Software Engineering",
    skills: [
      { name: "REST APIs", level: 82 },
      { name: "Git & GitHub", level: 88 },
      { name: "Design Patterns (Basics)", level: 68 },
      { name: "Software Development Life Cycle", level: 78 },
    ],
  },
  {
    title: "Artificial Intelligence",
    skills: [
      { name: "Generative AI", level: 80 },
      { name: "Prompt Engineering", level: 85 },
      { name: "Large Language Models (LLMs)", level: 78 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", level: 84 },
      { name: "MongoDB", level: 74 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "VS Code", level: 92 },
      { name: "Postman", level: 80 },
      { name: "GitHub", level: 88 },
      { name: "Git", level: 86 },
    ],
  },
];

export const SERVICES = [
  {
    title: "Java Development",
    desc: "Building scalable Java applications using clean architecture and OOP principles.",
    icon: "coffee",
    chips: ["OOP", "JDBC", "Collections", "Multithreading", "Spring", "REST API", "Design Patterns"],
  },
  {
    title: "Full Stack Development",
    desc: "Developing responsive full-stack web applications using modern technologies.",
    icon: "layers",
    chips: ["React", "Node", "Express", "MongoDB", "Authentication", "REST API", "JWT", "Tailwind"],
    featured: true,
  },
  {
    title: "Gen AI Integration",
    desc: "Integrating AI models, Prompt Engineering, and LLM-based applications.",
    icon: "sparkles",
    chips: ["Prompt Engineering", "LLM", "LangChain", "OpenAI API", "Vector DB", "RAG", "Embeddings"],
  },
];

export const PROJECTS = [
  {
    title: "MEDI CARE - AI Assitance Chatbot",
    subtitle: "Web Application & Mobile Application",
    date: "Feb 2026",
    desc: "A complete Medical Resource platform with responsive frontend, backend APIs, authentication, and database integration.",
    tags: ["Full Stack", "Web", "Mobile"],
    stack: ["React", "Node.js", "MYSQL", "REST API"],
    image: "face",
    codelink:"https://github.com/rohith-2252/mediCare",
    projectlink:"https://medicare-frontend-q2po.onrender.com/login",
  },
  {
    title: "EVEREST — E-Commerce Platform",
    subtitle: "E-Commerce Web Application & Mobile Application",
    date: "Nov 2025",
    desc: "A complete e-commerce platform with responsive frontend, backend APIs, authentication, and database integration.",
    tags: ["Full Stack", "Web", "Mobile"],
    stack: ["React", "Node.js", "MongoDB", "REST API"],
    image: "ecommerce",
    codelink:"https://github.com/rohith-2252/Everest_Ecommerce",
    projectlink:"https://everestecommerce.onrender.com/",
  },
    {
    title: "Face Recognition Attendance System",
    date: "Jan 2026",
    desc: "AI-powered attendance management using facial recognition technology for secure and automated attendance.",
    tags: ["AI", "Software"],
    stack: ["Python", "OpenCV", "Face Recognition", "SQLite"],
    image: "face",
    codelink: "https://github.com/rohith-2252/FACE-RECOGNIZATION-USING-PYTHON",
    projectlink:"https://github.com/rohith-2252/FACE-RECOGNIZATION-USING-PYTHON",
  },
  {
    title: "AI-Powered Student Career Guidance Platform",
    date: "Apr 2026",
    desc: "An AI-powered platform providing career recommendations using Prompt Engineering and Large Language Models.",
    tags: ["AI", "Full Stack"],
    stack: ["Prompt Engineering", "LLMs", "React", "Node.js"],
    image: "career",
    codelink:"https://github.com/rohith-2252/Chatbot",
    projectlink:"https://chatbot-k9az.onrender.com",
  },
  {
    title: "Employee Management System",
    subtitle: "Java Application",
    date: "Jun 2026",
    desc: "Java-based employee management system implementing CRUD operations, JDBC, MySQL, and Object-Oriented Programming concepts.",
    tags: ["Java", "Software"],
    stack: ["Java", "JDBC", "MySQL", "OOP"],
    image: "employee",
    codelink:"https://github.com/rohith-2252/Employee-Management-Using-JAVA-and-MYSQL",
    projectlink:"https://github.com/rohith-2252/Employee-Management-Using-JAVA-and-MYSQL",
  },
];

export const FILTERS = ["All", "Java", "AI", "Full Stack", "Web", "Mobile", "Software"];

export const ACHIEVEMENTS = [
  {
    icon: "medal",
    title: "Certifications",
    desc: "Professional certifications in software development & AI .",
    link:"https://drive.google.com/drive/folders/1KPkFRgruO_o49jbuSs4gDVjy5po7IYMs?usp=sharing",
  },
  {
    icon: "trophy",
    title: "Hackathons",
    desc: "Participation and wins in coding hackathons (to be added).",
    link:"https://drive.google.com/drive/folders/1KPkFRgruO_o49jbuSs4gDVjy5po7IYMs?usp=sharing",
  },
  {
    icon: "code",
    title: "Coding Achievements",
    desc: "Milestones across competitive programming platforms.",
    link:"https://drive.google.com/drive/folders/1KPkFRgruO_o49jbuSs4gDVjy5po7IYMs?usp=sharing",
  },
  {
    icon: "award",
    title: "Awards",
    desc: "Recognitions and awards earned along the way (to be added).",
    link:"https://drive.google.com/drive/folders/1KPkFRgruO_o49jbuSs4gDVjy5po7IYMs?usp=sharing",
  },
  {
    icon: "leetcode",
    title: "LeetCode",
    desc: "Problem-solving progress and streaks on LeetCode.",
    link:"https://leetcode.com/u/Rohith_Rohan/",
  },
  {
    icon: "github",
    title: "GitHub Contributions",
    desc: "Consistent contributions and open-source activity.",
    link:"https://github.com/rohith-2252",
  },
];

export const CONTACT = {
  email: "rohith.r2252@gmail.com",
  phone: "+91 93457 26530",
  phoneHref: "+919345726530",
  portfolio: "portfolio-cw93.onrender.com/",
  portfolioHref: "https://portfolio-cw93.onrender.com/",
  linkedin: "in/rohith-r-it-student",
  linkedinHref: "https://www.linkedin.com/in/rohith-r-it-student",
  github: "github.com/rohith-2252",
  githubHref: "https://github.com/rohith-2252/",
};
