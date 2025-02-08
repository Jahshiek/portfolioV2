import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, children, darkMode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black bg-opacity-50" 
        onClick={onClose}
      />
      <div className={`relative z-50 p-6 rounded-lg shadow-xl max-w-md w-full mx-4 
        ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
};

const ExperienceGrid = ({ darkMode = false }) => {
  const [selectedExp, setSelectedExp] = useState(null);

  const workExperiences = [
  {
    title: "Apprentice Data Analyst",
    company: "Bedford Stuyvesant Restoration Corporation",
    duration: "Sep 2024 - Feb 2025",
    description: "Assisted in data collection, cleaning, and visualization, that empowered leadership to make data-backed strategic decisions",
    type: "work"
  },
  {
    title: "Fulfilment-Specialist",
    company: "Target",
    duration: "2021 - Present",
    description: "In 2021 I took a sales and fulfillment position at Target with the goal of improving my interpersonal skills, and I’ve found fulfillment in helping people and I've made meaningful connections with my team members and customers",
    type: "work"
  }
  ];

  const educationExperiences = [
    {
      title: "G-SWEP Fellow",
      company: "Google",
      duration: "Feb 2024 - May 2024",
      description: "Participated in a 10-week Google Software Engineering Mentorship Program (G-SWEP), engaging in weekly 1:1 sessions with a Google Software Engineer to enhance my understanding of data structures, algorithms, and interview skills while strengthening my technical problem-solving abilities.",
      type: "education"
    },
    {
      title: "Software Engineer",
      company: "The Marcy Lab School",
      duration: "Sep 2022 - Aug 2023",
      description: "Graduated from an intensive software engineering program, focusing on full-stack development, data analytics, and building scalable applications.",
      type: "education"
    }
  ];

  const ExperienceCard = ({ exp }) => (
    <motion.div
      onClick={() => setSelectedExp(exp)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`p-6 rounded-lg shadow-lg mb-6 relative cursor-pointer 
        ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'}
        transition-colors duration-200`}
    >
      <div className={`absolute top-4 right-4 w-3 h-3 rounded-full
        ${exp.type === 'work' ? 'bg-green-500' : 'bg-blue-500'}`} />
      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
      <p className={`text-lg mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {exp.company} | {exp.duration}
      </p>
      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {exp.description}
      </p>
    </motion.div>
  );

  return (
    <section className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} py-20 px-4`}>
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-8"
        >
          Experience
        </motion.h2>

        {/* Legend */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Work Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Education</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Work Experience Column */}
          <div>
            {workExperiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} />
            ))}
          </div>

          {/* Education Column */}
          <div>
            {educationExperiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} />
            ))}
          </div>
        </div>
      </div>

      {/* Custom Modal */}
      <Modal 
        isOpen={!!selectedExp} 
        onClose={() => setSelectedExp(null)}
        darkMode={darkMode}
      >
        {selectedExp && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-3 h-3 rounded-full 
                ${selectedExp.type === 'work' ? 'bg-green-500' : 'bg-blue-500'}`} />
              <h3 className="text-2xl font-bold">{selectedExp.title}</h3>
            </div>
            <p className="text-lg font-semibold mb-2">
              {selectedExp.company} | {selectedExp.duration}
            </p>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              {selectedExp.description}
            </p>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default ExperienceGrid;