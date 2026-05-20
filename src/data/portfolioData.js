export const personalInfo = {
  name: "Kunal Bhatt",
  title: "Software Developer | AI Engineer",
  birthdate: "12/04/2001",
  email: "bhattkunal04@gmail.com",
  phone: "+1 (312)285-7731",
  address: "Chicago, Illinois, United States",
  bio: "Based in the United States with an MS in Computer Science from Illinois Institute of Technology and 3+ years of work experience in the industry. I specialize in mobile and full-stack development, with hands-on experience building and shipping production applications across iOS and Android. I enjoy working across the stack — from architecting clean, maintainable code to crafting interfaces that feel polished and intuitive. I'm someone who takes ownership, moves fast, and cares about the details. Whether it's building something from scratch or modernizing something legacy, I like leaving things better than I found them.",
  social: {
    linkedin: "https://www.linkedin.com/in/welcometokunalbhattsprofile/",
    facebook: "https://www.facebook.com/profile.php?id=100007497108021",
    instagram: "https://www.instagram.com/kunal__777/",
  }
};

export const expertise = [
  { icon: "FaMobile", title: "Mobile Development" },
  { icon: "FaRobot", title: "AI Engineering" },
  { icon: "FaMagic", title: "Generative AI" },
  { icon: "FaGlobe", title: "Web Development" },
  { icon: "FaBrain", title: "Machine Learning" },
  { icon: "FaGamepad", title: "Game Development" }
];

export const skills = [
  { name: "Python", image: "pyhton.png", color: "#3776AB" },
  { name: "Java", image: "Java.png", color: "#007396" },
  { name: "C++", image: "Cplusplus.png", color: "#00599C" },
  { name: "C#", image: "Csharp.png", color: "#239120" },
  { name: "C", image: "C.png", color: "#A8B9CC" },
  { name: "JavaScript", image: "Javascript.png", color: "#F7DF1E" },
  { name: "Dart", image: "Dart.png", color: "#0175C2" },
  { name: "R", image: "R.png", color: "#276DC3" },
  { name: "React", image: "React.png", color: "#61DAFB" },
  { name: "Expo", image: "Expo.png", color: "#000020" },
  { name: "Angular", image: "Angular.png", color: "#DD0031" },
  { name: "Node.js", image: "NodeJs.png", color: "#339933" },
  { name: "Flutter", image: "Flutter.png", color: "#02569B" },
  { name: ".NET", image: "dotnet.png", color: "#512BD4" },
  { name: ".NET MAUI", image: "dotnetMaui.png", color: "#512BD4" },
  { name: "HTML5", image: "HTML5.png", color: "#E34F26" },
  { name: "CSS", image: "CSS.png", color: "#1572B6" },
  { name: "Tailwind CSS", image: "TailwindCSS.png", color: "#06B6D4" },
  { name: "MySQL", image: "MySql.png", color: "#4479A1" },
  { name: "SQLite", image: "sqlite.png", color: "#003B57" },
  { name: "AWS", image: "Aws.png", color: "#FF9900" },
  { name: "Azure", image: "Azure.png", color: "#0078D4" },
  { name: "GCP", image: "GCP.png", color: "#4285F4" },
  { name: "Azure AI Foundry", image: "AzureAIFoundry.png", color: "#0078D4" },
  { name: "Firebase", image: "Firebase.png", color: "#FFCA28" },
  { name: "Unity", image: "Unity.png", color: "#000000" },
  { name: "Android Dev", image: "AndroidDev.png", color: "#3DDC84" },
  { name: "iOS Dev", image: "IOSDev.png", color: "#000000" },
  { name: "Postman", image: "Postman.png", color: "#FF6C37" },
  { name: "OpenAI API", image: "OpenAI.png", color: "#10A37F" },
  { name: "Claude Code", image: "ClaudeCode.png", color: "#191919" },
  { name: "OpenRouter", image: "OpenRouter.png", color: "#6366F1" }
];

export const languages = [
  { name: "English", level: 95 },
  { name: "Hindi", level: 90 },
  { name: "Gujarati", level: 90 },
  { name: "French", level: 40 },
  { name: "Marathi", level: 60 }
];

export const workExperience = [
  {
    period: "May 2024 - Present",
    company: "STG Logistics, Chicago, IL",
    position: "Software Engineer",
    description: [
      "Delivered a Jira reporting web app with Angular dashboard powered by REST APIs and JQL.",
      "Spearheaded .NET MAUI migration for iOS/Android, saving $40K and deploying 2 months ahead of schedule.",
      "Modernized mobile apps by migrating to React Native from Xamarin, reducing licensing spend by $60K/year.",
      "Enabled secure BYOD across mobile portfolio, eliminating company-issued device needs."
    ]
  },
  {
    period: "December 2021 - January 2023",
    company: "Maitri & Siya Group of Companies, Mumbai, India",
    position: "Web Developer",
    description: [
      "Launched investor-facing website using React and Material UI with modular components, responsive layout, and WCAG 2.1 AA accessibility standards.Drove 33% increase in new clients in Q2 2023.",
      "Leveraged digital marketing to expand outreach and increase social media engagement."
    ]
  }
];

