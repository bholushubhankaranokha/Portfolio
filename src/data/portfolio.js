export const profile = {
  name: 'Bholu Shubhankar Anokha',
  role: 'AI/ML Engineer · Full-Stack Developer · Data Science | IoT',
  email: 'bholushubhankaranokha@gmail.com',
  location: 'New Delhi, Delhi, India',
  github: 'https://github.com/bholushubhankaranokha',
  linkedin: 'https://linkedin.com',
  summary: "I'm Bholu Shubhankar Anokha, an AI Engineer and Full-Stack Developer passionate about transforming ideas into intelligent solutions. With a background in Artificial Intelligence and Data Science, I specialize in Machine Learning, Deep Learning, Generative AI, and modern web development. From building AI-powered systems like RescueAI to developing scalable web applications, I enjoy solving real-world challenges through technology. I believe in continuous learning, creative problem-solving, and innovation, with a goal of building impactful products that make technology smarter, more accessible, and meaningful."
};

export const projects = [
  {
    id: 'rescueai',
    number: '01',
    title: 'RescueAI',
    subtitle: 'Flood Victim Detection System',
    category: 'AI & Computer Vision',
    description: 'An autonomous disaster intelligence system to detect victims using YOLO11, SAHI, LLaVA and DeepSeek-R1.',
    tags: ['Python', 'YOLO11', 'SAHI', 'LLaVA'],
    image: '/assets/projects/rescueai.png',
    demo: 'https://github.com',
    github: 'https://github.com',
    featured: true
  },
  {
    id: 'logiedge',
    number: '02',
    title: 'LogiEdge',
    subtitle: 'Billing Management Dashboard',
    category: 'Full-Stack Web App',
    description: 'A full-stack billing dashboard for managing invoices, customers, products and reports with modern UI/UX.',
    tags: ['React', 'Node.js', 'Express.js', 'PostgreSQL'],
    image: '/assets/projects/logiedge.png',
    demo: 'https://github.com',
    github: 'https://github.com',
    featured: true
  },
  {
    id: 'razorpay',
    number: '03',
    title: 'Razorpay Clone',
    subtitle: 'Responsive Payment Website',
    category: 'Frontend Project',
    description: 'A modern and responsive payment website clone built with HTML, Tailwind CSS and Vite.',
    tags: ['HTML', 'Tailwind CSS', 'Vite'],
    image: '/assets/projects/razorpay.png',
    demo: 'https://github.com',
    github: 'https://github.com',
    featured: true
  },
  {
    id: 'weather',
    number: '04',
    title: 'Bi-LSTM Weather Forecasting',
    subtitle: 'Sequence modelling for weather data',
    category: 'Machine Learning',
    description: 'A time-series forecasting project using LSTM and Bi-LSTM approaches, normalized datasets, and model comparisons to explore weather prediction stability.',
    tags: ['Python', 'TensorFlow', 'Keras', 'Bi-LSTM'],
    image: '/assets/projects/rescueai.png',
    demo: 'https://github.com',
    github: 'https://github.com',
    featured: false
  },
  {
    id: 'air-quality',
    number: '05',
    title: 'Smart Air Quality Monitor',
    subtitle: 'AI + IoT environmental monitoring',
    category: 'AI / IoT',
    description: 'An ESP32 and sensor-based air-quality monitoring concept combining pollution readings, machine-learning classification, and real-time data visualization.',
    tags: ['Python', 'ESP32', 'IoT', 'Machine Learning'],
    image: '/assets/projects/logiedge.png',
    demo: 'https://github.com',
    github: 'https://github.com',
    featured: false
  },
  {
    id: 'radar',
    number: '06',
    title: 'Arduino RADAR System',
    subtitle: 'Ultrasonic object detection',
    category: 'IoT / Hardware',
    description: 'A mini RADAR system using an ultrasonic sensor and servo motor to detect nearby objects and visualize distance readings over serial communication.',
    tags: ['Arduino', 'Ultrasonic Sensor', 'Embedded Systems'],
    image: '/assets/projects/rescueai.png',
    demo: 'https://github.com',
    github: 'https://github.com',
    featured: false
  },
  {
    id: 'weather-app',
    number: '07',
    title: 'Weather App',
    subtitle: 'Weather at a glance',
    category: 'Frontend Development',
    description: 'A responsive weather application concept with city search, geolocation-based detection, and weather details such as temperature, humidity, and wind speed.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/assets/projects/razorpay.png',
    demo: 'https://github.com',
    github: 'https://github.com',
    featured: false
  }
];

