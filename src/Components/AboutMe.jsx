import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Briefcase, 
  Coffee, 
  Code, 
  Heart,
  Music,
  Camera,
  Plane,
  Award, 
  ArrowLeft,
  Dumbbell,
  CookingPot
} from 'lucide-react';


const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = {
    story: {
      icon: <BookOpen className="w-5 h-5" />,
      title: 'My Story'
    },
    experience: {
      icon: <Briefcase className="w-5 h-5" />,
      title: 'Experience / Education'
    },
    interests: {
      icon: <Heart className="w-5 h-5" />,
      title: 'Interests'
    }
  };

  const experiences = [
    {
      year: ' Sep 2024 - Feb 2025',
      role: 'Data Analyst Intern',
      company: 'Bedford Stuyvesant Restoration Corporation',
      description: 'Developed full-cycle data solutions by integrating external sources, automating workflows with Python, and ensuring data consistency, enabling leadership to make data-driven decisions.'
    },
    {
      year: 'Feb 2024 - March 2024',
      role: 'Software Engineering Mentee',
      company: 'Google Software Engineering Program',
      description: 'Selected as 1 of 15 participants in 10-week technical mentoring sessions with a Google SWE and built technical interview skills through weekly problem solving practice.'
    },
    {
        year: 'Aug 2022 - Sep 2023',
        role: 'Software Development Fellow',
        company: 'The Marcy Lab School',
        description: 'Completed 2,000 hours of coursework in web development, CS fundamentals, and leadership development'
    },
    {
        year: 'March 2022 - June 2022',
        role: 'Cloud Support Engineering Fellow',
        company: 'Opportunities for a Better Tomorrow',
        description: 'Gained hands-on experience in AWS and Linux environments, focusing on cloud-based solutions and infrastructure support.'
    },
    {
      year: ' Nov 2021 - Present',
      role: 'Fulfillment Specialist',
      company: 'Target',
      description: 'A fulfillment specialist picks, preps, packs, sorts, and ships products safely, efficiently and effectively to deliver convenience and quality for our guests'
    }
  ];

  const interests = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Coding',
      description: 'Passionate about creating elegant solutions to complex problems.'
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: 'MMA',
      description: 'Amateur Mixed Martial Arts practicioner'
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: 'Photography',
      description: 'Capturing moments and exploring urban landscapes with my friends.'
    },
    {
      icon: <CookingPot className="w-6 h-6" />,
      title: 'Food',
      description: 'Exploring new foods and gathering inspiration from different cultures.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8 pt-24">
        <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
        <ArrowLeft className="w-4 h-4" />
            Back to Home
        </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="relative w-64 h-64 mx-auto mb-8">
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
                <img
                  src="public/assets/jah.png"
                  alt="Profile"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h1 className="text-3xl font-bold mb-2">Jahshiek Wade</h1>
                <p className="text-blue-400 mb-4">Full Stack Developer</p>
                <div className="flex justify-center gap-4 mb-8">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <Coffee className="w-6 h-6 text-orange-400" />
                  <Heart className="w-6 h-6 text-red-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="flex gap-4 mb-8">
              {Object.entries(tabs).map(([key, { icon, title }]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeTab === key
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {icon}
                  {title}
                </button>
              ))}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'story' && (
                <div className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                  I am a software engineer from Queens with a strong foundation in web development and data analytics. A graduate of The Marcy Lab’s intensive software engineering program, I know how to full-stack applications, data automation, and creating user-focused solutions. 
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                  With roots in Jamaica, I'm driven to create technology solutions that support community growth and accessibility. I'm eager to expand his network and forge meaningful relationships. He welcomes opportunities to connect and build friendships with fellow professionals.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    What drives me is the perfect blend of creativity and logic that web development 
                    offers. I'm constantly learning and exploring new technologies to better craft 
                    digital experiences that make a difference.
                  </p>
                  {/* <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="text-center p-4 bg-gray-800 rounded-lg">
                      <div className="text-3xl font-bold text-blue-400">Entry Level Dev</div>
                      <div className="text-sm text-gray-400"></div>
                    </div>
                     <div className="text-center p-4 bg-gray-800 rounded-lg">
                      <div className="text-3xl font-bold text-blue-400">10+</div>
                      <div className="text-sm text-gray-400">Projects Completed</div>
                    </div>
                    <div className="text-center p-4 bg-gray-800 rounded-lg">
                      <div className="text-3xl font-bold text-blue-400">20+</div>
                      <div className="text-sm text-gray-400">Happy Clients</div>
                    </div>
                  </div> */}
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative pl-8 border-l-2 border-gray-800"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                      <div className="text-sm text-blue-400 mb-1">{exp.year}</div>
                      <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                      <div className="text-gray-400 mb-2">{exp.company}</div>
                      <p className="text-gray-300">{exp.description}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'interests' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 bg-gray-800 rounded-lg"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-blue-500 bg-opacity-20 rounded-lg">
                          {interest.icon}
                        </div>
                        <h3 className="text-xl font-bold">{interest.title}</h3>
                      </div>
                      <p className="text-gray-400">{interest.description}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;