export const education = [
  {
    period: "August 2023 - May 2025",
    degree: "Master of Computer Science (CGPA: 3.66/4.0)",
    institution: "Illinois Institute of Technology, Chicago, IL",
    description: "Graduated May 2025. Courses: Machine Learning, Design and Analysis of Algorithms, Computer Networks, Mobile Application Development, Software Engineering, Online Social Networks Analysis, Software Development with UML, Big Data Technologies, Data Preparation and Analysis, Advanced Database Organization."
  },
  {
    period: "August 2019 - July 2023",
    degree: "Bachelor of Engineering in Computer Engineering (CGPA: 9.32/10.0)",
    institution: "Thakur College of Engineering and Technology, Mumbai, India",
    description: "Successfully completed undergraduate degree in Computer Engineering with distinction. Focused on software development, algorithms, data structures, and machine learning."
  },
  {
    period: "August 2017 - July 2019",
    degree: "Junior College",
    institution: "Shri. T.P. Bhatia College of Science, Mumbai, India",
    description: ""
  },
  {
    period: "June 2007 - June 2017",
    degree: "High School Degree",
    institution: "Our Lady of Remedy High School, Mumbai, India",
    description: ""
  }
];

export const projects = [
  {
    icon: "FaNewspaper",
    title: "AI News Briefing Agent",
    techStack: ["LangChain", "LangGraph", "OpenAI GPT-4", "Tavily Search", "Python"],
    description: "Built an agentic news research pipeline using LangGraph where an LLM agent autonomously breaks down a user-provided topic into sub-queries, executes real-time web searches via the Tavily Search API, and synthesizes findings across multiple sources into a structured daily briefing. Integrated Tavily as a LangChain tool within a LangGraph stateful graph, enabling the agent to iteratively fetch, filter, and rank relevant articles before passing curated context to OpenAI GPT-4 for multi-source summarization with cited references. Designed modular LangGraph nodes for query planning, search execution, deduplication, and final report generation, with LangChain prompt templates ensuring consistent briefing structure across topics including finance, technology, and geopolitics."
  },
  {
    icon: "FaRobot",
    title: "AI Job Application Coach",
    techStack: ["LangChain", "LangGraph", "Hugging Face", "AWS Bedrock", "Python"],
    description: "Built an agentic job application assistant using LangGraph that takes a job description and resume as input, then autonomously runs a multi-step workflow: skill gap analysis, tailored bullet point generation, and cover letter drafting via AWS Bedrock. Developed custom LangChain tools for keyword extraction, ATS score estimation, and role-fit scoring using Hugging Face Transformers for semantic similarity and embedding-based skill matching, chained together using LangGraph's stateful graph execution to produce a structured application package in a single pipeline run. Applied Pydantic output parsers and few-shot prompt templates in LangChain to ensure consistent, role-specific resume language across different job categories and seniority levels."
  },
  {
    icon: "FaPlane",
    title: "AeroFind – A Skyscanner-Inspired Flight Search App",
    techStack: ["React Native", "TypeScript", "Redux Toolkit", "Firebase", "SQLite"],
    description: "Built a cross-platform React Native app for iOS & Android in TypeScript using Redux Toolkit, RTK Query, and React Navigation; implemented tab navigation, deep-linked search flows, and reusable design system components. Integrated Firebase Cloud Messaging (FCM) for push notification price alerts, SQLite for local data persistence, Firestore for cloud sync and Google Sign-In (OAuth 2.0) authentication. Supported in-app browser booking handoff, multi-city and multi-passenger search flows, and optimized render performance for low-bandwidth conditions."
  },
  {
    icon: "FaMedal",
    title: "Paul Octopus - Football Match Prediction System",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Linear Regression"],
    description: "Assessed and predicted upcoming football match outcomes using data from the past 20 years. Conducted expansive research on algorithms and libraries for model development. Built a Multivariate Linear Regression model with 71.66% accuracy. Authored and published technical paper in Springer LNNS, vol 632, July 2022."
  },
  {
    icon: "FaShip",
    title: "Battleships - Multiplayer Game with RESTful API Integration",
    techStack: ["Flutter", "Dart", "REST API", "HTTP", "Firebase"],
    description: "Implemented a Flutter application interfacing with a RESTful service to play Battleships against human and AI opponents. Integrated user registration, login, and session management functionalities using HTTP requests. Developed interactive game boards for ship placement and gameplay, ensuring responsive design across different screen sizes."
  },
  {
    icon: "FaGamepad",
    title: "Momentum Madness - A Rolling Ball Game",
    techStack: ["Unity", "C#", "Android", "3D Development", "Game Design"],
    description: "Designed and developed a 3D arcade game in Unity featuring two levels, with the second offering an infinite high-score challenge. Utilized C# scripts for ball control and incorporated Unity features like box colliders and trail renderers. Programmed chase-down enemies that dynamically spawn at various locations on the map. Deployed locally with WASD controls for Windows and floating joystick for Android."
  },
  {
    icon: "FaTwitter",
    title: "Classification of Tweets as Racist or Non-Racist",
    techStack: ["Python", "NLTK", "Scikit-learn", "SVM", "NLP"],
    description: "Developed a model using machine learning to classify tweets as racist or non-racist based on their sentiment by calculating their 'overall polarity score'. Employed K Nearest Neighbors, Support Vector Machines and Naïve-Bayes algorithms to train the classification model."
  },
  {
    icon: "FaIdBadge",
    title: "Customer Segmentation to Help Apply Targeted Marketing",
    techStack: ["Python", "K-Means", "Pandas", "Matplotlib", "Data Analysis"],
    description: "Created a model with Data Analysis techniques to segregate and create clusters of different types of customers based on their RFM (Recency, Frequency, and Monetary) factors. Calculated and mapped customers according to their behaviors with statistical Pre-Processing. Adopted K-means Algorithms to cluster customers and draw useful inferences for targeted marketing with data visualization."
  },
  {
    icon: "FaChartLine",
    title: "PredKrypt - Cryptocurrency Price Prediction",
    techStack: ["Python", "LSTM", "TensorFlow", "Time Series", "Matplotlib"],
    description: "Developed cryptocurrency prediction model utilizing LSTM, demonstrating expertise in time series analysis and machine learning for financial forecasting. Proceeded through structured sequence of obtaining real-time cryptocurrency data, preparing data for training/testing, employing LSTM neural networks to forecast prices, and rendering prediction results visually. Trained model to forecast Bitcoin (BTC), Ethereum (ETH), and Ripple (XRP) over 30-day horizon."
  }
];

