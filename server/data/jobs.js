const { v4: uuidv4 } = require('uuid');

// Sample job data with Indian locations and salaries
let jobs = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'TCS (Tata Consultancy Services)',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    salary: '₹12,00,000 - ₹18,00,000',
    description: 'Join TCS as a Senior Software Engineer and work on cutting-edge technologies. You will be responsible for developing scalable applications and mentoring junior developers.',
    requirements: [
      '5+ years of experience in software development',
      'Proficiency in Java, Spring Boot, Microservices',
      'Experience with cloud platforms (AWS, Azure)',
      'Strong problem-solving and leadership skills'
    ],
    postedDate: '2024-01-15',
    deadline: '2024-02-15'
  },
  {
    id: '2',
    title: 'Frontend Developer',
    company: 'Infosys',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    salary: '₹8,00,000 - ₹12,00,000',
    description: 'Create beautiful and responsive user interfaces using React, Angular, and modern CSS frameworks. Work with our global team on innovative projects.',
    requirements: [
      '3+ years of frontend development experience',
      'Strong knowledge of React, Angular, or Vue.js',
      'Experience with TypeScript and modern CSS',
      'Understanding of responsive design principles'
    ],
    postedDate: '2024-01-10',
    deadline: '2024-02-10'
  },
  {
    id: '3',
    title: 'Data Scientist',
    company: 'Wipro',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    salary: '₹10,00,000 - ₹15,00,000',
    description: 'Help us extract insights from large datasets and build predictive models using machine learning and AI technologies.',
    requirements: [
      'Master\'s degree in Statistics, Mathematics, or related field',
      'Experience with Python, R, TensorFlow, PyTorch',
      'Knowledge of machine learning algorithms',
      'Experience with SQL and data visualization tools'
    ],
    postedDate: '2024-01-12',
    deadline: '2024-02-12'
  },
  {
    id: '4',
    title: 'UX/UI Designer',
    company: 'HCL Technologies',
    location: 'Noida, Uttar Pradesh',
    type: 'Full-time',
    salary: '₹7,00,000 - ₹10,00,000',
    description: 'Create amazing user experiences and beautiful interfaces. Work with our design team to bring innovative ideas to life.',
    requirements: [
      '3+ years of UX/UI design experience',
      'Proficiency in Figma, Sketch, or Adobe XD',
      'Understanding of user-centered design principles',
      'Strong portfolio showcasing your work'
    ],
    postedDate: '2024-01-08',
    deadline: '2024-02-08'
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'Tech Mahindra',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    salary: '₹9,00,000 - ₹14,00,000',
    description: 'Build and maintain our cloud infrastructure using AWS, Docker, Kubernetes, and CI/CD pipelines.',
    requirements: [
      '4+ years of DevOps experience',
      'Experience with AWS, Azure, or GCP',
      'Knowledge of Docker, Kubernetes, Jenkins',
      'Experience with infrastructure as code (Terraform)'
    ],
    postedDate: '2024-01-05',
    deadline: '2024-02-05'
  },
  {
    id: '6',
    title: 'Mobile App Developer',
    company: 'L&T Infotech',
    location: 'Chennai, Tamil Nadu',
    type: 'Full-time',
    salary: '₹8,00,000 - ₹13,00,000',
    description: 'Develop innovative mobile applications for iOS and Android platforms using React Native and Flutter.',
    requirements: [
      '3+ years of mobile development experience',
      'Proficiency in React Native, Flutter, or native development',
      'Experience with mobile app architecture',
      'Knowledge of app store guidelines'
    ],
    postedDate: '2024-01-20',
    deadline: '2024-02-20'
  },
  {
    id: '7',
    title: 'Product Manager',
    company: 'Mindtree',
    location: 'Gurgaon, Haryana',
    type: 'Full-time',
    salary: '₹15,00,000 - ₹25,00,000',
    description: 'Lead product strategy and development for our digital transformation solutions. Work with cross-functional teams.',
    requirements: [
      '5+ years of product management experience',
      'Strong analytical and strategic thinking',
      'Experience with Agile methodologies',
      'Excellent communication and leadership skills'
    ],
    postedDate: '2024-01-18',
    deadline: '2024-02-18'
  },
  {
    id: '8',
    title: 'Cybersecurity Analyst',
    company: 'Cognizant',
    location: 'Kolkata, West Bengal',
    type: 'Full-time',
    salary: '₹8,00,000 - ₹12,00,000',
    description: 'Protect our systems and data from cyber threats. Monitor security events and implement security measures.',
    requirements: [
      '3+ years of cybersecurity experience',
      'Knowledge of security tools and frameworks',
      'Experience with incident response',
      'Relevant certifications (CISSP, CEH) preferred'
    ],
    postedDate: '2024-01-22',
    deadline: '2024-02-22'
  },
  {
    id: '9',
    title: 'Business Analyst',
    company: 'Accenture',
    location: 'Delhi, NCR',
    type: 'Full-time',
    salary: '₹7,00,000 - ₹11,00,000',
    description: 'Analyze business processes and requirements to drive digital transformation initiatives.',
    requirements: [
      '3+ years of business analysis experience',
      'Strong analytical and problem-solving skills',
      'Experience with requirement gathering and documentation',
      'Knowledge of business process modeling'
    ],
    postedDate: '2024-01-25',
    deadline: '2024-02-25'
  },
  {
    id: '10',
    title: 'Cloud Architect',
    company: 'IBM India',
    location: 'Ahmedabad, Gujarat',
    type: 'Full-time',
    salary: '₹18,00,000 - ₹30,00,000',
    description: 'Design and implement cloud solutions for enterprise clients using AWS, Azure, and Google Cloud.',
    requirements: [
      '8+ years of IT experience with 4+ in cloud architecture',
      'Expert knowledge of AWS, Azure, or GCP',
      'Experience with cloud migration strategies',
      'Strong understanding of security and compliance'
    ],
    postedDate: '2024-01-28',
    deadline: '2024-02-28'
  },
  {
    id: '11',
    title: 'React Developer',
    company: 'Capgemini',
    location: 'Indore, Madhya Pradesh',
    type: 'Full-time',
    salary: '₹6,00,000 - ₹10,00,000',
    description: 'Build modern web applications using React.js and related technologies. Work on exciting projects.',
    requirements: [
      '2+ years of React development experience',
      'Strong knowledge of JavaScript, ES6+',
      'Experience with Redux, Context API',
      'Understanding of REST APIs and GraphQL'
    ],
    postedDate: '2024-01-30',
    deadline: '2024-02-30'
  },
  {
    id: '12',
    title: 'Python Developer',
    company: 'Larsen & Toubro',
    location: 'Vadodara, Gujarat',
    type: 'Full-time',
    salary: '₹7,00,000 - ₹12,00,000',
    description: 'Develop backend applications and APIs using Python, Django, and Flask frameworks.',
    requirements: [
      '3+ years of Python development experience',
      'Experience with Django, Flask, FastAPI',
      'Knowledge of databases (PostgreSQL, MySQL)',
      'Understanding of RESTful APIs'
    ],
    postedDate: '2024-02-01',
    deadline: '2024-03-01'
  },
  {
    id: '13',
    title: 'QA Engineer',
    company: 'Mphasis',
    location: 'Jaipur, Rajasthan',
    type: 'Full-time',
    salary: '₹5,00,000 - ₹9,00,000',
    description: 'Ensure software quality through comprehensive testing strategies and automation frameworks.',
    requirements: [
      '2+ years of QA experience',
      'Knowledge of testing methodologies',
      'Experience with Selenium, Appium',
      'Understanding of CI/CD pipelines'
    ],
    postedDate: '2024-02-03',
    deadline: '2024-03-03'
  },
  {
    id: '14',
    title: 'Network Engineer',
    company: 'Bharti Airtel',
    location: 'Chandigarh, Punjab',
    type: 'Full-time',
    salary: '₹6,00,000 - ₹10,00,000',
    description: 'Design, implement, and maintain network infrastructure for telecommunications services.',
    requirements: [
      '3+ years of network engineering experience',
      'Knowledge of routing protocols (BGP, OSPF)',
      'Experience with network security',
      'Relevant certifications (CCNA, CCNP) preferred'
    ],
    postedDate: '2024-02-05',
    deadline: '2024-03-05'
  },
  {
    id: '15',
    title: 'Machine Learning Engineer',
    company: 'Reliance Jio',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    salary: '₹12,00,000 - ₹20,00,000',
    description: 'Build and deploy machine learning models for our digital services platform.',
    requirements: [
      '4+ years of ML/AI experience',
      'Proficiency in Python, TensorFlow, PyTorch',
      'Experience with MLOps and model deployment',
      'Strong mathematical and statistical background'
    ],
    postedDate: '2024-02-07',
    deadline: '2024-03-07'
  },
  {
    id: '16',
    title: 'Full Stack Developer',
    company: 'Zensar Technologies',
    location: 'Nagpur, Maharashtra',
    type: 'Full-time',
    salary: '₹8,00,000 - ₹13,00,000',
    description: 'Develop end-to-end web applications using modern technologies and frameworks.',
    requirements: [
      '4+ years of full stack development experience',
      'Proficiency in JavaScript, Node.js, React',
      'Experience with databases and APIs',
      'Knowledge of cloud platforms'
    ],
    postedDate: '2024-02-09',
    deadline: '2024-03-09'
  },
  {
    id: '17',
    title: 'SAP Consultant',
    company: 'SAP Labs India',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    salary: '₹10,00,000 - ₹18,00,000',
    description: 'Implement and customize SAP solutions for enterprise clients across various modules.',
    requirements: [
      '5+ years of SAP implementation experience',
      'Knowledge of SAP modules (FI, MM, SD)',
      'Experience with SAP S/4HANA',
      'Strong business process understanding'
    ],
    postedDate: '2024-02-11',
    deadline: '2024-03-11'
  },
  {
    id: '18',
    title: 'Android Developer',
    company: 'Samsung R&D Institute',
    location: 'Noida, Uttar Pradesh',
    type: 'Full-time',
    salary: '₹9,00,000 - ₹15,00,000',
    description: 'Develop innovative Android applications for Samsung devices and ecosystem.',
    requirements: [
      '3+ years of Android development experience',
      'Proficiency in Java, Kotlin',
      'Experience with Android SDK and NDK',
      'Knowledge of Material Design principles'
    ],
    postedDate: '2024-02-13',
    deadline: '2024-03-13'
  },
  {
    id: '19',
    title: 'iOS Developer',
    company: 'Apple India',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    salary: '₹12,00,000 - ₹20,00,000',
    description: 'Create exceptional iOS applications for Apple ecosystem with focus on performance and user experience.',
    requirements: [
      '4+ years of iOS development experience',
      'Proficiency in Swift, Objective-C',
      'Experience with iOS SDK and frameworks',
      'Understanding of Apple Human Interface Guidelines'
    ],
    postedDate: '2024-02-15',
    deadline: '2024-03-15'
  },
  {
    id: '20',
    title: 'Blockchain Developer',
    company: 'Wipro',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    salary: '₹10,00,000 - ₹18,00,000',
    description: 'Develop blockchain solutions and smart contracts for enterprise applications.',
    requirements: [
      '3+ years of blockchain development experience',
      'Knowledge of Ethereum, Hyperledger',
      'Experience with Solidity, Web3.js',
      'Understanding of cryptography and consensus mechanisms'
    ],
    postedDate: '2024-02-17',
    deadline: '2024-03-17'
  },
  {
    id: '21',
    title: 'Data Engineer',
    company: 'Amazon India',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    salary: '₹15,00,000 - ₹25,00,000',
    description: 'Build and maintain data pipelines and infrastructure for large-scale data processing.',
    requirements: [
      '5+ years of data engineering experience',
      'Experience with Apache Spark, Hadoop, Kafka',
      'Knowledge of SQL and NoSQL databases',
      'Experience with cloud data platforms'
    ],
    postedDate: '2024-02-19',
    deadline: '2024-03-19'
  },
  {
    id: '22',
    title: 'UI/UX Designer',
    company: 'Google India',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    salary: '₹12,00,000 - ₹20,00,000',
    description: 'Design user interfaces and experiences for Google products used by millions of users.',
    requirements: [
      '4+ years of UI/UX design experience',
      'Proficiency in design tools (Figma, Sketch)',
      'Strong understanding of user research',
      'Experience with design systems'
    ],
    postedDate: '2024-02-21',
    deadline: '2024-03-21'
  },
  {
    id: '23',
    title: 'Site Reliability Engineer',
    company: 'Microsoft India',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    salary: '₹14,00,000 - ₹24,00,000',
    description: 'Ensure reliability and performance of Microsoft cloud services and applications.',
    requirements: [
      '5+ years of SRE or DevOps experience',
      'Experience with monitoring and observability tools',
      'Knowledge of infrastructure automation',
      'Strong troubleshooting skills'
    ],
    postedDate: '2024-02-23',
    deadline: '2024-03-23'
  },
  {
    id: '24',
    title: 'Java Developer',
    company: 'Oracle India',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    salary: '₹8,00,000 - ₹14,00,000',
    description: 'Develop enterprise applications using Java and Oracle technologies.',
    requirements: [
      '4+ years of Java development experience',
      'Experience with Spring Framework, Hibernate',
      'Knowledge of Oracle databases',
      'Understanding of microservices architecture'
    ],
    postedDate: '2024-02-25',
    deadline: '2024-03-25'
  },
  {
    id: '25',
    title: 'Angular Developer',
    company: 'Cognizant',
    location: 'Chennai, Tamil Nadu',
    type: 'Full-time',
    salary: '₹7,00,000 - ₹12,00,000',
    description: 'Build dynamic web applications using Angular framework and modern web technologies.',
    requirements: [
      '3+ years of Angular development experience',
      'Strong knowledge of TypeScript',
      'Experience with Angular Material',
      'Understanding of RxJS and state management'
    ],
    postedDate: '2024-02-27',
    deadline: '2024-03-27'
  },
  {
    id: '26',
    title: 'Node.js Developer',
    company: 'Tech Mahindra',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    salary: '₹8,00,000 - ₹13,00,000',
    description: 'Develop scalable backend services using Node.js and Express.js framework.',
    requirements: [
      '3+ years of Node.js development experience',
      'Experience with Express.js, MongoDB',
      'Knowledge of RESTful APIs and GraphQL',
      'Understanding of asynchronous programming'
    ],
    postedDate: '2024-03-01',
    deadline: '2024-04-01'
  },
  {
    id: '27',
    title: 'Vue.js Developer',
    company: 'L&T Infotech',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    salary: '₹6,00,000 - ₹11,00,000',
    description: 'Create modern web applications using Vue.js framework and progressive web technologies.',
    requirements: [
      '2+ years of Vue.js development experience',
      'Strong knowledge of JavaScript and ES6+',
      'Experience with Vuex state management',
      'Understanding of component-based architecture'
    ],
    postedDate: '2024-03-03',
    deadline: '2024-04-03'
  },
  {
    id: '28',
    title: 'PHP Developer',
    company: 'HCL Technologies',
    location: 'Noida, Uttar Pradesh',
    type: 'Full-time',
    salary: '₹5,00,000 - ₹9,00,000',
    description: 'Develop web applications using PHP, Laravel, and MySQL database.',
    requirements: [
      '3+ years of PHP development experience',
      'Experience with Laravel framework',
      'Knowledge of MySQL and database design',
      'Understanding of MVC architecture'
    ],
    postedDate: '2024-03-05',
    deadline: '2024-04-05'
  },
  {
    id: '29',
    title: 'Ruby on Rails Developer',
    company: 'ThoughtWorks',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    salary: '₹8,00,000 - ₹14,00,000',
    description: 'Build robust web applications using Ruby on Rails framework and agile development practices.',
    requirements: [
      '4+ years of Ruby on Rails experience',
      'Strong knowledge of Ruby programming',
      'Experience with PostgreSQL, Redis',
      'Understanding of test-driven development'
    ],
    postedDate: '2024-03-07',
    deadline: '2024-04-07'
  },
  {
    id: '30',
    title: 'Go Developer',
    company: 'Razorpay',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    salary: '₹10,00,000 - ₹18,00,000',
    description: 'Develop high-performance backend services for payment processing using Go programming language.',
    requirements: [
      '3+ years of Go development experience',
      'Experience with microservices architecture',
      'Knowledge of distributed systems',
      'Understanding of payment systems preferred'
    ],
    postedDate: '2024-03-09',
    deadline: '2024-04-09'
  },
  {
    id: '31',
    title: 'Scala Developer',
    company: 'Swiggy',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    salary: '₹12,00,000 - ₹20,00,000',
    description: 'Build scalable data processing systems using Scala and Apache Spark for food delivery platform.',
    requirements: [
      '4+ years of Scala development experience',
      'Experience with Apache Spark, Kafka',
      'Knowledge of functional programming',
      'Understanding of big data technologies'
    ],
    postedDate: '2024-03-11',
    deadline: '2024-04-11'
  },
  {
    id: '32',
    title: 'Kotlin Developer',
    company: 'Flipkart',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    salary: '₹10,00,000 - ₹16,00,000',
    description: 'Develop Android applications using Kotlin for India\'s leading e-commerce platform.',
    requirements: [
      '3+ years of Kotlin/Android development experience',
      'Experience with Android Jetpack components',
      'Knowledge of MVVM architecture',
      'Understanding of e-commerce domain'
    ],
    postedDate: '2024-03-13',
    deadline: '2024-04-13'
  },
  {
    id: '33',
    title: 'Swift Developer',
    company: 'Ola Cabs',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    salary: '₹9,00,000 - ₹15,00,000',
    description: 'Develop iOS applications using Swift for ride-sharing and mobility services.',
    requirements: [
      '3+ years of Swift/iOS development experience',
      'Experience with iOS frameworks and APIs',
      'Knowledge of location services and maps',
      'Understanding of real-time applications'
    ],
    postedDate: '2024-03-15',
    deadline: '2024-04-15'
  },
  {
    id: '34',
    title: 'React Native Developer',
    company: 'Paytm',
    location: 'Noida, Uttar Pradesh',
    type: 'Full-time',
    salary: '₹8,00,000 - ₹14,00,000',
    description: 'Build cross-platform mobile applications using React Native for digital payments platform.',
    requirements: [
      '3+ years of React Native development experience',
      'Experience with mobile app development',
      'Knowledge of payment gateway integration',
      'Understanding of fintech domain'
    ],
    postedDate: '2024-03-17',
    deadline: '2024-04-17'
  },
  {
    id: '35',
    title: 'Flutter Developer',
    company: 'PhonePe',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    salary: '₹7,00,000 - ₹12,00,000',
    description: 'Develop beautiful mobile applications using Flutter for UPI payments and financial services.',
    requirements: [
      '2+ years of Flutter development experience',
      'Experience with Dart programming language',
      'Knowledge of state management (Provider, Bloc)',
      'Understanding of payment systems'
    ],
    postedDate: '2024-03-19',
    deadline: '2024-04-19'
  },
  {
    id: '36',
    title: 'Xamarin Developer',
    company: 'Mahindra Comviva',
    location: 'Gurgaon, Haryana',
    type: 'Full-time',
    salary: '₹6,00,000 - ₹10,00,000',
    description: 'Develop cross-platform mobile applications using Xamarin for financial technology solutions.',
    requirements: [
      '3+ years of Xamarin development experience',
      'Experience with C# and .NET framework',
      'Knowledge of mobile app development',
      'Understanding of fintech domain'
    ],
    postedDate: '2024-03-21',
    deadline: '2024-04-21'
  },
  {
    id: '37',
    title: 'Unity Developer',
    company: 'Nazara Technologies',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    salary: '₹8,00,000 - ₹14,00,000',
    description: 'Develop mobile games and interactive applications using Unity game engine.',
    requirements: [
      '3+ years of Unity development experience',
      'Experience with C# programming',
      'Knowledge of game development principles',
      'Understanding of mobile gaming industry'
    ],
    postedDate: '2024-03-23',
    deadline: '2024-04-23'
  },
  {
    id: '38',
    title: 'Unreal Engine Developer',
    company: 'Dhruva Interactive',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    salary: '₹10,00,000 - ₹18,00,000',
    description: 'Create high-quality 3D games and simulations using Unreal Engine.',
    requirements: [
      '4+ years of Unreal Engine experience',
      'Experience with C++ programming',
      'Knowledge of 3D graphics and game physics',
      'Understanding of game development pipeline'
    ],
    postedDate: '2024-03-25',
    deadline: '2024-04-25'
  },
  {
    id: '39',
    title: 'WordPress Developer',
    company: 'Webkul Software',
    location: 'Noida, Uttar Pradesh',
    type: 'Full-time',
    salary: '₹4,00,000 - ₹8,00,000',
    description: 'Develop custom WordPress themes and plugins for e-commerce and business websites.',
    requirements: [
      '2+ years of WordPress development experience',
      'Experience with PHP, MySQL, JavaScript',
      'Knowledge of WordPress hooks and APIs',
      'Understanding of e-commerce platforms'
    ],
    postedDate: '2024-03-27',
    deadline: '2024-04-27'
  },
  {
    id: '40',
    title: 'Shopify Developer',
    company: 'Codilar Technologies',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    salary: '₹6,00,000 - ₹11,00,000',
    description: 'Develop custom Shopify themes and apps for e-commerce businesses.',
    requirements: [
      '3+ years of Shopify development experience',
      'Experience with Liquid templating language',
      'Knowledge of Shopify APIs and webhooks',
      'Understanding of e-commerce best practices'
    ],
    postedDate: '2024-03-29',
    deadline: '2024-04-29'
  },
  {
    id: '41',
    title: 'Magento Developer',
    company: 'Webkul Software',
    location: 'Noida, Uttar Pradesh',
    type: 'Full-time',
    salary: '₹7,00,000 - ₹12,00,000',
    description: 'Develop custom Magento e-commerce solutions and extensions.',
    requirements: [
      '3+ years of Magento development experience',
      'Experience with PHP, MySQL, JavaScript',
      'Knowledge of Magento architecture and APIs',
      'Understanding of e-commerce workflows'
    ],
    postedDate: '2024-04-01',
    deadline: '2024-05-01'
  },
  {
    id: '42',
    title: 'Salesforce Developer',
    company: 'Cognizant',
    location: 'Chennai, Tamil Nadu',
    type: 'Full-time',
    salary: '₹8,00,000 - ₹15,00,000',
    description: 'Develop custom Salesforce applications and integrations for enterprise clients.',
    requirements: [
      '4+ years of Salesforce development experience',
      'Experience with Apex, Visualforce, Lightning',
      'Knowledge of Salesforce APIs and integrations',
      'Relevant Salesforce certifications preferred'
    ],
    postedDate: '2024-04-03',
    deadline: '2024-05-03'
  },
  {
    id: '43',
    title: 'Power BI Developer',
    company: 'Tata Consultancy Services',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    salary: '₹6,00,000 - ₹11,00,000',
    description: 'Create interactive dashboards and reports using Power BI for business intelligence.',
    requirements: [
      '3+ years of Power BI development experience',
      'Experience with DAX and M Query languages',
      'Knowledge of data modeling and visualization',
      'Understanding of business intelligence concepts'
    ],
    postedDate: '2024-04-05',
    deadline: '2024-05-05'
  },
  {
    id: '44',
    title: 'Tableau Developer',
    company: 'Infosys',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    salary: '₹7,00,000 - ₹12,00,000',
    description: 'Develop data visualizations and analytics dashboards using Tableau.',
    requirements: [
      '3+ years of Tableau development experience',
      'Experience with data visualization best practices',
      'Knowledge of SQL and data analysis',
      'Understanding of business requirements'
    ],
    postedDate: '2024-04-07',
    deadline: '2024-05-07'
  },
  {
    id: '45',
    title: 'QlikView Developer',
    company: 'Wipro',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    salary: '₹6,00,000 - ₹10,00,000',
    description: 'Develop business intelligence solutions using QlikView for data analysis and reporting.',
    requirements: [
      '3+ years of QlikView development experience',
      'Experience with QlikView scripting',
      'Knowledge of data modeling and ETL processes',
      'Understanding of business intelligence'
    ],
    postedDate: '2024-04-09',
    deadline: '2024-05-09'
  },
  {
    id: '46',
    title: 'Microservices Developer',
    company: 'Tech Mahindra',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    salary: '₹10,00,000 - ₹16,00,000',
    description: 'Develop scalable microservices architecture using Spring Boot and cloud technologies.',
    requirements: [
      '4+ years of microservices development experience',
      'Experience with Spring Boot, Docker, Kubernetes',
      'Knowledge of API Gateway and service mesh',
      'Understanding of distributed systems'
    ],
    postedDate: '2024-04-11',
    deadline: '2024-05-11'
  },
  {
    id: '47',
    title: 'API Developer',
    company: 'HCL Technologies',
    location: 'Noida, Uttar Pradesh',
    type: 'Full-time',
    salary: '₹7,00,000 - ₹12,00,000',
    description: 'Design and develop RESTful APIs and GraphQL services for web and mobile applications.',
    requirements: [
      '3+ years of API development experience',
      'Experience with REST, GraphQL, OpenAPI',
      'Knowledge of API security and authentication',
      'Understanding of API documentation'
    ],
    postedDate: '2024-04-13',
    deadline: '2024-05-13'
  },
  {
    id: '48',
    title: 'System Administrator',
    company: 'Bharti Airtel',
    location: 'Delhi, NCR',
    type: 'Full-time',
    salary: '₹6,00,000 - ₹10,00,000',
    description: 'Manage and maintain IT infrastructure including servers, networks, and systems.',
    requirements: [
      '4+ years of system administration experience',
      'Experience with Linux/Unix systems',
      'Knowledge of virtualization and cloud platforms',
      'Understanding of IT security best practices'
    ],
    postedDate: '2024-04-15',
    deadline: '2024-05-15'
  },
  {
    id: '49',
    title: 'Database Administrator',
    company: 'Oracle India',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    salary: '₹8,00,000 - ₹14,00,000',
    description: 'Manage and optimize Oracle databases for enterprise applications.',
    requirements: [
      '5+ years of database administration experience',
      'Experience with Oracle Database, RAC, ASM',
      'Knowledge of database performance tuning',
      'Relevant Oracle certifications preferred'
    ],
    postedDate: '2024-04-17',
    deadline: '2024-05-17'
  },
  {
    id: '50',
    title: 'IT Support Engineer',
    company: 'HCL Technologies',
    location: 'Chennai, Tamil Nadu',
    type: 'Full-time',
    salary: '₹4,00,000 - ₹7,00,000',
    description: 'Provide technical support and troubleshooting for IT infrastructure and applications.',
    requirements: [
      '2+ years of IT support experience',
      'Knowledge of Windows and Linux systems',
      'Experience with help desk tools',
      'Strong customer service skills'
    ],
    postedDate: '2024-04-19',
    deadline: '2024-05-19'
  }
];

