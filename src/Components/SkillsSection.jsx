import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, BarChart3, PencilLine, Eye } from 'lucide-react';

const SkillsSection = ({ darkMode }) => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: [ "JavaScript", "TypeScript", "Python", "SQL"]
    },
    {
      title: "Databases & Cloud",
      icon: <Database className="w-6 h-6" />,
      skills: ["PostgreSQL", "Supabase", "Amazon S3"]
    },
    {
      title: "Frameworks & Tools",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: [ "React", "Node.js", "Express", "Next.js", "Prisma", "Knex.js", "Tailwind CSS"]
    },
    {
      title: "Data & Analytics",
      icon: <Eye className="w-6 h-6" />,
      skills: ["dbt", "FiveTran", "Snowake", "REST APIs"]
    },
    {
      title: "Development Tools",
      icon: <PencilLine className="w-6 h-6" />,
      skills: ["Git", "Figma"]
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              className={`p-6 rounded-lg ${
                darkMode 
                  ? 'bg-gray-800 shadow-lg' 
                  : 'bg-white shadow-md'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    className={`p-3 rounded ${
                      darkMode 
                        ? 'bg-black-700 hover:bg-black-600' 
                        : 'bg-blue-100 hover:bg-gray-200'
                    } transition-colors duration-200`}
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;