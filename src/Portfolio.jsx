import React, { useState, useEffect } from "react";
import {
  Code,
  Sparkles,
  Monitor,
  Github,
  Mail,
  Linkedin,
  Contact,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState("");

  const phrases = [
    "I Just Though this was a cool feature",
    "I'm tired of this grandpa, well THATS TOO DAMN BAD, ",
    "If I had a nickel for every meme I quoted on a daily basis, I'd have 7 nickels.",
    "It ain't much, but it's honest work.",
    "Why do I hear boss music?",
    "This is where the fun begins.",
    "Somebody once told me…",
    "I never have bugs, only features.",
    "I understood that reference!"
  ];

  useEffect(() => {
    setIsVisible(true);
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
'sksjksjks'
    const typeWriter = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (!isDeleting) {
        setCurrentText(currentPhrase.substring(0, currentCharIndex + 1));
        currentCharIndex++;
        
        if (currentCharIndex === currentPhrase.length) {
          isDeleting = true;
          setTimeout(typeWriter, 2000);
          return;
        }
      } else {
        setCurrentText(currentPhrase.substring(0, currentCharIndex - 1));
        currentCharIndex--;

        if (currentCharIndex === 0) {
          isDeleting = false;
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        }
      }

      setTimeout(typeWriter, isDeleting ? 50 : 100);
    };

    typeWriter();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8"
      onMouseMove={handleMouseMove}
    >
      <div
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <nav className="flex justify-between items-center mb-16">
          <div className="text-2xl font-bold flex items-center gap-2">
            <Code className="text-blue-400" />
            Link<span>DevPortfolio</span>
          </div>
          <div className="flex gap-6">
            {/* <Github className="w-6 h-6 hover:text-blue-400 cursor-pointer transition-colors" />
            <Mail className="w-6 h-6 hover:text-blue-400 cursor-pointer transition-colors" />
            <Linkedin className="w-6 h-6 hover:text-blue-400 cursor-pointer transition-colors" /> */}
            <button className="button">
              <a
                className="button"
                href="https://docs.google.com/document/d/1AQ5jsXpmlO5ikNDbBdJrMljEDG1eBqlQQIaKnOOOpAo/edit?tab=t.0"
                
              >
                View Resume
              </a>
            </button>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto mt-32">
          <div className="relative mb-8">
            <h1 className="text-6xl font-bold mb-6">
              Hello, I'm
              <span className="text-blue-400"> Jah</span>
            </h1>
            <div className="h-16 text-2xl text-gray-300">
              {currentText}
              <span className="animate-pulse">|</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <Link to="/ProjectsPage">
              <div
                className="p-6 rounded-lg bg-gray-800 transform hover:scale-105 transition-transform cursor-pointer"
                style={{
                  transform: `perspective(1000px) rotateX(${
                    (mousePosition.y - 0.5) * 10
                  }deg) rotateY(${(mousePosition.x - 0.5) * 10}deg)`,
                }}
              >
                <Monitor className="text-blue-400 mb-4 w-8 h-8" />
                <h3 className="text-xl font-bold mb-2">Featured Projects</h3>
                <p className="text-gray-400">
                  Explore my latest work and technical experiments
                </p>
              </div>
            </Link>
            <Link to="/TechStackPage">
              <div
                className="p-6 rounded-lg bg-gray-800 transform hover:scale-105 transition-transform cursor-pointer"
                style={{
                  transform: `perspective(1000px) rotateX(${
                    (mousePosition.y - 0.5) * 10
                  }deg) rotateY(${(mousePosition.x - 0.5) * 10}deg)`,
                }}
              >
                <Sparkles className="text-blue-400 mb-4 w-8 h-8" />
                <h3 className="text-xl font-bold mb-2">Tech Stack</h3>
                <p className="text-gray-400">
                  Modern tools and technologies I work with
                </p>
              </div>
            </Link>
            {/* ////////////////////// */}
            <Link to="/AboutPage">
              <div
                className="p-6 rounded-lg bg-gray-800 transform hover:scale-105 transition-transform cursor-pointer"
                style={{
                  transform: `perspective(1000px) rotateX(${
                    (mousePosition.y - 0.5) * 10
                  }deg) rotateY(${(mousePosition.x - 0.5) * 10}deg)`,
                }}
              >
                <Contact className="text-blue-400 mb-4 w-8 h-8" />
                <h3 className="text-xl font-bold mb-2">About Me</h3>
                <p className="text-gray-400">Learn a little more about me</p>
              </div>
            </Link>
            {/* ////////////////////// */}
            <Link to="/ContactPage">
              <div
                className="p-6 rounded-lg bg-gray-800 transform hover:scale-105 transition-transform cursor-pointer"
                style={{
                  transform: `perspective(1000px) rotateX(${
                    (mousePosition.y - 0.5) * 10
                  }deg) rotateY(${(mousePosition.x - 0.5) * 10}deg)`,
                }}
              >
                <User className="text-blue-400 mb-4 w-8 h-8" />
                <h3 className="text-xl font-bold mb-2">Contact Section</h3>
                <p className="text-gray-400">Contact me</p>
              </div>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;

//////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   GithubIcon,
//   LinkedinIcon,
//   MailIcon,
//   ExternalLinkIcon,
//   Moon,
//   Sun,
//   Code,
//   Palette,
//   Brain,
//   GamepadIcon,
//   Cctv
// } from 'lucide-react';
// import ExperienceGrid from './Components/ExperienceGrid';
// import SkillsSection from './Components/SkillsSection';
// // import Navbar from './Components/Navbar';

// const Portfolio = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [isVisible, setIsVisible] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrolled = window.scrollY > 100;
//       setIsVisible(scrolled);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const categories = [
//     { id: 'all', label: 'All', icon: Code },
//     { id: 'Full-Stack', label: 'Full-Stack', icon: Palette },
//     { id: 'backend', label: 'Backend', icon: Brain },
//     { id: 'gamedev', label: 'Game Dev', icon: GamepadIcon },
//     { id: 'cyber', label: 'Cyber', icon: Cctv },
//   ];

//   const projects = [
//     {
//       id: 1,
//       title: "Second Wind",
//       description: "An online community-based platform, that provides resources, support, and employment opportunities for individuals impacted by the criminal justice system.",
//       image: "/assets/second-wind.png",
//       tags: ["React", "Node.js", "Express", "WebSocket"],
//       category: "Full-Stack",
//       links: {
//         github: "https://github.com/SND-WIND/Second_Wind-",
//       }
//     },
//     {
//       id: 2,
//       title: "GeoGenius",
//       description: "Environmental monitoring platform that uses real-time air quality data and a user-friendly interface, enabling informed decisions to improve health and well-being.",
//       image: "/assets/geo-genius.png",
//       tags: ["Javascript", "Google Maps API", "HTML", "CSS"],
//       category: "backend",
//       links: {
//         github: "https://github.com/GeoGenius2-0/GeoGenius",
//         live: "https://geogenius2-0.github.io/GeoGenius/",
//       }
//     },
//     {
//       id: 3,
//       title: "Fight-For-Ethan",
//       description: "A Mortal Kombat clone created using HTML, CSS, and Vanilla JavaScript.",
//       image: "/assets/fight.png",
//       tags: ["JavaScript", "Canvas", "DOM-Manipulation", "HTML", "CSS"],
//       category: "gamedev",
//       links: {
//         github: "https://github.com/ELJGaming/Project-Week-Fighting-Game-2.0",
//         live: "https://eljgaming.github.io/Project-Week-Fighting-Game-2.0/",
//       }
//     },
//     {
//       id: 4,
//       title: "Lonely-Together",
//       description: "Social platform with interest-based matching and virtual events.",
//       image: "/assets/lonely-together.jpg",
//       tags: ["Next.js", "TypeScript", "Prisma", "Redux", "Supabase", "Aws S3"],
//       category: "Full-Stack",
//       links: {
//         github: "https://github.com/Jahshiek/Lonely-Together",
//       }
//     },
//     {
//       id: 5,
//       title: "Gov-Watchers",
//       description: "An in-depth analysis that examines the cost of living and purchasing power in relation to inflation, the Consumer Price Index (CPI), and the valuation of the U.S. dollar, all set against the backdrop of median household income and minimum wage.",
//       image: "/assets/gov-watchers.jpg",
//       tags: ["Fivetran", "Excel", "SnowFlake", "SQL", "Dbt"],
//       category: "backend",
//       links: {
//         github: "https://github.com/GOV-watchers/g-WATCH",
//       }
//     },
//     {
//       id: 6,
//       title: "Packet-Patrol (On Hold)",
//       description: "A functional IDS built to expand my skill set in cybersecurity, Python, and full-stack development.",
//       image: "/assets/ids2.jpg",
//       tags: ["Python", "Scapy", "Pandas", "Numpy", "Matplotlib", "Seaborn"],
//       category: "cyber",
//       links: {
//         github: "https://github.com/Jahshiek/Packet-Patrol"
//       }
//     }
//   ];

//   const filteredProjects = activeFilter === 'all'
//     ? projects
//     : projects.filter(project => project.category === activeFilter);

//   const openProjectModal = (project) => setSelectedProject(project);
//   const closeProjectModal = () => setSelectedProject(null);

//   return (
//     <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
//       {/* Navbar */}
//       <nav className="fixed w-full z-50 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
//         <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16 items-center">
//             <motion.span
//               className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
//               whileHover={{ scale: 1.05 }}
//             >
//               Jah's Journey
//             </motion.span>
//             <div className="flex items-center space-x-6">
//               <button
//                 onClick={() => setDarkMode(!darkMode)}
//                 className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//               >
//                 {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//               </button>
//               <a href="#projects" className="hover:text-blue-500 transition-colors font-medium">Projects</a>
//               <a href="#contact" className="hover:text-blue-500 transition-colors font-medium">Contact</a>
//               <a href="/Res/_WadeJahshiek resume .docx.pdf" download="Jahshiek_Wade_Resume.pdf" className="hover:text-blue-500 transition-colors font-medium">Download My Resume</a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-xl"/>
//         </div>
//         <div className="relative max-w-4xl mx-auto text-center">
//           <motion.h1
//             initial={{ y: -20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
//           >
//             Software Engineer <br/> <small>This portfolio is currently on Version: 2</small>
//           </motion.h1>
//           <motion.p
//             initial={{ y: -20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-xl mb-8 leading-relaxed"
//           >
//             I'm a software engineer from Queens with a strong foundation in web development and data analytics.
//             As a graduate of The Marcy Lab's intensive software engineering program, I have experience building
//             full-stack applications, automating data processes, and creating user-focused solutions.
//           </motion.p>
//           <motion.div
//             initial={{ y: -20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="flex justify-center space-x-4"
//           >
//             <motion.a
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-blue-700 transition-colors"
//               href="#projects"
//             >
//               View Projects
//             </motion.a>
//             <motion.a
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`border-2 px-8 py-3 rounded-full font-medium ${
//                 darkMode ? 'border-white hover:bg-white hover:text-gray-900' : 'border-gray-900 hover:bg-gray-900 hover:text-white'
//               } transition-colors`}
//               href="#contact"
//             >
//               Get in Touch
//             </motion.a>
//           </motion.div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-4xl font-bold text-center mb-16"
//           >
//             Featured Projects
//           </motion.h2>

//           {/* Category Filter */}
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             {categories.map(({ id, label, icon: Icon }) => (
//               <motion.button
//                 key={id}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setActiveFilter(id)}
//                 className={`flex items-center space-x-2 px-6 py-2 rounded-full ${
//                   activeFilter === id
//                     ? 'bg-blue-600 text-white'
//                     : `${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`
//                 } transition-colors`}
//               >
//                 <Icon size={18} />
//                 <span>{label}</span>
//               </motion.button>
//             ))}
//           </div>

//           {/* Projects Grid */}
//           <motion.div
//             layout
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             <AnimatePresence>
//               {filteredProjects.map((project) => (
//                 <ProjectCard
//                   key={project.id}
//                   project={project}
//                   darkMode={darkMode}
//                   onClick={() => openProjectModal(project)}
//                 />
//               ))}
//             </AnimatePresence>
//           </motion.div>
//         </div>
//       </section>

//       {/* Project Modal */}
//       <ProjectModal
//         project={selectedProject}
//         darkMode={darkMode}
//         onClose={closeProjectModal}
//       />

//       {/* Skills and Experience */}
//       <SkillsSection />
//       <ExperienceGrid />

//       <hr/>

//       {/* Contact Section */}
//       <section id="contact" className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} py-20 px-4`}>
//         <ContactSection darkMode={darkMode} />
//       </section>

//       {/* Scroll to Top Button */}
//       <ScrollToTopButton isVisible={isVisible} darkMode={darkMode} />
//     </div>
//   );
// };

// // Separate components for better organization
// const ProjectCard = ({ project, darkMode, onClick }) => {
//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       whileHover={{ y: -10 }}
//       className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
//       onClick={onClick}
//     >
//       <div className="relative group">
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-48 object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
//           <div className="flex space-x-2">
//             <a
//               href={project.links.github}
//               className="text-white hover:text-blue-400 transition-colors"
//               onClick={e => e.stopPropagation()}
//             >
//               <GithubIcon size={20} />
//             </a>
//             {project.links.live && (
//               <a
//                 href={project.links.live}
//                 className="text-white hover:text-blue-400 transition-colors"
//                 onClick={e => e.stopPropagation()}
//               >
//                 <ExternalLinkIcon size={20} />
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="p-6">
//         <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//         <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
//         <div className="flex flex-wrap gap-2">
//           {project.tags.map((tag) => (
//             <span
//               key={tag}
//               className={`text-sm px-3 py-1 rounded-full ${
//                 darkMode
//                   ? 'bg-gray-700 text-gray-300'
//                   : 'bg-blue-100 text-blue-800'
//               }`}
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const ProjectModal = ({ project, darkMode, onClose }) => {
//   if (!project) return null;

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: -50, opacity: 0 }}
//         className={`relative max-w-2xl w-full rounded-xl overflow-hidden shadow-lg ${
//           darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
//         }`}
//         onClick={e => e.stopPropagation()}
//       >
//         {/* Modal content */}
//       </motion.div>
//     </motion.div>
//   );
// };

// const ContactSection = ({ darkMode }) => {
//   const contacts = [
//     { icon: GithubIcon, href: "https://github.com/Jahshiek", label: "GitHub" },
//     { icon: LinkedinIcon, href: "https://linkedin.com/in/jahwade", label: "LinkedIn" },
//     { icon: MailIcon, href: "mailto:jahshiekwade58@gmail.com", label: "Email" }
//   ];

//   return (
//     <div className="max-w-4xl mx-auto text-center">
//       <motion.h2
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         className="text-4xl font-bold mb-8"
//       >
//         Let's Connect
//       </motion.h2>
//       <div className="flex justify-center space-x-8">
//         {contacts.map(({ icon: Icon, href, label }) => (
//           <motion.a
//             key={label}
//             whileHover={{ y: -5 }}
//             href={href}
//             className="flex flex-col items-center space-y-2 group"
//           >
//             <div className={`p-4 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg group-hover:text-blue-500 transition-colors`}>
//               <Icon size={24} />
//             </div>
//             <span className="text-sm font-medium">{label}</span>
//           </motion.a>
//         ))}
//       </div>
//     </div>
//   );
// };

// const ScrollToTopButton = ({ isVisible, darkMode }) => {
//   if (!isVisible) return null;

//   return (
//     <motion.button
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 20 }}
//       onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//       className={`fixed bottom-8 right-8 p-4 rounded-full shadow-lg ${
//         darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'
//       } transition-colors`}
//     >
//       <motion.div
//         animate={{ y: [0, -4, 0] }}
//         transition={{ repeat: Infinity, duration: 1.5 }}
//       >
//         ↑
//       </motion.div>
//     </motion.button>
//   );
// };

// export default Portfolio;
