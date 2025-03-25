import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Server, Database, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const techStacks = [
  {
    category: "Frontend",
    icon: <Code className="w-8 h-8 text-white" />, 
    color: "bg-blue-500",
    technologies: ["JavaScript", "TypeScript", "HTML5", "CSS3", "React", "Next.js", "Tailwind"],
    description: "Crafting responsive and interactive user interfaces with modern web technologies, focusing on clean, efficient, and user-centric design."
  },
  {
    category: "Backend",
    icon: <Server className="w-8 h-8 text-white" />, 
    color: "bg-green-500",
    technologies: ["Python", "Node.js", "Express", "Flask", "REST API"],
    description: "Building scalable and efficient server-side solutions, creating robust APIs and backend architectures that power modern web applications."
  },
  {
    category: "Data & Databases",
    icon: <Database className="w-8 h-8 text-white" />, 
    color: "bg-purple-500",
    technologies: ["SQL", "PostgreSQL", "SQLAlchemy", "Supabase", "Snowflake", "dbt", "FiveTran"],
    description: "Managing and optimizing data infrastructure, with expertise in database design, data integration, and analytics-driven solutions."
  }
];

const TechStackPage = () => {
  const [activeStack, setActiveStack] = useState(techStacks[0]);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12 flex flex-col items-center">
      <Link to="/" className="absolute top-6 left-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
      
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold mb-12 text-center"
      >
        Technology Expertise
      </motion.h1>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stack Selection Sidebar */}
        <div className="space-y-4">
          {techStacks.map((stack) => (
            <motion.button
              key={stack.category}
              onClick={() => setActiveStack(stack)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full p-4 rounded-lg text-left transition-all ${
                activeStack.category === stack.category 
                  ? `${stack.color} text-white` 
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              <div className="flex items-center gap-4">
                {stack.icon}
                <h3 className="text-xl font-semibold">{stack.category}</h3>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Active Stack Details */}
        <motion.div 
          key={activeStack.category}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 bg-gray-800 rounded-lg p-8 space-y-6"
        >
          <div className={`${activeStack.color} p-4 rounded-lg inline-block`}>
            {activeStack.icon}
          </div>
          <h2 className="text-3xl font-bold mb-4">{activeStack.category}</h2>
          <p className="text-gray-300 mb-6">{activeStack.description}</p>
          
          <div className="grid grid-cols-3 gap-4">
            {activeStack.technologies.map((tech) => (
              <div 
                key={tech} 
                className="bg-gray-700 px-4 py-2 rounded-md text-center font-medium"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* About Me Section */}
      <div className="w-full max-w-5xl mt-12 bg-gray-800 rounded-lg p-8 text-center">
        <h3 className="text-3xl font-bold mb-6">About My Tech Journey</h3>
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
        My coding journey started when I got 'Cracking the Coding Interview' in the mail by mistake. I was at a low point in my life, undecided on my future and working odd jobs to help pay rent, so I took this as a sign to explore programming. Through the Marcy Lab Bootcamp, I developed a passion for bringing any Idea to life. This apprenticeship would be more than a technical experience for me. I have a mission of creating authentic connections within communities, something I’ve attempted in the past via projects. I’m from a non-traditional background, so naturally I’d approach this opportunity with the determined, entrepreneurial spirit, leveraging it to grow into an engineer who can contribute to and complete projects that foster genuine human connections and community support. 
        </p>
      </div>
    </div>
  );
};

export default TechStackPage;
