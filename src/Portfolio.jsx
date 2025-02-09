
                                              
                                              
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ExternalLinkIcon,
  Moon,
  Sun,
  Code,
  Palette,
  Brain,
  GamepadIcon,
  Cctv
} from 'lucide-react';
import ExperienceGrid from './Components/ExperienceGrid';
import SkillsSection from './Components/SkillsSection';
// import Navbar from './Components/Navbar';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsVisible(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { id: 'all', label: 'All', icon: Code },
    { id: 'Full-Stack', label: 'Full-Stack', icon: Palette },
    { id: 'backend', label: 'Backend', icon: Brain },
    { id: 'gamedev', label: 'Game Dev', icon: GamepadIcon },
    { id: 'cyber', label: 'Cyber', icon: Cctv },
  ];

  const projects = [
    {
      id: 1,
      title: "Second Wind",
      description: "An online community-based platform, that provides resources, support, and employment opportunities for individuals impacted by the criminal justice system.",
      image: "/assets/second-wind.png",
      tags: ["React", "Node.js", "Express", "WebSocket"],
      category: "Full-Stack",
      links: {
        github: "https://github.com/SND-WIND/Second_Wind-",
      }
    },
    {
      id: 2,
      title: "GeoGenius",
      description: "Environmental monitoring platform that uses real-time air quality data and a user-friendly interface, enabling informed decisions to improve health and well-being.",
      image: "/assets/geo-genius.png",
      tags: ["Javascript", "Google Maps API", "HTML", "CSS"],
      category: "backend",
      links: {
        github: "https://github.com/GeoGenius2-0/GeoGenius",
        live: "https://geogenius2-0.github.io/GeoGenius/",
      }
    },
    {
      id: 3,
      title: "Fight-For-Ethan",
      description: "A Mortal Kombat clone created using HTML, CSS, and Vanilla JavaScript.",
      image: "/assets/fight.png",
      tags: ["JavaScript", "Canvas", "DOM-Manipulation", "HTML", "CSS"],
      category: "gamedev",
      links: {
        github: "https://github.com/ELJGaming/Project-Week-Fighting-Game-2.0",
        live: "https://eljgaming.github.io/Project-Week-Fighting-Game-2.0/",
      }
    },
    {
      id: 4,
      title: "Lonely-Together",
      description: "Social platform with interest-based matching and virtual events.",
      image: "/assets/lonely-together.jpg",
      tags: ["Next.js", "TypeScript", "Prisma", "Redux", "Supabase", "Aws S3"],
      category: "Full-Stack",
      links: {
        github: "https://github.com/Jahshiek/Lonely-Together",
      }
    },
    {
      id: 5,
      title: "Gov-Watchers",
      description: "An in-depth analysis that examines the cost of living and purchasing power in relation to inflation, the Consumer Price Index (CPI), and the valuation of the U.S. dollar, all set against the backdrop of median household income and minimum wage.",
      image: "/assets/gov-watchers.jpg",
      tags: ["Fivetran", "Excel", "SnowFlake", "SQL", "Dbt"],
      category: "backend",
      links: {
        github: "https://github.com/GOV-watchers/g-WATCH",
      }
    },
    {
      id: 6,
      title: "Packet-Patrol (On Hold)",
      description: "A functional IDS built to expand my skill set in cybersecurity, Python, and full-stack development.",
      image: "/assets/ids2.jpg",
      tags: ["Python", "Scapy", "Pandas", "Numpy", "Matplotlib", "Seaborn"],
      category: "cyber",
      links: {
        github: "https://github.com/Jahshiek/Packet-Patrol"
      }
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openProjectModal = (project) => setSelectedProject(project);
  const closeProjectModal = () => setSelectedProject(null);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      {/* Navbar */}
      <nav className="fixed w-full z-50 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.span 
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Trust The Process
            </motion.span>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a href="#projects" className="hover:text-blue-500 transition-colors font-medium">Projects</a>
              <a href="#contact" className="hover:text-blue-500 transition-colors font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-xl"/>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            Software Engineer
          </motion.h1>
          <motion.p 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 leading-relaxed"
          >
            I'm a software engineer from Queens with a strong foundation in web development and data analytics. 
            As a graduate of The Marcy Lab's intensive software engineering program, I have experience building 
            full-stack applications, automating data processes, and creating user-focused solutions.
          </motion.p>
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-blue-700 transition-colors"
              href="#projects"
            >
              View Projects
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`border-2 px-8 py-3 rounded-full font-medium ${
                darkMode ? 'border-white hover:bg-white hover:text-gray-900' : 'border-gray-900 hover:bg-gray-900 hover:text-white'
              } transition-colors`}
              href="#contact"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Featured Projects
          </motion.h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(({ id, label, icon: Icon }) => (
              <motion.button
                key={id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(id)}
                className={`flex items-center space-x-2 px-6 py-2 rounded-full ${
                  activeFilter === id 
                    ? 'bg-blue-600 text-white' 
                    : `${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`
                } transition-colors`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.id}
                  project={project}
                  darkMode={darkMode}
                  onClick={() => openProjectModal(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        darkMode={darkMode}
        onClose={closeProjectModal}
      />

      {/* Skills and Experience */}
      <SkillsSection />
      <ExperienceGrid />

      <hr/>

      {/* Contact Section */}
      <section id="contact" className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} py-20 px-4`}>
        <ContactSection darkMode={darkMode} />
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTopButton isVisible={isVisible} darkMode={darkMode} />
    </div>
  );
};

// Separate components for better organization
const ProjectCard = ({ project, darkMode, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -10 }}
      className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
      onClick={onClick}
    >
      <div className="relative group">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
          <div className="flex space-x-2">
            <a 
              href={project.links.github} 
              className="text-white hover:text-blue-400 transition-colors"
              onClick={e => e.stopPropagation()}
            >
              <GithubIcon size={20} />
            </a>
            {project.links.live && (
              <a 
                href={project.links.live} 
                className="text-white hover:text-blue-400 transition-colors"
                onClick={e => e.stopPropagation()}
              >
                <ExternalLinkIcon size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className={`text-sm px-3 py-1 rounded-full ${
                darkMode 
                  ? 'bg-gray-700 text-gray-300' 
                  : 'bg-blue-100 text-blue-800'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, darkMode, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        className={`relative max-w-2xl w-full rounded-xl overflow-hidden shadow-lg ${
          darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
        }`}
        onClick={e => e.stopPropagation()}
      >
        {/* Modal content */}
      </motion.div>
    </motion.div>
  );
};

const ContactSection = ({ darkMode }) => {
  const contacts = [
    { icon: GithubIcon, href: "https://github.com/Jahshiek", label: "GitHub" },
    { icon: LinkedinIcon, href: "https://linkedin.com/in/jahwade", label: "LinkedIn" },
    { icon: MailIcon, href: "mailto:jahshiekwade58@gmail.com", label: "Email" }
  ];

  return (
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-8"
      >
        Let's Connect
      </motion.h2>
      <div className="flex justify-center space-x-8">
        {contacts.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            whileHover={{ y: -5 }}
            href={href}
            className="flex flex-col items-center space-y-2 group"
          >
            <div className={`p-4 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg group-hover:text-blue-500 transition-colors`}>
              <Icon size={24} />
            </div>
            <span className="text-sm font-medium">{label}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

const ScrollToTopButton = ({ isVisible, darkMode }) => {
  if (!isVisible) return null;

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 p-4 rounded-full shadow-lg ${
        darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'
      } transition-colors`}
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        ↑
      </motion.div>
    </motion.button>
  );
};

export default Portfolio;