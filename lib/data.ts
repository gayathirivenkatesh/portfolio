// All content below is sourced directly from Gayathiri V's resume.
// Wording has been lightly polished for web presentation; no facts,
// companies, metrics, or projects have been added or invented.

export const profile = {
  name: "Gayathiri Venkatesh",
  title: "Full Stack Developer",
  subtitle: "AI-Integrated Applications",
  location: "Tiruchengode, Tamil Nadu",
  email: "gayathiri2k4@gmail.com",
  phone: "+91 9360221678",
  github: "https://github.com/gayathirivenkatesh",
  linkedin: "https://linkedin.com/in/gayathirivenkatesh",
  portfolio: "https://gayathiriportfolio-nine.vercel.app",
  status: "B.Tech Computer Technology, Class of 2026",
  summary:
    "B.Tech Computer Technology graduate (2026) with hands-on experience building full-stack applications in Java, React.js, Node.js, and FastAPI, and a strong foundation in integrating machine learning models into production-grade systems. Comfortable designing RESTful APIs, modelling databases, and shipping end-to-end features — from a multimodal emotion recognition system reaching 85% fusion accuracy to deployed web tools with live users. A quick learner with a bias for building real things.",
  roles: [
    "Full Stack Developer",
    "Software Developer",
    "Backend Engineer",
    "React Developer",
  ],
};

export const skills = {
  Languages: ["Java", "JavaScript", "Python", "C", "SQL"],
  Frontend: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  "Backend & APIs": [
    "Node.js",
    "Express.js",
    "FastAPI",
    "RESTful API Design",
    "Microservices",
    "JWT Authentication",
  ],
  "AI / ML": [
    "TensorFlow",
    "Keras",
    "OpenCV",
    "LangChain",
    "RAG",
    "HuggingFace",
    "Generative AI",
  ],
  Databases: ["MongoDB", "MySQL", "SQLite"],
  "DevOps & Deployment": [
    "Docker",
    "GitHub Actions (CI/CD)",
    "Git",
    "Vercel",
    "Render",
  ],
  Tools: ["VS Code", "GitHub", "Antigravity"],
} as const;

export type SkillCategory = keyof typeof skills;

export const experience = [
  {
    role: "Full Stack Development Intern",
    company: "TechnoHacks Solutions Pvt. Ltd.",
    location: "Remote",
    duration: "Feb 2026 – Mar 2026",
    track: "Full Stack Development",
    points: [
      "Built and deployed a full-stack MERN application (Node.js, Express.js, MongoDB, React.js) with JWT-based authentication, role-based access, and a complete RESTful API layer covering GET, POST, PUT, and DELETE operations.",
      "Designed 6+ API endpoints with CRUD database operations and validated request/response cycles using systematic testing — applying real-world backend security patterns and clean code standards.",
      "Delivered a responsive UI using Flexbox and CSS Grid layouts, managed the full project lifecycle via Git version control, and submitted production-ready documentation within the internship timeline.",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "React.js", "JWT", "Git"],
  },
      {
    role: "Full Stack Development Intern",
    company: "Ascent E-Digit Solutions Private Limited",
    location: "Erode",
    duration: "Oct 2026 – Present",
    track: "Full Stack Development",
    points: [
      "Working on full stack web development tasks as an intern.",
    ],
    tech: ["React.js", "FastAPI", "Docker", "MySQL"],
  },
];

