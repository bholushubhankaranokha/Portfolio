export const profile = {
  name: 'Bholu Shubhankar Anokha',
  role: 'AI/ML Engineer · Full-Stack Developer · Data Science | IoT',
  email: 'bholushubhankaranokha@gmail.com',
  phone: '+91 7903071173',
  location: 'New Delhi, Delhi, India',
  github: '',
  linkedin: '',
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
    id: 'nptel',
    title: 'Deep Learning',
    issuer: 'NPTEL',
    image: '/assets/certificates/nptel-deep-learning.png',
    link: '#'
  },
  {
    id: 'coursera',
    title: 'Machine Learning',
    issuer: 'Coursera',
    image: '/assets/certificates/coursera-ml.png',
    link: '#'
  },
  {
    id: 'udemy',
    title: 'React Development',
    issuer: 'Udemy',
    image: '/assets/certificates/udemy-react.png',
    link: '#'
  },
  {
    id: 'hackerrank',
    title: 'Python Programming',
    issuer: 'HackerRank',
    image: '/assets/certificates/hackerrank-python.png',
    link: '#'
  },
  {
    id: 'hackathon',
    title: 'Hackathon',
    issuer: 'Participation',
    image: '/assets/certificates/hackathon.png',
    link: '#'
  }
];

export const githubStats = [
  { label: 'Contributions in the last year', value: '200+', icon: 'github' },
  { label: 'Repositories', value: '15+', icon: 'repo' },
  { label: 'Major Projects', value: '3+', icon: 'project' },
  { label: 'Commits', value: '100+', icon: 'commit' }
];

export const education = [
  { date:'2022 — 2026', title:'B.Tech · Artificial Intelligence & Data Science', place:'Bhagwan Parshuram Institute of Technology', detail:'CGPA 8.26 · New Delhi, India' },
  { date:'2019 — 2022', title:'Diploma · Electrical Engineering', place:'Chhotu Ram Polytechnic', detail:'77.70% · Haryana, India' },
  { date:'2018 — 2019', title:'Class 10', place:'Harihar Singh Academy', detail:'69.40% · Uttar Pradesh, India' }
];

export const assistantKnowledge = [
  { keys:['who','about','bholu','yourself','introduction'], answer:`I'm ${profile.name}, an AI Engineer and Full-Stack Developer based in ${profile.location}. I enjoy building machine-learning projects, web applications, and IoT systems.` },
  { keys:['education','degree','college','btech','cgpa','diploma'], answer:'I completed a B.Tech in Artificial Intelligence and Data Science at Bhagwan Parshuram Institute of Technology (CGPA 8.26). I also hold a Diploma in Electrical Engineering from Chhotu Ram Polytechnic.' },
  { keys:['skill','stack','technology','technologies','language'], answer:'My skills include Python, C/C++, JavaScript, React, Redux, Node.js, Express, MongoDB, PostgreSQL, machine learning, deep learning, TensorFlow, PyTorch, NLP/LLMs, and IoT with Arduino and ESP32.' },
  { keys:['rescueai','rescue','flood'], answer:'RescueAI is an AI-based flood victim detection project. It explores computer vision and deep-learning techniques to identify stranded people in aerial imagery and support disaster-response teams.' },
  { keys:['weather','bilstm','lstm','forecast'], answer:'My Bi-LSTM Weather Forecasting project uses time-series modelling with Python, TensorFlow, and Keras, including comparisons between LSTM and Bi-LSTM approaches.' },
  { keys:['air quality','air-quality','esp32','iot'], answer:'The Smart AI-Based Air Quality Monitoring project combines gas sensors and ESP32 with machine-learning ideas to classify air-quality levels and visualize readings.' },
  { keys:['logiedge','billing'], answer:'LogiEdge is a billing-management dashboard project using React on the frontend and a Node.js/Express/PostgreSQL stack.' },
  { keys:['razorpay','payment'], answer:'The Razorpay Clone is a responsive payment-website interface built with HTML, Tailwind CSS, and Vite.' },
  { keys:['intern','experience','vibhum','ostr ichfit','ostrichfit'], answer:'I worked remotely as a Web Developer Intern at Vibhum Software from July to August 2024, contributing to web applications, REST APIs, responsive UI, and frontend/backend integration for Ostrichfit.com.' },
  { keys:['resume','résumé','cv','download'], answer:'You can view or download my résumé using the Résumé section on this page. The PDF is included with this website.' },
  { keys:['certificate','certification'], answer:'Certificate images can be added to the Certificates section. Only genuine certificates and verification links should be listed there.' },
  { keys:['contact','email','reach','phone','hire','collaborate'], answer:`You can reach me at ${profile.email} or call ${profile.phone}. Use the contact form and it will prepare an email in your default mail application.` },
  { keys:['github','repository','repo','code'], answer:'Project repository links are not configured yet. Add your verified GitHub profile and repository URLs to src/data/portfolio.js and the project data.' },
  { keys:['radar','arduino'], answer:'My Arduino RADAR project uses an ultrasonic sensor and servo motor to detect objects and display distance readings over serial communication.' },
  { keys:['navigate','sections','website'], answer:'Use the navigation at the top to explore About, Skills, Projects, Résumé, GitHub activity, Certificates, and Contact. The floating assistant can answer questions about my work.' }
];
