import React, { useState, useEffect } from 'react';
import { Code, ExternalLink, Github, ArrowLeft, Tags, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    "/src/assets/Season3ShowGIFbyNanalan-ezgif.com-resize (1).gif",
    "/api/placeholder/800/400",
    "/api/placeholder/800/400"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="relative">
          <div className="relative h-[400px] overflow-hidden">
            <img 
              src={images[currentImageIndex]}
              alt={`Project slide ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            {/* <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
            >
              <ChevronRight className="w-6 h-6" />
            </button> */}
          </div>
          {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  currentImageIndex === index ? 'bg-white' : 'bg-gray-500'
                }`}
              />
            ))}
          </div> */}
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Project Overview</h3>
            <p className="text-gray-400">{project.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Key Features</h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>Feature 1: Lorem ipsum dolor sit amet</li>
              <li>Feature 2: Consectetur adipiscing elit</li>
              <li>Feature 3: Sed do eiusmod tempor incididunt</li>
            </ul>
          </div> */}

          <div className="flex gap-4">
            <a 
              href={project.github}
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
            >
              <Github className="w-5 h-5" />
              View Source
            </a>
            <a 
              href={project.demo}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const [selectedTag, setSelectedTag] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const tags = ['all', 'react', 'typescript', 'python'];
  
  const completedProjects = [
    {
      title: "Packet Patrol",
      description: "A functional IDS built to expand my skill set in cybersecurity, Python, and full-stack development.",
      image: "/src/assets/ids-protection.png",
      tags: ["Python",
        "Scapy",
        "Pandas",
        "Numpy",
        "Matplotlib",
        "Seaborn"],
      github: "https://github.com/Jahshiek/Packet-Patrol",
      // demo: "#"
    },
    {
        title: "Lonely together",
        description: "An online platform developed with  Next.js, TypeScript, Prisma, AWS S3, and Supabase to connect individuals through community events and shared interests.",
        image: "src/assets/lonely-together/lonely.jpg",
        tags: ["Next.js",
          "TypeScript",
          "Prisma",
          "Redux",
          "Supabase",
          "Aws S3"],
        github: "https://github.com/Jahshiek/Lonely-Together",
        demo: "#"
    },
    // /Users/jahw/Development/deployed1/portfolio/src/assets/lonely-together/lonely.jpg
    {
        title: "Second Wind",
        description: "Smart task management system with natural language processing and automated prioritization. Features include task categorization, priority inference, and deadline management.",
        image: "src/assets/prison.jpg",
        tags: ['react', 'Node', 'Websocket', 'Express'],
        github: "https://github.com/Jahshiek/Second_Wind-",
        demo: "#"
    },
    {
        title: "Weather api with Caching",
        description: "Smart task management system with natural language processing and automated prioritization. Features include task categorization, priority inference, and deadline management.",
        image: "src/assets/weather-api.jpg",
        tags: ['Flask', 'Redis', 'Python'],
        github: "https://github.com/Jahshiek/weatherApi-cache",
        demo: "#"
    },
    {
        title: "Gov-watchers",
        description: "An in-depth analysis that examines the cost of living and purchasing power in relation to inflation, the Consumer Price Index (CPI), and the valuation of the U.S. dollar, all set against the backdrop of median household income and minimum wage.",
        image: "/src/assets/gov-watchers.jpg",
        tags: ['react', 'typescript', 'python'],
        github: "https://github.com/GOV-watchers/g-WATCH",
        demo: "#"
    },
    {
      title: "Fight-For-Ethan",
      description: "A Mortal Kombat clone created using HTML, CSS, and Vanilla JavaScript.",
      image: "/src/assets/file.png",
      tags: ['html5', 'javascript', 'css'],
      github: "https://github.com/ELJGaming/Project-Week-Fighting-Game-2.0",
      demo: "https://eljgaming.github.io/Project-Week-Fighting-Game-2.0/"
    }
  ];

  const upcomingProjects = [
    {
      title: "Blog api with caching and user auth",
      description: "it is just to explore caching deeper",
      image: "/src/assets/comingsoon.jpg",
      tags: ['flask', 'python', 'redis'],
      status: "In Development "
    },

  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredCompleted = selectedTag === 'all' 
    ? completedProjects 
    : completedProjects.filter(project => project.tags.includes(selectedTag));

  const filteredUpcoming = selectedTag === 'all'
    ? upcomingProjects
    : upcomingProjects.filter(project => project.tags.includes(selectedTag));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <nav className="flex justify-between items-center mb-16">
          <div className="text-2xl font-bold flex items-center gap-2">
            <Code className="text-blue-400" />
            <span>DevPortfolio</span>
          </div>
          <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </nav>

        <main className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore my completed projects and get a sneak peek at what's coming next.
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full transition-all transform hover:scale-105
                  ${selectedTag === tag 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
              >
                <div className="flex items-center gap-2">
                  <Tags className="w-4 h-4" />
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </div>
              </button>
            ))}
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Pinned Projects on Github</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCompleted.map((project, index) => (
                <div 
                  key={index}
                  className="bg-gray-800 rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span 
                          key={tag}
                          className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8">Coming Soon</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredUpcoming.map((project, index) => (
                <div 
                  key={index}
                  className="bg-gray-800 rounded-lg overflow-hidden relative group"
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.status}</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {project.tags.map(tag => (
                          <span 
                            key={tag}
                            className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover opacity-50"
                  />
                </div>
              ))}
            </div>
          </section>
        </main>

        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;