import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI Solutions' },
    { id: 'enterprise', name: 'Enterprise' }
  ];

  const projects = [
    {
      id: 1,
      title: 'FinTech AI Dashboard',
      category: 'ai',
      industry: 'Financial Technology',
      description: 'Advanced AI-powered financial analytics platform with real-time market insights and predictive modeling.',
      challenge: 'Complex financial data visualization and real-time processing',
      solution: 'Microservices architecture with ML pipelines and interactive dashboards',
      result: '300% increase in user engagement and 40% faster decision making',
      image: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Python', 'TensorFlow', 'AWS'],
      gradient: 'from-primary to-secondary'
    },
    {
      id: 2,
      title: 'Healthcare IoT Platform',
      category: 'enterprise',
      industry: 'Healthcare',
      description: 'Comprehensive IoT platform connecting medical devices with cloud-based analytics for patient monitoring.',
      challenge: 'Real-time data processing from multiple IoT devices',
      solution: 'Edge computing with cloud integration and HIPAA compliance',
      result: '50% reduction in response time and improved patient outcomes',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'MongoDB', 'AWS IoT', 'React'],
      gradient: 'from-secondary to-accent'
    },
    {
      id: 3,
      title: 'E-Commerce Mobile App',
      category: 'mobile',
      industry: 'Retail',
      description: 'Cross-platform mobile application with AR features for virtual product visualization and seamless shopping.',
      challenge: 'Complex AR integration and payment processing',
      solution: 'React Native with ARKit/ARCore and secure payment gateways',
      result: '200% increase in mobile conversions and enhanced user experience',
      image: 'https://images.pexels.com/photos/4968664/pexels-photo-4968664.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'ARKit', 'Stripe', 'Firebase'],
      gradient: 'from-accent to-primary'
    },
    {
      id: 4,
      title: 'Smart City Management',
      category: 'web',
      industry: 'Government',
      description: 'Comprehensive platform for smart city operations including traffic management, energy optimization, and citizen services.',
      challenge: 'Integration of multiple city systems and real-time data processing',
      solution: 'Microservices architecture with real-time dashboards and IoT integration',
      result: '35% improvement in city operations efficiency',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Docker'],
      gradient: 'from-primary to-accent'
    },
    {
      id: 5,
      title: 'AI Content Generator',
      category: 'ai',
      industry: 'Marketing',
      description: 'Advanced AI-powered content generation platform for marketing teams with natural language processing capabilities.',
      challenge: 'Natural language generation and content optimization',
      solution: 'GPT integration with custom training models and optimization algorithms',
      result: '400% increase in content production speed',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'OpenAI API', 'React', 'PostgreSQL'],
      gradient: 'from-secondary to-primary'
    },
    {
      id: 6,
      title: 'Logistics Management System',
      category: 'enterprise',
      industry: 'Logistics',
      description: 'End-to-end logistics management platform with route optimization, tracking, and automated scheduling.',
      challenge: 'Complex route optimization and real-time tracking',
      solution: 'AI-powered routing algorithms with GPS integration and predictive analytics',
      result: '25% reduction in delivery costs and improved customer satisfaction',
      image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'Google Maps API'],
      gradient: 'from-accent to-secondary'
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of innovative projects that showcase our expertise 
            in delivering cutting-edge solutions across various industries
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary'
              }`}
              onClick={() => setActiveTab(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="card-shadow rounded-2xl overflow-hidden transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300`} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <motion.button
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </motion.button>
                      <motion.button
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Github className="w-6 h-6 text-white" />
                      </motion.button>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                      {project.industry}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Challenge:</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-1">Solution:</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-1">Result:</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{project.result}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <motion.button
                    className="group/btn flex items-center text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
                    whileHover={{ x: 5 }}
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;