export const projects = [
  {
    id: "emotion-fusion",
    name: "Adaptive Confidence-Based Audio-Visual Emotion Fusion",
    category: "Academic Project",
    featured: true,
    tagline:
      "A multimodal emotion recognition system that fuses audio and visual signals using adaptive confidence-based weighting.",
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "FastAPI",
      "Streamlit",
      "Docker",
    ],
    metrics: [
      { label: "Fusion accuracy", value: "~85%" },
      { label: "Single-modal baseline", value: "77%" },
      { label: "Datasets", value: "3 multilingual" },
      { label: "Test samples (video)", value: "500+" },
    ],
    points: [
      "Designed a multimodal emotion recognition system fusing audio and visual data using an adaptive confidence-based weighting mechanism, achieving ~85% weighted fusion accuracy vs. 77% single-modal baseline across 3 multilingual datasets (EMO-DB, EMOVO, SHEMO).",
      "Built audio emotion recognition with MFCC feature extraction using TensorFlow/Keras deep learning classifiers, enabling multi-language speech emotion classification across 6 emotion classes.",
      "Developed a video emotion recognition module using OpenCV and CNN-based facial expression analysis, maintaining stable detection under varying lighting, occlusion, and pose variation across 500+ test samples.",
      "Introduced the Emotion Reliability Index (ERI) — a custom evaluation metric combining accuracy, agreement score, and temporal stability — enabling interpretable and trustworthy multimodal predictions; containerised the full pipeline using Docker for reproducible local deployment.",
    ],
    links: {
      github: "https://github.com/gayathirivenkatesh/AMCEF",
      demo: "https://audio-video-emotion-fusion.streamlit.app/",
    },
  },

  {
    id: "mentorship-platform",
    name: "AI-Based Student Skill & Mentorship Platform",
    category: "Personal Project",
    featured: true,
    tagline:
      "A full-stack mentorship platform matching students to mentors using NLP-driven skill gap analysis.",
    tech: [
      "Java",
      "React.js",
      "Node.js",
      "MongoDB",
      "HuggingFace",
      "Gemini API",
      "GitHub Actions",
    ],
    metrics: [
      { label: "Manual matching effort reduced", value: "~60%" },
      { label: "API endpoints", value: "12+" },
      { label: "User roles", value: "2" },
    ],
    points: [
      "Built a full-stack mentorship platform integrating HuggingFace sentence-transformers for NLP-driven skill gap analysis, matching students to mentors based on embedding similarity — reducing manual mentor-matching effort by ~60%.",
      "Designed and exposed 12+ RESTful API endpoints (authentication, profile management, skill assessment, mentor recommendations), secured with JWT session management and role-based access control for 2 user roles.",
      "Modelled a normalised MongoDB schema for student profiles, mentor listings, and sessions; applied indexed queries to reduce data retrieval time for high-cardinality searches.",
      "Implemented a CI/CD pipeline using GitHub Actions to automate build and deployment on every push; configured dynamic React dashboards with real-time skill progress tracking and responsive Tailwind CSS layouts.",
    ],
    links: {
      github: "https://github.com/gayathirivenkatesh/skill_sync",
      demo: "https://skill-sync-sable.vercel.app/",
    },
  },

  {
    id: "metadata-anonymizer",
    name: "Metadata Image & Video Anonymizer",
    category: "Personal Project",
    featured: false,
    tagline:
      "A FastAPI microservice that strips EXIF, XMP, and embedded metadata to eliminate PII leakage before file sharing.",
    tech: [
      "Python",
      "FastAPI",
      "OpenCV",
      "React.js",
      "Docker",
      "Vercel",
      "GitHub Actions",
    ],
    metrics: [
      { label: "File formats supported", value: "5" },
      { label: "Face detection accuracy", value: "~95%" },
    ],
    points: [
      "Developed a FastAPI microservice that detects and strips EXIF, XMP, and embedded metadata from images, videos, and documents, eliminating PII leakage before file sharing — processing 5 file formats (JPEG, PNG, MP4, MOV, PDF).",
      "Implemented face detection and blurring using OpenCV Haar cascades for optional visual anonymisation, extending the tool into an AI-assisted privacy pipeline with ~95% face detection accuracy.",
      "Built asynchronous file processing pipelines using Python async I/O; containerised the backend service using Docker for consistent local and production environments.",
      "Deployed the React frontend to Vercel with GitHub Actions CI/CD — automating build, test, and deployment on every commit; features a side-by-side original vs. anonymised metadata preview and one-click sanitised file download.",
    ],
    links: {
      github: "https://github.com/gayathirivenkatesh/anonymizer",
      demo: "https://anonymizer-seven.vercel.app/",
    },
  },
];

export const education = [
  {
    degree: "B.Tech — Computer Technology",
    institution: "Bannari Amman Institute of Technology",
    location: "Sathyamangalam, Tamil Nadu",
    duration: "April 2026",
    cgpa: "8.28 / 10.0",
    coursework: [
      "OOP (Java)",
      "Data Structures & Algorithms",
      "DBMS",
      "Computer Networks",
      "Operating Systems",
      "Machine Learning",
    ],
  },
];

export const certifications = [
  {
    name: "Introduction to LangChain – Python",
    issuer: "LangChain Academy",
    status: "Completed",
  },
] as const;

export type Project = (typeof projects)[number];
export type Education = (typeof education)[number];
export type Certification = (typeof certifications)[number];