export const certificationsPublications = [
  {
    type: "certification",
    title: "Microsoft Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    date: "March 2026",
    link: "https://learn.microsoft.com/api/credentials/share/en-gb/KunalBhatt-5920/CCD24316E9EABE02?sharingId=7EB104CE343B345E",
    icon: "FaCertificate"
  },
  {
    type: "certification",
    title: "Machine Learning & Deep Learning in Python & R",
    issuer: "Udemy",
    date: "May 2021",
    link: "https://www.udemy.com/certificate/UC-213efaec-40fd-410a-b9b9-68878b89f73b/",
    icon: "FaCertificate"
  },
  {
    type: "certification",
    title: "Introduction to Game Development",
    issuer: "Coursera",
    date: "June 2020",
    link: "https://www.coursera.org/account/accomplishments/certificate/YLC6LYN2CYZB",
    icon: "FaCertificate"
  },
  {
    type: "publication",
    title: "Winner Prediction of Football Match Using Machine Learning",
    publisher: "Springer LNNS, vol 632",
    date: "July 2022",
    link: "https://www.springerprofessional.de/en/winner-prediction-of-football-match-using-machine-learning/24659280",
    icon: "FaBook"
  },
];

export const organizations = [
  {
    name: "CSI-TCET",
    role: "Creative Head",
    period: "2021 - 2022",
    description: "Selected as the Creative Head of Computer Society of India's TCET (CSI-TCET) Chapter for the academic year 2021-2022 wherein managed the events organized by CSI-Thakur College of Engineering and Technology."
  },
  {
    name: "TSDW-TCET",
    role: "Social Media Manager",
    period: "2021 - 2022",
    description: "Appointed as the Social Media Manager at TCET's Student Council (TSDW) and helped in increasing the reach of all the events organized by TSDW with the help of my digital marketing skills, 2021-2022."
  },
  {
    name: "Nimbus",
    role: "Head of Design",
    period: "2021 - 2022",
    description: "Elected as the Head of Design for 'Nimbus' -official magazine of Computer Science Department of TCET, and designed 3 uniquely themed magazines, 2020-2022."
  },
  {
    name: "CSI-TCET",
    role: "WC Member",
    period: "2020 - 2021",
    description: "Part of Computer Society of India's TCET (CSI-TCET) Chapter' working committee for the academic year 2020-2021 wherein I helped the team to manage the events organized by CSI-Thakur College of Engineering and Technology."
  }
];

