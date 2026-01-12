export const personalInfo = {
  name: "Kunal Bhatt",
  title: "Computer Engineer | Software Developer",
  birthdate: "12/04/2001",
  email: "bhattkunal04@gmail.com",
  phone: "+1 (312)285-7731",
  address: "APT 9-1203, 501 E. 32nd St., Chicago, IL",
  bio: "Highly motivated Computer Science enthusiast with a strong foundation in programming languages, algorithms, and software development. Proficient in designing, implementing, and troubleshooting complex systems. Skilled in collaborating with cross-functional teams to deliver innovative solutions. Strong problem-solving abilities and a commitment to staying up to date with emerging technologies. A dedicated learner and adaptable team player, seeking opportunities to contribute expertise to challenging projects in the field of Computer Science.",
  social: {
    linkedin: "https://www.linkedin.com/in/welcometokunalbhattsprofile/",
    facebook: "https://www.facebook.com/profile.php?id=100007497108021",
    instagram: "https://www.instagram.com/kunal__777/",
  }
};

export const expertise = [
  { icon: "FaGlobe", title: "Web Development" },
  { icon: "FaBrain", title: "Machine Learning" },
  { icon: "FaGamepad", title: "Game Development" },
  { icon: "FaChartLine", title: "Digital Marketing" }
];

export const skills = [
  { name: "Python", icon: "FaPython", color: "#3776AB" },
  { name: "Java", icon: "FaJava", color: "#007396" },
  { name: "JavaScript", icon: "FaJsSquare", color: "#F7DF1E" },
  { name: "React", icon: "FaReact", color: "#61DAFB" },
  { name: "Angular", icon: "FaAngular", color: "#DD0031" },
  { name: "Node.js", icon: "FaNodeJs", color: "#339933" },
  { name: "HTML5", icon: "FaHtml5", color: "#E34F26" },
  { name: "CSS3", icon: "FaCss3Alt", color: "#1572B6" },
  { name: "Git", icon: "FaGitAlt", color: "#F05032" },
  { name: "GitHub", icon: "FaGithub", color: "#181717" },
  { name: "Docker", icon: "FaDocker", color: "#2496ED" },
  { name: "AWS", icon: "FaAws", color: "#FF9900" },
  { name: "Unity", icon: "FaUnity", color: "#000000" },
  { name: "PHP", icon: "FaPhp", color: "#777BB4" },
  { name: "Linux", icon: "FaLinux", color: "#FCC624" },
  { name: "Bootstrap", icon: "FaBootstrap", color: "#7952B3" }
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
    description: "Delivered a Jira reporting web app with Angular dashboard powered by REST APIs and JQL. Spearheaded .NET MAUI migration for iOS/Android, saving $40K and deploying 2 months ahead of schedule. Modernized mobile apps by migrating to React Native from Xamarin, reducing licensing spend by $60K/year. Enabled secure BYOD across mobile portfolio, eliminating company-issued device needs."
  },
  {
    period: "December 2021 - January 2023",
    company: "Maitri & Siya Group of Companies, Mumbai, India",
    position: "Web Developer",
    description: "Launched investor-facing website using React and Material UI with modular components, responsive layout, and WCAG 2.1 AA accessibility standards. Drove 33% increase in new clients in Q2 2023. Leveraged digital marketing to expand outreach and increase social media engagement."
  }
];

export const education = [
  {
    period: "August 2023 - May 2025",
    degree: "Master of Computer Science (CGPA: 3.66/4.0)",
    institution: "Illinois Institute of Technology, Chicago, IL",
    description: "Currently pursuing graduate degree with focus on Machine Learning, Design and Analysis of Algorithms, Computer Networks, and advanced software engineering topics."
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
    icon: "FaMedal",
    title: "Paul Octopus - Football Match Prediction System",
    description: "Assessed and predicted upcoming football match outcomes using data from the past 20 years. Conducted expansive research on algorithms and libraries for model development. Built a Multivariate Linear Regression model with 71.66% accuracy. Authored and published technical paper in Springer LNNS, vol 632, July 2022."
  },
  {
    icon: "FaGamepad",
    title: "Battleships - Multiplayer Game with RESTful API Integration",
    description: "Implemented a Flutter application interfacing with a RESTful service to play Battleships against human and AI opponents. Integrated user registration, login, and session management functionalities using HTTP requests. Developed interactive game boards for ship placement and gameplay, ensuring responsive design across different screen sizes."
  },
  {
    icon: "FaGamepad",
    title: "Momentum Madness - A Rolling Ball Game",
    description: "Designed and developed a 3D arcade game in Unity featuring two levels, with the second offering an infinite high-score challenge. Utilized C# scripts for ball control and incorporated Unity features like box colliders and trail renderers. Programmed chase-down enemies that dynamically spawn at various locations on the map. Deployed locally with WASD controls for Windows and floating joystick for Android."
  },
  {
    icon: "FaTwitter",
    title: "Classification of Tweets as Racist or Non-Racist",
    description: "Developed a model using machine learning to classify tweets as racist or non-racist based on their sentiment by calculating their 'overall polarity score'. Employed K Nearest Neighbors, Support Vector Machines and Naïve-Bayes algorithms to train the classification model. Technologies used: Python, Machine Learning, NLTK, and Scikit-learn."
  },
  {
    icon: "FaIdBadge",
    title: "Customer Segmentation to Help Apply Targeted Marketing",
    description: "Created a model with Data Analysis techniques to segregate and create clusters of different types of customers based on their RFM (Recency, Frequency, and Monetary) factors. Calculated and mapped customers according to their behaviors with statistical Pre-Processing. Adopted K-means Algorithms to cluster customers and draw useful inferences for targeted marketing with data visualization."
  },
  {
    icon: "FaChartLine",
    title: "PredKrypt - Cryptocurrency Price Prediction",
    description: "Developed cryptocurrency prediction model utilizing LSTM, demonstrating expertise in time series analysis and machine learning for financial forecasting. Proceeded through structured sequence of obtaining real-time cryptocurrency data, preparing data for training/testing, employing LSTM neural networks to forecast prices, and rendering prediction results visually. Trained model to forecast Bitcoin (BTC), Ethereum (ETH), and Ripple (XRP) over 30-day horizon."
  }
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

