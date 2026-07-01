// All content sourced directly from Sharan R's resumes. No invented facts.
// Merged per instruction: latest resume (Brillio internship) is primary;
// older resume's extra project (Expense Report) and certificate are folded in.

export const personal = {
  name: "Sharan R",
  roles: [
    "AI Engineer",
    "Generative AI Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "Software Engineer",
  ],
  email: "sharanr1224@gmail.com",
  phone: "+91-8095725075",
  location: "Bangalore, India",
  github: "https://github.com/SharanR1224",
  githubLabel: "github.com/SharanR1224",
  linkedin: "https://www.linkedin.com/in/sharan-r-31093727b/",
  linkedinLabel: "linkedin.com/in/sharan-r-31093727b",
  resumeFile: "/resume/Sharan_R_Resume.pdf",
  summary:
    "AI & Machine Learning Engineering graduate with hands-on experience in Generative AI, Machine Learning, Computer Vision, and automation workflows. Skilled in Python and building AI-based solutions through academic and personal projects. Quick learner with strong interest in applying AI to real-world problems and collaborating in team environments.",
};

export const education = [
  {
    degree: "B.E. in Artificial Intelligence and Machine Learning",
    school: "Acharya Institute of Technology",
    period: "09/2021 – 05/2025",
    location: "Bangalore, India",
  },
  {
    degree: "Pre-University — PCMC",
    school: "St. Claret PU College",
    period: "06/2019 – 06/2021",
    location: "Bangalore, India",
  },
];

export const experience = [
  {
    role: "GenAI Intern",
    company: "Brillio Technologies Pvt. Ltd.",
    track: "AI Chatbot Testing & Automation",
    period: "11/2024 – 12/2025",
    location: "Bangalore, India",
    points: [
      "Performed functional testing and quality evaluation of enterprise AI chatbots by designing structured test prompts and evaluation scenarios.",
      "Identified hallucinations, logical inconsistencies, and response gaps to improve chatbot reliability.",
      "Built and documented prompt improvement strategies and guardrail recommendations to enhance response accuracy and safety.",
      "Developed an Angular-based frontend and TypeScript backend document interface integrating PDF scrolling with chatbot context injection for real-time contextual responses.",
      "Designed an automation pipeline using AI Agents and n8n to convert meeting transcripts into structured Business Requirement Documents (BRDs).",
      "Implemented transcript processing workflows including summarization, action-item extraction, and stakeholder mapping.",
      "Prototyped a Microsoft Teams transcript bot with secure storage integration using Azure Blob Storage.",
      "Contributed to policy documentation, data cleaning, and AI governance documentation for production-ready deployment.",
      "Explored deployment strategies including Azure App Service, bot endpoints, storage schemas, and audit trail implementation.",
    ],
    stack: [
      "Python",
      "Generative AI",
      "Prompt Engineering",
      "AI Agents",
      "n8n",
      "Angular",
      "TypeScript",
      "Azure Blob Storage",
      "Chatbot Evaluation",
      "Automation Pipelines",
    ],
  },
  {
    role: "Intern",
    company: "Sconti Technologies",
    track: "Internship Completion Certificate — 21/02/2024",
    period: "Completed 21/02/2024",
    location: "Bangalore, India",
    points: [
      "Built a machine learning–based course recommendation system for the Sconti application.",
      "Completed the internship program with a certificate of completion from Sconti Technologies.",
    ],
    stack: ["Python", "Machine Learning", "Recommendation Systems"],
  },
];

export const projects = [
  {
    title: "Autism Detection Using Machine Learning",
    description:
      "A machine learning model to detect autism using structured healthcare datasets, comparing multiple algorithms to find the best-performing approach.",
    points: [
      "Performed data preprocessing including missing value handling, feature scaling, and class balancing techniques.",
      "Trained and compared models including Support Vector Machine (SVM), Logistic Regression, and XGBoost.",
      "Evaluated model performance using accuracy, precision, recall, and F1-score.",
    ],
    stack: ["Python", "Scikit-learn", "XGBoost", "Pandas", "NumPy"],
    category: "Machine Learning",
  },
  {
    title: "Hand Gesture Control System",
    description:
      "A real-time hand gesture recognition system enabling gesture-based control of system functions using computer vision.",
    points: [
      "Developed a real-time hand gesture recognition system using Python and computer vision techniques.",
      "Implemented hand tracking and gesture detection pipelines using OpenCV.",
    ],
    stack: ["Python", "OpenCV", "Computer Vision"],
    category: "Computer Vision",
  },
  {
    title: "Course Recommendation System",
    description:
      "A personalized course recommendation engine built with content-based filtering, deployed for the Sconti application as a real-time web service.",
    points: [
      "Implemented content-based filtering using TF-IDF to analyze course descriptions and generate relevant recommendations.",
      "Built and deployed the application using Python and Flask to deliver real-time recommendations through a web interface.",
    ],
    stack: ["Python", "Flask", "TF-IDF", "Scikit-learn"],
    category: "Machine Learning",
  },
  {
    title: "Expense Report using DBMS",
    description:
      "A comprehensive expense reporting system built on a relational database to track and manage expenses.",
    points: [
      "Developed a comprehensive expense reporting system using database management systems.",
    ],
    stack: ["SQL", "DBMS"],
    category: "Software Engineering",
  },
];

export const skills = {
  Languages: ["Python", "SQL", "TypeScript", "JavaScript"],
  "Frameworks & Tools": [
    "Scikit-learn",
    "OpenCV",
    "Flask",
    "FastAPI",
    "Pandas",
    "NumPy",
    "n8n",
    "Git",
  ],
  "AI / ML": [
    "Machine Learning",
    "Generative AI",
    "Prompt Engineering",
    "Data Preprocessing",
    "Model Evaluation",
  ],
  "Cloud Platforms": ["Azure", "AWS"],
  "Core Strengths": [
    "Data Analysis",
    "Problem Solving",
    "Team Management",
    "Critical Thinking",
    "Communication",
  ],
};

export const certificates = [
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
  },
  {
    title: "Foundations of Data Science",
    issuer: "Google",
  },
  {
    title: "Python Foundation Certificate",
    issuer: "Self-paced",
  },
  {
    title: "Internship Completion Certificate",
    issuer: "Sconti Technologies — 21/02/2024",
  },
];

export const languages = [
  { name: "English", level: "Professional Fluency" },
  { name: "Kannada", level: "Native / Bilingual" },
  { name: "Tamil", level: "Native / Bilingual" },
  { name: "Hindi", level: "Conversational" },
];

export const stats = [
  { label: "Projects Built", value: 4 },
  { label: "Internships", value: 2 },
  { label: "Certifications", value: 4 },
  { label: "Core Languages", value: 4 },
];
