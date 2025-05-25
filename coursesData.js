export const coursesData = [
  // JEE Courses
  {
    id: '1',
    title: 'JEE Physics - Mechanics & Kinematics',
    description: 'Master the fundamentals of mechanics and kinematics for JEE Main and Advanced. This course covers Newton\'s laws, projectile motion, work-energy theorem, and rotational dynamics with solved examples and practice problems.',
    category: 'jee',
    image: 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    lessons: 32,
    duration: '24 hours',
    level: 'Advanced',
    featured: true,
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: '2',
    title: 'JEE Chemistry - Organic Reactions',
    description: 'Comprehensive guide to organic reactions and mechanisms for JEE. Learn about nucleophilic substitution, elimination reactions, addition reactions, and more with detailed explanations and shortcuts.',
    category: 'jee',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    lessons: 28,
    duration: '20 hours',
    level: 'Intermediate',
    featured: false,
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: '3',
    title: 'JEE Mathematics - Calculus',
    description: 'Master calculus concepts essential for JEE Main and Advanced. This course covers limits, continuity, differentiation, integration, application of derivatives, and definite integrals with solved problems.',
    category: 'jee',
    image: 'https://images.pexels.com/photos/6238041/pexels-photo-6238041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    lessons: 40,
    duration: '30 hours',
    level: 'Advanced',
    featured: true,
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: '4',
    title: 'JEE Physics - Electromagnetism',
    description: 'Comprehensive coverage of electromagnetism for JEE. Learn about electric fields, magnetic fields, electromagnetic induction, and Maxwell\'s equations with practical examples and problem-solving techniques.',
    category: 'jee',
    image: 'https://images.pexels.com/photos/6044198/pexels-photo-6044198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    lessons: 35,
    duration: '26 hours',
    level: 'Advanced',
    featured: false,
    youtubeId: 'dQw4w9WgXcQ'
  },
  
  // NEET Courses
  {
    id: '5',
    title: 'NEET Biology - Human Physiology',
    description: 'In-depth exploration of human physiology for NEET preparation. This course covers the digestive system, respiratory system, circulatory system, excretory system, and nervous system with detailed diagrams and explanations.',
    category: 'neet',
    image: 'https://images.pexels.com/photos/8412540/pexels-photo-8412540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    lessons: 45,
    duration: '32 hours',
    level: 'Intermediate',
    featured: true,
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: '6',
    title: 'NEET Chemistry - Organic Chemistry',
    description: 'Comprehensive coverage of organic chemistry for NEET. Learn about hydrocarbons, alcohols, aldehydes, ketones, carboxylic acids, and biomolecules with reaction mechanisms and important name reactions.',
    category: 'neet',
    image: 'https://images.pexels.com/photos/5940706/pexels-photo-5940706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    lessons: 38,
    duration: '28 hours',
    level: 'Advanced',
    featured: false,
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: '7',
    title: 'NEET Physics - Optics & Modern Physics',
    description: 'Master optics and modern physics concepts for NEET. This course covers ray optics, wave optics, dual nature of matter and radiation, atoms and nuclei, and semiconductor devices with practice problems.',
    category: 'neet',
    image: 'https://images.pexels.com/photos/60582/newton-s-cradle-balls-sphere-action-60582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    lessons: 30,
    duration: '22 hours',
    level: 'Intermediate',
    featured: true,
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: '8',
    title: 'NEET Biology - Genetics & Evolution',
    description: 'Comprehensive guide to genetics and evolution for NEET preparation. Learn about Mendelian genetics, chromosomal theory of inheritance, molecular basis of inheritance, evolution, and human health and diseases.',
    category: 'neet',
    image: 'https://images.pexels.com/photos/4031323/pexels-photo-4031323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    lessons: 42,
    duration: '30 hours',
    level: 'Advanced',
    featured: false,
    youtubeId: 'dQw4w9WgXcQ'
  },
  
  // Coding Courses
  {
    id: '9',
    title: 'Web Development Fundamentals',
    description: 'Learn the basics of web development with HTML, CSS, and JavaScript. This course covers DOM manipulation, responsive design, and building interactive websites with modern web technologies.',
    category: 'coding',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    lessons: 50,
    duration: '40 hours',
    level: 'Beginner',
    featured: true,
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: '10',
    title: 'Python for Data Science',
    description: 'Master Python programming for data science and machine learning. Learn about NumPy, Pandas, Matplotlib, and scikit-learn for data manipulation, visualization, and building predictive models.',
    category: 'coding',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    lessons: 45,
    duration: '36 hours',
    level: 'Intermediate',
    featured: false,
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: '11',
    title: 'React.js for Frontend Development',
    description: 'Comprehensive guide to building modern user interfaces with React.js. Learn about components, props, state, hooks, context API, and Redux for state management with hands-on projects.',
    category: 'coding',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    lessons: 48,
    duration: '38 hours',
    level: 'Intermediate',
    featured: true,
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: '12',
    title: 'Data Structures and Algorithms',
    description: 'Master data structures and algorithms for coding interviews and competitive programming. Learn about arrays, linked lists, stacks, queues, trees, graphs, sorting, searching, and dynamic programming.',
    category: 'coding',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    lessons: 60,
    duration: '45 hours',
    level: 'Advanced',
    featured: false,
    youtubeId: 'dQw4w9WgXcQ'
  }
]