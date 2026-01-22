import { Project, Experience, Education, Skill, Certification, Achievement, ImpactItem } from './types';

export const PERSONAL_DETAILS = {
  name: "Trishanu Roy",
  tagline: "AI & Robotics Engineer | Innovating for Social Impact",
  location: "New York, USA",
  email: "gtrishanu@gmail.com",
  phone: "+1 (716) 368-8848",
  profileImage: "https://res.cloudinary.com/dhvtvqbnn/image/upload/v1765654126/Trishanu_Roy_Profile_Picture_mnldak.png",
  socials: {
    github: "https://github.com/Trishanu123",
    linkedin: "https://www.linkedin.com/in/trishanu-roy/",
    instagram: "https://www.instagram.com/trishanu_roy/",
    youtube: "https://www.youtube.com/@trishanustech281"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "hasthavani",
    title: "Hasthavani",
    category: "Embedded AI",
    description: "A glove-based system converting Indian Sign Language to speech/text using MPU6050, flex sensors, and ESP32 S3. Secured ₹3.8L funding from Intel & Gatik. Co-Founder.",
    tech: ["ESP32", "TinyML", "C++", "Python", "Sensors"],
    image: "https://res.cloudinary.com/dhvtvqbnn/image/upload/v1765657027/Hasthavani_Image_Mar_23_2025_oc40u3.jpg",
    featured: true,
    link: "https://www.linkedin.com/posts/trishanu-roy_hasthavani-aiforgood-innovation-activity-7309117787329703937-mi2m",
    github: "" 
  },
  {
    id: "spectorn",
    title: "Spectorn",
    category: "Hardware",
    description: "Wearable device aiding the visually impaired using LiDAR and ultrasonic sensors with AI object detection and haptic feedback.",
    tech: ["LiDAR", "Computer Vision", "Embedded C", "Haptics"],
    image: "https://res.cloudinary.com/dhvtvqbnn/image/upload/v1765657028/SCR-20251213-ndbj_e8fwdz.jpg",
    featured: true,
    link: ""
  },
  {
    id: "smart-cane",
    title: "Smart Cane",
    category: "IoT",
    description: "Advanced cane with LiDAR obstacle sensing, OCR for reading text, and voice navigation. Winner of 2 prizes at MakeCU Columbia University.",
    tech: ["Solana", "DigitalOcean", "OCR", "IoT", "LiDAR"],
    image: "https://res.cloudinary.com/dhvtvqbnn/image/upload/v1765653631/pic4_jzmdfo.jpg",
    featured: true,
    link: "https://www.linkedin.com/posts/trishanu-roy_makecu-columbiauniversity-hardwarehackathon-activity-7393520952183021568-gp08"
  },
  {
    id: "loan-recovery-ai",
    title: "AI Loan Recovery Agent",
    category: "AI/NLP",
    description: "Autonomous voice agent for bank loans using Whisper, Flask, and Twilio. Handles end-to-end conversations, negotiation, and logging.",
    tech: ["Whisper", "LLMs", "Flask", "Twilio", "NLP"],
    image: "https://stewarttownsend.com/wp-content/uploads/2024/10/debt-recovery-ai-agents.jpg",
    featured: true,
    github: "https://github.com/Trishanu123/Ai_bank_calling_bot"
  },
  {
    id: "auto-focus",
    title: "Auto Focus",
    category: "Productivity",
    description: "AI browser blocking digital distractions via NLP content filtering. 2nd Place National Hackathon winner.",
    tech: ["NLP", "Web Dev", "AI", "Browser API"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    featured: true,
    link: "https://www.linkedin.com/posts/trishanu-roy_im-excited-to-share-that-my-team-including-activity-7180149104012931072-jdrq"
  },
  {
    id: "rc-aeroplane",
    title: "100km/h RC Plane",
    category: "Robotics",
    description: "Aerodynamically optimized RC plane capable of 100km/h. Iteratively designed through 4 prototypes.",
    tech: ["Aerodynamics", "Rapid Prototyping", "Radio Control"],
    image: "https://res.cloudinary.com/dhvtvqbnn/image/upload/v1765657028/LinkedIn_Post_1712775357314_sedpp4.jpg",
    featured: false,
    link: "https://www.youtube.com/watch?v=2DlqR4RBCMk"
  },
  {
    id: "study-buddy",
    title: "Study Buddy LLM",
    category: "AI/ML",
    description: "Fine-tuned LLM for academic support, providing personalized summaries and learning tips.",
    tech: ["LLM", "Fine-tuning", "Python"],
    image: "https://res.cloudinary.com/dhvtvqbnn/image/upload/v1765657030/Study_Buddy_jh6hfa.png",
    featured: false,
    github: "https://github.com/Trishanu123/llm"
  },
  {
    id: "fpv-drone",
    title: "High-Speed FPV Drone",
    category: "Robotics",
    description: "Custom built high-maneuverability drone for racing. Used for air shows and workshops.",
    tech: ["Drone Physics", "Electronics", "Soldering"],
    image: "https://geprc.com/wp-content/uploads/2023/05/MARK4-7-inch-FPV-2.jpg",
    featured: false,
    link: "https://www.linkedin.com/posts/trishanu-roy_dronebuilding-techjourney-fpvdrone-activity-7249848385229185024-xklG"
  },
  {
    id: "uav-radar",
    title: "UAV Radar System",
    category: "Robotics",
    description: "Drone-mounted radar for terrain mapping and live object detection.",
    tech: ["Radar", "Drone", "Data Processing"],
    image: "https://res.cloudinary.com/dhvtvqbnn/image/upload/v1765657029/SCR-20251213-ndfj_pfeb0h.jpg",
    featured: false,
    link: "https://www.youtube.com/shorts/EQodltE3qTI"
  },
  {
    id: "led-matrix",
    title: "LED Matrix",
    category: "Embedded",
    description: "Programmable LED matrix displaying scrolling text and animations, controlled via Bluetooth.",
    tech: ["Arduino", "Bluetooth", "Electronics"],
    image: "https://res.cloudinary.com/dhvtvqbnn/image/upload/v1765657028/SCR-20251213-ndin_jzop5i.jpg",
    featured: false,
    link: "https://www.youtube.com/shorts/Ys3QdQZBkl0"
  },
  {
    id: "distance-gauge",
    title: "Distance Gauge Meter",
    category: "Embedded",
    description: "Portable ultrasonic distance measurer with OLED display.",
    tech: ["Ultrasonic", "OLED", "Microcontroller"],
    image: "https://res.cloudinary.com/dhvtvqbnn/image/upload/v1765657029/SCR-20251213-ndzp_hwssqw.jpg",
    featured: false,
    link: "https://www.youtube.com/shorts/35upHgOVk1Q"
  },
  {
    id: "autonomous-car",
    title: "Fully Autonomous RC Car",
    category: "Robotics",
    description: "Obstacle-avoiding self-driving car using AI algorithms, lane detection, and PID control.",
    tech: ["AI", "Path Planning", "PID Control"],
    image: "https://res.cloudinary.com/dhvtvqbnn/image/upload/v1765657029/SCR-20251213-nezc_rauqxo.jpg",
    featured: false,
    link: "https://www.youtube.com/shorts/t31rZ-Ven0E"
  },
  {
    id: "anti-theft",
    title: "Anti-Theft System",
    category: "IoT",
    description: "Home security system with ESP32, cloud alerts, and door sensors.",
    tech: ["ESP32", "Cloud", "Sensors"],
    image: "https://res.cloudinary.com/dhvtvqbnn/image/upload/v1765657029/SCR-20251213-ngnb_ffzark.jpg",
    featured: false,
    link: "https://www.youtube.com/watch?v=H6rxvJQm-04"
  },
  {
    id: "home-auto",
    title: "Home Automation System",
    category: "IoT",
    description: "Control home appliances using ESP32 and MQTT via a mobile dashboard.",
    tech: ["ESP32", "MQTT", "Mobile App"],
    image: "https://res.cloudinary.com/dhvtvqbnn/image/upload/v1765657030/SCR-20251213-nhpb_hyt7wa.jpg",
    featured: false,
    link: "https://www.youtube.com/shorts/9mFIWWWCCvQ"
  },
  {
    id: "emotion-detection",
    title: "Emotion Detection AI",
    category: "AI/ML",
    description: "AI model trained to detect facial emotions using CNN and OpenCV.",
    tech: ["CNN", "OpenCV", "Deep Learning"],
    image: "https://cdn.analyticsvidhya.com/wp-content/uploads/2024/04/image-279.png",
    featured: false,
    github: "https://github.com/Trishanu123/emotion_detection"
  },
  {
    id: "bench-supply",
    title: "Bench Power Supply",
    category: "Electronics",
    description: "Custom adjustable voltage power supply for electronics labs.",
    tech: ["Electronics", "Power Systems"],
    image: "https://res.cloudinary.com/dhvtvqbnn/image/upload/v1765657027/LinkedIn_Post_1711959506670_sp9rgg.jpg",
    featured: false,
    link: "https://www.linkedin.com/posts/trishanu-roy_at-just-17-years-old-ive-built-my-very-activity-7180478615132729344-vl2s"
  },
  {
    id: "curl-counter",
    title: "Curl Counter",
    category: "AI/ML",
    description: "Computer vision app counting bicep curls using MediaPipe pose estimation.",
    tech: ["OpenCV", "MediaPipe", "Python"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX2n6MYBu5f2bQhO-wr6EG4vc8eRsd3ho90g&s",
    featured: false,
    github: "https://github.com/Trishanu123/Curl_counter"
  },
  {
    id: "cricket-gesture",
    title: "Cricket Umpire Gesture Recognition",
    category: "AI/ML",
    description: "CV-based classification of cricket umpire gestures.",
    tech: ["OpenCV", "MediaPipe"],
    image: "https://www.cricketbio.com/wp-content/uploads/2018/03/Cricket-Umpire-Hand-Signals.jpg",
    featured: false,
    github: "https://github.com/Trishanu123/cricket_gesture_recognition"
  },
  {
    id: "football-whistle",
    title: "Football Whistle Detector",
    category: "AI/ML",
    description: "AI model detecting umpire whistles, communicating to deaf players via vibration wristband.",
    tech: ["Audio Processing", "IoT", "AI"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLN0umN6z6clJIo6-WL3wFmvrpNajSZNzPYg&s",
    featured: false,
    github: "https://github.com/Trishanu123/football_wistel"
  },
  {
    id: "video-summarizer",
    title: "YouTube Video Summarizer",
    category: "AI/ML",
    description: "Converts YouTube video audio to text and provides a 3-line summary using Llama 3.1.",
    tech: ["LLM", "Flask", "Python"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKNyDq9ZejzOXBKIXrX3_w-bxdAnO-IEGYVg&s",
    featured: false,
    github: "https://github.com/Trishanu123/youtube_vid_summarizer-"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "cub-coders",
    role: "EdTech Video Content Intern",
    company: "Cub Coders",
    duration: "2025",
    description: [
      "Created 4 high-impact coding education videos for K-12 students.",
      "Applied instructional design for complex programming concepts.",
      "Received CEO appreciation for educational impact."
    ],
    link: "https://www.linkedin.com/posts/trishanu-roy_edtech-internship-publicspeaking-activity-7348681223709347844-0fTk"
  },
  {
    id: "iiit-hyd",
    role: "Research Intern (AI & Gesture)",
    company: "IIIT Hyderabad",
    duration: "2024 - 2025",
    description: [
      "Engaged in gesture recognition research using AI and sensors.",
      "Printed custom 3D sensor mounts and developed firmware.",
      "Explored neural networks and TinyML on microcontrollers."
    ]
  },
  {
    id: "t-works",
    role: "Embedded Systems & AI Developer",
    company: "T-Works",
    duration: "2024 - 2025",
    description: [
      "Contributed to 'Hasthavani' at India's largest prototyping center.",
      "Gained expertise in soldering, 3D printing, and PCB design.",
      "Integrated hardware with custom AI models."
    ]
  },
  {
    id: "mindler",
    role: "AI and Data Analysis Intern",
    company: "Mindler",
    duration: "2024",
    description: [
      "Conducted data analysis on student performance data.",
      "Helped develop a recommendation system for career guidance using AI.",
      "Presented data insights to mentors and stakeholders."
    ]
  },
  {
    id: "codiangle",
    role: "Marketing Agent",
    company: "Codiangle",
    duration: "2024",
    description: [
      "Spearheaded lead generation for a national hackathon.",
      "Generated over 10,000 leads via digital marketing campaigns.",
      "Learned CRM management and event branding."
    ],
    link: "https://www.linkedin.com/posts/trishanu-roy_codingal-codebattle-campaigningambassador-activity-7193866060163395584-FoNb"
  },
  {
    id: "abjayon",
    role: "AI, SQL, Power Automate Intern",
    company: "Abjayon",
    duration: "2024",
    description: [
      "Automated workflows using Microsoft Power Automate.",
      "Built SQL queries and Power BI dashboards.",
      "Contributed to AI browser automation and data scraping."
    ],
    link: "https://www.linkedin.com/posts/trishanu-roy_i-am-thrilled-to-announce-that-i-have-successfully-activity-7204194461566787584-A-3h"
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "University at Buffalo (SUNY)",
    degree: "B.S. Computer Science",
    year: "2025 - 2029 (Expected)",
    details: ["Focus on Algorithms, Systems, and Applied AI", "Research & Tech Communities"],
    link: "https://www.linkedin.com/posts/trishanu-roy_newbeginnings-computerscience-ubuffalo-activity-7372811827178758144-6Z4C"
  },
  {
    institution: "Purdue University",
    degree: "Generative AI Specialization",
    year: "2025",
    details: ["GANs, Diffusion Models, Transformers", "Capstone projects in Text-to-Image", "Hugging Face, TensorFlow, PyTorch"],
    link: "https://www.linkedin.com/posts/trishanu-roy_generativeai-artificialintelligence-machinelearning-activity-7366672179553316864-vhN7"
  },
  {
    institution: "Caltech",
    degree: "Post-Grad Program in AI & ML",
    year: "2024",
    details: ["Scored 96% at age 16", "NLP, Computer Vision, Deep Learning", "Real-world AI applications"],
    link: "https://www.linkedin.com/posts/trishanu-roy_caltech-ai-postgraduate-activity-7153072547138359296-bIKX"
  },
  {
    institution: "Gatik Junior College",
    degree: "Class 11 & 12 (TBSE)",
    year: "2024 - 2025",
    details: ["Percentage: 82%", "Maths, Physics, Chemistry, CS", "Research-based learning"],
  },
  {
    institution: "Delhi Public School, Miyapur",
    degree: "Class 10 (CBSE)",
    year: "2023",
    details: ["Percentage: 79%", "Science & Mathematics focus", "Robotics & Programming"]
  }
];

export const SKILLS: Skill[] = [
  // Programming Languages
  { name: "Python", level: 95, category: "Languages" },
  { name: "C++", level: 90, category: "Languages" },
  { name: "JavaScript", level: 85, category: "Languages" },
  { name: "Embedded C", level: 90, category: "Languages" },
  { name: "MicroPython", level: 85, category: "Languages" },
  { name: "TensorFlow", level: 90, category: "Languages" }, // As per request
  { name: "TF-Lite", level: 85, category: "Languages" },    // As per request
  
  // AI/ML Proficiency
  { name: "TensorFlow", level: 90, category: "AI/ML" },
  { name: "PyTorch", level: 85, category: "AI/ML" },
  { name: "Scikit-learn", level: 85, category: "AI/ML" },
  { name: "OpenCV", level: 88, category: "AI/ML" },
  { name: "LLMs", level: 85, category: "AI/ML" },
  { name: "CNNs", level: 90, category: "AI/ML" },
  { name: "NLP", level: 85, category: "AI/ML" },
  { name: "Computer Vision", level: 88, category: "AI/ML" },

  // Embedded Systems
  { name: "ESP32", level: 95, category: "Embedded Systems" },
  { name: "Arduino", level: 95, category: "Embedded Systems" },
  { name: "Raspberry Pi", level: 90, category: "Embedded Systems" },
  { name: "FPGA", level: 70, category: "Embedded Systems" },
  { name: "Sensor Interfacing", level: 95, category: "Embedded Systems" },
  { name: "Seeed ESP32 S3", level: 90, category: "Embedded Systems" },

  // Web Development
  { name: "HTML", level: 90, category: "Web Development" },
  { name: "CSS", level: 85, category: "Web Development" },
  { name: "JavaScript", level: 85, category: "Web Development" },
  { name: "React.js", level: 85, category: "Web Development" },
  { name: "Flask", level: 90, category: "Web Development" },
  { name: "Node.js", level: 80, category: "Web Development" },
  { name: "TypeScript", level: 80, category: "Web Development" },

  // Development Tools
  { name: "GitHub", level: 90, category: "Tools" },
  { name: "VS Code", level: 95, category: "Tools" },
  { name: "PlatformIO", level: 90, category: "Tools" },
  { name: "Arduino IDE", level: 95, category: "Tools" },
  { name: "Docker", level: 75, category: "Tools" },
  { name: "Anaconda", level: 85, category: "Tools" },
  { name: "Bash Terminal", level: 80, category: "Tools" },

  // Product Development
  { name: "3D Printing", level: 90, category: "Product Development" },
  { name: "Fusion 360", level: 85, category: "Product Development" },
  { name: "SolidWorks", level: 75, category: "Product Development" },
  { name: "PCB Design (EasyEDA)", level: 85, category: "Product Development" },
  { name: "Robotics (Mechatronics)", level: 90, category: "Product Development" },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Certified Generative AI Expert",
    issuer: "IIT Hyderabad",
    year: "2025",
    description: "50-hour intensive workshop on LLMs and GenAI.",
    link: "https://www.linkedin.com/posts/trishanu-roy_generativeai-iithyderabad-aiworkshop-activity-7317578031206735872-QyqC"
  },
  {
    name: "Certified Python Developer",
    issuer: "IBM",
    year: "2024",
    description: "In-depth Python, Data Structures, Flask.",
    link: "https://www.linkedin.com/posts/trishanu-roy_datascience-python-ibm-activity-7123558403741777923-J5ek"
  },
  {
    name: "Robotics Expert Level (NXT & EV3)",
    issuer: "Robotics Institute",
    year: "2018",
    description: "Autonomous robots for obstacle navigation.",
    link: "https://www.linkedin.com/posts/trishanu-roy_robotics-automation-youngachiever-activity-7123557901394202625-B94K"
  },
  {
    name: "Game Development",
    issuer: "WhiteHat Jr",
    year: "2016",
    description: "Created games using block-based and script programming.",
    link: "https://www.linkedin.com/posts/trishanu-roy_gamedevelopment-codingjourney-whitehatjr-activity-7219746753388933120-N22i"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "auto-focus-win",
    title: "Auto Focus (Distraction-free Browser)",
    event: "National-Level Hackathon",
    result: "2nd Place",
    link: "https://www.linkedin.com/posts/trishanu-roy_im-excited-to-share-that-my-team-including-activity-7180149104012931072-jdrq"
  },
  {
    id: "ideathon-win",
    title: "Innovation Pitch",
    event: "Ideathon (DPS Miyapur)",
    result: "1st Place",
    link: "https://www.youtube.com/watch?v=vMmVYoZBul4"
  },
  {
    id: "startup-bootcamp",
    title: "Uni Maps (Startup Solution)",
    event: "Startup Boot Camp - Business Competition",
    result: "2nd Place",
    link: "https://www.linkedin.com/posts/trishanu-roy_innovation-ar-indoornavigation-activity-7375671994530533378-M7ki"
  },
  {
    id: "bulls-launch",
    title: "Uni Maps",
    event: "Bulls Launch - Business Competition",
    result: "First-Generation Students Award",
    link: "https://www.linkedin.com/posts/trishanu-roy_ubuffalo-bullslaunch-innovation-activity-7397402422693912576-7ZkY"
  },
  {
    id: "makecu-win",
    title: "Smart Cane",
    event: "MakeCU Hardware Hackathon (Columbia University)",
    result: "Best Use of DigitalOcean & Best Use of Solana",
    link: "https://www.linkedin.com/posts/trishanu-roy_makecu-columbiauniversity-hardwarehackathon-activity-7393520952183021568-gp08"
  }
];

export const IMPACT: ImpactItem[] = [
  {
    id: "ub-deans-list",
    title: "Dean's List Achievement",
    context: "University at Buffalo (Official Merits Page)",
    description: "Featured for academic excellence after earning a place on the Dean's List with a 3.66/4.0 GPA in the first semester at UB.",
    type: "Media",
    link: "https://www.linkedin.com/posts/trishanu-roy_trishanu-roy-named-to-university-at-buffalos-activity-7419925125669761024-4Tmy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA"
  },
  {
    id: "gatik-pulse",
    title: "Hasthavani Innovation",
    context: "Gatik Pulse Magazine",
    description: "Featured for innovation and leadership in the Hasthavani project.",
    type: "Media",
    link: "https://www.linkedin.com/posts/trishanu-roy_hasthavani-innovation-inclusion-activity-7285336337556152320-tCz6/?rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA"
  },
  {
    id: "simply-learn",
    title: "Caltech AI & ML Program at 16",
    context: "Simply Learn YouTube Channel",
    description: "Highlighted for completing Caltech AI & ML program at 16.",
    type: "Media",
    link: "https://www.youtube.com/watch?v=zCw1FTEmtZ0"
  },
  {
    id: "gatik-abjayon",
    title: "Internship Journey at Abjayon",
    context: "Gatik YouTube Channel",
    description: "Interviewed about the Abjayon internship journey.",
    type: "Media",
    link: "https://www.youtube.com/watch?v=02ExjrLWWd4"
  },
  {
    id: "gatik-hasthavani-yt",
    title: "Journey of Hasthavani",
    context: "Gatik YouTube Channel",
    description: "A deep dive into the development journey of Hasthavani.",
    type: "Media",
    link: "https://www.youtube.com/watch?v=dpmMYBI3jYI"
  },
  {
    id: "gatik-insta-hasthavani",
    title: "Hasthavani & Leadership",
    context: "Gatik Instagram",
    description: "Featured for project Hasthavani and leadership in tech events.",
    type: "Media",
    link: "https://www.instagram.com/reel/DAqZhY5ARQd/"
  },
  {
    id: "gatik-insta-drone",
    title: "FPV Drone Workshop & Air Show",
    context: "Gatik Instagram",
    description: "Conducted a FPV drone workshop giving students hands-on experience in simulation and performed an air show.",
    type: "Media",
    link: "https://www.linkedin.com/posts/trishanu-roy_dronetechnology-stemeducation-handsonlearning-activity-7359912254525333504-8slr?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA"
  },
  {
    id: "tech-lead-hackathon",
    title: "Tech Lead – High School Hackathon",
    context: "2023 & 2024",
    description: "Led the technical team, mentored participants, and coordinated event logistics.",
    type: "Leadership",
    link: "https://www.linkedin.com/posts/gatik-junior-college_hackathon-xplorer2024-innovation-ugcPost-7261701923571937280-oscf/?rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA"
  },
  {
    id: "ibm-speaker",
    title: "Public Speaker – IBM AI & ML Seminar",
    context: "IBM (2024)",
    description: "Delivered a seminar to over 400 IBM employees on youth innovation in AI and real-world applications.",
    type: "Speaking",
    link: "https://www.linkedin.com/posts/trishanu-roy_techtalk-ibm-inspiration-activity-7140249273652101122-oQKI/?rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA"
  },
  {
    id: "linear-momentum-pitch",
    title: "Pitch – CEO, Linear Momentum",
    context: "2025",
    description: "Presented Hasthavani to the CEO of a technology company and received strategic feedback and funding support.",
    type: "Leadership",
    link: "https://www.linkedin.com/posts/trishanu-roy_thrilled-to-share-that-siddharth-pilli-and-activity-7271228922694922240-D7jA/?rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA"
  },
  {
    id: "xplorer-speaker",
    title: "Speaker – Xplorer IoT Hackathon",
    context: "2025",
    description: "Conducted a hands-on session on embedded IoT systems and smart applications.",
    type: "Speaking",
    link: "https://www.linkedin.com/posts/trishanu-roy_xplorer2024-hackathon-computervision-activity-7261816014147866624-KTM1/?rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA"
  },
  {
    id: "student-mentor",
    title: "Student Mentor",
    context: "Gatik Junior College (2025)",
    description: "Guided juniors in career planning, technology skill development, and project execution.",
    type: "Leadership",
    link: "" 
  },
  {
    id: "fpv-workshop",
    title: "Workshop on FPV Drones",
    context: "Gatik Junior College",
    description: "Explained FPV drone theory, enabled hands-on learning with simulators, and conducted a high-speed air show.",
    type: "Speaking",
    link: "https://www.linkedin.com/posts/trishanu-roy_dronetechnology-stemeducation-handsonlearning-activity-7359912254525333504-8slr?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA"
  },
  {
    id: "iot-webinar",
    title: "Webinar on IoT & Robotics",
    context: "Gatik Junior College",
    description: "Delivered interactive webinar on IoT/Robotics fundamentals and designed hands-on activities.",
    type: "Speaking",
    link: "https://www.linkedin.com/posts/trishanu-roy_iot-robotics-webinar-activity-7398526327391199233-_aFI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA"
  }
];

export const HASTHAVANI = {
  title: "Hasthavani",
  tagline: "Bridging the communication gap for the hearing and speech impaired.",
  quote: "We believe that communication is a right everyone should have!",
  intro: "Get instant translation of sign language gestures into speech and text, enabling seamless communication with anyone, anywhere.",
  heroImage: "https://res.cloudinary.com/dhvtvqbnn/image/upload/v1765654603/Hasthavani_Image_Mar_23_2025_u33zy2.jpg",
  features: [
    "Real-time gesture recognition and translation",
    "Support for multiple sign languages (ISL, ASL)",
    "Instant text and speech output"
  ],
  partners: [
    "Thermo Fisher",
    "Gatik Jr College", "T-Works", "IIIT Hyderabad", "ValueMomentum", "Intel", "T-Hub", "The Creators"
  ],
  team: [
    {
      name: "Siddharth Pilli",
      role: "Co-Founder",
      bio: "A highly talented young innovator known for his exceptional skills in artificial intelligence, programming, and technology development. His expertise spans multiple domains, including machine learning, embedded systems, and software development.",
      image: "https://res.cloudinary.com/dhvtvqbnn/image/upload/v1765654603/Hasthavani_SCR_Mar_23_2025_zadg5o.jpg"
    },
    {
      name: "Trishanu Roy",
      role: "Co-Founder",
      bio: "A passionate and skilled technologist specializing in AI, embedded systems, and machine learning. His achievements include securing sponsorship from Intel, winning second place at the Knovation Learning Hackathon, and interning at Abjayon at just 17 years old.",
      image: "https://res.cloudinary.com/dhvtvqbnn/image/upload/v1765654126/Trishanu_Roy_Profile_Picture_mnldak.png"
    }
  ],
  stats: [
    { label: "IIIT Hyderabad", value: "Development Partner" },
    { label: "Intel Research", value: "Funded for Facilities" },
    { label: "Gatik Jr College", value: "₹80,000 Funding" },
    { label: "T-Works", value: "Prototyping Partner" },
    { label: "AI Accuracy", value: "98%" },
    { label: "Hardware", value: "Puma Partnership" },
    { label: "Battery", value: "6 Hours" },
  ],
  story: [
    "Hasthavani was born out of a deep desire to bridge the communication gap between the deaf and the mute world. As young innovators passionate about technology and its impact on society, we saw how millions of people who rely on sign language struggle with accessibility in daily life. Inspired by this challenge, we set out to create a solution that could empower them.",
    "Our journey began with a simple question: What if technology could give a voice to the voiceless? This led us to develop Hasthavani—an AI-powered wearable that translates sign language into spoken language in real time. With sensors capturing hand gestures and a machine-learning model interpreting them, we aim to make communication seamless, inclusive, and accessible.",
    "From late-night brainstorming sessions to countless prototypes, our commitment has remained unwavering. Hasthavani isn't just a project—it's a mission to ensure that language is never a barrier for anyone."
  ],
  testimonials: [
    {
      author: "Gopi Prasad",
      role: "CEO, Gatik Jr. College",
      text: "We at Gatik Jr. College are proud to be part of your journey in building Hasthavani, a groundbreaking innovation for bridging communication gaps. Your dedication to creating inclusive solutions is truly inspiring, and we will continue to support you in taking this project to new heights."
    },
    {
      author: "Jayesh Chauhan",
      role: "CEO, ValueMomentum",
      text: "Innovation that creates meaningful impact is the foundation of true technological advancement, and Hasthavani embodies that spirit. At ValueMomentum, we recognize the importance of such visionary projects, and I have no doubt that your work will shape a more inclusive future."
    }
  ],
  links: [
    { title: "Update on Hasthavani", url: "https://www.linkedin.com/posts/trishanu-roy_hasthavani-ai-microcontroller-activity-7187878227766394880-KHta?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA" },
    { title: "Got Funded Post", url: "https://www.linkedin.com/posts/trishanu-roy_innovation-r-entrepreneurship-activity-7210337757297037314-Q9s-?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA" },
    { title: "Project Update", url: "https://www.linkedin.com/posts/trishanu-roy_innovation-accessibility-machinelearning-activity-7237182048849838081-I9Ho?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA" },
    { title: "Live Demo", url: "https://www.linkedin.com/posts/trishanu-roy_signlanguage-ai-machinelearning-activity-7244001187249676291-N7Lm?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA" },
    { title: "Gatik Insta Post", url: "https://www.instagram.com/reel/DAqZhY5ARQd/" },
    { title: "Live Demo (2)", url: "https://www.linkedin.com/posts/trishanu-roy_signlanguage-ai-machinelearning-activity-7250087497756520448-AWuC?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA" },
    { title: "Hasthavani Poster", url: "https://www.linkedin.com/posts/trishanu-roy_hasthavani-explorer2024-gatikjrcollege-activity-7262305258939326466-DVv8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA" },
    { title: "Pitching to ValueMomentum", url: "https://www.linkedin.com/posts/siddharthpilli_me-and-trishanu-roy-have-recently-got-the-ugcPost-7271164427976998912-8LJN?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA" },
    { title: "Poster of Hasthavani", url: "https://www.linkedin.com/posts/siddharthpilli_me-and-trishanu-roy-recently-got-quite-the-ugcPost-7263888563404967936-lvms?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA" },
    { title: "Hasthavani Magazine Feature", url: "https://www.linkedin.com/posts/trishanu-roy_hasthavani-innovation-inclusion-activity-7285336337556152320-tCz6?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA" },
    { title: "Huge Billboard at Gatik", url: "https://www.linkedin.com/posts/trishanu-roy_hasthavani-aiforgood-innovation-activity-7309117787329703937-mi2m?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA" },
    { title: "Meeting Mr. Jayesh (ValueMomentum)", url: "https://www.linkedin.com/posts/trishanu-roy_hasthavani-valuemomentum-signlanguage-activity-7314925460008620032-vTCd?utm_source=share&utm_medium=member_desktop&rcm=ACoAADCfICsBeKb1olSvTaH664RNvQwL4J6brHA" },
    { title: "Gatik Documentary", url: "https://www.youtube.com/watch?v=dpmMYBI3jYI" },
    { title: "Simplilearn Documentary", url: "https://www.youtube.com/watch?v=zCw1FTEmtZ0" }
  ]
};

export const FUN_FACT = "Code is my tool, curiosity is my engine, and impact is my goal.";