export const skillGroups = [
  {
    name: 'All',
    skills: [
      'C', 'C++', 'JavaScript', 'Java', 'Python',
      'Machine Learning', 'Deep Learning', 'CNN', 'RNN', 'LLM', 'NLP', 'LSTM', 'Bi-LSTM', 'Model Evaluation', 'Data Preprocessing', 'RAG', 'Gen AI',
      'NumPy', 'Pandas', 'Matplotlib', 'scikit-learn', 'TensorFlow', 'Keras', 'PyTorch',
      'HTML', 'CSS', 'Tailwind CSS', 'React.js', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs',
      'Arduino', 'ESP32', 'Sensors Integration',
      'Git/GitHub', 'Google Colab', 'VS Code', 'Postman', 'Tinkercad'
    ]
  },
  {
    name: 'Languages',
    skills: ['C', 'C++', 'JavaScript', 'Java', 'Python']
  },
  {
    name: 'Frontend',
    skills: ['HTML', 'CSS', 'Tailwind CSS', 'React.js', 'Redux']
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs']
  },
  {
    name: 'Databases',
    skills: ['MongoDB', 'PostgreSQL']
  },
  {
    name: 'AI/ML',
    skills: [
      'Machine Learning', 'Deep Learning', 'CNN', 'RNN', 'LLM', 'NLP', 'LSTM', 'Bi-LSTM',
      'Model Evaluation', 'Data Preprocessing', 'RAG', 'Gen AI',
      'NumPy', 'Pandas', 'Matplotlib', 'scikit-learn', 'TensorFlow', 'Keras', 'PyTorch'
    ]
  },
  {
    name: 'Tools & Others',
    skills: [
      'Git/GitHub', 'Google Colab', 'VS Code', 'Postman', 'Tinkercad',
      'Arduino', 'ESP32', 'Sensors Integration'
    ]
  }
];

export const certificates = [
  {
    id: 'hcl-guvi',
    title: 'ChatGPT for Students · The Bharat AI Initiative',
    issuer: 'HCL GUVI · Powered by OpenAI',
    image: '/assets/certificates/HCL GUVI.png',
    link: '/assets/certificates/HCL GUVI.png'
  },
  {
    id: 'iit-bombay',
    title: 'Java Training & Certification',
    issuer: 'IIT Bombay · Spoken Tutorial',
    image: '/assets/certificates/IIT Java Training.jpeg',
    link: '/assets/certificates/IIT Java Training.jpeg'
  },
  {
    id: 'pw-aiml',
    title: 'AI/ML Launchpad Bootcamp',
    issuer: 'Physics Wallah · NSDC',
    image: '/assets/certificates/Banking Chatbot.png',
    link: '/assets/certificates/Banking Chatbot.png'
  }
];

export const githubStats = [
  { label: 'Contributions in the last year', value: '200+', icon: 'github' },
  { label: 'Repositories', value: '15+', icon: 'repo' },
  { label: 'Major Projects', value: '3+', icon: 'project' },
  { label: 'Commits', value: '100+', icon: 'commit' }
];

export const education = [
  { date: '2022 — 2026', title: 'B.Tech · Artificial Intelligence & Data Science', place: 'Bhagwan Parshuram Institute of Technology', detail: 'CGPA 8.26 · New Delhi, India' },
  { date: '2019 — 2022', title: 'Diploma · Electrical Engineering', place: 'Chhotu Ram Polytechnic', detail: '77.70% · Haryana, India' },
  { date: '2018 — 2019', title: 'Class 10', place: 'Harihar Singh Academy', detail: '69.40% · Uttar Pradesh, India' }
];