// Get all jobs
const getAllJobs = () => {
  return jobs;
};

// Get job by ID
const getJobById = (id) => {
  return jobs.find(job => job.id === id);
};

// Search jobs
const searchJobs = (query) => {
  const searchTerm = query.toLowerCase();
  return jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm) ||
    job.company.toLowerCase().includes(searchTerm) ||
    job.location.toLowerCase().includes(searchTerm) ||
    job.description.toLowerCase().includes(searchTerm)
  );
};

// Add new job
const addJob = (jobData) => {
  const newJob = {
    id: uuidv4(),
    ...jobData,
    postedDate: new Date().toISOString().split('T')[0]
  };
  jobs.push(newJob);
  return newJob;
};

// Update job
const updateJob = (id, jobData) => {
  const index = jobs.findIndex(job => job.id === id);
  if (index !== -1) {
    jobs[index] = { ...jobs[index], ...jobData };
    return jobs[index];
  }
  return null;
};

// Delete job
const deleteJob = (id) => {
  const index = jobs.findIndex(job => job.id === id);
  if (index !== -1) {
    const deletedJob = jobs[index];
    jobs.splice(index, 1);
    return deletedJob;
  }
  return null;
};

module.exports = {
  getAllJobs,
  getJobById,
  searchJobs,
  addJob,
  updateJob,
  deleteJob
}; 