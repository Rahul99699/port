// thoda zada ts ho gya idhar
export enum SkillNames {
  PYTHON = "python",
  JAVA = "java",
  SQL = "sql", // Mapped to VS Code
  ML = "ml",
  NLP = "nlp",
  DATA_ANALYSIS = "data_analysis",
  MODEL_BUILDING = "model_building",
  AWS = "aws", // Mapped to Jupyter
  DOCKER = "docker", // Mapped to Colab
  GIT = "git",
  GITHUB = "github",
  DSA = "dsa",
  PROBLEM_SOLVING = "problem_solving",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "The backbone of AI/ML and scripting! 🐍🔥",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.JAVA]: {
    id: 2,
    name: "java",
    label: "Java",
    shortDescription: "Robust and versatile for DSA! ☕⚡",
    color: "#007396",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  [SkillNames.SQL]: {
    id: 3,
    name: "sql",
    label: "VS Code",
    shortDescription: "The ultimate code editor! 💻✨",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  [SkillNames.ML]: {
    id: 4,
    name: "ml",
    label: "Machine Learning",
    shortDescription: "Teaching machines to think! 🤖🧠",
    color: "#ff6f00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  },
  [SkillNames.NLP]: {
    id: 5,
    name: "nlp",
    label: "Deep Learning",
    shortDescription: "Neural networks and beyond! 🧠🔥",
    color: "#4caf50",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
  },
  [SkillNames.DATA_ANALYSIS]: {
    id: 6,
    name: "data_analysis",
    label: "Pandas",
    shortDescription: "Data manipulation at its best! 📉🐼",
    color: "#150458",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
  },
  [SkillNames.MODEL_BUILDING]: {
    id: 7,
    name: "model_building",
    label: "NumPy",
    shortDescription: "Numerical computing power! 🔢⚡",
    color: "#4d77cf",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
  },
  [SkillNames.AWS]: {
    id: 8,
    name: "aws",
    label: "AWS",
    shortDescription: "Cloud computing and scalable infrastructure! ☁️🚀",
    color: "#FF9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  [SkillNames.DOCKER]: {
    id: 9,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerization and deployment simplified! 🐳📦",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.GIT]: {
    id: 10,
    name: "git",
    label: "Git",
    shortDescription: "Version control essential! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 11,
    name: "github",
    label: "GitHub",
    shortDescription: "Collab and code sharing! 🐙🌐",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.DSA]: {
    id: 13,
    name: "dsa",
    label: "Data Structures",
    shortDescription: "Optimizing code foundations! 🧠🚀",
    color: "#607d8b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  [SkillNames.PROBLEM_SOLVING]: {
    id: 14,
    name: "problem_solving",
    label: "Algorithms",
    shortDescription: "Solving complex puzzles! 🧩✨",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", // Changed from JS to C
  },
};

export const SKILL_CATEGORIES = [
  {
    title: "AI / Machine Learning",
    skills: [SkillNames.PYTHON, SkillNames.MODEL_BUILDING, SkillNames.DATA_ANALYSIS, SkillNames.ML, SkillNames.NLP],
  },
  {
    title: "DSA",
    skills: [SkillNames.JAVA, SkillNames.DSA, SkillNames.PROBLEM_SOLVING],
  },
  {
    title: "Tools & Technologies",
    skills: [SkillNames.GIT, SkillNames.GITHUB, SkillNames.SQL, SkillNames.AWS, SkillNames.DOCKER],
  },
];

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [];

export type Certification = {
  id: number;
  title: string;
  platform: string;
  issued: string;
  credentialId?: string;
  description: string;
  keyLearnings: string[];
  skills: string[];
  link?: string;
  image?: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: "Artificial Intelligence Training",
    platform: "InternsElite",
    issued: "Oct 2023",
    link: "https://www.linkedin.com/in/rahul-1-3b9bb1280/overlay/Certifications/1132042292/treasury/?profileId=ACoAAESFR_0B2ddgmggp3o60vVhzLDYY952A3cU",
    image: "/assets/certificates/internselite.png",
    description: "Industrial training in Artificial Intelligence focused on building transformative industry solutions.",
    keyLearnings: [
      "Advanced Python for AI/ML",
      "Data handling and preprocessing",
      "Model building and evaluation techniques"
    ],
    skills: ["Python", "NumPy", "Pandas", "Scikit-learn"]
  },
  {
    id: 2,
    title: "Advanced Python for ML & AI",
    platform: "CSE Pathshala",
    issued: "Aug 2025",
    link: "https://www.linkedin.com/in/rahul-1-3b9bb1280/overlay/Certifications/692218329/treasury/?profileId=ACoAAESFR_0B2ddgmggp3o60vVhzLDYY952A3cU",
    image: "/assets/certificates/csep_python.png",
    description: "35+ hours Live Summer Training covering advanced modules in ML & AI.",
    keyLearnings: [
      "Advanced Python Programming",
      "Machine Learning Algorithms",
      "AI Project Implementation"
    ],
    skills: ["Python", "ML Foundations", "AI Ethics"]
  },
  {
    id: 3,
    title: "Machine Learning",
    platform: "Board Infinity",
    issued: "Jan 2024",
    link: "https://www.linkedin.com/in/rahul-1-3b9bb1280/overlay/Certifications/1238416898/treasury/?profileId=ACoAAESFR_0B2ddgmggp3o60vVhzLDYY952A3cU",
    image: "/assets/certificates/bi_ml.png",
    description: "Successfully completed Microlearning Course in Machine Learning fundamentals.",
    keyLearnings: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Model Evaluation"
    ],
    skills: ["Machine Learning", "Data Analysis", "Model Evaluation"]
  }
];


export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