export const assistantKnowledge = [
  {
    keys: ['who', 'about', 'bholu', 'yourself', 'introduction', 'bio'],
    answer: "I'm Bholu Shubhankar Anokha, an AI Engineer and Full-Stack Developer based in New Delhi, India. I specialize in Machine Learning, Deep Learning, Computer Vision, Generative AI, and modern web development. I love turning innovative ideas into practical, intelligent, and scalable solutions!"
  },
  {
    keys: ['project', 'work', 'portfolio', 'featured', 'built'],
    answer: "Here are some of Bholu's major projects:\n• 1. RescueAI — Autonomous Flood Victim Detection using YOLO11, SAHI, LLaVA & DeepSeek-R1.\n• 2. LogiEdge — Full-stack billing management dashboard built with React, Node.js, Express, and PostgreSQL.\n• 3. Razorpay Clone — Pixel-perfect payment gateway web interface built with HTML, Tailwind CSS, and Vite.\n• 4. Bi-LSTM Weather Forecasting — Deep learning time-series meteorological prediction model.\n• 5. Smart Air Quality Monitoring — Embedded IoT system with MQ gas sensors & ESP32."
  },
  {
    keys: ['rescueai', 'rescue', 'flood', 'disaster', 'victim'],
    answer: "RescueAI is an autonomous disaster intelligence system designed to detect flood victims from aerial and drone imagery. It combines YOLO11 for high-precision object detection, SAHI for sliced inference on small human targets, and LLaVA with DeepSeek-R1 for vision-language situational reasoning and automated rescue coordination reports."
  },
  {
    keys: ['logiedge', 'billing', 'invoice', 'dashboard'],
    answer: "LogiEdge is a full-stack billing and operations management dashboard built with React, Node.js, Express.js, and PostgreSQL. It features real-time invoice generation, product inventory tracking, customer analytics, and revenue summaries with instant export options."
  },
  {
    keys: ['razorpay', 'payment', 'clone'],
    answer: "The Razorpay Clone is a modern, responsive fintech payment platform interface built with HTML, Tailwind CSS, and Vite, featuring developer integration flows, banking product showcases, and mobile-first responsive design."
  },
  {
    keys: ['weather', 'forecast', 'bilstm', 'lstm'],
    answer: "The Bi-LSTM Weather Forecasting project implements bidirectional Long Short-Term Memory neural networks using Python, TensorFlow, and Keras. It captures temporal sequence dependencies to predict weather parameters with significantly higher accuracy than standard unidirectional models."
  },
  {
    keys: ['iot', 'air quality', 'sensor', 'esp32', 'arduino', 'radar', 'hardware'],
    answer: "Bholu has developed multiple embedded and IoT systems:\n• Smart AI-Based Air Quality Monitor: Real-time environmental tracking with MQ gas sensors, ESP32, and ML-based air quality classification.\n• Arduino RADAR System: Ultrasonic sensor and servo motor system tracking and mapping surrounding objects via serial communication."
  },
  {
    keys: ['skill', 'stack', 'technology', 'technologies', 'language', 'tools'],
    answer: "Bholu's core technical skills include:\n• AI & Machine Learning: Python, TensorFlow, PyTorch, Keras, scikit-learn, OpenCV, YOLO11, SAHI, CNN, RNN, LSTM, Bi-LSTM, GenAI / LLMs, RAG, LLaVA, DeepSeek-R1.\n• Full-Stack Development: JavaScript, React, Redux, Node.js, Express.js, PostgreSQL, MongoDB, HTML5, CSS3, Tailwind CSS, Vite.\n• Hardware & Tools: Arduino, ESP32, Git/GitHub, Postman, Google Colab, VS Code."
  },
  {
    keys: ['education', 'degree', 'college', 'btech', 'cgpa', 'diploma', 'school', 'university'],
    answer: "Bholu's educational background:\n• B.Tech in Artificial Intelligence & Data Science at Bhagwan Parshuram Institute of Technology (CGPA 8.26 · 2022–2026).\n• Diploma in Electrical Engineering from Chhotu Ram Polytechnic (77.70% · 2019–2022).\n• Class 10 from Harihar Singh Academy (69.40% · 2018–2019)."
  },
  {
    keys: ['certificate', 'certification', 'achievement', 'achievements'],
    answer: "Bholu holds 3 verified certifications:\n1. ChatGPT for Students · The Bharat AI Initiative — HCL GUVI (Powered by OpenAI).\n2. Java Training & Certification — Spoken Tutorial, IIT Bombay.\n3. AI/ML Launchpad Bootcamp — Physics Wallah & NSDC.\nYou can inspect each high-resolution certificate directly in the Certificates & Achievements section on this page!"
  },
  {
    keys: ['intern', 'experience', 'job', 'vibhum', 'ostrichfit'],
    answer: "Bholu worked as a Web Developer Intern at Vibhum Software (July – August 2024), where he developed responsive user interfaces, built scalable RESTful APIs, optimized database operations, and led frontend/backend integration for Ostrichfit.com."
  },
  {
    keys: ['resume', 'résumé', 'cv', 'download', 'pdf'],
    answer: "You can view and download Bholu's official résumé directly in the 'MY RESUME' section of this website, or use the 'Download Resume' button at the top right of the navigation bar!"
  },
  {
    keys: ['github', 'repository', 'repo', 'code', 'contribution', 'snake', 'commits'],
    answer: "Bholu is active on GitHub with 200+ contributions over the past year, 15+ repositories, and 3+ major projects. Check out the interactive GitHub Activity and Contribution Snake tracker on this portfolio or visit https://github.com/bholushubhankaranokha!"
  },
  {
    keys: ['contact', 'email', 'reach', 'hire', 'collaborate', 'message'],
    answer: `You can easily connect with Bholu:\n• Email: ${profile.email}\n• LinkedIn: linkedin.com/in/bholushubhankaranokha\n• Contact Form: Scroll down to the 'GET IN TOUCH' section — the form connects directly via EmailJS to deliver your message instantly!`
  },
  {
    keys: ['phone', 'call', 'number', 'mobile', 'whatsapp'],
    answer: `For business inquiries and collaborations, please reach out via Email (${profile.email}), LinkedIn, or submit a message using the 'GET IN TOUCH' contact form on this portfolio!`
  },
  {
    keys: ['hello', 'hi', 'hey', 'greetings', 'namaste'],
    answer: `Hello there! 👋 I'm Bholu's AI Assistant. Ask me anything about his AI/ML projects, technical skills, certifications, education, resume, or contact details!`
  }
];

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
};
